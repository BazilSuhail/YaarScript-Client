"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const Navbar = () => {
    const pathname = usePathname();
    const [isDark, setIsDark] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // All hooks must stay at the top level!
    useEffect(() => {
        // Don't run scroll logic if we are on the editor page
        if (pathname === "/editor") return;

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
        
        // Theme initialization
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, pathname]); // Added pathname to dependency array

    const toggleTheme = () => {
        const isDarkMode = document.documentElement.classList.contains("dark");
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };

    // 1. Check condition here instead of an early return
    if (pathname === "/editor") {
        return null; 
    }

    const navLinks = [
        { name: "Docs", href: "/docs" },
        { name: "Examples", href: "/examples" },
        { name: "Playground", href: "/editor", active: true },
    ];

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-[999] w-[90%] max-w-4xl"
        >
            <div className="backdrop-blur-[2px] dark:backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-2 border-slate-500/30 dark:border-slate-700/50 rounded-2xl shadow-lg shadow-slate-900/5 dark:shadow-slate-900/30">
                <div className="flex justify-between items-center px-6 py-3">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 dark:from-sky-500 dark:to-sky-700 group-hover:scale-110 transition-transform duration-300"></div>
                        <div className="hidden sm:block">
                            <h1 className="text-base font-bold text-slate-900 dark:text-slate-50 leading-none">
                                YaarScript
                            </h1>
                            <p className="text-[8px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                                Compiler
                            </p>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <div className="flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                                    link.active
                                        ? "text-sky-600 dark:text-sky-400 bg-sky-50/80 dark:bg-sky-950/50"
                                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all duration-200"
                        >
                            {isDark ? <RiSunLine className="w-5 h-5" /> : <RiMoonLine className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;