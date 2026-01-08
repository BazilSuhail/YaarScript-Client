import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Terminal = React.forwardRef(({ output, setOutput, formatTerminal, isAwaitingInput, provideInput }, ref) => {
    const inputRef = React.useRef(null);
    const [inputValue, setInputValue] = React.useState("");

    React.useEffect(() => {
        if (isAwaitingInput && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isAwaitingInput]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const val = inputRef.current.innerText.trim();
            setInputValue("");
            inputRef.current.innerText = "";
            provideInput(val);
        }
    };

    return (
        <div ref={ref} className="lg:w-125 w-full flex flex-col bg-slate-50 dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="h-8 md:h-10 px-3 md:px-4 flex items-center justify-between bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Output
                </span>
                <button
                    onClick={() => setOutput("")}
                    className="text-[9px] md:text-[10px] text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 uppercase font-bold transition-colors"
                >
                    Clear
                </button>
            </div>

            <div 
                className="flex-1 p-3 md:p-6 overflow-auto bg-white dark:bg-slate-950 cursor-text"
                onClick={() => isAwaitingInput && inputRef.current?.focus()}
            >
                <AnimatePresence mode="wait">
                    {output || isAwaitingInput ? (
                        <div className="text-xs md:text-sm leading-6 md:leading-7 text-slate-800 dark:text-slate-300 whitespace-pre-wrap" style={{ fontFamily: 'var(--font-jetbrains), "JetBrains Mono", monospace' }}>
                            <span dangerouslySetInnerHTML={{ __html: formatTerminal(output) }} />
                            {isAwaitingInput && (
                                <span className="inline-flex items-center">
                                    <span
                                        ref={inputRef}
                                        contentEditable="true"
                                        onKeyDown={handleKeyDown}
                                        className="text-sky-500 dark:text-sky-400 outline-none min-w-px whitespace-pre"
                                        style={{ caretColor: 'transparent' }}
                                    ></span>
                                    <span className="terminal-cursor"></span>
                                </span>
                            )}
                        </div>
                    ) : (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-slate-400 dark:text-slate-600 text-xs md:text-sm italic"
                            style={{ fontFamily: 'var(--font-jetbrains), "JetBrains Mono", monospace' }}
                        >
                            Awaiting execution...
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <style jsx>{`
                .terminal-cursor {
                    display: inline-block;
                    width: 8px;
                    height: 1.2em;
                    background: #10b981;
                    margin-left: 4px;
                    animation: blink 1s step-end infinite;
                    vertical-align: middle;
                }
                @keyframes blink { 50% { opacity: 0; } }
            `}</style>
        </div>
    );
});

Terminal.displayName = "Terminal";

export default Terminal;
