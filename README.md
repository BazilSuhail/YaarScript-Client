# Custom Compiler 🚀

A professional, industrial-grade multi-pass compiler written in Rust. This project transforms a high-level C-like language into an optimized **Three-Address Code (TAC)** intermediate representation. It features a robust Pratt parser, a context-sensitive semantic analyzer, and a sophisticated 5-pass IR optimization pipeline.

---

## �️ Compiler Architecture

The compiler is organized into a modular pipeline, ensuring high maintainability and clear separation of concerns:

1.  **Lexical Analysis (Lexer)**: Scans source code into a stream of typed tokens with full UTF-8/Unicode support.
2.  **Syntax Analysis (Parser)**: Implements a **Pratt Parser** to construct a high-fidelity Abstract Syntax Tree (AST).
3.  **Semantic Analysis**:
    *   **Scope Analyzer**: Manages symbol tables, handle shadowing, and ensures declaration-before-use.
    *   **Type Checker**: Enforces strict typing rules and validates operation compatibility.
4.  **IR Generation**: Translates the validated AST into flat, machine-agnostic **Three-Address Code (TAC)**.
5.  **IR Optimization**: A persistent optimizer that runs 5 distinct passes (Constant Folding, Propagation, DCE, etc.) until code reachability and efficiency are maximized.

---

## ✨ Language Features & Specifications

### 🔬 Advanced Type System
*   **Strongly Typed**: No implicit type coercion (e.g., `int` + `float` is an error).
*   **Native Types**: `int`, `float`, `double`, `char`, `bool`, `string`, `void`.
*   **Enumerations**: 
    *   Declared globally with `enum Name { ... }`.
    *   Automatically assigned sequential integer values.
    *   Compatible with `int` for logic and switch statements.

### 🔐 Variable Modifiers
*   **`const`**: Marks variables as immutable post-initialization, enabling aggressive compile-time optimizations.
*   **`global`**: Declares variables in the global segment, surviving local scope pruning.

### 🌐 Modern UTF-8 Support
Identifiers can include any Unicode character:
*   Standard: `int count = 0;`
*   International: `int 变量 = 10;`, `int перем = 5;`
*   Creative: `float x😒😒 = 3.14;`

---

## 📝 Language Grammar (EBNF)

The full formal grammar used by the parser:

### Program Structure
```ebnf
Program          ::= Includes* Declaration* MainDecl?
Includes         ::= "include" ("<" Identifier ">" | StringLiteral)
Declaration      ::= VarDecl | FunctionProto | FunctionDecl | EnumDecl
```

### Declarations & Types
```ebnf
VarDecl          ::= ("const" | "global")? Type Identifier ("=" Expression)? ";"
Type             ::= "int" | "float" | "double" | "char" | "bool" | "string" | "void" | Identifier
FunctionProto    ::= Type Identifier "(" ParamList? ")" ";"
FunctionDecl     ::= Type Identifier "(" ParamList? ")" Block
MainDecl         ::= "main" Block
EnumDecl         ::= "enum" Identifier "{" Identifier ("," Identifier)* "}" ";"
ParamList        ::= (Type Identifier) ("," Type Identifier)*
```

### Statements & Control Flow
```ebnf
Statement        ::= VarDecl | Block | IfStmt | WhileStmt | DoWhileStmt | ForStmt 
                   | SwitchStmt | ReturnStmt | BreakStmt | PrintStmt | ExpressionStmt
Block            ::= "{" Statement* "}"
IfStmt           ::= "if" "(" Expression ")" Block ("else" Block)?
WhileStmt        ::= "while" "(" Expression ")" Block
DoWhileStmt      ::= "do" Block "while" "(" Expression ")" ";"
ForStmt          ::= "for" "(" (VarDecl | ExpressionStmt | ";") Expression? ";" Expression? ")" Block
SwitchStmt       ::= "switch" "(" Expression ")" "{" CaseBlock* DefaultBlock? "}"
CaseBlock        ::= "case" Expression ":" Statement*
ReturnStmt       ::= "return" Expression? ";"
PrintStmt        ::= "print" "(" ExpressionList? ")" ";"
```

### Main Entry Point
Every program begins execution at the `main` block. Unlike traditional C, `main` is a keyword-initiated block and does not require a return type or parameter list.

```ebnf
MainDecl         ::= "main" Block
```

Example:
```cpp
main {
    print("Welcome to YaarScript Pro!");
}
```

---

## 🎓 Project Achievements
*   ✅ **Wasm Integration**: Multi-pass compiler pipeline running natively in the browser via WebAssembly.
*   ✅ **Professional IDE**: Real-time syntax highlighting, line numbering, and runtime performance metrics.
*   ✅ **Robust Lexer**: 35+ token types with full Unicode/Emoji identification.
*   ✅ **Pratt Parser**: Efficient 12-level precedence handling.
*   ✅ **Semantic Suite**: Detection of 15+ scope errors and 17+ type errors.
*   ✅ **IR Pipeline**: Full TAC generation for all control flow constructs.
*   ✅ **Fixed-Point Optimizer**: Significant reduction in code density and complexity through 5-pass analysis.

## 🚧 Road Map
- [x] Full IR Optimization Suite
- [x] WebAssembly Compiler Backend
- [ ] RISC-V Native Code Generation
- [ ] Register Allocation (Graph Coloring)
- [ ] Structs and Pointers support
- [ ] Standard Library (I/O, String manipulation)
