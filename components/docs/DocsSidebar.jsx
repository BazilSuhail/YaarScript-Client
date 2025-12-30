"use client";

import React, { useState } from "react";
import { RiCloseLine, RiMenuLine, RiArrowRightSLine, RiCodeSSlashLine, RiBookOpenLine, RiHome4Line, RiPlayCircleLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const DocsSidebar = ({ activeSection, setActiveSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {
            category: "Getting Started",
            items: [
                { id: "getting-started", label: "Introduction" },
                { id: "installation", label: "Installation" },
                { id: "quick-start", label: "Quick Start" },
            ]
        },
        {
            category: "Reference",
            items: [
                { id: "keywords", label: "Keyword Reference" },
                { id: "syntax", label: "Syntax Guide" },
                { id: "examples", label: "Code Examples" },
            ]
        },
        {
            category: "Basics",
            items: [
                { id: "variables", label: "Variables & Types" },
                { id: "operators", label: "Operators" },
                { id: "functions", label: "Functions" },
            ]
        },
        {
            category: "Control Flow",
            items: [
                { id: "if-else", label: "If/Else (agar/warna)" },
                { id: "for-loop", label: "For Loop (dohrao)" },
                { id: "while-loop", label: "While Loop (jabtak)" },
                { id: "do-while", label: "Do-While (karo-jabtak)" },
                { id: "switch", label: "Switch (intekhab)" },
            ]
        },
        {
            category: "Advanced",
            items: [
                { id: "enums", label: "Enums (qism)" },
                { id: "constants", label: "Constants (pakka)" },
                { id: "scope", label: "Scope & Globals" },
            ]
        }
    ];

    const SidebarContent = () => (
        <>
            {/* Language Header */}
            <div className="mb-8">
                <div className="flex border-b-2 border-sky-500 pb-4">
                    <div className="flex w-full items-center justify-between gap-2">
                        <div className="flex items-center ">
                            <div className="p-1.5 bg-white/20 rounded-md">
                                <RiBookOpenLine className="w-4 h-4 text-white" />
                            </div>
                            <p className="text-md ml-2 text-white/90 font-medium">
                                Documentations
                            </p>
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center space-x-2">
                        <Link
                            href="/editor"
                            className="p-2 text-sky-50 bg-sky-800 hover:text-sky-500 hover:bg-slate-800 rounded-xl transition-all"
                            title="Go to Playground"
                        >
                            <RiPlayCircleLine className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/"
                            className="p-2 text-sky-50 bg-sky-800 hover:text-sky-500 hover:bg-slate-800 rounded-xl transition-all"
                            title="Go Home"
                        >
                            <RiHome4Line className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-4">
                {navItems.map((section, idx) => (
                    <motion.div
                        key={idx}
                        
                    >
                        <div className="relative mb-3 px-3">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-gradient-to-b from-sky-500 to-blue-400 rounded-full"></div>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 pl-4">
                                {section.category}
                            </h3>
                        </div>
                        <ul className="space-y-1">
                            {section.items.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => {
                                                setActiveSection(item.id);
                                                setIsOpen(false);
                                            }}
                                            className={`
                                                w-full text-left px-4 py-3 rounded-xl text-sm font-semibold
                                                transition-all duration-200 flex items-center justify-between group
                                                relative overflow-hidden
                                                ${isActive
                                                    ? "text-white shadow-lg"
                                                    : "text-slate-300 hover:text-white"
                                                }
                                            `}
                                        >
                                            {/* Active background with linear */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeSection"
                                                    className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-600 rounded-xl"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}

                                            <span className="relative z-10 flex items-center gap-3">
                                                {isActive && (
                                                    <motion.span
                                                        initial={{ scale: 0, rotate: -180 }}
                                                        animate={{ scale: 1, rotate: 0 }}
                                                        className="w-1.5 h-1.5 rounded-full bg-white shadow-lg"
                                                    />
                                                )}
                                                <span className={isActive ? "" : "group-hover:translate-x-0.5 transition-transform duration-200"}>
                                                    {item.label}
                                                </span>
                                            </span>

                                            {isActive && (
                                                <div className="relative z-10">
                                                    <RiArrowRightSLine className="w-5 h-5" />
                                                </div>
                                            )}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                ))}
            </nav>

            {/* Bottom Decorative Element */}
            <div className="mt-6 px-3">
                <div className="h-px bg-linear-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
                <p className="text-center text-xs text-slate-400 dark:text-slate-600 mt-4 font-medium">
                    v1.0.0 Pro
                </p>
            </div>
        </>
    );

    return (
        <aside >
            {/* Mobile Navigation Buttons */}
            <AnimatePresence>
                {isOpen && (
                    <div className="lg:hidden fixed bottom-24 right-5 z-50 flex flex-col gap-3">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link
                                href="/editor"
                                className="p-5 text-sky-50 bg-sky-700 hover:bg-sky-700 rounded-full shadow-lg transition-all flex items-center justify-center"
                                title="Go to Playground"
                            >
                                <RiPlayCircleLine className="w-5 h-5" />
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                        >
                            <Link
                                href="/"
                                className="p-4  text-sky-50 bg-sky-700 hover:bg-sky-700 rounded-full shadow-lg transition-all flex items-center justify-center"
                                title="Go Home"
                            >
                                <RiHome4Line className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Mobile Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-linear-to-br from-sky-500  to-sky-600 text-white rounded-2xl shadow-2xl shadow-sky-500/40"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <RiCloseLine className="w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <RiMenuLine className="w-6 h-6" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-80 border-r border-slate-800/80 bg-slate-900/80 backdrop-blur-xl sticky top-0 h-screen self-start overflow-y-auto shadow-xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="p-6 pb-20">
                    <SidebarContent />
                </div>
            </aside>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="lg:hidden fixed inset-0 z-40 bg-slate-900/70 backdrop-blur-[2px]"
                            onClick={() => setIsOpen(false)}
                        />
                                        <motion.aside
                            initial={{ x: -300 }}
                            animate={{ x: 0 }}
                            exit={{ x: -300 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="lg:hidden fixed left-0 top-0 bottom-0 z-50 w-80 max-w-[75vw] bg-slate-900/95 backdrop-blur-xl border-r border-slate-800 overflow-y-auto shadow-2xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6 pb-24">
                                <SidebarContent />
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </aside>
    );
};

export default DocsSidebar;