"use client";

import React, { useState } from "react";
import { RiCloseLine, RiMenuLine, RiArrowRightSLine, RiCodeSSlashLine, RiBookOpenLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

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
        },
        {
            category: "Reference",
            items: [
                { id: "keywords", label: "Keyword Reference" },
                { id: "syntax", label: "Syntax Guide" },
                { id: "examples", label: "Code Examples" },
            ]
        }
    ];

    const SidebarContent = () => (
        <>
            {/* Language Header */}
            <div className="mb-8">
                <div className="relative flex overflow-hidden rounded-xl bg-linear-to-br from-sky-500 to-blue-500 py-2 px-4 shadow-lg">
                    <div className="flex w-full items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5  border-t border-white/20">
                            <div className="p-2 bg-white/20 rounded-lg">
                                <RiBookOpenLine className="w-4 h-4 text-white" />
                            </div>
                            <p className="text-md text-white/90 font-medium">
                                Documentations
                            </p>
                        </div>
                    </div>


                </div>

            </div>

            {/* Navigation */}
            <nav className="space-y-6">
                {navItems.map((section, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                    >
                        <div className="relative mb-3 px-3">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-linear-to-b from-sky-500 to-blue-400 dark:from-sky-400 dark:to-blue-500 rounded-full"></div>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400 pl-4">
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
                                                    ? "text-white dark:text-white shadow-lg"
                                                    : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                                                }
                                            `}
                                        >
                                            {/* Active background with linear */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeSection"
                                                    className="absolute inset-0 bg-linear-to-r from-sky-500 to-sky-600 dark:from-sky-600 dark:via-blue-700 dark:to-sky-700 rounded-xl"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}

                                            {/* Hover background */}
                                            {!isActive && (
                                                <>
                                                    <div className="absolute inset-0 bg-linear-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-800/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-sky-500 to-blue-400 dark:from-sky-400 dark:to-blue-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                                </>
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

                                            <motion.div
                                                className="relative z-10"
                                                animate={{
                                                    x: isActive ? 0 : -5,
                                                    opacity: isActive ? 1 : 0
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <RiArrowRightSLine className="w-5 h-5" />
                                            </motion.div>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                ))}
            </nav>

            {/* Bottom Decorative Element */}
            <div className="mt-12 px-3">
                <div className="h-px bg-linear-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
                <p className="text-center text-xs text-slate-400 dark:text-slate-600 mt-4 font-medium">
                    v1.0.0 Pro
                </p>
            </div>
        </>
    );

    return (
        <aside >
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
            <aside className="hidden lg:block w-80 border-r border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl fixed h-screen self-start overflow-y-auto shadow-xl">
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
                            className="lg:hidden fixed inset-0 z-40 bg-slate-900/70 backdrop-blur-md"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.aside
                            initial={{ x: -300 }}
                            animate={{ x: 0 }}
                            exit={{ x: -300 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="lg:hidden fixed left-0 top-16 bottom-0 z-50 w-80 max-w-[85vw] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-r border-slate-200 dark:border-slate-800 overflow-y-auto shadow-2xl"
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