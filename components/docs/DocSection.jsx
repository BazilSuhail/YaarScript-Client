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
            <article className="prose prose-slate dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                    {title}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
                    {description}
                </p>
                <div className="doc-content space-y-6">
                    {content}
                </div>
            </article>

            <style jsx global>{`
                /* Base prose styling */
                .doc-content h3 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: rgb(15 23 42);
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                }

                .dark .doc-content h3 {
                    color: rgb(241 245 249);
                }

                .doc-content p {
                    color: rgb(71 85 105);
                    line-height: 1.75;
                    margin: 1rem 0;
                }

                .dark .doc-content p {
                    color: rgb(148 163 184);
                }

                /* Inline code */
                .doc-content code {
                    background: rgb(226 232 240);
                    color: rgb(14 116 144);
                    padding: 0.125rem 0.375rem;
                    border-radius: 0.25rem;
                    font-size: 0.9em;
                    font-weight: 600;
                }

                .dark .doc-content code {
                    background: rgb(30 41 59);
                    color: rgb(56 189 248);
                }

                /* Links */
                .doc-content a {
                    color: rgb(14 116 144);
                    text-decoration: none;
                    font-weight: 500;
                }

                .doc-content a:hover {
                    text-decoration: underline;
                }

                .dark .doc-content a {
                    color: rgb(56 189 248);
                }

                /* Strong text */
                .doc-content strong {
                    color: rgb(15 23 42);
                    font-weight: 600;
                }

                .dark .doc-content strong {
                    color: rgb(241 245 249);
                }

                /* Lists */
                .doc-content ul {
                    list-style-type: disc;
                    padding-left: 1.5rem;
                    margin: 1rem 0;
                    color: rgb(71 85 105);
                }

                .dark .doc-content ul {
                    color: rgb(148 163 184);
                }

                .doc-content ol {
                    list-style-type: decimal;
                    padding-left: 1.5rem;
                    margin: 1rem 0;
                    color: rgb(71 85 105);
                }

                .dark .doc-content ol {
                    color: rgb(148 163 184);
                }

                .doc-content li {
                    margin: 0.5rem 0;
                    line-height: 1.75;
                    color: rgb(71 85 105);
                }

                .dark .doc-content li {
                    color: rgb(148 163 184);
                }

                /* Tables */
                .doc-content table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 1.5rem 0;
                    font-size: 0.9rem;
                }

                .doc-content thead {
                    background: rgb(241 245 249);
                    border-bottom: 2px solid rgb(226 232 240);
                }

                .dark .doc-content thead {
                    background: rgb(15 23 42);
                    border-bottom: 2px solid rgb(51 65 85);
                }

                .doc-content th {
                    padding: 0.75rem 1rem;
                    text-align: left;
                    font-weight: 600;
                    color: rgb(15 23 42);
                }

                .dark .doc-content th {
                    color: rgb(241 245 249);
                }

                .doc-content td {
                    padding: 0.75rem 1rem;
                    border-bottom: 1px solid rgb(226 232 240);
                    color: rgb(71 85 105);
                }

                .dark .doc-content td {
                    border-bottom: 1px solid rgb(51 65 85);
                    color: rgb(148 163 184);
                }

                .doc-content tbody tr:hover {
                    background: rgb(248 250 252);
                }

                .dark .doc-content tbody tr:hover {
                    background: rgb(30 41 59);
                }

                .doc-content td code {
                    background: rgb(226 232 240);
                    color: rgb(14 116 144);
                    padding: 0.125rem 0.375rem;
                    border-radius: 0.25rem;
                    font-size: 0.875em;
                    font-weight: 600;
                }

                .dark .doc-content td code {
                    background: rgb(51 65 85);
                    color: rgb(56 189 248);
                }
            `}</style>
        </motion.main>
    );
};

export default DocSection;
