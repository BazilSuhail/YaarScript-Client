"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { RiCodeSSlashLine, RiRocket2Line, RiSparklingLine, RiTerminalBoxLine, RiFlashlightLine, RiGlobalLine, RiCpuLine, RiShieldCheckLine, RiLightbulbLine } from "react-icons/ri";

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

  const syntaxExamples = [
    { standard: "main", yaar: "yaar", desc: "Entry point" },
    { standard: "if/else", yaar: "agar/warna", desc: "Conditionals" },
    { standard: "for", yaar: "dohrao", desc: "For loop" },
    { standard: "while", yaar: "jabtak", desc: "While loop" },
    { standard: "do-while", yaar: "karo-jabtak", desc: "Do-while" },
    { standard: "switch", yaar: "intekhab", desc: "Switch" },
    { standard: "print", yaar: "bolo", desc: "Output" },
    { standard: "return", yaar: "wapsi", desc: "Return" },
    { standard: "break", yaar: "bas_kar", desc: "Break" },
    { standard: "true/false", yaar: "sahi/galat", desc: "Booleans" },
    { standard: "const", yaar: "pakka", desc: "Constant" },
    { standard: "global", yaar: "sab_ke_liye", desc: "Global" }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-linear-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 pt-16">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 `bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))]` from-sky-100 via-slate-50 to-white dark:from-sky-950/20 dark:via-slate-950 dark:to-slate-950"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-5 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-sky-100 dark:bg-sky-950/30 text-sky-700 dark:text-sky-400 rounded-full text-sm font-semibold mb-8 border border-sky-200 dark:border-sky-800">
              <RiGlobalLine className="w-4 h-4" />
              <span>Open Source • Urdu-Inspired • WebAssembly Powered</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black text-slate-900 dark:text-slate-50 mb-8 leading-tight">
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
                className="group inline-flex items-center justify-center space-x-3 px-10 py-5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold rounded-2xl shadow-2xl shadow-sky-500/30 transition-all hover:scale-105"
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
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition"></div>
                <div className="relative bg-slate-900 dark:bg-slate-950 rounded-2xl shadow-2xl overflow-hidden border border-slate-800">
                  <div className="bg-slate-800 dark:bg-slate-900 px-6 py-4 flex items-center justify-between border-b border-slate-700">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-slate-400 text-sm font-mono">main.yr</span>
                  </div>
                  <pre className="p-8 text-left overflow-x-auto" style={{ fontFamily: 'var(--font-jetbrains), monospace' }}>
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

      {/* Sticky Code Examples Section */}
      <section className="py-32 ">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-slate-50 mb-6">
              Simple Yet Powerful
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              From basic scripts to complex applications, YaarScript handles it all with elegant Urdu syntax
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-500 transition-all hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                    {example.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {example.description}
                  </p>
                  <pre className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 overflow-x-auto">
                    <code className="text-slate-800 dark:text-slate-200 text-sm" style={{ fontFamily: 'var(--font-jetbrains), monospace' }}>
                      {example.code}
                    </code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 ">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-slate-50 mb-6">
              Why YaarScript?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Built for the modern developer with love for Urdu
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-sky-500 dark:hover:border-sky-500 transition-all hover:shadow-2xl group"
              >
                 
                <div className="w-14 h-14 bg-sky-100 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Syntax Comparison */}
      <section className="py-32 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-slate-50 mb-6">
              Familiar Yet Unique
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              YaarScript keywords map naturally to concepts you already know
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {syntaxExamples.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-500 transition-all"
              >
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-2 font-semibold">
                  {item.desc}
                </div>
                <div className="flex items-center justify-between">
                  <code className="text-slate-600 dark:text-slate-400 font-mono text-sm">
                    {item.standard}
                  </code>
                  <span className="text-slate-300 dark:text-slate-600 mx-3">→</span>
                  <code className="text-sky-600 dark:text-sky-400 font-mono text-sm font-bold">
                    {item.yaar}
                  </code>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Start Coding Today
            </h2>
            <p className="text-2xl text-sky-100 mb-12 max-w-3xl mx-auto">
              No installation needed. Jump into the playground and write your first YaarScript program in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/editor"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-white hover:bg-slate-50 text-sky-600 font-bold rounded-2xl shadow-2xl transition-all hover:scale-105"
              >
                <RiCodeSSlashLine className="w-6 h-6" />
                <span className="text-lg">Launch Editor</span>
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-transparent hover:bg-white/10 text-white font-bold rounded-2xl border-2 border-white transition-all"
              >
                <span className="text-lg">Documentation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black border-t border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">YaarScript</h3>
              <p className="text-slate-400 leading-relaxed">
                A modern programming language with Urdu-inspired syntax, designed for the next generation of developers.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/docs" className="text-slate-400 hover:text-sky-400 transition-colors">Documentation</Link></li>
                <li><Link href="/editor" className="text-slate-400 hover:text-sky-400 transition-colors">Playground</Link></li>
                <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">Examples</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><a href="https://github.com" className="text-slate-400 hover:text-sky-400 transition-colors">GitHub</a></li>
                <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">Discord</a></li>
                <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">Contribute</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>© 2024 YaarScript. Built with ❤️ for the Urdu developer community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
