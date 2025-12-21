# YaarScript Pro: The Industrial Urdu Compiler 🇵🇰🚀

YaarScript Pro is a professional, industrial-grade multi-pass compiler that brings the warmth of the Urdu language to the power of Rust-based systems programming. It transforms a high-performance language into optimized **Three-Address Code (TAC)**, running natively in the browser via **WebAssembly**.

---

## ⚡ Quick Start (Setup)

To run the YaarScript Pro playground locally, follow these steps:

### Prerequisites
- **Rust**: Install from [rustup.rs](https://rustup.rs/)
- **wasm-pack**: Install via `cargo install wasm-pack`
- **Python**: (Optional) For serving the files locally.

### Build and Run
1. **Clone the repository**:
   ```bash
   git clone https://github.com/BazilSuhail/YaarScript-Client.git
   cd YaarScript-Client
   ```

2. **Build the WebAssembly package**:
   ```bash
   wasm-pack build --target web
   ```

3. **Serve the IDE**:
   Run a local server in the project root:
   ```bash
   python -m http.server 8000
   ```
   Open `http://localhost:8000` in your browser to start coding!

---

## 🏗️ Compiler Architecture

The YaarScript toolchain is organized into a modular pipeline:

1.  **Lexical Analysis (Lexer)**: Scans source code into tokens with full Unicode support.
2.  **Syntax Analysis (Parser)**: Uses a **Top-Down Operator Precedence (Pratt) Parser** for advanced expression handling.
3.  **Semantic Intelligence**:
    *   **Scope Analyzer**: Manages symbol levels and shadowing.
    *   **Type Checker**: Enforces strict typing (No implicit coercion).
4.  **IR Pipeline**: Generates **Three-Address Code (TAC)**.
5.  **Fixed-Point Optimizer**: Runs persistent passes (Constant Folding, DCE, Peephole Optimization).
6.  **Wasm Execution Engine**: A high-performance VM running optimized TAC in the browser.

---

## 🎭 The "Yaar" Style Syntax

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

## 💻 Comprehensive Example

```cpp
/* 
   YaarScript Pro: Comprehensive Feature Demo
*/

// Global constant
pakka sab_ke_liye number TARGET = 100;

// User defined Enum
qism Mausam { Garmi, Sardi, Barish };

// Function definition
number calculate_bonus(number level) {
    agar (level > 5) {
        wapsi level * 10;
    } warna {
        wapsi level * 2;
    }
}

// Main execution block
yaar {
    bolo("--- YaarScript Pro Mission Control ---\n");

    number counter = 0;
    lafz mission = "Mars Rover";
    faisla is_active = sahi;

    // dohrao loop (For)
    bolo("Starting Iteration:\n");
    dohrao (number i = 1; i <= 5; i++) {
        counter = counter + (i * 2);
        bolo("Step ", i, ": Counter is ", counter, "\n");

        agar (counter > 20) {
            bolo("Threshold crossed, stopping.\n");
            bas_kar; 
        }
    }

    // jabtak loop (While)
    number wait_time = 3;
    jabtak (wait_time > 0) {
        bolo("T-minus: ", wait_time, "\n");
        wait_time = wait_time - 1;
    }

    // intekhab (Switch Case)
    number status_code = 1;
    intekhab (status_code) {
        agar_ho 0:
            bolo("CRITICAL ERROR\n");
            bas_kar;
        agar_ho 1:
            bolo("SYSTEMS NOMINAL\n");
            bas_kar;
        aakhir:
            bolo("UNKNOWN STATE\n");
    }

    number bonus = calculate_bonus(7);
    bolo("\nFinal Mission Report:");
    bolo("\n- Bonus Points: ", bonus);
    bolo("\n- Global Target: ", TARGET);
    bolo("\n\nKaam khatam ho gaya!\n");
}
```

---

## 📝 Language Grammar (EBNF)

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

## 🎓 Project Achievements
*   ✅ **Wasm Integration**: Entire compiler pipeline compiled to `wasm32-unknown-unknown`.
*   ✅ **Professional IDE**: Dark/Light mode, syntax highlighting, and responsive terminal.
*   ✅ **Urdu Slang Branding**: Fully localized keyword set for a unique developer experience.
*   ✅ **Multi-Pass Optimizer**: Fixed-point optimization reducing code density.

