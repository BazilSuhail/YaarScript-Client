"use client";

import React, { useState } from "react";
import DocsSidebar from "../../components/docs/DocsSidebar";
import DocsContent from "../../components/docs/DocsContent";
import Footer from "@/components/Footer";

export default function DocsPage() {
    const [activeSection, setActiveSection] = useState("getting-started");

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col">
            <div className="flex relative flex-1">
                <DocsSidebar 
                    activeSection={activeSection} 
                    setActiveSection={setActiveSection} 
                />
                <div className="lg:ml-5 md:mt-0 mt-5 w-full flex flex-col">
                    <DocsContent activeSection={activeSection} />
                </div>
            </div>
            <Footer/>
        </div>
    );
}
