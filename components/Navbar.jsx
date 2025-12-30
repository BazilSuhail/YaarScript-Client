"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { RiGithubFill, RiMenuLine, RiCloseLine, RiBook2Line, RiPlayCircleLine, RiUser3Line, RiCodeSSlashLine } from "react-icons/ri";

const Navbar = () => {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // All hooks must stay at the top level!
    useEffect(() => {
        // Don't run scroll logic if we are on the editor page
        if (pathname === "/editor" || pathname === "/docs") return;

        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    if (currentScrollY < 10) {
                        setIsVisible(true);
                    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                        setIsVisible(false);
                    } else if (currentScrollY < lastScrollY) {
                        setIsVisible(true);
                    }
                    setLastScrollY(currentScrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, pathname]); // Added pathname to dependency array

    // 1. Check condition here instead of an early return
    if (pathname === "/editor" || pathname === "/docs") {
        return null; 
    }

    const navLinks = [
        { name: "Documentation", href: "/docs" }, 
        { name: "Playground", href: "/editor", active: true },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: 0 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-4 left-1/2 -translate-x-1/2 z-999 w-[90%] max-w-4xl"
            >
            <div className="backdrop-blur-xl bg-slate-900/80 border-2 border-slate-700/50 rounded-2xl shadow-lg shadow-slate-900/30">
                <div className="flex justify-between items-center px-6 py-3">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <img 
                            src="/yaar-script.webp" 
                            alt="YaarScript Logo" 
                            className="w-10 h-10 rounded-full group-hover:scale-110 transition-transform duration-300"
                        />
                      
                        <div className="hidden sm:block">
                            <h1 className="text-base font-bold text-slate-50 leading-none">
                                YaarScript
                            </h1>
                            <p className="text-[8px] uppercase tracking-wider text-slate-400 font-semibold">
                                Compiler
                            </p>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <div className="hidden md:flex md:ml-[-35px] items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                                    link.active
                                        ? "text-sky-400 bg-sky-950/50"
                                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* GitHub Link */}
                    <div className="hidden md:flex justify-center items-center space-x-2">
                        <Link
                            href="https://github.com/BazilSuhail/Custom-Compiler"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-all duration-200"
                            aria-label="View on GitHub"
                        >
                            <RiGithubFill className="w-5 h-5" />
                            <span className="ml-2 text-[16px]">Github</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Icon */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-all duration-200"
                        aria-label="Toggle menu"
                    >
                        <RiMenuLine className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </motion.nav>

        {/* Mobile Bottom Menu */}
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    layout
                    initial={{ y: 100, opacity: 0, height: 70 }}
                    animate={{ y: 0, opacity: 1, height: "auto" }}
                    exit={{ y: 100, opacity: 0, height: 70 }}
                    transition={{ 
                        y: { duration: 0.4, ease: "easeInOut" },
                        opacity: { duration: 0.4, ease: "easeInOut" },
                        height: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden w-[90%] max-w-sm overflow-hidden"
                    style={{ originY: 1 }}
                >
                    <div className="backdrop-blur-xl bg-slate-900/80 border-2 border-slate-700/50 rounded-2xl shadow-lg shadow-slate-900/30 p-6">
                        <div className="space-y-2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.6, duration: 0.4 }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05, x: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Link href="/docs" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-3 px-4 py-3 text-slate-300 hover:text-sky-300 bg-slate-800/30 hover:bg-sky-900/40 border border-sky-500/20 hover:border-sky-400/60 rounded-lg transition-all duration-300 group">
                                            <RiBook2Line className="w-5 h-5 text-sky-400 group-hover:text-sky-300 transition-colors" />
                                            <span className="font-medium">Documentation</span>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.6, duration: 0.4 }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05, x: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Link href="/editor" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-3 px-4 py-3 text-slate-300 hover:text-sky-300 bg-slate-800/30 hover:bg-sky-900/40 border border-sky-500/20 hover:border-sky-400/60 rounded-lg transition-all duration-300 group">
                                            <RiPlayCircleLine className="w-5 h-5 text-sky-400 group-hover:text-sky-300 transition-colors" />
                                            <span className="font-medium">Playground</span>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.6, duration: 0.4 }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05, x: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Link href="https://github.com/BazilSuhail/Custom-Compiler" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-3 px-4 py-3 text-slate-300 hover:text-sky-300 bg-slate-800/30 hover:bg-sky-900/40 border border-sky-500/20 hover:border-sky-400/60 rounded-lg transition-all duration-300 group">
                                            <RiGithubFill className="w-5 h-5 text-sky-400 group-hover:text-sky-300 transition-colors" />
                                            <span className="font-medium">GitHub</span>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </motion.div>

                            {/* Divider */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.6, duration: 0.4 }}
                            >
                                <div className="h-px bg-linear-to-r from-transparent via-sky-500/40 to-transparent my-2"></div>
                            </motion.div>

                            {/* Footer Links Row */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.6, duration: 0.4 }}
                                className="flex gap-2"
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="flex-1"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Link href="https://bazilsuhail.netlify.app" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="flex flex-col items-center space-y-1 px-3 py-3 text-slate-300 hover:text-sky-300 bg-sky-600/30 hover:bg-sky-600/50 border border-sky-500/40 hover:border-sky-400/80 rounded-lg transition-all duration-300 group w-full">
                                            <RiUser3Line className="w-5 h-5 text-sky-400 group-hover:text-sky-300 transition-colors" />
                                            <span className="font-medium text-xs text-center">Creator</span>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.9 }}
                                    className="flex-1"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Link href="https://github.com/BazilSuhail/YaarScript-Client" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="flex flex-col items-center space-y-1 px-3 py-3 text-slate-300 hover:text-sky-300 bg-sky-600/30 hover:bg-sky-600/50 border border-sky-500/40 hover:border-sky-400/80 rounded-lg transition-all duration-300 group w-full">
                                            <RiGithubFill className="w-5 h-5 text-sky-400 group-hover:text-sky-300 transition-colors" />
                                            <span className="font-medium text-xs text-center">Client</span>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.0 }}
                                    className="flex-1"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Link href="https://github.com/BazilSuhail/YaarScript" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="flex flex-col items-center space-y-1 px-3 py-3 text-slate-300 hover:text-sky-300 bg-sky-600/30 hover:bg-sky-600/50 border border-sky-500/40 hover:border-sky-400/80 rounded-lg transition-all duration-300 group w-full">
                                            <RiCodeSSlashLine className="w-5 h-5 text-sky-400 group-hover:text-sky-300 transition-colors" />
                                            <span className="font-medium text-xs text-center">Compiler</span>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
};

export default Navbar;