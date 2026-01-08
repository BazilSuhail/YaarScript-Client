use crate::ir_pipeline::tac::{Instruction, Operand};
use crate::core::token::TokenType;
use std::collections::HashMap;
use std::fmt;

#[cfg(target_arch = "wasm32")]
use js_sys;

#[derive(Debug, Clone, PartialEq)]
pub enum Value {
    Int(i64),
    Float(f64),
    Bool(bool),
    Char(char),
    String(String),
    Unit,
}

fn unescape(s: &str) -> String {
    let mut out = String::with_capacity(s.len());
    let mut chars = s.chars().peekable();
    while let Some(c) = chars.next() {
        if c == '\\' {
            match chars.next() {
                Some('n') => out.push('\n'),
                Some('t') => out.push('\t'),
                Some('r') => out.push('\r'),
                Some('\\') => out.push('\\'),
                Some('\"') => out.push('\"'),
                Some('\'') => out.push('\''),
                Some(other) => {
                    out.push('\\');
                    out.push(other);
                }
                None => out.push('\\'),
            }
        } else {
            out.push(c);
        }
    }
    out
}

#[derive(Debug)]
pub enum RuntimeError {
    UndefinedVariable(String),
    TypeMismatch(String),
    DivisionByZero,
    MainNotFound,
    StackUnderflow,
    Other(String),
}

impl fmt::Display for RuntimeError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Self::UndefinedVariable(name) => write!(f, "Runtime Error: Undefined variable '{}'", name),
            Self::TypeMismatch(msg) => write!(f, "Runtime Error: Type mismatch - {}", msg),
            Self::DivisionByZero => write!(f, "Runtime Error: Division by zero"),
            Self::MainNotFound => write!(f, "Runtime Error: 'main' function not found"),
            Self::StackUnderflow => write!(f, "Runtime Error: Stack underflow"),
            Self::Other(msg) => write!(f, "Runtime Error: {}", msg),
        }
    }
}

impl fmt::Display for Value {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Value::Int(v) => write!(f, "{}", v),
            Value::Float(v) => write!(f, "{}", v),
            Value::Bool(v) => write!(f, "{}", v),
            Value::Char(v) => write!(f, "{}", v),
            Value::String(v) => write!(f, "{}", unescape(v)),
            Value::Unit => write!(f, "unit"),
        }
    }
}

struct Frame {
    variables: HashMap<String, Value>,
    return_pc: usize,
    return_dest: Option<Operand>,
}

pub struct VM {
    instructions: Vec<Instruction>,
    labels: HashMap<String, usize>,
    global_vars: HashMap<String, Value>,
    stack: Vec<Frame>,
    param_buffer: Vec<Value>,
    pc: usize,
    pub output_buffer: String,
    awaiting_input_dest: Option<Operand>,
}

pub enum VMStatus {
    Ready,
    Finished,
    AwaitingInput,
    Error(RuntimeError),
}

impl VM {
    pub fn new(instructions: Vec<Instruction>) -> Self {
        let mut labels = HashMap::new();
        for (i, instr) in instructions.iter().enumerate() {
            match instr {
                Instruction::Label(name) | Instruction::FuncStart(name, _, _) => {
                    labels.insert(name.clone(), i);
                }
                _ => {}
            }
        }
        Self {
            instructions,
            labels,
            global_vars: HashMap::new(),
            stack: Vec::new(),
            param_buffer: Vec::new(),
            pc: 0,
            output_buffer: String::new(),
            awaiting_input_dest: None,
        }
    }

    fn resolve(&self, op: &Operand) -> Result<Value, RuntimeError> {
        match op {
            Operand::Int(v) => Ok(Value::Int(*v)),
            Operand::Float(v) => Ok(Value::Float(*v)),
            Operand::Bool(v) => Ok(Value::Bool(*v)),
            Operand::Char(v) => Ok(Value::Char(*v)),
            Operand::String(v) => Ok(Value::String(v.clone())),
            Operand::Var(name) => {
                self.stack.last().and_then(|frame| frame.variables.get(name))
                    .or_else(|| self.global_vars.get(name))
                    .cloned()
                    .ok_or_else(|| RuntimeError::UndefinedVariable(name.clone()))
            }
            Operand::Temp(id) => {
                let key = format!("t{}", id);
                self.stack.last().and_then(|frame| frame.variables.get(&key))
                    .cloned()
                    .ok_or_else(|| RuntimeError::UndefinedVariable(key))
            }
            _ => Err(RuntimeError::Other(format!("Cannot resolve operand: {:?}", op))),
        }
    }

