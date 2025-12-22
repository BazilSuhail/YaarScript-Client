import React from "react";
import { RiCpuLine } from "react-icons/ri";

const CodeEditor = ({
    code,
    setCode,
    lineCol,
    highlightCode,
    handleScroll,
    handleKeyDown,
    updateLineCol,
    lineCount,
    textareaRef,
    highlightRef,
    gutterRef
}) => {
    return (
        <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="flex-1 relative font-mono text-[15px] leading-6 overflow-hidden">
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
    );
};

export default CodeEditor;
