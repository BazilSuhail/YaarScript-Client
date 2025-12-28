"use client";

import React from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    display: 'swap',
});

const DocSection = ({ title, description, content }) => {
    return (
        <motion.main
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 w-full min-w-0 p-4 sm:p-6 md:p-8 lg:p-12 max-w-5xl"
        >
            <article className="prose prose-slate prose-invert max-w-none">
                <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-50 mb-4 wrap-break-words ${poppins.className}`}>
                    {title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-slate-400 mb-8 pb-6 border-b border-slate-800">
                    {description}
                </p>
                <div className="doc-content space-y-8">
                    {content}
                </div>
            </article>

            <style jsx global>{`
                /* Hide scrollbars globally */
                ::-webkit-scrollbar {
                    display: none;
                }
                
                * {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }

                /* Base prose styling */
                .doc-content h3 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: rgb(241 245 249);
                    margin-top: 2.5rem;
                    margin-bottom: 1.25rem;
                    padding-left: 1rem;
                    border-left: 4px solid rgb(56 189 248);
                }

                @media (min-width: 640px) {
                    .doc-content h3 {
                        font-size: 1.5rem;
                    }
                }

                @media (min-width: 1024px) {
                    .doc-content h3 {
                        font-size: 1.75rem;
                    }
                }

                .doc-content p {
                    color: rgb(148 163 184);
                    line-height: 1.875;
                    margin: 1.25rem 0;
                    font-size: 1rem;
                }

                @media (min-width: 640px) {
                    .doc-content p {
                        font-size: 1.0625rem;
                    }
                }

                /* Inline code */
                .doc-content code {
                    background: rgb(30 41 59);
                    color: rgb(56 189 248);
                    padding: 0.25rem 0.5rem;
                    border-radius: 0.375rem;
                    font-size: 0.875em;
                    font-weight: 600;
                    word-break: break-word;
                    border: 1px solid rgb(51 65 85);
                }

                @media (min-width: 640px) {
                    .doc-content code {
                        font-size: 0.9em;
                    }
                }

                /* Links */
                .doc-content a {
                    color: rgb(56 189 248);
                    text-decoration: none;
                    font-weight: 500;
                    word-break: break-word;
                    transition: all 0.2s;
                }

                .doc-content a:hover {
                    color: rgb(125 211 252);
                    text-decoration: underline;
                }

                /* Strong text */
                .doc-content strong {
                    color: rgb(241 245 249);
                    font-weight: 700;
                }

                /* Lists */
                .doc-content ul {
                    list-style-type: none;
                    padding-left: 0;
                    margin: 1.5rem 0;
                    color: rgb(148 163 184);
                }

                .doc-content ul li {
                    position: relative;
                    padding-left: 2rem;
                }

                .doc-content ul li::before {
                    content: "▹";
                    position: absolute;
                    left: 0.5rem;
                    color: rgb(56 189 248);
                    font-weight: bold;
                }

                .doc-content ol {
                    list-style-type: decimal;
                    padding-left: 1.75rem;
                    margin: 1.5rem 0;
                    color: rgb(148 163 184);
                }

                .doc-content ol li {
                    padding-left: 0.5rem;
                }

                .doc-content ol li::marker {
                    color: rgb(56 189 248);
                    font-weight: bold;
                }

                .doc-content li {
                    margin: 0.75rem 0;
                    line-height: 1.875;
                    color: rgb(148 163 184);
                }

                /* Tables */
                .doc-content table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 2rem 0;
                    font-size: 0.8rem;
                    display: block;
                    overflow-x: auto;
                    border-radius: 0.75rem;
                    border: 1px solid rgb(51 65 85);
                }

                @media (min-width: 640px) {
                    .doc-content table {
                        font-size: 0.875rem;
                        display: table;
                    }
                }

                @media (min-width: 768px) {
                    .doc-content table {
                        font-size: 0.9rem;
                    }
                }

                .doc-content thead {
                    background: rgb(15 23 42);
                    border-bottom: 2px solid rgb(56 189 248);
                }

                .doc-content th {
                    padding: 0.75rem 1rem;
                    text-align: left;
                    font-weight: 700;
                    color: rgb(241 245 249);
                    white-space: nowrap;
                }

                @media (min-width: 640px) {
                    .doc-content th {
                        padding: 1rem 1.25rem;
                    }
                }

                .doc-content td {
                    padding: 0.75rem 1rem;
                    border-bottom: 1px solid rgb(51 65 85);
                    color: rgb(148 163 184);
                }

                @media (min-width: 640px) {
                    .doc-content td {
                        padding: 1rem 1.25rem;
                    }
                }

                .doc-content tbody tr:hover {
                    background: rgb(30 41 59);
                }

                .doc-content td code {
                    background: rgb(51 65 85);
                    color: rgb(56 189 248);
                    padding: 0.25rem 0.5rem;
                    border-radius: 0.25rem;
                    font-size: 0.8em;
                    font-weight: 600;
                }

                @media (min-width: 640px) {
                    .doc-content td code {
                        font-size: 0.875em;
                    }
                }

                /* Custom h4 for info boxes */
                .doc-content h4 {
                    font-size: 1.125rem;
                    font-weight: 700;
                    margin-top: 1rem;
                    margin-bottom: 0.75rem;
                }
            `}</style>
        </motion.main>
    );
};

export default DocSection;
