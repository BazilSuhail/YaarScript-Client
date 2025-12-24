"use client";

import React, { useState } from "react";
import { RiArrowRightSLine, RiCloseLine, RiMenuLine } from "react-icons/ri";

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
        <nav className="space-y-6">
            {navItems.map((section, idx) => (
                <div key={idx}>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3 px-3">
                        {section.category}
                    </h3>
                    <ul className="space-y-1">
                        {section.items.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => {
                                        setActiveSection(item.id);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${
                                        activeSection === item.id
                                            ? "bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-400"
                                            : "text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                                    }`}
                                >
                                    <span>{item.label}</span>
                                    {activeSection === item.id && (
                                        <RiArrowRightSLine className="w-4 h-4" />
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </nav>
    );

    return (
        <>
            {/* Mobile Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-sky-500 text-white rounded-full shadow-lg"
            >
                {isOpen ? <RiCloseLine className="w-6 h-6" /> : <RiMenuLine className="w-6 h-6" />}
            </button>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 min-h-[calc(100vh-64px)] sticky top-16 self-start overflow-y-auto p-6">
                <SidebarContent />
            </aside>

            {/* Mobile Sidebar */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-black/50 mt-16" onClick={() => setIsOpen(false)}>
                    <aside
                        className="absolute left-0 top-0 bottom-0 w-72 bg-white dark:bg-slate-900 overflow-y-auto p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <SidebarContent />
                    </aside>
                </div>
            )}
        </>
    );
};

export default DocsSidebar;
