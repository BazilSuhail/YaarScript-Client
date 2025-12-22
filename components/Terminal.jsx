import React from "react";
import { motion } from "framer-motion";
import { RiTerminalBoxLine } from "react-icons/ri";

const Terminal = ({ output, setOutput, isCompiling, execTime, formatTerminal }) => {
    return (
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

            <div className="flex-1 p-6 font-mono text-sm overflow-y-auto text-slate-800 dark:text-slate-300 leading-relaxed selection:bg-sky-500/20 whitespace-pre-wrap">
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
    );
};

export default Terminal;
