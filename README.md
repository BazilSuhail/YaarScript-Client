# YaarScript Pro: The Industrial Urdu Compiler 🇵🇰🚀

YaarScript Pro is a professional, industrial-grade multi-pass compiler that brings the warmth of the Urdu language to the power of Rust-based systems programming. It transforms a high-level high-performance language into optimized **Three-Address Code (TAC)**, running natively in the browser via **WebAssembly**.

---

## 🏗️ Compiler Architecture

The YaarScript toolchain is organized into a modular pipeline:

1.  **Lexical Analysis (Lexer)**: Scans source code into "Yaar-Tokens" with full Unicode/Emoji support.
2.  **Syntax Analysis (Parser)**: Uses a **Top-Down Operator Precedence (Pratt) Parser** for 12 levels of mathematical expression handling.
3.  **Semantic Intelligence**:
    *   **Scope Analyzer**: Manages symbol levels, shadowing, and forward references.
    *   **Type Checker**: Enforces strict typing without implicit coercion.
4.  **IR Pipeline**: Generates machine-agnostic **Three-Address Code (TAC)**.
5.  **Fixed-Point Optimizer**: Runs 5 persistent passes (Constant Folding, DCE, Peephole) until the IR is physically perfect.
6.  **Wasm Execution Engine**: A high-performance virtual machine running the optimized TAC in your browser.

---

## 🎭 The "Yaar" Style Syntax

YaarScript Pro replaces boring standard keywords with intuitive, funny Urdu-style keywords that make coding feel like a conversation.

| High-Level Category | Standard Keyword | Yaar Style | Use Case |
| :--- | :--- | :--- | :--- |
| **Entry Point** | `main` | `asli_cheez` | The heart of your program. |
| **Output** | `print` | `bolo` | Shout it out to the terminal! |
| **Types** | `int`, `string`, `bool` | `number`, `lafz`, `sach_jhoot` | Defining your data. |
| **Branching** | `if`, `else` | `agar`, `warna` | Making hard decisions. |
| **Loops** | `for`, `while` | `dohrao`, `jabtak` | Going in circles. |
| **Constants** | `const`, `global` | `paki_cheez`, `sab_ke_liye` | State that stays. |
| **Booleans** | `true`, `false` | `sahi`, `galat` | Trust but verify. |
| **Control** | `break`, `return` | `bas_kar`, `wapsi` | Stopping or going home. |
| **Switch** | `switch`, `case` | `dekh`, `phadda` | Handling multiple situations. |

---

## 📝 Language Grammar (EBNF)

### Declarations & Types
```ebnf
VarDecl          ::= ("paki_cheez" | "sab_ke_liye")? Type Identifier ("=" Expression)? ";"
Type             ::= "number" | "float" | "lafz" | "sach_jhoot" | "void" | Identifier
EnumDecl         ::= "enum" Identifier "{" Identifier ("," Identifier)* "}" ";"
MainDecl         ::= "asli_cheez" "{" Statement* "}"
```

### Control Flow
```ebnf
AgarStmt         ::= "agar" "(" Expression ")" Block ("warna" Block)?
JabtakStmt       ::= "jabtak" "(" Expression ")" Block
DohraoStmt       ::= "dohrao" "(" (VarDecl | ExpressionStmt | ";") Expression? ";" Expression? ")" Block
BoloStmt         ::= "bolo" "(" ExpressionList? ")" ";"
```

---

## 💻 Comprehensive Example

```cpp
enum Mausam { Sardi, Garmi, Barish }

paki_cheez number TARGET = 100;

number check_status(number val) {
    agar (val > TARGET) {
        wapsi 1;
    } warna {
        wapsi 0;
    }
}

asli_cheez {
    bolo("--- YaarScript Pro Mission Control --- \n");
    
    number score = 0;
    dohrao (number i = 0; i < 5; i++) {
        score = score + 25;
        bolo("Current Score: ", score, "\n");
        
        agar (check_status(score) == 1) {
            bolo("[!!] Target reached at step ", i, "\n");
            bas_kar;
        }
    }
    
    bolo("\nKaam khatam! Final Score: ", score, "\n");
}
```

---

## 🎓 Project Achievements
*   ✅ **Wasm Integration**: Entire compiler pipeline compiled to `wasm32-unknown-unknown`.
*   ✅ **Professional IDE**: Dark/Light mode, syntax highlighting, and 650px terminal width.
*   ✅ **Urdu Branding**: Fully localized keyword set for a unique developer experience.
*   ✅ **Fixed-Point Optimizer**: Significant code density reduction through 5 persistent passes.

## 🚧 Road Map
- [x] WebAssembly Compiler Backend
- [x] Professional IDE & Terminal
- [ ] RISC-V Native Code Generation
- [ ] Register Allocation (Graph Coloring)
- [ ] Structs and Pointers support
