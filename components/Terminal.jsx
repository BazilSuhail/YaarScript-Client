import React from "react";
import { motion } from "framer-motion";
import { RiTerminalBoxLine } from "react-icons/ri";

const Terminal = ({ output, setOutput, isCompiling, execTime, formatTerminal }) => {
    return (
        <div className="lg:w-[550px] w-full flex flex-col bg-slate-100 dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="h-10 px-4 flex items-center justify-between bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Terminal Output
                </span>
                <button
                    onClick={() => setOutput("")}
                    className="text-[10px] text-slate-400 hover:text-slate-700 dark:hover:text-slate-400 uppercase font-bold"
                >
                    Clear
                </button>
            </div>

            <div className="flex-1 p-6 overflow-auto bg-white/40 dark:bg-slate-950/40">
                <pre className="mono text-sm leading-7 text-slate-800 dark:text-slate-300 whitespace-pre-wrap">
                    {output ? (
                        <span dangerouslySetInnerHTML={{ __html: formatTerminal(output) }} />
                    ) : (
                        <span className="text-slate-400 dark:text-slate-600 italic opacity-60">
                            System ready. Awaiting instructions...
                        </span>
                    )}
                </pre>
            </div>

            <div className="h-24 bg-slate-50 dark:bg-slate-900/30 p-4 border-t border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    <span>Execution Efficiency</span>
                    <span className="text-sky-600 dark:text-sky-500/80">{execTime}</span>
                </div>
                <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: isCompiling ? "60%" : (output.length > 0 ? "100%" : "0%") }}
                        className={`h-full transition-all duration-500 border-r ${
                            isCompiling ? "bg-sky-500/40 border-sky-400 animate-pulse" : "bg-sky-500/40 border-sky-400"
                        }`}
                    />
                </div>
                <div className="flex justify-between text-[9px] text-slate-400 dark:text-slate-600 mono">
                    <span>VIRTUAL_MACHINE: READY</span>
                    <span>CORE: OPTIMIZED_WASM</span>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
