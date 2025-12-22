import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Terminal = ({ output, setOutput, formatTerminal }) => {
    return (
        <div className="lg:w-[500px] w-full flex flex-col bg-slate-50 dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="h-10 px-4 flex items-center justify-between bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Output
                </span>
                <button
                    onClick={() => setOutput("")}
                    className="text-[10px] text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 uppercase font-bold transition-colors"
                >
                    Clear
                </button>
            </div>

            <div className="flex-1 p-6 overflow-auto bg-white dark:bg-slate-950">
                <AnimatePresence mode="wait">
                    {output ? (
                        <motion.pre
                            key="output"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="text-sm leading-7 text-slate-800 dark:text-slate-300 whitespace-pre-wrap"
                            style={{ fontFamily: 'var(--font-jetbrains), "JetBrains Mono", monospace' }}
                            dangerouslySetInnerHTML={{ __html: formatTerminal(output) }}
                        />
                    ) : (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-slate-400 dark:text-slate-600 text-sm italic"
                            style={{ fontFamily: 'var(--font-jetbrains), "JetBrains Mono", monospace' }}
                        >
                            Awaiting execution...
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Terminal;