    fn store(&mut self, dest: &Operand, val: Value) -> Result<(), RuntimeError> {
        let key = match dest {
            Operand::Var(name) => name.clone(),
            Operand::Temp(id) => format!("t{}", id),
            _ => return Err(RuntimeError::Other("Invalid assignment destination".into())),
        };

        if let Operand::Var(name) = dest {
            if let Some(frame) = self.stack.last_mut() {
                if frame.variables.contains_key(name) {
                    frame.variables.insert(name.clone(), val);
                    return Ok(());
                }
            }
            if self.global_vars.contains_key(name) {
                self.global_vars.insert(name.clone(), val);
                return Ok(());
            }
        }

        if let Some(frame) = self.stack.last_mut() {
            frame.variables.insert(key, val);
        } else {
            self.global_vars.insert(key, val);
        }
        Ok(())
    }

    pub fn start(&mut self) -> VMStatus {
        // Phase 1: Initialize Globals
        while self.pc < self.instructions.len() {
            match &self.instructions[self.pc] {
                Instruction::FuncStart(_, _, _) => {
                    let mut depth = 1;
                    self.pc += 1;
                    while self.pc < self.instructions.len() && depth > 0 {
                        match &self.instructions[self.pc] {
                            Instruction::FuncStart(_, _, _) => depth += 1,
                            Instruction::FuncEnd => depth -= 1,
                            _ => {}
                        }
                        self.pc += 1;
                    }
                    continue;
                }
                Instruction::Declare(_, name, init) => {
                    let val = match init {
                        Some(op) => match self.resolve(op) {
                            Ok(v) => v,
                            Err(e) => return VMStatus::Error(e),
                        },
                        None => Value::Int(0),
                    };
                    self.global_vars.insert(name.clone(), val);
                }
                Instruction::Assign(dest, src) => {
                    if let Operand::Var(name) = dest {
                        match self.resolve(src) {
                            Ok(val) => { self.global_vars.insert(name.clone(), val); },
                            Err(e) => return VMStatus::Error(e),
                        }
                    }
                }
                _ => {}
            }
            self.pc += 1;
        }

        // Phase 2: Set PC to Main
        match self.labels.get("main") {
            Some(&idx) => {
                self.pc = idx;
                self.stack.push(Frame {
                    variables: HashMap::new(),
                    return_pc: self.instructions.len(),
                    return_dest: None,
                });
                self.run()
            }
            None => VMStatus::Error(RuntimeError::MainNotFound),
        }
    }

    pub fn provide_input(&mut self, input: String) -> VMStatus {
        if let Some(dest) = self.awaiting_input_dest.take() {
            let val = input.trim().parse::<i64>().unwrap_or(0);
            if let Err(e) = self.store(&dest, Value::Int(val)) {
                return VMStatus::Error(e);
            }
            self.pc += 1;
            self.run()
        } else {
            VMStatus::Ready
        }
    }

