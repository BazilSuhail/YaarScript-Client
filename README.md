# YaarScript ![YaarScript Logo](https://img.shields.io/badge/YaarScript-Apki%20Zuban%2C%20Apki%20Code-00D9FF?style=for-the-badge)


**A slang-infused Urdu styled programming language that turns regular code into cool slang**

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![WebAssembly](https://img.shields.io/badge/WebAssembly-Powered-654FF0?style=flat-square&logo=webassembly)](https://webassembly.org/)
[![Rust](https://img.shields.io/badge/Rust-Backend-000000?style=flat-square&logo=rust)](https://www.rust-lang.org/)
[![License](https://img.shields.io/badge/License-Open%20Source-green?style=flat-square)](LICENSE)

[**Try Online Playground**](https://yaarscript.netlify.app/editor) • [**Documentation**](https://yaarscript.netlify.app/docs) • [**Examples**](#quick-examples) • [**Actual Compiler**](https://github.com/BazilSuhail/Custom-Compiler)

</div>

---

## 📖 Overview

**YaarScript** is a modern, professional programming language that brings the warmth and familiarity of the Urdu language to software development. Built with **Rust** and compiled to **WebAssembly**, YaarScript offers a unique blend of cultural accessibility and cutting-edge technology.

### 🎯 Key Highlights

- **🌍 Urdu-Inspired Syntax** – Natural keywords like `agar`, `warna`, `dohrao`, `bolo` make coding intuitive for Urdu speakers
- **⚡ Lightning Fast** – Entire compiler runs in the browser via WebAssembly (wasm32-unknown-unknown)
- **🔧 Industrial-Grade** – Multi-pass compiler with fixed-point optimization, constant folding, and dead code elimination
- **🎨 Modern IDE** – Professional web-based editor with syntax highlighting and real-time execution
- **🔒 Strong Type System** – Strict typing with no implicit coercion for safer code
- **🚀 Zero Installation** – Run directly in your browser with our online playground

---

## ✨ Features

### 🛠️ Compiler Architecture

YaarScript features a sophisticated multi-pass compilation pipeline:

1. **Lexical Analysis** – Tokenization with full Unicode support
2. **Syntax Analysis** – Top-Down Operator Precedence (Pratt) Parser
3. **Semantic Analysis** – Comprehensive scope management and type checking
4. **IR Generation** – Three-Address Code (TAC) intermediate representation
5. **Optimization** – Fixed-point optimization passes
6. **Execution** – High-performance WASM virtual machine

### 💡 Language Features

- ✅ **Strong Type System** – `number`, `float`, `double`, `char`, `lafz` (string), `faisla` (boolean)
- ✅ **Control Flow** – `agar/warna` (if/else), `dohrao` (for), `jabtak` (while), `karo-jabtak` (do-while)
- ✅ **Switch Statements** – `intekhab` with `agar_ho` cases
- ✅ **Functions** – First-class functions with return types
- ✅ **Enumerations** – `qism` for defining custom enums
- ✅ **Constants** – `pakka` for immutable values, `sab_ke_liye` for globals
- ✅ **Operators** – Full arithmetic, logical, and comparison operations
- ✅ **Loop Control** – `bas_kar` (break), `aagay_baro` (continue)

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
git clone -b wasm-compiler https://github.com/YourUsername/YaarScript-Compiler.git
cd YaarScript-Compiler

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

---

## 📚 Documentation

### Data Types

| Type | Description | Example |
|------|-------------|---------|
| `number` | Integer values | `42` |
| `float` | Single precision | `3.14` |
| `double` | Double precision | `2.718281828` |
| `char` | Single character | `'A'` |
| `lafz` | String values | `"Hello"` |
| `faisla` | Boolean | `sahi`, `galat` |
| `khaali` | Void/Empty | Function return type |

### Keywords Reference

| Keyword | English Equivalent | Usage |
|---------|-------------------|-------|
| `yaar` | main | Main function entry point |
| `bolo` | print | Output to console |
| `agar` | if | Conditional statement |
| `warna` | else | Alternative branch |
| `dohrao` | for | For loop |
| `jabtak` | while | While loop |
| `karo` | do | Do-while loop |
| `intekhab` | switch | Switch statement |
| `agar_ho` | case | Case in switch |
| `aakhir` | default | Default case |
| `wapsi` | return | Return from function |
| `bas_kar` | break | Break loop/switch |
| `aagay_baro` | continue | Continue loop |
| `pakka` | const | Constant declaration |
| `sab_ke_liye` | global | Global scope |
| `qism` | enum | Enumeration |
| `sahi` | true | Boolean true |
| `galat` | false | Boolean false |

### Operators

**Arithmetic:** `+`, `-`, `*`, `/`, `%`  
**Comparison:** `==`, `!=`, `>`, `<`, `>=`, `<=`  
**Logical:** `&&`, `||`, `!`  
**Increment/Decrement:** `++`, `--`

---

## 🎮 Online Playground

Visit our [**Online Editor**](https://yaarscript.netlify.app/editor) to start coding immediately without any installation. The playground features:

- 🎨 **Syntax Highlighting** – Clean, readable code editor
- ⚡ **Instant Compilation** – Real-time compilation and execution
- 📺 **Live Terminal** – See output as you code
- 💾 **Auto-Save** – Your code is saved automatically
- 🌙 **Dark Theme** – Easy on the eyes

---

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Tech Stack

- **Frontend:** Next.js 16.1, React 19.2, Tailwind CSS 4
- **Animations:** Framer Motion
- **Backend Compiler:** Rust (compiled to WASM)
- **Icons:** React Icons
- **Code Editor:** Custom implementation

---

## 🤝 Contributing

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

## 🎯 Roadmap

- [ ] Array and list data structures
- [ ] String manipulation functions
- [ ] File I/O operations
- [ ] Standard library expansion
- [ ] Module system
- [ ] Package manager
- [ ] Debugging tools
- [ ] Mobile app version
- [ ] VS Code extension

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Built with ❤️ for the Urdu-speaking developer community
- Powered by **Rust** and **WebAssembly**
- UI framework by **Next.js** and **React**
- Special thanks to all contributors and supporters

---

## 📧 Contact & Support

- **Website:** [YaarScript Official](#)
- **GitHub Issues:** [Report a bug](https://github.com/BazilSuhail/YaarScript-Client/issues)
- **Discussions:** [Join the conversation](https://github.com/BazilSuhail/YaarScript-Client/discussions)

---

<div align="center">

**Made with ❤️ by the YaarScript Team**

⭐ **Star this repo if you find it helpful!** ⭐

</div>
