"use client";

import React, { useState } from "react";
import DocsSidebar from "../../components/docs/DocsSidebar";
import DocsContent from "../../components/docs/DocsContent";

export default function DocsPage() {
    const [activeSection, setActiveSection] = useState("getting-started");

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-16">
            <div className="max-w-400 mx-auto flex">
                <DocsSidebar 
                    activeSection={activeSection} 
                    setActiveSection={setActiveSection} 
                />
                <section >                    
                <DocsContent activeSection={activeSection} />
                </section>
            </div>
        </div>
    );
}
