"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { RiHome4Line, RiBookReadLine, RiSunLine, RiMoonLine } from "react-icons/ri";
import Link from "next/link";

import {
    RiPlayFill,
    RiDeleteBin6Line,
    RiFileCopyLine,
    RiCheckLine
} from "react-icons/ri";
import CodeEditor from "../../components/editor/CodeEditor";
import Terminal from "../../components/editor/Terminal";

const Editor = () => {
    const [isDark, setIsDark] = useState(false);
    const [code, setCode] = useState(`/* 
   YaarScript: Comprehensive Feature Demo
   This code covers loops, functions, variables, and logic.
*/

// pakka means constant, sab_ke_liye means global
pakka number TARGET = 100;

// qism creates an Enum
qism Mausam { Garmi, Sardi, Barish };

// Functions are defined with ReturnType Name(Params)
number calculate_bonus(number level) {
    agar (level > 5) {
        wapsi level * 10;
    } warna {
        wapsi level * 2;
    }
}

// yaar is the entry point (main function)
yaar {
    bolo("--- YaarScript Pro Mission Control ---\n");

    // Variables: number (int), float, lafz (string), faisla (bool)
    number counter = 0;
    float gravity = 9.81;
    lafz mission = "Mars Rover";
    faisla is_active = sahi; // sahi = true, galat = false

    // 1. dohrao loop (For Loop)
    bolo("Starting Iteration:\\n");
    dohrao (number i = 1; i <= 5; i++) {
        counter = counter + (i * 2);
        bolo("Step ", i, ": Counter is ", counter, "\\n");

        // Conditional break
        agar (counter > 20) {
            bolo("Threshold crossed, stopping.\\n");
            bas_kar; // bas_kar = break
        }
    }

    // 2. jabtak loop (While Loop)
    bolo("\\nWaiting for systems...\\n");
    number wait_time = 3;
    jabtak (wait_time > 0) {
        bolo("T-minus: ", wait_time, "\\n");
        wait_time = wait_time - 1;
    }

    // 3. karo-jabtak loop (Do-While Loop)
    number attempts = 0;
    karo {
        attempts = attempts + 1;
        bolo("Attempt #", attempts, " successful\\n");
    } jabtak (attempts < 2);

    // 4. intekhab (Switch Case)
    number status_code = 1;
    bolo("\\nSystem Status check: ");
    intekhab (status_code) {
        agar_ho 0:
            bolo("CRITICAL ERROR\\n");
            bas_kar;
        agar_ho 1:
            bolo("SYSTEMS NOMINAL\\n");
            bas_kar;
        aakhir:
            bolo("UNKNOWN STATE\\n");
    }

    // Function call and constant usage
    number bonus = calculate_bonus(7);
    bolo("\\nFinal Mission Report:");
    bolo("\\n- Mission Name: ", mission);
    bolo("\\n- Bonus Points: ", bonus);
    bolo("\\n- Global Target: ", TARGET);
    bolo("\\n\\nKaam khatam ho gaya! (Execution Finished)\\n");
}`);
    const [output, setOutput] = useState("");
    const [execTime, setExecTime] = useState("0ms");
    const [isCompiling, setIsCompiling] = useState(false);
    const [wasmStatus, setWasmStatus] = useState("connecting");
    const [lineCol, setLineCol] = useState({ line: 1, col: 1 });
    const [copied, setCopied] = useState(false);

    const textareaRef = useRef(null);
    const highlightRef = useRef(null);
    const gutterRef = useRef(null);
    const compilerRef = useRef(null);
    const terminalRef = useRef(null);

    // WASM Init
    useEffect(() => {
        const initWasm = async () => {
            try {
                const mod = await import("@/pkg/compiler.js");
                await mod.default();
                compilerRef.current = mod.compile_and_run;
                setWasmStatus("online");
            } catch (e) {
                console.error("WASM Init error:", e);
                setWasmStatus("offline");
            }
        };
        initWasm();
    }, []);

    const toggleTheme = () => {
        const isDarkMode = document.documentElement.classList.contains("dark");
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };


    const highlightCode = (text) => {
        const tokens = [
            { type: 'comment', regex: /\/\/.*|\/\*[\s\S]*?\*\// },
            { type: 'string', regex: /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/ },
            { type: 'keyword', regex: /\b(?:agar|warna|jabtak|wapsi|yaar|karo|mangwao|pakka|sab_ke_liye|bas_kar|dohrao|aakhir|agar_ho|intekhab)\b/ },
            { type: 'type', regex: /\b(?:number|float|double|char|khaali|faisla|lafz|qism)\b/ },
            { type: 'function', regex: /\b(?:bolo)\b/ },
            { type: 'boolean', regex: /\b(?:sahi|galat)\b/ },
            { type: 'number', regex: /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/ },
            { type: 'operator', regex: /[+\-*\/%=!<>|&^:?~.,]+/ }
        ];

        const escapeHTML = (str) => str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const bigRegex = new RegExp(tokens.map(t => `(${t.regex.source})`).join('|'), 'g');

        let html = "";
        let lastIndex = 0;

        text.replace(bigRegex, (match, ...args) => {
            const offset = args[args.length - 2];
            html += escapeHTML(text.slice(lastIndex, offset));
            const tokenIndex = args.slice(0, tokens.length).findIndex(val => val !== undefined);
            if (tokenIndex !== -1) {
                html += `<span class="token-${tokens[tokenIndex].type}">${escapeHTML(match)}</span>`;
            } else {
                html += escapeHTML(match);
            }
            lastIndex = offset + match.length;
            return match;
        });

        html += escapeHTML(text.slice(lastIndex));
        return html;
    };

    const formatTerminal = (text) => {
        if (!text) return "";
        const escapeHTML = (str) => str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        let escaped = escapeHTML(text);

        return escaped
            .replace(/(\b\w+ Error:)/g, '<span class="term-error-header">$1</span>')
            .replace(/(error:)/g, '<span class="term-error-label">$1</span>')
            .replace(/(--&gt; \d+:\d+)/g, '<span class="term-arrow">$1</span>')
            .replace(/(^|[\r\n])(\s*&gt;\s*)/g, '$1<span class="term-pointer">$2</span>')
            .replace(/(\s+\^)/g, '<span class="term-caret">$1</span>')
            .replace(/(\d+\s+\|\s+)/g, '<span class="term-gutter">$1</span>');
    };


    const handleScroll = (e) => {
        const { scrollTop, scrollLeft } = e.target;
        if (highlightRef.current) {
            highlightRef.current.scrollTop = scrollTop;
            highlightRef.current.scrollLeft = scrollLeft;
        }
        if (gutterRef.current) {
            gutterRef.current.scrollTop = scrollTop;
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = e.target.selectionStart;
            const end = e.target.selectionEnd;
            const newValue = code.substring(0, start) + "    " + code.substring(end);
            setCode(newValue);
            setTimeout(() => {
                if (textareaRef.current) {
                    textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4;
                }
            }, 0);
        }
    };

    const updateLineCol = (e) => {
        if (!e?.target) return;
        const textBefore = e.target.value.substring(0, e.target.selectionStart);
        const lines = textBefore.split('\n');
        setLineCol({ line: lines.length, col: lines[lines.length - 1].length + 1 });
    };

    const runCode = async () => {
        if (!compilerRef.current) {
            setOutput(">> Error: Compiler not initialized. Please wait or refresh.");
            return;
        }

        setIsCompiling(true);
        const start = performance.now();
        setOutput("");

        // Artificial slight delay to show "Compiling" state if it's too fast
        setTimeout(() => {
            try {
                const result = compilerRef.current(code);
                setOutput(result || ">> Process finished with return code 0.");
                setExecTime(`${Math.floor(performance.now() - start)}ms`);
            } catch (err) {
                setOutput(`BUILD FAILED:\n${err.message || err}`);
            }
            setIsCompiling(false);
            
            // Auto-scroll to terminal on mobile screens (< 1024px width)
            if (window.innerWidth < 1024 && terminalRef.current) {
                setTimeout(() => {
                    terminalRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 150);
            }
        }, 100);
    };

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const lineCount = code.split('\n').length;

    return (
        <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden" style={{ fontFamily: 'var(--font-outfit), "Outfit", sans-serif' }}>
            {/* Toolbar - Mobile Optimized */}
          <div className="h-12 md:h-14 flex items-center justify-between px-3 md:px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors gap-2 md:gap-4">
    {/* Left Side: Navigation & File Info */}
    <div className="flex items-center space-x-1 md:space-x-4 min-w-0">
        <div className="flex items-center space-x-0.5 md:space-x-1">
            <Link 
                href="/" 
                className="flex items-center space-x-1 md:space-x-2 px-2 md:px-3 py-1.5 md:py-2 text-slate-500 hover:text-sky-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-all text-xs md:text-sm"
                title="Go Home"
            >
                <RiHome4Line className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden md:inline font-medium">Home</span>
            </Link>
            <Link 
                href="/docs" 
                className="flex items-center space-x-1 md:space-x-2 px-2 md:px-3 py-1.5 md:py-2 text-slate-500 hover:text-sky-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-all text-xs md:text-sm"
                title="Documentation"
            >
                <RiBookReadLine className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden md:inline font-medium">Docs</span>
            </Link>
        </div>

        <div className="hidden md:block h-6 w-px bg-slate-200 dark:bg-slate-700"></div>

        <div className="hidden md:flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-sky-500"></div>
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">main.yr</span>
        </div>
        
        <div className={`hidden md:flex items-center space-x-2 px-2.5 py-1 rounded-md transition-all ${wasmStatus === 'online'
            ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400'
            : 'bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400'
            }`}>
            <div className={`w-1 h-1 rounded-full ${wasmStatus === 'online' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{wasmStatus}</span>
        </div>
    </div>

    {/* Right Side: Theme, Copy, Clear, Run */}
    <div className="flex items-center space-x-0.5 md:space-x-2 flex-shrink-0">
        {/* Theme Toggle */}
        <button
            onClick={toggleTheme}
            className="p-1.5 md:p-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-all"
            aria-label="Toggle Theme"
        >
            {isDark ? <RiSunLine className="w-4 h-4 md:w-4 md:h-4" /> : <RiMoonLine className="w-4 h-4 md:w-4 md:h-4" />}
        </button>

        <div className="hidden md:block w-px h-6 bg-slate-200 dark:bg-slate-700"></div>

        <button
            onClick={copyCode}
            className="p-1.5 md:p-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-all"
            title="Copy Code"
        >
            {copied ? <RiCheckLine className="w-4 h-4" /> : <RiFileCopyLine className="w-4 h-4" />}
        </button>
        
        <button
            onClick={() => { setCode(""); setOutput(""); }}
            className="p-1.5 md:p-2 text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-md transition-all"
            title="Clear"
        >
            <RiDeleteBin6Line className="w-4 h-4" />
        </button>

        <div className="hidden md:block w-px h-6 bg-slate-200 dark:bg-slate-700"></div>

        <button
            onClick={runCode}
            disabled={isCompiling}
            className={`flex items-center space-x-1 md:space-x-2 px-2.5 md:px-5 py-1.5 md:py-2 rounded-md font-semibold text-xs md:text-sm transition-all ${isCompiling
                ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                : 'bg-sky-500 hover:bg-sky-600 text-white shadow-sm'
                }`}
        >
            {isCompiling ? (
                <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-slate-300 dark:border-slate-600 border-t-slate-500 dark:border-t-slate-400 rounded-full animate-spin" />
            ) : (
                <RiPlayFill className="w-4 h-4 md:w-4 md:h-4" />
            )}
            <span className="hidden md:inline">{isCompiling ? 'Running' : 'Run'}</span>
            <span className="md:hidden">{isCompiling ? '...' : 'Run'}</span>
        </button>
    </div>
</div>

            {/* Main Content Area */}
            <div className="flex-1 flex overflow-hidden lg:flex-row flex-col">
                <CodeEditor
                    code={code}
                    setCode={setCode}
                    lineCol={lineCol}
                    highlightCode={highlightCode}
                    handleScroll={handleScroll}
                    handleKeyDown={handleKeyDown}
                    updateLineCol={updateLineCol}
                    lineCount={lineCount}
                    textareaRef={textareaRef}
                    highlightRef={highlightRef}
                    gutterRef={gutterRef}
                    execTime={execTime}
                    isCompiling={isCompiling}
                />

                <Terminal
                    ref={terminalRef}
                    output={output}
                    setOutput={setOutput}
                    formatTerminal={formatTerminal}
                />
            </div>

            <style jsx global>{`
                /* Dark mode tokens (default) */
                .token-comment { color: #475569; font-style: italic; }
                .token-string { color: #fbbf24; }
                .token-keyword { color: #38bdf8; font-weight: 500; }
                .token-type { color: #818cf8; }
                .token-function { color: #4ade80; }
                .token-boolean { color: #fb7185; }
                .token-number { color: #f87171; }
                .token-operator { color: #94a3b8; }

                /* Light mode token overrides */
                html:not(.dark) .token-keyword { color: #0284c7; font-weight: 500; }
                html:not(.dark) .token-type { color: #4f46e5; }
                html:not(.dark) .token-string { color: #b45309; }
                html:not(.dark) .token-number { color: #dc2626; }
                html:not(.dark) .token-comment { color: #94a3b8; font-style: italic; }
                html:not(.dark) .token-function { color: #16a34a; }
                html:not(.dark) .token-operator { color: #64748b; }
                html:not(.dark) .token-boolean { color: #be123c; }

                /* Terminal colors */
                .term-error-header { color: #facc15; font-weight: bold; }
                .term-error-label { color: #f87171; font-weight: bold; }
                .term-arrow { color: #22d3ee; }
                .term-pointer { color: #ef4444; font-weight: bold; }
                .term-caret { color: #ef4444; font-weight: bold; }
                .term-gutter { color: #475569; }

                html:not(.dark) .term-arrow { color: #0891b2; }
                html:not(.dark) .term-error-header { color: #a16207; }

                /* Caret color for light mode */
                html:not(.dark) textarea {
                    caret-color: #0f172a !important;
                }

                /* Scrollbar styling */
                ::-webkit-scrollbar {
                    width: 10px;
                    height: 10px;
                }

                ::-webkit-scrollbar-track {
                    background: transparent;
                }

                .dark ::-webkit-scrollbar-thumb {
                    background: #1e293b;
                    border-radius: 5px;
                    border: 2px solid #0f172a;
                }

                html:not(.dark) ::-webkit-scrollbar-thumb {
                    background: #e2e8f0;
                    border-radius: 5px;
                    border: 2px solid #ffffff;
                }

                ::-webkit-scrollbar-thumb:hover {
                    background: #334155;
                }
            `}</style>
        </div>
    );
};

export default Editor;