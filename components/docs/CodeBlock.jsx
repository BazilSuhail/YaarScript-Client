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

    const highlightCode = (text) => {
        if (language === "text") {
            return text; // No highlighting for plain text
        }

        if (language === "bash" || language === "shell") {
            const bashTokens = [
                { type: 'comment', regex: /#.*/ },
                { type: 'string', regex: /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/ },
                { type: 'command', regex: /\b(?:git|npm|cd|wasm-pack|cargo|node|mkdir|touch|ls|cat|echo|export|source)\b/ },
                { type: 'flag', regex: /--[\w-]+|-[\w]/ },
                { type: 'keyword', regex: /\b(?:build|install|run|clone|add|commit|push|pull|dev|start)\b/ },
            ];

            const escapeHTML = (str) => str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            const bigRegex = new RegExp(bashTokens.map(t => `(${t.regex.source})`).join('|'), 'g');

            let html = "";
            let lastIndex = 0;

            text.replace(bigRegex, (match, ...args) => {
                const offset = args[args.length - 2];
                html += escapeHTML(text.slice(lastIndex, offset));
                const tokenIndex = args.slice(0, bashTokens.length).findIndex(val => val !== undefined);
                if (tokenIndex !== -1) {
                    html += `<span class="code-token-${bashTokens[tokenIndex].type}">${escapeHTML(match)}</span>`;
                } else {
                    html += escapeHTML(match);
                }
                lastIndex = offset + match.length;
                return match;
            });

            html += escapeHTML(text.slice(lastIndex));
            return html;
        }

        if (language === "ebnf") {
            const ebnfTokens = [
                { type: 'rule', regex: /\b[A-Z][a-zA-Z]*\b(?=\s*::=)/ },
                { type: 'operator', regex: /::=|\||\(|\)|\*|\+|\?|;/ },
                { type: 'string', regex: /"[^"]*"|'[^']*'/ },
                { type: 'keyword', regex: /\b(?:Type|Identifier|Expression|Block|Statement)\b/ },
            ];

            const escapeHTML = (str) => str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            const bigRegex = new RegExp(ebnfTokens.map(t => `(${t.regex.source})`).join('|'), 'g');

            let html = "";
            let lastIndex = 0;

            text.replace(bigRegex, (match, ...args) => {
                const offset = args[args.length - 2];
                html += escapeHTML(text.slice(lastIndex, offset));
                const tokenIndex = args.slice(0, ebnfTokens.length).findIndex(val => val !== undefined);
                if (tokenIndex !== -1) {
                    html += `<span class="code-token-${ebnfTokens[tokenIndex].type}">${escapeHTML(match)}</span>`;
                } else {
                    html += escapeHTML(match);
                }
                lastIndex = offset + match.length;
                return match;
            });

            html += escapeHTML(text.slice(lastIndex));
            return html;
        }

        // YaarScript highlighting
        const tokens = [
            { type: 'comment', regex: /\/\/.*|\/\*[\s\S]*?\*\// },
            { type: 'string', regex: /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/ },
            { type: 'keyword', regex: /\b(?:agar|warna|jabtak|wapsi|yaar|karo|mangwao|pakka|sab_ke_liye|bas_kar|dohrao|aakhir|agar_ho|intekhab)\b/ },
            { type: 'type', regex: /\b(?:number|float|double|char|khaali|faisla|lafz|qism)\b/ },
            { type: 'function', regex: /\b(?:bolo)\b/ },
            { type: 'boolean', regex: /\b(?:sahi|galat)\b/ },
            { type: 'number', regex: /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/ },
            { type: 'operator', regex: /[+\-*\/%=!<>|&^:?~.,;{}()\[\]]+/ }
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
                html += `<span class="code-token-${tokens[tokenIndex].type}">${escapeHTML(match)}</span>`;
            } else {
                html += escapeHTML(match);
            }
            lastIndex = offset + match.length;
            return match;
        });

        html += escapeHTML(text.slice(lastIndex));
        return html;
    };

    return (
        <>
            <div className="relative group my-6 -mx-4 sm:mx-0">
                <button
                    onClick={copyCode}
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 p-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg opacity-0 group-hover:opacity-100 transition-all z-10"
                    title="Copy code"
                >
                    {copied ? <RiCheckLine className="w-4 h-4" /> : <RiFileCopyLine className="w-4 h-4" />}
                </button>
                <pre className="text-slate-900 dark:text-slate-100 p-4 sm:p-6 rounded-xl overflow-x-auto border-2 bg-gray-100 dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-xs sm:text-sm">
                    <div 
                        style={{ fontFamily: 'var(--font-jetbrains), "JetBrains Mono", monospace' }}
                        dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
                    />
                </pre>
            </div>

            <style jsx global>{`
                /* Remove any background colors from tokens */
                .code-token-comment,
                .code-token-string,
                .code-token-keyword,
                .code-token-type,
                .code-token-function,
                .code-token-boolean,
                .code-token-number,
                .code-token-operator,
                .code-token-command,
                .code-token-flag,
                .code-token-rule {
                    background: transparent !important;
                }

                /* Dark mode code tokens */
                .dark .code-token-comment { color: #64748b; font-style: italic; }
                .dark .code-token-string { color: #fbbf24; }
                .dark .code-token-keyword { color: #38bdf8; font-weight: 600; }
                .dark .code-token-type { color: #a78bfa; }
                .dark .code-token-function { color: #4ade80; font-weight: 500; }
                .dark .code-token-boolean { color: #fb7185; font-weight: 500; }
                .dark .code-token-number { color: #f87171; }
                .dark .code-token-operator { color: #94a3b8; }
                .dark .code-token-command { color: #4ade80; font-weight: 600; }
                .dark .code-token-flag { color: #a78bfa; }
                .dark .code-token-rule { color: #fbbf24; font-weight: 600; }

                /* Light mode code tokens */
                .code-token-comment { color: #64748b; font-style: italic; }
                .code-token-string { color: #b45309; }
                .code-token-keyword { color: #0369a1; font-weight: 600; }
                .code-token-type { color: #7c3aed; }
                .code-token-function { color: #15803d; font-weight: 500; }
                .code-token-boolean { color: #be123c; font-weight: 500; }
                .code-token-number { color: #dc2626; }
                .code-token-operator { color: #475569; }
                .code-token-command { color: #15803d; font-weight: 600; }
                .code-token-flag { color: #7c3aed; }
                .code-token-rule { color: #b45309; font-weight: 600; }
            `}</style>
        </>
    );
};

export default CodeBlock;
