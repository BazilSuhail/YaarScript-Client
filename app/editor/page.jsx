"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    RiPlayFill,
    RiDeleteBin6Line,
    RiTerminalBoxLine,
    RiCodeSSlashLine,
    RiFileCopyLine,
    RiCheckLine,
    RiCpuLine
} from "react-icons/ri";

const Editor = () => {
    const [code, setCode] = useState(`/* 
   YaarScript Pro: Comprehensive Feature Demo
   This code covers loops, functions, variables, and logic.
*/

// pakka means constant, sab_ke_liye means global
pakka sab_ke_liye number TARGET = 100;

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

    // WASM Init
    useEffect(() => {
        const initWasm = async () => {
            try {
                const mod = await import("../../compiler/pkg/compiler.js");
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
        if (highlightRef.current) highlightRef.current.scrollTop = scrollTop;
        if (highlightRef.current) highlightRef.current.scrollLeft = scrollLeft;
        if (gutterRef.current) gutterRef.current.scrollTop = scrollTop;
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = e.target.selectionStart;
            const end = e.target.selectionEnd;
            const newValue = code.substring(0, start) + "    " + code.substring(end);
            setCode(newValue);
            setTimeout(() => {
                e.target.selectionStart = e.target.selectionEnd = start + 4;
            }, 0);
        }
    };

    const updateLineCol = (e) => {
        const textBefore = e.target.value.substr(0, e.target.selectionStart);
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
        }, 100);
    };

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const lineCount = code.split('\n').length;

    return (
        <div className="flex flex-col h-[calc(100vh-80px)] bg-slate-50 dark:bg-slate-950 overflow-hidden font-sans">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-6 py-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                        <RiCodeSSlashLine className="text-sky-500 w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">main.yr</span>
                    </div>
                    <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" />
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border transition-all ${wasmStatus === 'online'
                        ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                        : 'bg-amber-500/5 border-amber-500/20 text-amber-600 dark:text-amber-400'
                        }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${wasmStatus === 'online' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                        <span className="text-[10px] font-black uppercase tracking-tighter">Wasm: {wasmStatus}</span>
                    </div>
                </div>

                <div className="flex items-center space-x-3">
                    <button
                        onClick={copyCode}
                        className="p-2 text-slate-500 hover:text-sky-500 hover:bg-sky-500/5 rounded-lg transition-all"
                        title="Copy Code"
                    >
                        {copied ? <RiCheckLine className="w-5 h-5" /> : <RiFileCopyLine className="w-5 h-5" />}
                    </button>
                    <button
                        onClick={() => { setCode(""); setOutput(""); }}
                        className="p-2 text-slate-500 hover:text-rose-500 hover:bg-rose-500/5 rounded-lg transition-all"
                        title="Clear Editor"
                    >
                        <RiDeleteBin6Line className="w-5 h-5" />
                    </button>
                    <button
                        onClick={runCode}
                        disabled={isCompiling}
                        className={`flex items-center space-x-2 px-6 py-2 rounded-xl font-bold text-sm transition-all active:scale-95 ${isCompiling
                            ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                            : 'bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/20'
                            }`}
                    >
                        {isCompiling ? (
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <RiPlayFill className="w-4 h-4" />
                        )}
                        <span className="uppercase tracking-wide">{isCompiling ? 'Compiling...' : 'Run Code'}</span>
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-1 overflow-hidden lg:flex-row flex-col">
                {/* Editor Section */}
                <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800">
                    <div className="flex-1 relative font-mono text-[15px] leading-6">
                        {/* Gutter */}
                        <div
                            ref={gutterRef}
                            className="absolute left-0 top-0 bottom-0 w-12 bg-slate-50/50 dark:bg-slate-950/20 text-slate-400 dark:text-slate-600 text-right pr-3 pt-6 select-none overflow-hidden"
                        >
                            {Array.from({ length: lineCount }).map((_, i) => (
                                <div key={i}>{i + 1}</div>
                            ))}
                        </div>

                        {/* Rendering Layers */}
                        <div className="absolute left-12 right-0 top-0 bottom-0 overflow-hidden">
                            <pre
                                ref={highlightRef}
                                className="absolute inset-0 p-6 m-0 pointer-events-none whitespace-pre overflow-hidden text-slate-900 dark:text-slate-100"
                                dangerouslySetInnerHTML={{ __html: highlightCode(code) + "\n" }}
                            />
                            <textarea
                                ref={textareaRef}
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                onScroll={handleScroll}
                                onKeyDown={handleKeyDown}
                                onClick={updateLineCol}
                                onKeyUp={updateLineCol}
                                spellCheck="false"
                                className="absolute inset-0 p-6 bg-transparent text-transparent caret-sky-500 resize-none outline-none overflow-auto whitespace-pre font-mono transition-colors"
                            />
                        </div>
                    </div>

                    {/* Editor Footer */}
                    <div className="h-8 px-4 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                        <div className="flex items-center space-x-4">
                            <span>Line: {lineCol.line}</span>
                            <span>Col: {lineCol.col}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RiCpuLine className="w-3 h-3 text-sky-500" />
                            <span>Lexical Core v1.0.4</span>
                        </div>
                    </div>
                </div>

                {/* Terminal Section */}
                <div className="lg:w-[450px] w-full flex flex-col bg-slate-50 dark:bg-black overflow-hidden border-t lg:border-t-0 dark:border-slate-800">
                    <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                            <RiTerminalBoxLine className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Compiler Output</span>
                        </div>
                        <button
                            onClick={() => setOutput("")}
                            className="text-[9px] font-bold text-slate-400 hover:text-rose-500 uppercase transition-colors"
                        >
                            Clear
                        </button>
                    </div>

                    <div className="flex-1 p-6 font-mono text-sm overflow-auto text-slate-800 dark:text-slate-300 leading-relaxed selection:bg-sky-500/20 whitespace-pre">
                        {output ? (
                            <div
                                dangerouslySetInnerHTML={{ __html: formatTerminal(output) }}
                            />
                        ) : (
                            <div className="text-slate-400 dark:text-slate-600 italic opacity-40">
                                System standby. Press "Run Code" to compile...
                            </div>
                        )}
                    </div>

                    {/* Terminal Stats */}
                    <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 space-y-3">
                        <div className="flex items-center justify-between text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                            <span>Execution Performance</span>
                            <span className="text-sky-500">{execTime}</span>
                        </div>
                        <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: isCompiling ? "60%" : (output.length > 0 ? "100%" : "0%") }}
                                className={`h-full transition-all duration-500 ${isCompiling ? "bg-sky-400 animate-pulse" : "bg-sky-500"}`}
                            />
                        </div>
                        <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono italic">
                            <span>YAARSCRIPT_VM: ACTIVE</span>
                            <span>CORE_ARCH: WASM/x64</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .token-comment { color: #475569; font-style: italic; }
                .token-string { color: #fbbf24; }
                .token-keyword { color: #38bdf8; font-weight: 500; }
                .token-type { color: #818cf8; }
                .token-function { color: #4ade80; }
                .token-boolean { color: #fb7185; }
                .token-number { color: #f87171; }
                .token-operator { color: #94a3b8; }

                .term-error-header { color: #facc15; font-weight: bold; }
                .term-error-label { color: #f87171; font-weight: bold; }
                .term-arrow { color: #22d3ee; }
                .term-pointer { color: #ef4444; font-weight: bold; }
                .term-caret { color: #ef4444; font-weight: bold; }
                .term-gutter { color: #475569; }
            `}</style>
        </div>
    );
};

export default Editor;