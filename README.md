<div align="center">
  <img src="https://raw.githubusercontent.com/Lord-Entity/Bazil-Suhail-Repos/main/YaarScript/yaarscript-github-readme.webp" alt="YaarScript Pro Banner" width="800">
</div>

<div align="center">

[![Online Playground](https://img.shields.io/badge/Playground-YaarScript-blue?style=for-the-badge&logo=javascript)](https://yaarscript.netlify.app/)
[![Rust](https://img.shields.io/badge/Rust-2024_Edition-orange?style=for-the-badge&logo=rust)](https://rustup.rs/)
[![Architecture](https://img.shields.io/badge/Architecture-Middle_End-brightgreen?style=for-the-badge)](#)
[![Status](https://img.shields.io/badge/Status-Optimized-purple?style=for-the-badge)](#)
[![Version](https://img.shields.io/badge/Version-1.1.0-334155?style=for-the-badge&logo=github)](https://github.com/Lord-Entity/YaarScript/releases)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](http://makeapullrequest.com)
[![Built_with](https://img.shields.io/badge/Built_with-Rust-dea584?style=for-the-badge&logo=rust)](https://www.rust-lang.org/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge&logo=github)](https://github.com/Lord-Entity/YaarScript/blob/main/LICENSE)
 
 </div>

## YaarScript WebAssembly (WASM) implementation

This is the **YaarScript-Client-WASM-Build** repository. This project adapts the core YaarScript compiler to run natively in any modern web browser using WebAssembly. It provides a secure, sandboxed environment to write, compile, and execute YaarScript code without any local setup.

> [!NOTE]
> This repository contains the Web-Frontend and WASM-bindings. For the core compiler source, visiting the [Official YaarScript Repository](https://github.com/BazilSuhail/YaarScript).

### Key Features

- **In-Browser Execution**: Compile and run `.yaar` code instantly via WebAssembly.
- **Interactive Terminal**: A premium, glassmorphism-themed IDE with support for interactive input (`suno()`).
- **Resumable VM**: Advanced compilation logic that can pause and resume execution for user inputs.
- **Modern Aesthetics**: Built with Tailwind CSS and custom terminal-style interactions.

###  Building the WASM Package

To build the project yourself, ensure you have [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/) installed:

```bash
# Compile Rust to WASM/JS bindings
wasm-pack build --target web --out-dir pkg
```

### 💻 Running Locally

1. Build the package using the command above.
2. Serve the root directory using any local server (e.g., `npx serve .` or `python -m http.server`).
3. Open your browser and navigate to the local address.

### 🔗 Useful Links

- **Main Repository**: [YaarScript Engine](https://github.com/BazilSuhail/YaarScript)
- **Live Playground**: [Experience YaarScript Online](https://yaarscript.netlify.app/)

---
<div align="center">Made with ❤️ for the YaarScript community.</div>
