"use client";

import React from "react";
import { motion } from "framer-motion";

const DocSection = ({ title, description, content }) => {
    return (
        <motion.main
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 p-8 lg:p-12 max-w-4xl"
        >
            <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed prose-li:text-slate-600 dark:prose-li:text-slate-400 prose-code:text-sky-600 dark:prose-code:text-sky-400 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-semibold prose-code:before:content-none prose-code:after:content-none prose-a:text-sky-600 dark:prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 dark:prose-strong:text-slate-100">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                    {title}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
                    {description}
                </p>
                <div className="space-y-6">
                    {content}
                </div>
            </div>

            <style jsx global>{`
                /* Table styling for docs */
                .prose table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 1.5rem 0;
                    font-size: 0.9rem;
                }

                .prose thead {
                    background: rgb(241 245 249);
                    border-bottom: 2px solid rgb(226 232 240);
                }

                .dark .prose thead {
                    background: rgb(15 23 42);
                    border-bottom: 2px solid rgb(51 65 85);
                }

                .prose th {
                    padding: 0.75rem 1rem;
                    text-align: left;
                    font-weight: 600;
                    color: rgb(15 23 42);
                }

                .dark .prose th {
                    color: rgb(241 245 249);
                }

                .prose td {
                    padding: 0.75rem 1rem;
                    border-bottom: 1px solid rgb(226 232 240);
                    color: rgb(71 85 105);
                }

                .dark .prose td {
                    border-bottom: 1px solid rgb(51 65 85);
                    color: rgb(148 163 184);
                }

                .prose tbody tr:hover {
                    background: rgb(248 250 252);
                }

                .dark .prose tbody tr:hover {
                    background: rgb(30 41 59);
                }

                .prose td code {
                    background: rgb(226 232 240);
                    color: rgb(14 116 144);
                    padding: 0.125rem 0.375rem;
                    border-radius: 0.25rem;
                    font-size: 0.875em;
                }

                .dark .prose td code {
                    background: rgb(51 65 85);
                    color: rgb(56 189 248);
                }

                /* List styling */
                .prose ul {
                    list-style-type: disc;
                    padding-left: 1.5rem;
                    margin: 1rem 0;
                }

                .prose ol {
                    list-style-type: decimal;
                    padding-left: 1.5rem;
                    margin: 1rem 0;
                }

                .prose li {
                    margin: 0.5rem 0;
                    line-height: 1.75;
                }
            `}</style>
        </motion.main>
    );
};

export default DocSection;
