# YaarScript WASM Compiler

This repository contains the source code to compile Yaarscript into WASM compiled binary. 

#### About YaarScript:
It is a professional, industrial-grade multi-pass compiler that brings the warmth of the Urdu language to the power of Rust-based systems programming. It transforms a high-performance language into optimized Three-Address Code (TAC), running natively in the browser via WebAssembly.

---

## Quick Start (Setup)

To run the YaarScript Pro playground locally, follow these steps:

### Prerequisites
- **Rust**: Install from [rustup.rs](https://rustup.rs/)
- **WASM Target**: Add the WebAssembly target via rustup:
  ```bash
  rustup target add wasm32-unknown-unknown
  ```
- **wasm-pack**: Install the orchestration tool:
  ```bash
  cargo install wasm-pack
  ```
- **Python**: Installed for serving the files locally.

### Build and Run
1. **Clone the repository**:
   ```bash
   git clone --branch wasm-compiler --single-branch https://github.com/BazilSuhail/YaarScript-Client.git
   cd YaarScript-Client
   ```

2. **Build the WebAssembly package**:
   This command compiles the Rust core into a JS-compatible WASM bundle:
   ```bash
   wasm-pack build --target web
   ```

3. **Serve the IDE**:
   Run a local server in the project root to handle WASM MIME types correctly:
   ```bash
   python -m http.server 8000
   ```
   Open `http://localhost:8000` in your browser to start coding!

---

## Compiler Architecture

The YaarScript toolchain is organized into a modular pipeline:

1.  **Lexical Analysis (Lexer)**: Scans source code into tokens with full Unicode support.
2.  **Syntax Analysis (Parser)**: Uses a Top-Down Operator Precedence (Pratt) Parser for advanced expression handling.
3.  **Semantic Intelligence**:
    *   **Scope Analyzer**: Manages symbol levels and shadowing.
    *   **Type Checker**: Enforces strict typing (No implicit coercion).
4.  **IR Pipeline**: Generates Three-Address Code (TAC).
5.  **Fixed-Point Optimizer**: Runs persistent passes (Constant Folding, DCE, Peephole Optimization).
6.  **Wasm Execution Engine**: A high-performance VM running optimized TAC in the browser.

---

## The "Yaar" Style Syntax

YaarScript Pro replaces boring standard keywords with intuitive Urdu-style keywords.

| High-Level Category | Standard Keyword | Yaar Style | Use Case |
| :--- | :--- | :--- | :--- |
| **Entry Point** | `main` | `yaar` | The start of your script. |
| **Output** | `print` | `bolo` | Output values to the terminal. |
| **Types** | `int`, `string`, `bool`, `void` | `number`, `lafz`, `faisla`, `khaali` | Core data types. |
| **Branching** | `if`, `else` | `agar`, `warna` | Logical decision making. |
| **Loops** | `for`, `while`, `do` | `dohrao`, `jabtak`, `karo` | Iterative execution. |
| **Constants** | `const`, `global` | `pakka`, `sab_ke_liye` | State modifiers. |
| **Booleans** | `true`, `false` | `sahi`, `galat` | Logical literals. |
| **Control** | `break`, `return` | `bas_kar`, `wapsi` | Flow termination and return. |
| **Switch** | `switch`, `case`, `default` | `intekhab`, `agar_ho`, `aakhir` | Multi-way branching. |
| **Custom Types** | `enum` | `qism` | User-defined enumerations. |

---

## Comprehensive Example

```cpp
qism Color { RED, GREEN, BLUE };

pakka number TARGET = 5;

// Function to print a separator line
khaali print_separator(number count) {

    bolo("\n");
    dohrao (number i = 0; i < TARGET; i++) {
        bolo("=");
    }
    bolo("\n");
}

yaar {
    // Example of the new features:
    bolo("Enter Number: ");

    number base = suno();
    number power = 3;
    bolo("Power for ", base, " is ", base ** power);

    number start = waqt();
    bolo("\n", ittifaq(1, 100));
    number end = waqt();
    bolo("\nTime taken: ", end - start);

    bolo("--- 🚀 THE ULTIMATE LANGUAGE POWER TEST ---\n");

    // 1. The Numerical Diamond (Nested For Loops)
    number size = 5 ;
    bolo("\n[1] Generating Numeric Diamond:\n");
    
    // Top Half
    dohrao (number i = 1; i <= size; i++) {
        dohrao (number s = 1; s <= (size - i); s++) { bolo(" "); }
        dohrao (number j = 1; j <= i; j++) { 
            bolo(" ");
            bolo(i); 
         }
        bolo("\n");
    }
    // Bottom Half
    dohrao (number i = (size - 1); i >= 1; i--) {
        dohrao (number s = 1; s <= (size - i); s++) { bolo(" "); }
        dohrao (number j = 1; j <= i; j++) {
            bolo(" ");
            bolo(i); 
         }
        bolo("\n");
    }

    print_separator(40);

    // 2. Karo-Jabtak Loop (Diagnostics)
    bolo("[2] Running Sensor Calibration:\n");
    number attempt = 1;
    faisla sensor_ready = galat;

    karo {
        bolo("Probe #", attempt, ":\t");
        agar (attempt < 10) {
            bolo("Warming up...\t[WAIT...]\n");
        } warna {
            bolo("Calibration Complete!\t[READY]\n");
            sensor_ready = sahi;
        }
        attempt = attempt + 1;
    } jabtak (!sensor_ready);

    print_separator(40);

    // 3. Qism & Intekhab Implementation
    bolo("[3] System Final Status:\n");
    number status_color = GREEN;
    
    intekhab (status_color) {
        agar_ho RED:   
        bolo("SYSTEM FATAL (RED)\n"); bas_kar;
        agar_ho GREEN: bolo("SYSTEM OPTIMAL (GREEN)\n"); bas_kar;
        agar_ho BLUE:  bolo("SYSTEM RECOVERY (BLUE)\n"); bas_kar;
    }
}
```

---

## Language Grammar (EBNF)

### Declarations & Types
```ebnf
VarDecl          ::= ("pakka" | "sab_ke_liye")? Type Identifier ("=" Expression)? ";"
Type             ::= "number" | "float" | "double" | "char" | "faisla" | "lafz" | "khaali" | Identifier
EnumDecl         ::= "qism" Identifier "{" Identifier ("," Identifier)* "}" ";"
MainDecl         ::= "yaar" Block
```

### Control Flow
```ebnf
IfStmt           ::= "agar" "(" Expression ")" Block ("warna" Block)?
WhileStmt        ::= "jabtak" "(" Expression ")" Block
DoWhileStmt      ::= "karo" Block "jabtak" "(" Expression ")" ";"
ForStmt          ::= "dohrao" "(" (VarDecl | ";") Expression? ";" Expression? ")" Block
PrintStmt        ::= "bolo" "(" ExpressionList? ")" ";"
SwitchStmt       ::= "intekhab" "(" Expression ")" "{" CaseBlock* DefaultBlock? "}"
```

---

## Project Achievements
*   Wasm Integration: Entire compiler pipeline compiled to wasm32-unknown-unknown.
*   Professional IDE: Dark/Light mode, syntax highlighting, and responsive terminal.
*   Urdu Slang Branding: Fully localized keyword set for a unique developer experience.
*   Multi-Pass Optimizer: Fixed-point optimization reducing code density.
