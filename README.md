<div align="center">
  <img src="https://raw.githubusercontent.com/Lord-Entity/Bazil-Suhail-Repos/main/YaarScript/yaarscript-github-readme.webp" alt="YaarScript Pro Banner" width="800">
</div>

<div align="center">

![YaarScript Logo](https://img.shields.io/badge/YaarScript-Apki%20Zuban%2C%20Apki%20Code-00D9FF?style=for-the-badge)
[![Architecture](https://img.shields.io/badge/Architecture-Middle_End-brightgreen?style=for-the-badge)](#)
[![Version](https://img.shields.io/badge/Version-1.1.0-334155?style=for-the-badge&logo=github)](https://github.com/Lord-Entity/YaarScript/releases)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](http://makeapullrequest.com)
[![Built with Rust](https://img.shields.io/badge/Built_with-Rust-dea584?style=for-the-badge&logo=rust)](https://www.rust-lang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![WebAssembly](https://img.shields.io/badge/WebAssembly-Powered-654FF0?style=for-the-badge&logo=webassembly)](https://webassembly.org/)
[![License](https://img.shields.io/badge/License-Open%20Source-green?style=for-the-badge)](LICENSE)

 </div>

#### YaarScript: an Urdu-Slang Multi-phase Compiler

This repository contains the code for client side of **YaarScript**.

> **YaarScript** is an educational passion project I built as a solo developer. It is a full-fledged, multi-phase compiler written in Rust, designed to demonstrate advanced compiler construction techniques, such as semantic analysis, intermediate representation optimization, and bytecode execution, while utilizing a uniquely fun, Urdu-infused slang syntax to make learning systems programming more relatable and engaging.

> [!IMPORTANT]
> **Explore the Core:** Check out the compiler source code at the [YaarScript Repository](https://github.com/BazilSuhail/YaarScript).
> 
> **Quick Links:**
> * **Official Website:** [yaarscript.netlify.app](https://yaarscript.netlify.app)
> * **Online Playground:** [Try YaarScript in the Browser](https://yaarscript.netlify.app/editor)
> * **Documentation:** [Read the Docs](https://yaarscript.netlify.app/docs)

</div>

---

### 🎯 Key Highlights

- **Urdu-Inspired Syntax** – Natural keywords like `agar`, `warna`, `dohrao`, `bolo` make coding intuitive for Urdu speakers
- **Lightning Fast** – Entire compiler runs in the browser via WebAssembly (wasm32-unknown-unknown)
- **Industrial-Grade** – Multi-pass compiler with fixed-point optimization, constant folding, and dead code elimination
- **Modern IDE** – Professional web-based editor with syntax highlighting and real-time execution
- **Strong Type System** – Strict typing with no implicit coercion for safer code
- **Zero Installation** – Run directly in your browser with our online playground

---

## Features

### Compiler Architecture

YaarScript features a sophisticated multi-pass compilation pipeline:

1. **Lexical Analysis** – Tokenization with full Unicode support
2. **Syntax Analysis** – Top-Down Operator Precedence (Pratt) Parser
3. **Semantic Analysis** – Comprehensive scope management and type checking
4. **IR Generation** – Three-Address Code (TAC) intermediate representation
5. **Optimization** – Fixed-point optimization passes
6. **Execution** – High-performance WASM virtual machine

### Language Features

- ✅ **Strong Type System** – `number`, `float`, `double`, `char`, `lafz` (string), `faisla` (boolean)
- ✅ **Control Flow** – `agar/warna` (if/else), `dohrao` (for), `jabtak` (while), `karo-jabtak` (do-while)
- ✅ **Switch Statements** – `intekhab` with `agar_ho` cases
- ✅ **Functions** – First-class functions with return types
- ✅ **Enumerations** – `qism` for defining custom enums
- ✅ **Constants** – `pakka` for immutable values, `sab_ke_liye` for globals
- ✅ **Operators** – Full arithmetic, logical, and comparison operations
- ✅ **Loop Control** – `bas_kar` (break), `aagay_baro` (continue)

## Urdu Slang Keywords

YaarScript Maps localized terminology directly to robust systems logic.

| YaarScript Keyword | C-Equivalent | Purpose |
|--------------------|--------------|---------|
| `number` | `int64_t` | 64-bit signed integer |
| `float` | `double` | 64-bit floating point |
| `faisla` | `bool` | Boolean value |
| `lafz` | `char*` | String primitive |
| `khaali` | `void` | No return value |
| `pakka` | `const` | Immutable constant |
| `yaar` | `main` | Entry point block |
| `agar` | `if` | Conditional branch |
| `warna` | `else` | Alternative branch |
| `jabtak` | `while` | Loop continuation |
| `dohrao` | `for` | Iterative loop |
| `intekhab` | `switch` | Multi-way branching |
| `bas_kar` | `break` | Scope exit |
| `wapsi` | `return` | Function return |
| `qism` | `enum` | Enumeration type |
| `bolo` | `printf` | Console Output |
| `suno` | `scanf` | Console Input |
| `sahi` | `true` | Boolean true |
| `galat` | `false` | Boolean false |

---

## Operator Precedence

The parser natively incorporates the **Power Operator** with high precedence.

| Level | Operators | Associativity | Example |
|-------|-----------|---------------|---------|
| 1 | `=` | Right-to-left | `a = b = c` |
| 2 | `\|\|` | Left-to-right | `a \|\| b` |
| 3 | `&&` | Left-to-right | `a && b` |
| 4 | `==`, `!=` | Left-to-right | `a == b` |
| 5 | `<`, `>`, `<=`, `>=` | Left-to-right | `a < b` |
| 6 | `&`, `\|`, `^`, `<<`, `>>` | Left-to-right | `a & b` |
| 7 | `+`, `-` | Left-to-right | `a + b` |
| 8 | `*`, `/`, `%` | Left-to-right | `a * b` |
| 9 | **`**` (Power)** | **Left-to-right** | `a ** b` |
| 10 | `-`, `!`, `++`, `--` (prefix) | Right-to-left | `!-x` |
| 11 | `++`, `--` (postfix) | Left-to-right | `x++` |
| 12 | `()` | Highest | `f(x)` |

---

## Code Examples

### ✅ Correct Code Snippet

```rust
yaar {
    number w = 10;
    number h = 20;

    dohrao (number i = 0; i < 5; i++) {
        agar (i == 3) {
            bas_kar; 
        }
    }

    faisla flag = (w > 5) && (h < 50);
    faisla check = !flag;
    
    number result = w ** 2; // Power operator test
    bolo("Computed successfully! ", result);
}
```

**Expected Output:**
```text
0
1
2
Computed successfully! 100
```

### ❌ Incorrect Code Snippet

Shows strict type safety catching errors before execution.

```rust
khaali invalidVar; // ERROR: 1. ErroneousVarDecl

khaali voidFunc() {
    bolo("hello");
}

yaar {
    number i = 10;
    float f = 3.14;
    
    // 3. FnCallParamType
    voidFunc(f); 
    
    // 5. ExpressionTypeMismatch
    i = 3.14; 
    
    // 7. NonBooleanCondStmt
    agar (i) { 
        bolo("wont work");
    }
}
```

**Compiler Output (Caught at Semantic Stage):**
```text
[Type Error] Variable invalidVar cannot be of type void
[Type Error] Function 'voidFunc' expects 0 arguments, but got 1
[Type Error] Invalid assignment: Cannot assign type 'float' to variable 'i' of type 'int'
[Type Error] Condition must be a boolean expression
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) – [Download](https://nodejs.org/)
- **Rust** (for building compiler) – [Install via rustup](https://rustup.rs/)
- **wasm-pack** (for WebAssembly compilation) – `cargo install wasm-pack`

### Installation

#### Step 1: Build the WASM Compiler

```bash
# Clone the compiler repository (wasm-compiler branch)
git clone -b wasm-compiler https://github.com/BazilSuhail/YaarScript-Client.git
cd YaarScript-Client

# For building the WASM package go to wasm-compiler branch
git checkout wasm-compiler

# Build the WASM package
wasm-pack build --target web

# This generates a 'pkg' folder with the compiled WASM files
```

#### Step 2: Setup the Web Interface

```bash
# Clone the web client repository
git clone https://github.com/BazilSuhail/YaarScript-Client.git
cd YaarScript-Client

# Copy the compiled WASM package
# Copy the 'pkg' folder from the compiler to the client root directory

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Directory Structure

```
YaarScript-Client/
├── pkg/                      # WASM compiled files (from compiler)
│   ├── compiler.js
│   ├── compiler_bg.wasm
│   └── ...
├── app/
│   ├── page.jsx             # Home page
│   ├── editor/              # Online code editor
│   └── docs/                # Documentation pages
├── components/
│   ├── home-page/           # Landing page components
│   ├── editor/              # Editor components
│   └── docs/                # Documentation components
├── public/                  # Static assets
└── package.json
```

---

## 📝 Quick Examples

### Hello World

```yaarscript
yaar {
    bolo("Assalam-o-Alaikum, World!\n");
}
```

### Variables and Types

```yaarscript
yaar {
    number age = 25;
    float price = 99.99;
    lafz name = "Ahmed";
    faisla is_valid = sahi;
    
    bolo("Name: ", name, "\n");
    bolo("Age: ", age, "\n");
}
```

### Conditionals (agar/warna)

```yaarscript
yaar {
    number score = 85;
    
    agar (score >= 90) {
        bolo("Grade: A\n");
    } warna agar (score >= 80) {
        bolo("Grade: B\n");
    } warna agar (score >= 70) {
        bolo("Grade: C\n");
    } warna {
        bolo("Grade: F\n");
    }
}
```

### Loops (dohrao)

```yaarscript
yaar {
    dohrao (number i = 0; i < 5; i++) {
        bolo("Iteration: ", i, "\n");
    }
}
```

### Functions

```yaarscript
number add(number a, number b) {
    wapsi a + b;
}

khaali greet(lafz name) {
    bolo("Hello, ", name, "!\n");
}

yaar {
    number sum = add(10, 20);
    bolo("Sum: ", sum, "\n");
    
    greet("YaarScript");
}
```

### Switch Statement (intekhab)

```yaarscript
yaar {
    number day = 3;
    
    intekhab (day) {
        agar_ho 1:
            bolo("Monday\n");
            bas_kar;
        agar_ho 2:
            bolo("Tuesday\n");
            bas_kar;
        agar_ho 3:
            bolo("Wednesday\n");
            bas_kar;
        aakhir:
            bolo("Other day\n");
    }
}
```

##  Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Areas for Contribution

- 🐛 Bug fixes and improvements
- 📝 Documentation enhancements
- 🎨 UI/UX improvements
- 🌐 Translations and localization
- ✨ New language features
- 🧪 Test coverage

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---