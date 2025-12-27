"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { RiGithubFill } from "react-icons/ri";

const Navbar = () => {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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
                    <div className="flex md:ml-[-35px] items-center space-x-1">
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
                    <div className="flex justify-center  items-center space-x-2">
                        <Link
                            href="https://github.com/BazilSuhail/Custom-Compiler"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" flex items-center p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-all duration-200"
                            aria-label="View on GitHub"
                        >
                            <RiGithubFill className="w-5 h-5" />
                            <span className="ml-2 text-[16px]">Github</span>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;