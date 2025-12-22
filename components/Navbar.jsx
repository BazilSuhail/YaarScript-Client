"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { IoCodeSlash } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        // Check initial theme from localStorage or system preference
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };

    const navLinks = [
        { name: "Docs", href: "#" },
        { name: "Standard Lib", href: "#" },
        { name: "Playground", href: "#", active: true },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-slate-200/50 dark:border-white/10 py-3 shadow-lg"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-3 group cursor-pointer"
                >
                    <div className="w-10 h-10 bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-xl shadow-sky-500/20 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-black text-2xl italic leading-none">Y</span>
                    </div>
                    <div className="hidden sm:block">
                        <h1 className="text-xl font-bold tracking-tight text-slate-800 dark:text-white leading-none">
                            YaarScript <span className="text-sky-500">Pro</span>
                        </h1>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold mt-1">
                            Advanced Toolchain
                        </p>
                    </div>
                </motion.div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`text-sm font-medium transition-colors hover:text-sky-500 ${link.active
                                ? "text-sky-600 dark:text-sky-400"
                                : "text-slate-600 dark:text-slate-400"
                                }`}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    >
                        {isDark ? <RiSunLine className="w-5 h-5" /> : <RiMoonLine className="w-5 h-5" />}
                    </motion.button>

                    <button className="hidden lg:flex items-center space-x-2 px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-white dark:text-slate-950 font-bold rounded-xl shadow-lg shadow-sky-500/20 active:scale-95 transition-all">
                        <IoCodeSlash className="w-5 h-5" />
                        <span className="text-sm uppercase tracking-wide">Compile & Run</span>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-slate-600 dark:text-slate-400"
                    >
                        {isOpen ? <HiX className="w-7 h-7" /> : <HiMenuAlt3 className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col space-y-6 text-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-lg font-semibold ${link.active ? "text-sky-500" : "text-slate-600 dark:text-slate-400"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-sky-500 text-white font-bold rounded-xl">
                                <IoCodeSlash className="w-5 h-5" />
                                <span>Run Code</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;