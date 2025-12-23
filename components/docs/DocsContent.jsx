"use client";

import React from "react";
import CodeBlock from "./CodeBlock";
import DocSection from "./DocSection";

const DocsContent = ({ activeSection }) => {
    const sections = {
        "getting-started": {
            title: "Getting Started with YaarScript",
            description: "Welcome to YaarScript - a modern programming language with Urdu-inspired syntax.",
            content: (
                <>
                    <p>YaarScript is designed to make programming accessible to Urdu speakers while maintaining the power and performance of modern languages.</p>
                    <h3>Key Features</h3>
                    <ul>
                        <li>Intuitive Urdu keywords (agar, warna, dohrao)</li>
                        <li>Strong type system</li>
                        <li>Fast compilation via WebAssembly</li>
                        <li>Modern control flow constructs</li>
                    </ul>
                </>
            )
        },
        "for-loop": {
            title: "For Loop (dohrao)",
            description: "The 'dohrao' keyword is used for iterating a specific number of times.",
            content: (
                <>
                    <p>The <code>dohrao</code> loop is equivalent to a standard for loop. It consists of initialization, condition, and increment expressions.</p>
                    <h3>Syntax</h3>
                    <CodeBlock code={`dohrao (initialization; condition; increment) {
    // Loop body
}`} />
                    <h3>Example</h3>
                    <CodeBlock code={`dohrao (number i = 0; i < 5; i++) {
    bolo("Iteration: ", i, "\\n");
}`} />
                    <h3>Output</h3>
                    <CodeBlock code={`Iteration: 0
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4`} language="text" />
                </>
            )
        },
        "while-loop": {
            title: "While Loop (jabtak)",
            description: "The 'jabtak' keyword creates a loop that runs while a condition is true.",
            content: (
                <>
                    <p>Use <code>jabtak</code> when you want to repeat code while a condition remains true.</p>
                    <h3>Syntax</h3>
                    <CodeBlock code={`jabtak (condition) {
    // Loop body
}`} />
                    <h3>Example</h3>
                    <CodeBlock code={`number count = 0;
jabtak (count < 3) {
    bolo("Count: ", count, "\\n");
    count = count + 1;
}`} />
                </>
            )
        },
        "if-else": {
            title: "If/Else Statements (agar/warna)",
            description: "Conditional execution using 'agar' (if) and 'warna' (else).",
            content: (
                <>
                    <p>Conditional statements control the flow of your program based on boolean conditions.</p>
                    <h3>Syntax</h3>
                    <CodeBlock code={`agar (condition) {
    // Execute if true
} warna {
    // Execute if false
}`} />
                    <h3>Example</h3>
                    <CodeBlock code={`number score = 85;

agar (score >= 90) {
    bolo("Grade: A\\n");
} warna agar (score >= 70) {
    bolo("Grade: B\\n");
} warna {
    bolo("Grade: C\\n");
}`} />
                </>
            )
        },
        // Add more sections as needed
    };

    const section = sections[activeSection] || sections["getting-started"];

    return (
        <DocSection {...section} />
    );
};

export default DocsContent;
