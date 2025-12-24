import React from "react";
import { RiCpuLine, RiTerminalBoxLine } from "react-icons/ri";

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
    gutterRef,
    execTime,
    isCompiling
}) => {
    return (
        <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="flex-1 relative overflow-hidden">
                {/* Line Numbers Gutter */}
                <div
                    ref={gutterRef}
                    className="absolute left-0 top-0 bottom-0 w-12 bg-slate-50 dark:bg-slate-950 text-slate-400 dark:text-slate-600 border-r border-slate-200 dark:border-slate-800 text-right pt-6 select-none overflow-hidden z-10"
                    style={{
                        fontSize: '14px',
                        lineHeight: '1.5rem',
                        fontFamily: 'var(--font-jetbrains), "JetBrains Mono", monospace',
                    }}
                >
                    {Array.from({ length: lineCount }).map((_, i) => (
                        <div key={i} className="pr-3">{i + 1}</div>
                    ))}
                </div>

                {/* Syntax Highlighted Code (background layer) */}
                <pre
                    ref={highlightRef}
                    className="absolute top-0 bottom-0 left-12 right-0 m-0 p-6 text-slate-900 dark:text-slate-100 pointer-events-none whitespace-pre overflow-hidden z-10"
                    aria-hidden="true"
                    style={{
                        fontSize: '15px',
                        lineHeight: '1.5rem',
                        tabSize: 4,
                        fontFamily: 'var(--font-jetbrains), "JetBrains Mono", monospace',
                    }}
                    dangerouslySetInnerHTML={{ __html: highlightCode(code) + "\n" }}
                />

                {/* Transparent Textarea (input layer) */}
                <textarea
                    ref={textareaRef}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onScroll={handleScroll}
                    onKeyDown={handleKeyDown}
                    onClick={updateLineCol}
                    onKeyUp={updateLineCol}
                    spellCheck="false"
                    wrap="off"
                    className="absolute top-0 bottom-0 left-12 right-0 m-0 p-6 bg-transparent text-transparent resize-none outline-none overflow-auto whitespace-pre z-20"
                    style={{
                        fontSize: '15px',
                        lineHeight: '1.5rem',
                        tabSize: 4,
                        caretColor: 'rgb(56, 189, 248)',
                        border: 0,
                        fontFamily: 'var(--font-jetbrains), "JetBrains Mono", monospace',
                    }}
                />
            </div>

            {/* Editor Footer */}
            <div className="h-10 px-4 flex items-center justify-between bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                <div className="flex items-center space-x-4">
                    <span>Ln {lineCol.line}, Col {lineCol.col}</span>
                    <div className="w-px h-3 bg-slate-300 dark:bg-slate-700"></div>
                    <div className="flex items-center space-x-2">
                        <RiTerminalBoxLine className="w-3 h-3" />
                        <span className={`${isCompiling ? 'text-sky-500 animate-pulse' : 'text-slate-500'}`}>
                            {isCompiling ? 'Compiling...' : execTime}
                        </span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                    <RiCpuLine className="w-3 h-3" />
                    <span>YaarScript v1.0</span>
                </div>
            </div>
        </div>
    );
};

export default CodeEditor;
