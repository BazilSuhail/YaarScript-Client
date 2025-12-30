"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import CodeBlock from "./CodeBlock";
import DocSection from "./DocSection";

const DocsContent = ({ activeSection }) => {
    const sections = {
        "getting-started": {
            title: "Getting Started with YaarScript",
            description: "Welcome to YaarScript - an industrial-grade compiler with Urdu-inspired syntax that makes programming accessible and intuitive.",
            content: (
                <>
                    <div className="bg-gradient-to-br from-sky-900/30 to-blue-900/30 border border-sky-800/50 rounded-2xl p-6 sm:p-8 mb-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-sky-400 mb-4 border-0">What is YaarScript?</h3>
                        <p className="text-lg leading-relaxed">
                            YaarScript is a slang-infused Urdu styled programming language that turns regular code into cool slang. It is a professional, close to industrial-grade programming language that brings the warmth and familiarity of the Urdu language to modern coding. Built with <strong>Rust</strong> and compiled to <strong>WebAssembly</strong>, it offers blazing-fast performance while maintaining an intuitive, culturally-resonant syntax.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            Whether you're a beginner learning programming concepts in your native linguistic context, or an experienced developer building production applications, YaarScript provides the tools and features you need.
                        </p>
                    </div>

                    <h3>🎯 Design Philosophy</h3>
                    <div className="grid gap-4 sm:grid-cols-2 my-6">
                        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                            <h4 className="text-lg font-bold text-sky-400 mb-2">Cultural Accessibility</h4>
                            <p className="text-sm text-slate-300">Keywords inspired by Urdu/Hindi make programming intuitive for South Asian developers.</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                            <h4 className="text-lg font-bold text-sky-400 mb-2">Industrial Strength</h4>
                            <p className="text-sm text-slate-300">Multi-pass compiler with optimization, type safety, and production-ready features.</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                            <h4 className="text-lg font-bold text-sky-400 mb-2">Modern Tooling</h4>
                            <p className="text-sm text-slate-300">Web-based IDE with syntax highlighting, instant compilation, and zero setup required.</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                            <h4 className="text-lg font-bold text-sky-400 mb-2">Zero Dependencies</h4>
                            <p className="text-sm text-slate-300">Runs entirely in the browser via WebAssembly - no server required.</p>
                        </div>
                    </div>

                    <h3>✨ Key Features</h3>
                    <ul>
                        <li><strong>WebAssembly Powered</strong> - Entire compiler compiled to wasm32-unknown-unknown for native browser performance</li>
                        <li><strong>Urdu-Inspired Keywords</strong> - Natural, intuitive syntax using familiar words like <code>agar</code>, <code>warna</code>, <code>dohrao</code></li>
                        <li><strong>Multi-Pass Optimizer</strong> - Fixed-point optimization with constant folding, dead code elimination, and peephole optimization</li>
                        <li><strong>Strong Type System</strong> - Strict typing with no implicit coercion ensures code safety and reliability</li>
                        <li><strong>Modern IDE Experience</strong> - Professional editor with syntax highlighting, auto-completion, and real-time error detection</li>
                        <li><strong>Three-Address Code</strong> - Generates optimized intermediate representation for efficient execution</li>
                        <li><strong>Rich Data Types</strong> - Support for integers, floats, doubles, characters, strings, and booleans</li>
                        <li><strong>Control Flow Mastery</strong> - Complete set of control structures including loops, conditionals, and switch statements</li>
                    </ul>

                    <h3>🏗️ Compiler Architecture</h3>
                    <p>YaarScript features a sophisticated multi-stage compilation pipeline:</p>
                    <ol>
                        <li><strong>Lexical Analysis (Scanner)</strong> - Tokenizes source code with full Unicode support, handling Urdu keywords and special characters</li>
                        <li><strong>Syntax Analysis (Parser)</strong> - Top-Down Operator Precedence (Pratt) Parser builds an Abstract Syntax Tree (AST) with proper operator precedence</li>
                        <li><strong>Semantic Analysis</strong> - Comprehensive scope management, symbol table construction, and type checking with detailed error reporting</li>
                        <li><strong>IR Generation</strong> - Generates Three-Address Code (TAC), a low-level intermediate representation optimized for analysis</li>
                        <li><strong>Optimization Passes</strong> - Fixed-point optimization including constant folding, common subexpression elimination, and dead code removal</li>
                        <li><strong>Execution Engine</strong> - High-performance virtual machine executes optimized TAC with runtime type safety</li>
                    </ol>

                    <h3>🎓 Who is YaarScript For?</h3>
                    <div className="bg-slate-800/30 border-l-4 border-sky-500 rounded-r-xl p-6 my-6">
                        <ul className="space-y-3">
                            <li><strong>Students & Beginners</strong> - Learn programming concepts in a linguistically familiar environment</li>
                            <li><strong>Educators</strong> - Teach computer science using culturally relevant syntax that resonates with students</li>
                            <li><strong>Hobbyists</strong> - Experiment with compiler design and language implementation</li>
                            <li><strong>Developers</strong> - Build tools and applications with a unique, expressive language</li>
                            <li><strong>Researchers</strong> - Study programming language design with focus on cultural adaptation</li>
                        </ul>
                    </div>

                    <h3>🚀 Quick Example</h3>
                    <p>Here's a taste of YaarScript's intuitive syntax:</p>
                    <CodeBlock code={`// Your first YaarScript program
yaar {
    // Variables with Urdu-inspired types
    lafz greeting = "Assalam-o-Alaikum";
    number count = 10;
    faisla isActive = sahi;
    
    // Print output
    bolo(greeting, " from YaarScript!\\n");
    bolo("Count: ", count, "\\n");
    
    // Conditional logic
    agar (isActive) {
        bolo("System is active!\\n");
    } warna {
        bolo("System inactive.\\n");
    }
    
    // Loops made simple
    dohrao (number i = 1; i <= 5; i++) {
        bolo("Iteration #", i, "\\n");
    }
}`} />

                    <h3>📚 What You'll Learn</h3>
                    <p>This documentation covers everything you need to master YaarScript:</p>
                    <ul>
                        <li>Complete language syntax and semantics</li>
                        <li>Type system and variable declarations</li>
                        <li>Functions, control flow, and loops</li>
                        <li>Advanced features like enums and constants</li>
                        <li>Best practices and coding patterns</li>
                        <li>Real-world examples and use cases</li>
                    </ul>

                    <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-700/50 rounded-xl p-6 mt-8">
                        <h4 className="text-lg font-bold text-amber-400 mb-3">💡 Pro Tip</h4>
                        <p className="text-slate-300">
                            Start with the <strong>Quick Start</strong> section to write your first program, then explore <strong>Variables & Types</strong> to understand the type system. Use the online playground to experiment as you learn!
                        </p>
                    </div>
                </>
            )
        },
        "installation": {
            title: "Installation & Setup",
            description: "Get YaarScript running locally or use the online playground.",
            content: (
                <>
                    <h3>Prerequisites</h3>
                    <ul>
                        <li><strong>Rust</strong> - Install from <a href="https://rustup.rs/" target="_blank" rel="noopener">rustup.rs</a></li>
                        <li><strong>wasm-pack</strong> - Install via <code>cargo install wasm-pack</code></li>
                        <li><strong>Node.js</strong> - For running the development server</li>
                    </ul>

                    <h3>Step 1: Build the WASM Compiler</h3>
                    <p>First, you need to build the YaarScript compiler to WebAssembly:</p>
                    <CodeBlock code={`# Clone the compiler repository (wasm-compiler branch)
git clone -b wasm-compiler https://github.com/BazilSuhail/YaarScript.git
cd YaarScript-Compiler

# Build the WASM package
wasm-pack build --target web

# This generates a 'pkg' folder with the compiled WASM files`} language="bash" />

                    <h3>Step 2: Setup the Web Interface</h3>
                    <p>Now clone and setup the web interface:</p>
                    <CodeBlock code={`# Clone the web client repository
git clone https://github.com/BazilSuhail/YaarScript-Client.git
cd YaarScript-Client

# Copy the compiled WASM package
# Copy the 'pkg' folder from compiler to the client root directory

# Install dependencies
npm install

# Run development server
npm run dev`} language="bash" />

                    <h3>Directory Structure</h3>
                    <CodeBlock code={`YaarScript-Client/
├── pkg/                    # WASM compiled files (from compiler)
    ├── compiler.js
    ├── compiler_bg.wasm
    └── ...
├── app/
├── components/
└── ...`} language="text" />

                    <h3>Online Playground</h3>
                    <p>No installation needed! Use our <a href="/editor">online playground</a> to start coding immediately.</p>

                    <h3>Troubleshooting</h3>
                    <ul>
                        <li>Make sure the <code>pkg</code> folder is in the root of YaarScript-Client</li>
                        <li>If WASM fails to load, check browser console for errors</li>
                        <li>Ensure you're using a modern browser with WebAssembly support</li>
                    </ul>
                </>
            )
        },
        "quick-start": {
            title: "Quick Start Guide",
            description: "Write your first YaarScript program in minutes.",
            content: (
                <>
                    <h3>Your First Program</h3>
                    <CodeBlock code={`yaar {
    bolo("Assalam-o-Alaikum, World!\\n");
}`} />

                    <h3>Variables and Types</h3>
                    <CodeBlock code={`yaar {
    number age = 25;
    float price = 99.99;
    lafz name = "Ahmed";
    faisla is_valid = sahi;
    
    bolo("Name: ", name, "\\n");
    bolo("Age: ", age, "\\n");
}`} />

                    <h3>Conditionals</h3>
                    <CodeBlock code={`yaar {
    number score = 85;
    
    agar (score >= 90) {
        bolo("Grade: A\\n");
    } warna agar (score >= 70) {
        bolo("Grade: B\\n");
    } warna {
        bolo("Grade: C\\n");
    }
}`} />
                </>
            )
        },
        "variables": {
            title: "Variables & Types",
            description: "Learn about YaarScript's type system and variable declarations.",
            content: (
                <>
                    <h3>Data Types</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Description</th>
                                <th>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><code>number</code></td><td>Integer values</td><td><code>42</code></td></tr>
                            <tr><td><code>float</code></td><td>Single precision</td><td><code>3.14</code></td></tr>
                            <tr><td><code>double</code></td><td>Double precision</td><td><code>2.718281828</code></td></tr>
                            <tr><td><code>char</code></td><td>Single character</td><td><code>'A'</code></td></tr>
                            <tr><td><code>lafz</code></td><td>String values</td><td><code>"Hello"</code></td></tr>
                            <tr><td><code>faisla</code></td><td>Boolean</td><td><code>sahi, galat</code></td></tr>
                            <tr><td><code>khaali</code></td><td>Void/Empty</td><td>Function return type</td></tr>
                        </tbody>
                    </table>

                    <h3>Variable Declaration</h3>
                    <CodeBlock code={`// Basic declaration
number x = 10;
float pi = 3.14159;
lafz message = "Hello";
faisla is_active = sahi;

// Without initialization
number count;
count = 5;`} />

                    <h3>Constants (pakka)</h3>
                    <CodeBlock code={`// Local constant
pakka number MAX_SIZE = 100;

// Global constant
pakka sab_ke_liye number GLOBAL_LIMIT = 500;`} />
                </>
            )
        },
        "operators": {
            title: "Operators",
            description: "Arithmetic, comparison, and logical operators in YaarScript.",
            content: (
                <>
                    <h3>Arithmetic Operators</h3>
                    <CodeBlock code={`number a = 10 + 5;   // Addition
number b = 10 - 5;   // Subtraction
number c = 10 * 5;   // Multiplication
number d = 10 / 5;   // Division
number e = 10 % 3;   // Modulus`} />

                    <h3>Comparison Operators</h3>
                    <CodeBlock code={`faisla result1 = (5 == 5);  // Equal to
faisla result2 = (5 != 3);  // Not equal
faisla result3 = (5 > 3);   // Greater than
faisla result4 = (5 < 10);  // Less than
faisla result5 = (5 >= 5);  // Greater or equal
faisla result6 = (5 <= 10); // Less or equal`} />

                    <h3>Logical Operators</h3>
                    <CodeBlock code={`faisla and_result = sahi && galat;  // Logical AND
faisla or_result = sahi || galat;   // Logical OR
faisla not_result = !sahi;          // Logical NOT`} />
                </>
            )
        },
        "functions": {
            title: "Functions",
            description: "Define and call functions in YaarScript.",
            content: (
                <>
                    <h3>Function Syntax</h3>
                    <CodeBlock code={`// Function declaration
ReturnType function_name(Type param1, Type param2) {
    // Function body
    wapsi value;
}`} />

                    <h3>Example Functions</h3>
                    <CodeBlock code={`// Function returning number
number add(number a, number b) {
    wapsi a + b;
}

// Function with void return
khaali greet(lafz name) {
    bolo("Hello, ", name, "!\\n");
}

// Using functions
yaar {
    number sum = add(5, 3);
    bolo("Sum: ", sum, "\\n");
    
    greet("Ahmed");
}`} />

                    <h3>Complex Example</h3>
                    <CodeBlock code={`number calculate_bonus(number level) {
    agar (level > 5) {
        wapsi level * 10;
    } warna {
        wapsi level * 2;
    }
}

yaar {
    number bonus = calculate_bonus(7);
    bolo("Bonus: ", bonus, "\\n");
}`} />
                </>
            )
        },
        "if-else": {
            title: "If/Else (agar/warna)",
            description: "Conditional execution using agar and warna keywords.",
            content: (
                <>
                    <h3>Basic If Statement</h3>
                    <div className="mb-4">
                        <p className="text-xs text-slate-400 mb-2">
                            <strong className="text-sky-400">agar</strong> (if in C/C++) executes a block of code only when a condition is <code>sahi</code> (true). The condition is evaluated, and if true, the code inside the braces executes. If false, the block is skipped.
                        </p>
                        <p className="text-xs text-slate-500">
                            <strong>C/C++ Equivalent:</strong> <code>if (condition) &#123; ... &#125;</code>
                        </p>
                    </div>
                    <CodeBlock code={`agar (condition) {
    // Execute if true
}`} />

                    <h3>If-Else</h3>
                    <div className="mb-4">
                        <p className="text-xs text-slate-400 mb-2">
                            <strong className="text-sky-400">warna</strong> (else in C/C++) provides an alternative block to execute when the <code>agar</code> condition is <code>galat</code> (false). This allows you to handle both true and false cases.
                        </p>
                        <p className="text-xs text-slate-500">
                            <strong>C/C++ Equivalent:</strong> <code>if (...) &#123; ... &#125; else &#123; ... &#125;</code>
                        </p>
                    </div>
                    <CodeBlock code={`agar (score >= 50) {
    bolo("Pass\\n");
} warna {
    bolo("Fail\\n");
}`} />
                </>
            )
        },
        "for-loop": {
            title: "For Loop (dohrao)",
            description: "Iterate with dohrao - YaarScript's for loop.",
            content: (
                <>
                    <h3>Syntax</h3>
                    <div className="mb-4">
                        <p className="text-xs text-slate-400 mb-2">
                            <strong className="text-sky-400">dohrao</strong> (for in C/C++) creates a loop that repeats a block of code a specific number of times. It has three parts: initialization (set starting value), condition (check when to stop), and increment (change value each loop).
                        </p>
                        <p className="text-xs text-slate-500">
                            <strong>C/C++ Equivalent:</strong> <code>for (init; condition; increment) &#123; ... &#125;</code>
                        </p>
                    </div>
                    <CodeBlock code={`dohrao (initialization; condition; increment) {
    // Loop body
}`} />

                    <h3>Basic Example</h3>
                    <div className="mb-4">
                        <p className="text-xs text-slate-400 mb-2">
                            This loop starts with <code>i = 0</code>, repeats while <code>i &lt; 5</code>, and increments <code>i</code> by 1 after each iteration. The loop body executes 5 times total (i = 0, 1, 2, 3, 4).
                        </p>
                    </div>
                    <CodeBlock code={`dohrao (number i = 0; i < 5; i++) {
    bolo("Iteration: ", i, "\\n");
}`} />

                    <h3>With Break (bas_kar)</h3>
                    <div className="mb-4">
                        <p className="text-xs text-slate-400 mb-2">
                            <strong className="text-sky-400">bas_kar</strong> (break in C/C++) immediately exits the loop, skipping any remaining iterations. Useful for stopping early when a condition is met.
                        </p>
                        <p className="text-xs text-slate-500">
                            <strong>C/C++ Equivalent:</strong> <code>break;</code>
                        </p>
                    </div>
                    <CodeBlock code={`dohrao (number i = 1; i <= 10; i++) {
    agar (i > 5) {
        bas_kar;  // Exit loop
    }
    bolo("Number: ", i, "\\n");
}`} />

                    <h3>Nested Loops</h3>
                    <div className="mb-4">
                        <p className="text-xs text-slate-400 mb-2">
                            You can place loops inside other loops. The inner loop completes all its iterations for each iteration of the outer loop. This creates a multiplication effect - with two nested loops of 3 iterations each, the body executes 9 times total.
                        </p>
                    </div>
                    <CodeBlock code={`dohrao (number i = 1; i <= 3; i++) {
    dohrao (number j = 1; j <= 3; j++) {
        bolo(i, " x ", j, " = ", i * j, "\\n");
    }
    bolo("\\n");
}`} />
                </>
            )
        },
        "while-loop": {
            title: "While Loop (jabtak)",
            description: "Conditional loops using jabtak keyword.",
            content: (
                <>
                    <h3>Syntax</h3>
                    <div className="mb-4">
                        <p className="text-xs text-slate-400 mb-2">
                            <strong className="text-sky-400">jabtak</strong> (while in C/C++) repeats a block as long as a condition remains <code>sahi</code> (true). It checks the condition before each iteration. If the condition is false from the start, the loop never executes.
                        </p>
                        <p className="text-xs text-slate-500">
                            <strong>C/C++ Equivalent:</strong> <code>while (condition) &#123; ... &#125;</code>
                        </p>
                    </div>
                    <CodeBlock code={`jabtak (condition) {
    // Loop body
}`} />

                    <h3>Basic Example</h3>
                    <div className="mb-4">
                        <p className="text-xs text-slate-400 mb-2">
                            This loop repeats while <code>count &lt; 5</code>. Each iteration, count increases by 1. When count reaches 5, the condition becomes false and the loop stops. Without the increment, the loop would run forever (infinite loop).
                        </p>
                    </div>
                    <CodeBlock code={`number count = 0;
jabtak (count < 5) {
    bolo("Count: ", count, "\\n");
    count = count + 1;
}`} />

                    <h3>Input Validation Pattern</h3>
                    <div className="mb-4">
                        <p className="text-xs text-slate-400 mb-2">
                            While loops are ideal for validation - repeat until a valid input is received. This example keeps asking for input while both conditions are true: success hasn't happened AND attempts haven't exceeded 3.
                        </p>
                    </div>
                    <CodeBlock code={`number attempts = 0;
faisla success = galat;

jabtak (!success && attempts < 3) {
    bolo("Attempt ", attempts + 1, "\\n");
    // Validation logic here
    attempts = attempts + 1;
}`} />
                </>
            )
        },
        "do-while": {
            title: "Do-While Loop (karo-jabtak)",
            description: "Post-condition loops in YaarScript.",
            content: (
                <>
                    <h3>Syntax</h3>
                    <div className="mb-4">
                        <p className="text-xs text-slate-400 mb-2">
                            <strong className="text-sky-400">karo...jabtak</strong> (do...while in C/C++) executes a block at least once before checking the condition. Unlike <code>jabtak</code>, the loop body always runs at minimum one time, then repeats if the condition is <code>sahi</code> (true).
                        </p>
                        <p className="text-xs text-slate-500">
                            <strong>C/C++ Equivalent:</strong> <code>do &#123; ... &#125; while (condition);</code>
                        </p>
                    </div>
                    <CodeBlock code={`karo {
    // Loop body (executes at least once)
} jabtak (condition);`} />

                    <h3>Example</h3>
                    <div className="mb-4">
                        <p className="text-xs text-slate-400 mb-2">
                            This loop will execute at least once (attempts becomes 1), then check if attempts &lt; 3. If true, it repeats. Perfect for ensuring an action happens at least one time before checking a repeat condition.
                        </p>
                    </div>
                    <CodeBlock code={`number attempts = 0;
karo {
    attempts = attempts + 1;
    bolo("Attempt #", attempts, "\\n");
} jabtak (attempts < 3);`} />

                    <h3>Menu Loop Pattern</h3>
                    <div className="mb-4">
                        <p className="text-xs text-slate-400 mb-2">
                            Do-while loops are perfect for menu systems. Display the menu at least once, get user input, then repeat if they don't choose exit. This ensures users always see the menu before choosing.
                        </p>
                    </div>
                    <CodeBlock code={`number choice;
karo {
    bolo("\\n=== Menu ===\\n");
    bolo("1. Option A\\n");
    bolo("2. Option B\\n");
    bolo("0. Exit\\n");
    
    // Get user input
    choice = 1; // Placeholder
    
} jabtak (choice != 0);`} />
                </>
            )
        },
        "switch": {
            title: "Switch Statement (intekhab)",
            description: "Multi-way branching with intekhab.",
            content: (
                <>
                    <h3>Syntax</h3>
                    <div className="mb-4">
                        <p className="text-xs text-slate-400 mb-2">
                            <strong className="text-sky-400">intekhab</strong> (switch in C/C++) evaluates an expression once and compares it to multiple cases. Use <strong className="text-sky-400">agar_ho</strong> (case) to match values and <strong className="text-sky-400">bas_kar</strong> (break) to exit each case. <strong className="text-sky-400">aakhir</strong> (default) handles unmatched values.
                        </p>
                        <p className="text-xs text-slate-500">
                            <strong>C/C++ Equivalent:</strong> <code>switch (expr) &#123; case val: ... break; default: ... &#125;</code>
                        </p>
                    </div>
                    <CodeBlock code={`intekhab (expression) {
    agar_ho value1:
        // Code
        bas_kar;
    agar_ho value2:
        // Code
        bas_kar;
    aakhir:
        // Default case
}`} />

                    <h3>Example</h3>
                    <div className="mb-4">
                        <p className="text-xs text-slate-400 mb-2">
                            This switch evaluates <code>day</code> and matches it against cases 1, 2, and 3. When a match is found, code executes until <code>bas_kar</code> is reached. The <code>aakhir</code> case handles all other values.
                        </p>
                    </div>
                    <CodeBlock code={`number day = 3;

intekhab (day) {
    agar_ho 1:
        bolo("Monday\\n");
        bas_kar;
    agar_ho 2:
        bolo("Tuesday\\n");
        bas_kar;
    agar_ho 3:
        bolo("Wednesday\\n");
        bas_kar;
    aakhir:
        bolo("Other day\\n");
}`} />

                    <h3>Status Code Example</h3>
                    <div className="mb-4">
                        <p className="text-xs text-slate-400 mb-2">
                            Switch statements are excellent for handling status codes or enum-like values. Each status gets its own case with appropriate handling, making the code clean and easy to maintain.
                        </p>
                    </div>
                    <CodeBlock code={`number status = 200;

intekhab (status) {
    agar_ho 200:
        bolo("OK\\n");
        bas_kar;
    agar_ho 404:
        bolo("Not Found\\n");
        bas_kar;
    agar_ho 500:
        bolo("Server Error\\n");
        bas_kar;
    aakhir:
        bolo("Unknown Status\\n");
}`} />
                </>
            )
        },
        "enums": {
            title: "Enums (qism)",
            description: "User-defined enumerations in YaarScript.",
            content: (
                <>
                    <h3>Syntax</h3>
                    <CodeBlock code={`qism EnumName { Value1, Value2, Value3 };`} />

                    <h3>Example</h3>
                    <CodeBlock code={`// Define enum
qism Mausam { Garmi, Sardi, Barish };

// Usage in code
yaar {
    // Note: Enum values are currently compile-time only
    bolo("Weather types: Garmi, Sardi, Barish\\n");
}`} />

                    <h3>Status Enum</h3>
                    <CodeBlock code={`qism Status { Active, Inactive, Pending };

// Can be used for type safety and code organization`} />
                </>
            )
        },
        "constants": {
            title: "Constants (pakka)",
            description: "Immutable values with pakka keyword.",
            content: (
                <>
                    <h3>Local Constants</h3>
                    <CodeBlock code={`yaar {
    pakka number PI = 3.14159;
    pakka number MAX_USERS = 100;
    
    bolo("PI: ", PI, "\\n");
}`} />

                    <h3>Global Constants</h3>
                    <CodeBlock code={`// Global constant (accessible everywhere)
pakka sab_ke_liye number GLOBAL_LIMIT = 1000;

yaar {
    bolo("Global Limit: ", GLOBAL_LIMIT, "\\n");
}`} />

                    <h3>Best Practices</h3>
                    <ul>
                        <li>Use UPPERCASE names for constants</li>
                        <li>Define global constants at the top of your file</li>
                        <li>Use <code>pakka</code> for values that should never change</li>
                        <li>Combine <code>pakka sab_ke_liye</code> for global constants</li>
                    </ul>
                </>
            )
        },
        "scope": {
            title: "Scope & Globals",
            description: "Understanding variable scope in YaarScript.",
            content: (
                <>
                    <h3>Local Scope</h3>
                    <CodeBlock code={`yaar {
    number x = 10;  // Local to yaar block
    
    agar (sahi) {
        number y = 20;  // Local to if block
        bolo("x: ", x, ", y: ", y, "\\n");
    }
    
    // y is not accessible here
}`} />

                    <h3>Global Variables</h3>
                    <CodeBlock code={`// Global variable
sab_ke_liye number counter = 0;

// Global constant
pakka sab_ke_liye number MAX = 100;

yaar {
    counter = counter + 1;
    bolo("Counter: ", counter, "\\n");
}`} />

                    <h3>Function Scope</h3>
                    <CodeBlock code={`number calculate(number a) {
    number result = a * 2;  // Local to function
    wapsi result;
}

yaar {
    number value = calculate(5);
    // 'result' is not accessible here
}`} />
                </>
            )
        },
        "keywords": {
            title: "Keyword Reference",
            description: "Complete list of YaarScript keywords and their equivalents.",
            content: (
                <>
                    <h3>Entry Point & Output</h3>
                    <table>
                        <thead><tr><th>YaarScript</th><th>Standard</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td><code>yaar</code></td><td>main</td><td>Program entry point</td></tr>
                            <tr><td><code>bolo</code></td><td>print</td><td>Output to console</td></tr>
                        </tbody>
                    </table>

                    <h3>Data Types</h3>
                    <table>
                        <thead><tr><th>YaarScript</th><th>Standard</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td><code>number</code></td><td>int</td><td>Integer type</td></tr>
                            <tr><td><code>float</code></td><td>float</td><td>Floating point</td></tr>
                            <tr><td><code>double</code></td><td>double</td><td>Double precision</td></tr>
                            <tr><td><code>char</code></td><td>char</td><td>Character type</td></tr>
                            <tr><td><code>lafz</code></td><td>string</td><td>String type</td></tr>
                            <tr><td><code>faisla</code></td><td>bool</td><td>Boolean type</td></tr>
                            <tr><td><code>khaali</code></td><td>void</td><td>Empty/void type</td></tr>
                        </tbody>
                    </table>

                    <h3>Control Flow</h3>
                    <table>
                        <thead><tr><th>YaarScript</th><th>Standard</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td><code>agar</code></td><td>if</td><td>Conditional</td></tr>
                            <tr><td><code>warna</code></td><td>else</td><td>Else clause</td></tr>
                            <tr><td><code>dohrao</code></td><td>for</td><td>For loop</td></tr>
                            <tr><td><code>jabtak</code></td><td>while</td><td>While loop</td></tr>
                            <tr><td><code>karo</code></td><td>do</td><td>Do-while loop</td></tr>
                            <tr><td><code>intekhab</code></td><td>switch</td><td>Switch statement</td></tr>
                            <tr><td><code>agar_ho</code></td><td>case</td><td>Case label</td></tr>
                            <tr><td><code>aakhir</code></td><td>default</td><td>Default case</td></tr>
                        </tbody>
                    </table>

                    <h3>Flow Control</h3>
                    <table>
                        <thead><tr><th>YaarScript</th><th>Standard</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td><code>bas_kar</code></td><td>break</td><td>Exit loop/switch</td></tr>
                            <tr><td><code>wapsi</code></td><td>return</td><td>Return from function</td></tr>
                        </tbody>
                    </table>

                    <h3>Modifiers</h3>
                    <table>
                        <thead><tr><th>YaarScript</th><th>Standard</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td><code>pakka</code></td><td>const</td><td>Constant value</td></tr>
                            <tr><td><code>sab_ke_liye</code></td><td>global</td><td>Global scope</td></tr>
                        </tbody>
                    </table>

                    <h3>Literals</h3>
                    <table>
                        <thead><tr><th>YaarScript</th><th>Standard</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td><code>sahi</code></td><td>true</td><td>Boolean true</td></tr>
                            <tr><td><code>galat</code></td><td>false</td><td>Boolean false</td></tr>
                        </tbody>
                    </table>

                    <h3>User Types</h3>
                    <table>
                        <thead><tr><th>YaarScript</th><th>Standard</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td><code>qism</code></td><td>enum</td><td>Enumeration</td></tr>
                        </tbody>
                    </table>
                </>
            )
        },
        "syntax": {
            title: "Syntax Guide (EBNF)",
            description: "Formal grammar specification for YaarScript.",
            content: (
                <>
                    <div className="bg-gradient-to-br from-sky-900/30 to-blue-900/30 border border-sky-800/50 rounded-2xl p-6 sm:p-8 mb-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-sky-400 mb-4 border-0">Understanding YaarScript Syntax</h3>
                        <p className="text-lg leading-relaxed">
                            YaarScript follows a clean, intuitive syntax inspired by Urdu language conventions while maintaining the rigor and structure of traditional programming languages like C and C++. The grammar is designed to be accessible to Urdu speakers while remaining familiar to developers with C/C++ experience.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            This section documents the formal grammar using Extended Backus-Naur Form (EBNF), which is a standard notation for describing programming language syntax. Each rule defines how language constructs can be formed.
                        </p>
                    </div>

                    <h3>Key Syntax Principles</h3>
                    <ul>
                        <li><strong>Block-based Structure</strong> - Like C/C++, YaarScript uses curly braces <code>{ }</code> to define code blocks for functions, loops, and conditionals</li>
                        <li><strong>Statement Termination</strong> - All statements end with semicolons <code>;</code>, just like in C/C++</li>
                        <li><strong>Type Declarations</strong> - Variables require explicit type declarations similar to C/C++ (e.g., <code>number x = 10;</code> is like <code>int x = 10;</code>)</li>
                        <li><strong>Expression Syntax</strong> - Standard operator precedence and associativity rules match C/C++ conventions</li>
                        <li><strong>Urdu-First Keywords</strong> - Control flow keywords use Urdu words instead of English, but follow the same logical structure as C/C++</li>
                        <li><strong>Function Definition</strong> - Functions are declared with return type first, followed by name and parameters, identical to C/C++ function syntax</li>
                    </ul>

                    <h3>Declarations & Types</h3>
                    <p>Variable and type declarations form the foundation of YaarScript programs:</p>
                    <CodeBlock code={`VarDecl ::= ("pakka" | "sab_ke_liye")? Type Identifier ("=" Expression)? ";"
Type    ::= "number" | "float" | "double" | "char" 
          | "faisla" | "lafz" | "khaali" | Identifier
EnumDecl ::= "qism" Identifier "{" Identifier ("," Identifier)* "}" ";"
MainDecl ::= "yaar" Block`} language="ebnf" />
                    <ul>
                        <li><code>pakka</code> modifier = <code>const</code> in C/C++ (immutable constant)</li>
                        <li><code>sab_ke_liye</code> = <code>static</code> or global scope in C/C++</li>
                        <li><code>number</code> = <code>int</code> in C/C++</li>
                        <li><code>faisla</code> = <code>bool</code> in C/C++</li>
                        <li><code>lafz</code> = <code>std::string</code> or <code>char*</code> in C/C++</li>
                        <li><code>khaali</code> = <code>void</code> in C/C++</li>
                        <li><code>yaar</code> = <code>main</code> function entry point</li>
                    </ul>

                    <h3>Control Flow</h3>
                    <p>Control flow structures handle program logic and looping:</p>
                    <CodeBlock code={`IfStmt      ::= "agar" "(" Expression ")" Block ("warna" Block)?
WhileStmt   ::= "jabtak" "(" Expression ")" Block
DoWhileStmt ::= "karo" Block "jabtak" "(" Expression ")" ";"
ForStmt     ::= "dohrao" "(" (VarDecl | ";") Expression? ";" Expression? ")" Block
PrintStmt   ::= "bolo" "(" ExpressionList? ")" ";"
SwitchStmt  ::= "intekhab" "(" Expression ")" "{" CaseBlock* DefaultBlock? "}"`} language="ebnf" />
                    <ul>
                        <li><code>agar</code> = <code>if</code> in C/C++</li>
                        <li><code>warna</code> = <code>else</code> in C/C++</li>
                        <li><code>jabtak</code> = <code>while</code> loop in C/C++</li>
                        <li><code>karo...jabtak</code> = <code>do...while</code> loop in C/C++</li>
                        <li><code>dohrao</code> = <code>for</code> loop in C/C++</li>
                        <li><code>bolo</code> = <code>printf()</code> or <code>cout</code> in C/C++</li>
                        <li><code>intekhab</code> = <code>switch</code> statement in C/C++</li>
                    </ul>

                    <h3>Expressions</h3>
                    <p>Expression grammar follows standard operator precedence rules familiar to C/C++ programmers:</p>
                    <CodeBlock code={`Expression     ::= Assignment
Assignment     ::= LogicalOr ("=" Assignment)?
LogicalOr      ::= LogicalAnd ("||" LogicalAnd)*
LogicalAnd     ::= Equality ("&&" Equality)*
Equality       ::= Comparison (("==" | "!=") Comparison)*
Comparison     ::= Term (("<" | ">" | "<=" | ">=") Term)*
Term           ::= Factor (("+" | "-") Factor)*
Factor         ::= Unary (("*" | "/" | "%") Unary)*
Unary          ::= ("!" | "-") Unary | Primary
Primary        ::= Literal | Identifier | "(" Expression ")" | FunctionCall`} language="ebnf" />
                    <ul>
                        <li><strong>Operator Precedence</strong> - Same as C/C++: multiplication/division before addition/subtraction</li>
                        <li><strong>Logical Operators</strong> - <code>&&</code> (AND), <code>||</code> (OR), <code>!</code> (NOT) work identically to C/C++</li>
                        <li><strong>Comparison Operators</strong> - <code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code> match C/C++ conventions</li>
                        <li><strong>Arithmetic Operators</strong> - <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> (modulo) are identical to C/C++</li>
                    </ul>
                </>
            )
        },
        "examples": {
            title: "Complete Examples",
            description: "Real-world YaarScript programs demonstrating key features.",
            content: (
                <>
                    <h3>Comprehensive Feature Demo</h3>
                    <CodeBlock code={`/* 
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
    bolo("--- YaarScript Pro ---\\n");

    number counter = 0;
    lafz mission = "Mars Rover";
    faisla is_active = sahi;

    // For loop
    dohrao (number i = 1; i <= 5; i++) {
        counter = counter + (i * 2);
        bolo("Step ", i, ": ", counter, "\\n");

        agar (counter > 20) {
            bas_kar;
        }
    }

    // While loop
    number wait = 3;
    jabtak (wait > 0) {
        bolo("Countdown: ", wait, "\\n");
        wait = wait - 1;
    }

    // Switch case
    number status = 1;
    intekhab (status) {
        agar_ho 0:
            bolo("ERROR\\n");
            bas_kar;
        agar_ho 1:
            bolo("OK\\n");
            bas_kar;
        aakhir:
            bolo("UNKNOWN\\n");
    }

    number bonus = calculate_bonus(7);
    bolo("Bonus: ", bonus, "\\n");
    bolo("Target: ", TARGET, "\\n");
}`} />

                    <h3>Calculator Example</h3>
                    <CodeBlock code={`number add(number a, number b) {
    wapsi a + b;
}

number multiply(number a, number b) {
    wapsi a * b;
}

yaar {
    number x = 10;
    number y = 5;
    
    number sum = add(x, y);
    number product = multiply(x, y);
    
    bolo("Sum: ", sum, "\\n");
    bolo("Product: ", product, "\\n");
}`} />

                    <h3>Factorial Calculator</h3>
                    <CodeBlock code={`number factorial(number n) {
    agar (n <= 1) {
        wapsi 1;
    }
    wapsi n * factorial(n - 1);
}

yaar {
    number num = 5;
    number result = factorial(num);
    bolo("Factorial of ", num, " is ", result, "\\n");
}`} />
                </>
            )
        }
    };

    const section = sections[activeSection] || sections["getting-started"];

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <DocSection {...section} />
            </motion.div>
        </AnimatePresence>
    );
};

export default DocsContent;
