"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { RiCodeSSlashLine, RiRocket2Line, RiSparklingLine, RiTerminalBoxLine, RiFlashlightLine, RiGlobalLine, RiCpuLine, RiShieldCheckLine, RiLightbulbLine } from "react-icons/ri";
import RippleGrid from "@/components/home/FaultyTerminal";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const codeExamples = [
    {
      title: "Hello World",
      description: "Your first YaarScript program",
      code: `yaar {
    bolo("Assalam-o-Alaikum!\\n");
}`
    },
    {
      title: "Variables & Types",
      description: "Strong typing with Urdu keywords",
      code: `number age = 25;
float price = 99.99;
lafz name = "Ahmed";
faisla active = sahi;`
    },
    {
      title: "Control Flow",
      description: "Intuitive conditionals",
      code: `agar (score >= 90) {
    bolo("Excellent!\\n");
} warna {
    bolo("Keep trying!\\n");
}`
    },
    {
      title: "Loops",
      description: "Iterate with dohrao",
      code: `dohrao (number i = 1; i <= 5; i++) {
    bolo("Count: ", i, "\\n");
}`
    }
  ];

  const features = [
    {
      icon: <RiCodeSSlashLine className="w-6 h-6" />,
      title: "Urdu-Inspired Syntax",
      description: "Natural keywords like agar, warna, dohrao make coding intuitive for Urdu speakers."
    },
    {
      icon: <RiFlashlightLine className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Powered by Rust and WebAssembly for instant compilation in your browser."
    },
    {
      icon: <RiTerminalBoxLine className="w-6 h-6" />,
      title: "Interactive IDE",
      description: "Professional code editor with syntax highlighting and real-time execution."
    },
    {
      icon: <RiSparklingLine className="w-6 h-6" />,
      title: "Modern Features",
      description: "Enums, functions, switch statements, and more - all with local flavor."
    },
    {
      icon: <RiCpuLine className="w-6 h-6" />,
      title: "Multi-Pass Compiler",
      description: "Industrial-grade compilation with optimization passes and type checking."
    },
    {
      icon: <RiShieldCheckLine className="w-6 h-6" />,
      title: "Strong Type System",
      description: "Strict typing with no implicit coercion ensures code safety."
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen relative bg-linear-to-b from-slate-50 to-slate-300 dark:from-slate-950 dark:to-slate-900">
      {/* RippleGrid Background - Fixed positioning with z-0 */}

      <div className="fixed inset-0 w-full h-full overflow-hidden z-0" aria-hidden="true">
        <RippleGrid
          enableRainbow={true}
          gridColor="#ffffff"
          rippleIntensity={0.03}
          gridSize={35}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.5}
          opacity={0.8}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden z-10 pointer-events-none">
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-sky-100 dark:bg-sky-950/30 text-sky-700 dark:text-sky-400 rounded-full text-sm font-semibold mb-8 border border-sky-200 dark:border-sky-800">
              <RiGlobalLine className="w-4 h-4" />
              <span>Open Source • Urdu-Inspired • WebAssembly Powered</span>
            </div>

            <h1 className="text-6xl  md:text-7xl font-black text-slate-900 dark:text-slate-50 mb-8 leading-tight">
              <span className="text-6xl md:text-[110px]">Code in Your</span>
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-sky-500 via-blue-500 to-indigo-600">
                Language
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              YaarScript is a professional compiler that brings <strong>Urdu keywords</strong> to modern programming. Write clean, powerful code with familiar words.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/editor"
                className="group inline-flex items-center justify-center space-x-3 px-10 py-5 bg-linear-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold rounded-2xl shadow-2xl shadow-sky-500/30 transition-all hover:scale-105"
              >
                <RiRocket2Line className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span className="text-lg">Launch Playground</span>
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center space-x-3 px-10 py-5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-bold rounded-2xl border-2 border-slate-200 dark:border-slate-700 transition-all hover:border-sky-500 dark:hover:border-sky-500"
              >
                <RiLightbulbLine className="w-6 h-6" />
                <span className="text-lg">Read Docs</span>
              </Link>
            </div>

            {/* Floating code preview */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-2xl mx-auto mt-12"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-sky-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition"></div>
                <div className="relative bg-slate-900 dark:bg-slate-950 rounded-2xl shadow-2xl overflow-hidden border border-slate-800">
                  <div className="bg-slate-800 dark:bg-slate-900 px-6 py-4 flex items-center justify-between border-b border-slate-700">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-slate-400 text-sm font-mono">main.yr</span>
                  </div>
                  <pre className="p-8 text-left overflow-x-auto font-mono">
                    <code className="text-slate-300 text-sm leading-7">
                      {`yaar {
    bolo("Assalam-o-Alaikum, World!\\n");
    
    number counter = 0;
    faisla is_active = sahi;
    
    dohrao (number i = 1; i <= 5; i++) {
        counter = counter + i;
        bolo("Count: ", counter, "\\n");
    }
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}