    pub fn run(&mut self) -> VMStatus {
        while self.pc < self.instructions.len() {
            match &self.instructions[self.pc].clone() {
                Instruction::Declare(_type_str, name, init) => {
                    let val = match init {
                        Some(op) => match self.resolve(op) {
                            Ok(v) => v,
                            Err(e) => return VMStatus::Error(e),
                        },
                        None => Value::Int(0),
                    };
                    if let Err(e) = self.store(&Operand::Var(name.clone()), val) {
                        return VMStatus::Error(e);
                    }
                }

                Instruction::Assign(dest, src) => {
                    match self.resolve(src) {
                        Ok(val) => {
                            if let Err(e) = self.store(dest, val) {
                                return VMStatus::Error(e);
                            }
                        },
                        Err(e) => return VMStatus::Error(e),
                    }
                }

                Instruction::Binary(dest, op, l, r) => {
                    let lv = match self.resolve(l) { Ok(v) => v, Err(e) => return VMStatus::Error(e) };
                    let rv = match self.resolve(r) { Ok(v) => v, Err(e) => return VMStatus::Error(e) };
                    match self.evaluate_binary(lv, op, rv) {
                        Ok(res) => { if let Err(e) = self.store(dest, res) { return VMStatus::Error(e); } },
                        Err(e) => return VMStatus::Error(e),
                    }
                }

                Instruction::Unary(dest, op, src) => {
                    let val = match self.resolve(src) { Ok(v) => v, Err(e) => return VMStatus::Error(e) };
                    let res = match (op, val) {
                        (TokenType::Minus, Value::Int(v)) => Value::Int(-v),
                        (TokenType::Minus, Value::Float(v)) => Value::Float(-v),
                        (TokenType::Not, Value::Bool(v)) => Value::Bool(!v),
                        _ => return VMStatus::Error(RuntimeError::TypeMismatch(format!("Invalid unary op {:?} for value", op))),
                    };
                    if let Err(e) = self.store(dest, res) { return VMStatus::Error(e); }
                }

                Instruction::Print(args) => {
                    let mut parts = Vec::new();
                    for a in args {
                        match self.resolve(a) {
                            Ok(v) => parts.push(v.to_string()),
                            Err(e) => return VMStatus::Error(e),
                        }
                    }
                    self.output_buffer.push_str(&parts.join(" "));
                }

                Instruction::Goto(lbl) => {
                    self.pc = *self.labels.get(lbl).unwrap();
                    continue;
                }

                Instruction::IfTrue(cond, lbl) => {
                    match self.resolve(cond) {
                        Ok(Value::Bool(true)) => {
                            self.pc = *self.labels.get(lbl).unwrap();
                            continue;
                        },
                        Ok(_) => {},
                        Err(e) => return VMStatus::Error(e),
                    }
                }

                Instruction::IfFalse(cond, lbl) => {
                    match self.resolve(cond) {
                        Ok(Value::Bool(false)) => {
                            self.pc = *self.labels.get(lbl).unwrap();
                            continue;
                        },
                        Ok(_) => {},
                        Err(e) => return VMStatus::Error(e),
                    }
                }

                Instruction::Param(op) => {
                    match self.resolve(op) {
                        Ok(v) => self.param_buffer.push(v),
                        Err(e) => return VMStatus::Error(e),
                    }
                }

                Instruction::Call(dest, name, n_args) => {
                    let args: Vec<Value> = self.param_buffer.drain(self.param_buffer.len() - n_args..).collect();
                    let func_idx = match self.labels.get(name) {
                        Some(&idx) => idx,
                        None => return VMStatus::Error(RuntimeError::Other(format!("Function {} not found", name))),
                    };

                    let mut new_vars = HashMap::new();
                    if let Instruction::FuncStart(_, _, params) = &self.instructions[func_idx] {
                        for (i, arg) in args.into_iter().enumerate() {
                            new_vars.insert(params[i].1.clone(), arg);
                        }
                    }

                    self.stack.push(Frame {
                        variables: new_vars,
                        return_pc: self.pc + 1,
                        return_dest: dest.clone(),
                    });
                    self.pc = func_idx + 1;
                    continue;
                }

                Instruction::Return(op) => {
                    let result = match op {
                        Some(o) => match self.resolve(o) {
                            Ok(v) => v,
                            Err(e) => return VMStatus::Error(e),
                        },
                        None => Value::Unit,
                    };
                    
                    if let Some(frame) = self.stack.pop() {
                        self.pc = frame.return_pc;
                        if let Some(d) = frame.return_dest {
                            if let Err(e) = self.store(&d, result) { return VMStatus::Error(e); }
                        }
                        if self.pc >= self.instructions.len() {
                            return VMStatus::Finished;
                        }
                        continue;
                    } else {
                        return VMStatus::Finished;
                    }
                }

                Instruction::FuncEnd => {
                    if let Some(frame) = self.stack.pop() {
                        self.pc = frame.return_pc;
                        if self.pc >= self.instructions.len() {
                            return VMStatus::Finished;
                        }
                        continue;
                    } else {
                        return VMStatus::Finished;
                    }
                }
                
                Instruction::Read(dest) => {
                    self.awaiting_input_dest = Some(dest.clone());
                    return VMStatus::AwaitingInput;
                }
                
                Instruction::Time(dest) => {
                    let now = get_current_time();
                    if let Err(e) = self.store(dest, Value::Int(now as i64)) { return VMStatus::Error(e); }
                }
                
                Instruction::Random(dest, min, max) => {
                    let lower = match self.resolve(min) { Ok(Value::Int(i)) => i, _ => 0 };
                    let upper = match self.resolve(max) { Ok(Value::Int(i)) => i, _ => 100 };
                    let res = if lower > upper {
                        Value::Int(0)
                    } else {
                        use rand::Rng;
                        let mut rng = rand::thread_rng();
                        Value::Int(rng.gen_range(lower..=upper))
                    };
                    if let Err(e) = self.store(dest, res) { return VMStatus::Error(e); }
                }
                _ => {}
            }
            self.pc += 1;
        }
        VMStatus::Finished
    }

