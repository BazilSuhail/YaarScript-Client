"use client";

import React from "react";
import CodeBlock from "./CodeBlock";
import DocSection from "./DocSection";

const DocsContent = ({ activeSection }) => {
    const sections = {
        "getting-started": {
            title: "Getting Started with YaarScript",
            description: "Welcome to YaarScript - an industrial-grade compiler with Urdu-inspired syntax.",
            content: (
                <>
                    <p>YaarScript Pro is a professional, industrial-grade multi-pass compiler that brings the warmth of the Urdu language to modern programming. It compiles to optimized Three-Address Code (TAC) and runs natively in the browser via WebAssembly.</p>

                    <h3>Key Features</h3>
                    <ul>
                        <li>🚀 <strong>WebAssembly Powered</strong> - Entire compiler compiled to wasm32-unknown-unknown</li>
                        <li>🎭 <strong>Urdu Keywords</strong> - Natural, intuitive Urdu-inspired syntax</li>
                        <li>⚡ <strong>Multi-Pass Optimizer</strong> - Fixed-point optimization with constant folding and DCE</li>
                        <li>🔒 <strong>Strong Type System</strong> - Strict typing with no implicit coercion</li>
                        <li>🎨 <strong>Modern IDE</strong> - Professional editor with syntax highlighting</li>
                    </ul>

                    <h3>Compiler Architecture</h3>
                    <ol>
                        <li><strong>Lexical Analysis</strong> - Scans source code into tokens with Unicode support</li>
                        <li><strong>Syntax Analysis</strong> - Top-Down Operator Precedence (Pratt) Parser</li>
                        <li><strong>Semantic Analysis</strong> - Scope management and type checking</li>
                        <li><strong>IR Generation</strong> - Generates Three-Address Code (TAC)</li>
                        <li><strong>Optimization</strong> - Fixed-point passes for optimization</li>
                        <li><strong>Execution</strong> - High-performance WASM VM</li>
                    </ol>
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
git clone -b wasm-compiler https://github.com/YourUsername/YaarScript-Compiler.git
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
                    <CodeBlock code={`agar (condition) {
    // Execute if true
}`} />

                    <h3>If-Else</h3>
                    <CodeBlock code={`agar (score >= 50) {
    bolo("Pass\\n");
} warna {
    bolo("Fail\\n");
}`} />

                    <h3>If-Else If-Else</h3>
                    <CodeBlock code={`number grade = 85;

agar (grade >= 90) {
    bolo("Grade: A\\n");
} warna agar (grade >= 80) {
    bolo("Grade: B\\n");
} warna agar (grade >= 70) {
    bolo("Grade: C\\n");
} warna {
    bolo("Grade: F\\n");
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
                    <CodeBlock code={`dohrao (initialization; condition; increment) {
    // Loop body
}`} />

                    <h3>Basic Example</h3>
                    <CodeBlock code={`dohrao (number i = 0; i < 5; i++) {
    bolo("Iteration: ", i, "\\n");
}`} />

                    <h3>With Break (bas_kar)</h3>
                    <CodeBlock code={`dohrao (number i = 1; i <= 10; i++) {
    agar (i > 5) {
        bas_kar;  // Exit loop
    }
    bolo("Number: ", i, "\\n");
}`} />

                    <h3>Nested Loops</h3>
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
                    <CodeBlock code={`jabtak (condition) {
    // Loop body
}`} />

                    <h3>Basic Example</h3>
                    <CodeBlock code={`number count = 0;
jabtak (count < 5) {
    bolo("Count: ", count, "\\n");
    count = count + 1;
}`} />

                    <h3>Input Validation Pattern</h3>
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
                    <CodeBlock code={`karo {
    // Loop body (executes at least once)
} jabtak (condition);`} />

                    <h3>Example</h3>
                    <CodeBlock code={`number attempts = 0;
karo {
    attempts = attempts + 1;
    bolo("Attempt #", attempts, "\\n");
} jabtak (attempts < 3);`} />

                    <h3>Menu Loop Pattern</h3>
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
                    <h3>Declarations & Types</h3>
                    <CodeBlock code={`VarDecl ::= ("pakka" | "sab_ke_liye")? Type Identifier ("=" Expression)? ";"
Type    ::= "number" | "float" | "double" | "char" 
          | "faisla" | "lafz" | "khaali" | Identifier
EnumDecl ::= "qism" Identifier "{" Identifier ("," Identifier)* "}" ";"
MainDecl ::= "yaar" Block`} language="ebnf" />

                    <h3>Control Flow</h3>
                    <CodeBlock code={`IfStmt      ::= "agar" "(" Expression ")" Block ("warna" Block)?
WhileStmt   ::= "jabtak" "(" Expression ")" Block
DoWhileStmt ::= "karo" Block "jabtak" "(" Expression ")" ";"
ForStmt     ::= "dohrao" "(" (VarDecl | ";") Expression? ";" Expression? ")" Block
PrintStmt   ::= "bolo" "(" ExpressionList? ")" ";"
SwitchStmt  ::= "intekhab" "(" Expression ")" "{" CaseBlock* DefaultBlock? "}"`} language="ebnf" />

                    <h3>Expressions</h3>
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
        <DocSection {...section} />
    );
};

export default DocsContent;
