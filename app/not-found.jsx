"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RiHome5Line, RiCodeSSlashLine, RiArrowLeftLine } from "react-icons/ri";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-6 transition-colors">
            <div className="max-w-2xl w-full text-center">
                {/* Animated 404 */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="relative">
                        <h1 className="text-[120px] md:text-[180px] font-black text-slate-200 dark:text-slate-800 leading-none">
                            404
                        </h1>
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        >
                            <RiCodeSSlashLine className="w-20 h-20 md:w-32 md:h-32 text-sky-500" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Error Message */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                        Looks like this code doesn't compile. The page you're looking for doesn't exist or has been moved.
                    </p>
                </motion.div>

                {/* Code Block Style Message */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mb-12 p-6 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 font-mono text-sm text-left max-w-md mx-auto"
                >
                    <div className="text-red-500 dark:text-red-400 font-bold mb-2">Error: PageNotFoundError</div>
                    <div className="text-slate-600 dark:text-slate-400">
                        <span className="text-slate-500 dark:text-slate-500">→</span> The requested route could not be resolved
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 mt-1">
                        <span className="text-slate-500 dark:text-slate-500">→</span> Status Code: 404
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        href="/"
                        className="flex items-center space-x-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg shadow-lg shadow-sky-500/20 transition-all"
                    >
                        <RiHome5Line className="w-5 h-5" />
                        <span>Go Home</span>
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center space-x-2 px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-semibold rounded-lg transition-all"
                    >
                        <RiArrowLeftLine className="w-5 h-5" />
                        <span>Go Back</span>
                    </button>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="mt-16 flex justify-center space-x-2"
                >
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