    fn evaluate_binary(&self, l: Value, op: &TokenType, r: Value) -> Result<Value, RuntimeError> {
        match (l, r) {
            (Value::Int(a), Value::Int(b)) => match op {
                TokenType::Plus => Ok(Value::Int(a + b)),
                TokenType::Minus => Ok(Value::Int(a - b)),
                TokenType::Multiply => Ok(Value::Int(a * b)),
                TokenType::Divide => if b != 0 { Ok(Value::Int(a / b)) } else { Err(RuntimeError::DivisionByZero) },
                TokenType::Modulo => if b != 0 { Ok(Value::Int(a % b)) } else { Err(RuntimeError::DivisionByZero) },
                TokenType::EqualOp => Ok(Value::Bool(a == b)),
                TokenType::Ne => Ok(Value::Bool(a != b)),
                TokenType::Lt => Ok(Value::Bool(a < b)),
                TokenType::Gt => Ok(Value::Bool(a > b)),
                TokenType::Le => Ok(Value::Bool(a <= b)),
                TokenType::Ge => Ok(Value::Bool(a >= b)),
                TokenType::Power => {
                    if b < 0 { Ok(Value::Int(0)) }
                    else { Ok(Value::Int(a.pow(b as u32))) }
                }
                TokenType::AssignOp => Ok(Value::Int(b)),
                _ => Err(RuntimeError::TypeMismatch(format!("Invalid int op {:?}", op))),
            },
            (Value::Float(a), Value::Float(b)) => match op {
                TokenType::Plus => Ok(Value::Float(a + b)),
                TokenType::Minus => Ok(Value::Float(a - b)),
                TokenType::Multiply => Ok(Value::Float(a * b)),
                TokenType::Divide => Ok(Value::Float(a / b)),
                TokenType::Power => Ok(Value::Float(a.powf(b))),
                TokenType::EqualOp => Ok(Value::Bool(a == b)),
                _ => Err(RuntimeError::TypeMismatch(format!("Invalid float op {:?}", op))),
            },
            (Value::Bool(a), Value::Bool(b)) => match op {
                TokenType::And => Ok(Value::Bool(a && b)),
                TokenType::Or => Ok(Value::Bool(a || b)),
                TokenType::EqualOp => Ok(Value::Bool(a == b)),
                _ => Err(RuntimeError::TypeMismatch(format!("Invalid bool op {:?}", op))),
            },
            (l, r) => Err(RuntimeError::TypeMismatch(format!("Incompatible types for operator {:?}: {} and {}", op, l, r))),
        }
    }
}

fn get_current_time() -> u64 {
    #[cfg(target_arch = "wasm32")]
    {
        (js_sys::Date::now() / 1000.0) as u64
    }
    #[cfg(not(target_arch = "wasm32"))]
    {
        use std::time::{SystemTime, UNIX_EPOCH};
        SystemTime::now().duration_since(UNIX_EPOCH).unwrap_or_default().as_secs()
    }
}
