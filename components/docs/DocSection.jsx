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
            <div className="prose prose-slate dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                    {title}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                    {description}
                </p>
                <div className="space-y-6">
                    {content}
                </div>
            </div>
        </motion.main>
    );
};

export default DocSection;
