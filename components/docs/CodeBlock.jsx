"use client";

import React, { useState } from "react";
import { RiFileCopyLine, RiCheckLine } from "react-icons/ri";

const CodeBlock = ({ code, language = "yaarscript" }) => {
    const [copied, setCopied] = useState(false);

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group my-6">
            <button
                onClick={copyCode}
                className="absolute top-3 right-3 p-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                title="Copy code"
            >
                {copied ? <RiCheckLine className="w-4 h-4" /> : <RiFileCopyLine className="w-4 h-4" />}
            </button>
            <pre className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-6 rounded-xl overflow-x-auto border border-slate-800">
                <code style={{ fontFamily: 'var(--font-jetbrains), "JetBrains Mono", monospace' }}>
                    {code}
                </code>
            </pre>
        </div>
    );
};

export default CodeBlock;
