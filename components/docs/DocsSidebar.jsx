"use client";

import React, { useState } from "react";
import { RiCloseLine, RiMenuLine, RiArrowRightSLine } from "react-icons/ri";
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
        <nav className="space-y-8">
            {navItems.map((section, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                >
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3 px-2">
                        {section.category}
                    </h3>
                    <ul className="space-y-0.5">
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
                                            w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium 
                                            transition-all duration-200 flex items-center justify-between group
                                            relative overflow-hidden
                                            ${isActive
                                                ? "text-sky-600 dark:text-sky-400"
                                                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                                            }
                                        `}
                                    >
                                        {/* Active background with gradient */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeSection"
                                                className="absolute inset-0 bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-950/20 rounded-xl"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        
                                        {/* Hover background */}
                                        {!isActive && (
                                            <div className="absolute inset-0 bg-slate-50 dark:bg-slate-800/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        )}

                                        <span className="relative z-10 flex items-center gap-2">
                                            {isActive && (
                                                <motion.span
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400"
                                                />
                                            )}
                                            {item.label}
                                        </span>
                                        
                                        {isActive && (
                                            <motion.div
                                                initial={{ x: -5, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                className="relative z-10"
                                            >
                                                <RiArrowRightSLine className="w-4 h-4" />
                                            </motion.div>
                                        )}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </motion.div>
            ))}
        </nav>
    );

    return (
        <aside >
            {/* Mobile Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-linear-to-br from-sky-500 to-blue-600 text-white rounded-2xl shadow-lg shadow-sky-500/30"
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
            <aside className="hidden lg:block w-72 border-r border-slate-100 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl min-h-screen sticky top-20 self-start overflow-y-auto">
                <div className="p-8 pt-12">
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
                            className="lg:hidden fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm mt-16"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.aside
                            initial={{ x: -300 }}
                            animate={{ x: 0 }}
                            exit={{ x: -300 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="lg:hidden fixed left-0 top-16 bottom-0 z-50 w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-r border-slate-200 dark:border-slate-800 overflow-y-auto shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-8">
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