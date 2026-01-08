pub mod error;

pub mod lexer {
    pub mod lexer; 
}

pub mod core {
    pub mod ast;
    pub mod token;
}

pub mod parser {
    pub mod parser;
    pub mod ast_printer;
}

pub mod semantics {
    pub mod scope;
    pub mod type_checker;
}

pub mod ir_pipeline {
    pub mod tac;
    pub mod tac_optimizer;
}

pub mod codegen {
    pub mod execution;
}

use wasm_bindgen::prelude::*;
use crate::lexer::lexer::Lexer;
use crate::core::token::TokenType;
use crate::parser::parser::Parser;
use crate::semantics::scope::ScopeAnalyzer;
use crate::semantics::type_checker::TypeChecker;
use crate::ir_pipeline::tac::TACGenerator;
use crate::ir_pipeline::tac_optimizer::IROptimizer;
use crate::codegen::execution::{VM, VMStatus};
use crate::error::ErrorReporter;

#[wasm_bindgen]
pub enum WasmVMStatus {
    Ready,
    Finished,
    AwaitingInput,
    Error,
}

#[wasm_bindgen]
pub struct WasmVM {
    vm: VM,
}

#[wasm_bindgen]
impl WasmVM {
    pub fn start(&mut self) -> WasmVMStatus {
        match self.vm.start() {
            VMStatus::Ready => WasmVMStatus::Ready,
            VMStatus::Finished => WasmVMStatus::Finished,
            VMStatus::AwaitingInput => WasmVMStatus::AwaitingInput,
            VMStatus::Error(_) => WasmVMStatus::Error,
        }
    }

    pub fn provide_input(&mut self, input: String) -> WasmVMStatus {
        match self.vm.provide_input(input) {
            VMStatus::Ready => WasmVMStatus::Ready,
            VMStatus::Finished => WasmVMStatus::Finished,
            VMStatus::AwaitingInput => WasmVMStatus::AwaitingInput,
            VMStatus::Error(_) => WasmVMStatus::Error,
        }
    }

    pub fn get_output(&self) -> String {
        self.vm.output_buffer.clone()
    }
}

#[wasm_bindgen]
pub fn init_vm(source: String) -> Result<WasmVM, String> {
    let reporter = ErrorReporter::new(&source);
    
    // --- Lexical Analysis ---
    let mut lexer = Lexer::new(source.clone());
    let tokens = lexer.tokenize();
    let has_lex_errors = tokens.iter().any(|t| t.token_type == TokenType::Error);
    
    if has_lex_errors {
        let mut errors = String::new();
        for token in &tokens {
            if token.token_type == TokenType::Error {
                errors.push_str(&reporter.report_lexical(&token.value, token.line, token.column));
            }
        }
        return Err(format!("Lexical Error:\n{}", errors));
    }

    // --- Syntax Analysis ---
    let mut parser = Parser::new(tokens);
    let ast = match parser.parse_program() {
        Ok(ast) => ast,
        Err(err) => {
            return Err(reporter.report_syntax(&err.message, err.token.line, err.token.column));
        }
    };

    // --- Scope Analysis ---
    let mut scope_analyzer = ScopeAnalyzer::new();
    if let Err(errors) = scope_analyzer.analyze(&ast) {
        let mut err_msg = String::new();
        for error in &errors {
            err_msg.push_str(&reporter.report_scope(&error.message, error.line, error.column));
        }
        return Err(format!("Scope Error:\n{}", err_msg));
    }

    // --- Type Analysis ---
    let mut type_checker = TypeChecker::new(scope_analyzer.get_global_scope());
    if let Err(errors) = type_checker.check(&ast) {
        let mut err_msg = String::new();
        for error in &errors {
            err_msg.push_str(&reporter.report_type(&error.message, error.line, error.column));
        }
        return Err(format!("Type Error:\n{}", err_msg));
    }

    // --- IR Generation ---
    let mut tac_gen = TACGenerator::new();
    let raw_tac = tac_gen.generate(&ast);

    // --- IR Optimization ---
    let mut optimizer = IROptimizer::new(raw_tac);
    optimizer.run();
    let optimized_tac = optimizer.get_instructions();

    let vm = VM::new(optimized_tac);
    Ok(WasmVM { vm })
}
