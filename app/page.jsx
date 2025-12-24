"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiCodeSSlashLine, RiRocket2Line, RiSparklingLine, RiTerminalBoxLine, RiFlashlightLine, RiGlobalLine } from "react-icons/ri";

export default function Home() {
  const features = [
    {
      icon: <RiCodeSSlashLine className="w-6 h-6" />,
      title: "Urdu-Inspired Syntax",
      description: "Write code in a natural, intuitive way with familiar Urdu keywords like 'agar', 'warna', 'dohrao'."
    },
    {
      icon: <RiFlashlightLine className="w-6 h-6" />,
      title: "Fast Compilation",
      description: "Powered by Rust and WebAssembly for lightning-fast compilation directly in your browser."
    },
    {
      icon: <RiTerminalBoxLine className="w-6 h-6" />,
      title: "Interactive Playground",
      description: "Try YaarScript instantly with our online editor - no installation required."
    },
    {
      icon: <RiSparklingLine className="w-6 h-6" />,
      title: "Modern Features",
      description: "Enums, functions, loops, switch statements - all with a local flavor."
    }
  ];

  const syntaxExamples = [
    { standard: "main", yaar: "yaar", desc: "Entry point" },
    { standard: "if/else", yaar: "agar/warna", desc: "Conditionals" },
    { standard: "for", yaar: "dohrao", desc: "For loop" },
    { standard: "while", yaar: "jabtak", desc: "While loop" },
    { standard: "print", yaar: "bolo", desc: "Output" },
    { standard: "return", yaar: "wapsi", desc: "Return" },
    { standard: "true/false", yaar: "sahi/galat", desc: "Booleans" },
    { standard: "break", yaar: "bas_kar", desc: "Break" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-sky-100 dark:bg-sky-950/30 text-sky-700 dark:text-sky-400 rounded-full text-sm font-semibold mb-6">
            <RiGlobalLine className="w-4 h-4" />
            <span>Urdu-Inspired Programming Language</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight">
            Write Code in Your
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-blue-600">
              Own Language
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            YaarScript brings the warmth of Urdu to modern programming. A professional compiler powered by Rust and WebAssembly, designed for developers who think in Urdu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/editor"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/30 transition-all hover:scale-105"
            >
              <RiRocket2Line className="w-5 h-5" />
              <span>Try Playground</span>
            </Link>
            <Link
              href="#syntax"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-semibold rounded-xl border border-slate-200 dark:border-slate-700 transition-all"
            >
              <span>View Syntax</span>
            </Link>
          </div>
        </motion.div>

        {/* Code Example Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl shadow-2xl overflow-hidden border border-slate-800">
            <div className="bg-slate-800 dark:bg-slate-900 px-6 py-3 flex items-center space-x-2 border-b border-slate-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-slate-400 text-sm font-mono ml-4">main.yr</span>
            </div>
            <pre className="p-6 text-sm overflow-x-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              <code className="text-slate-300">
{`yaar {
    bolo("Assalam-o-Alaikum, World!\\n");
    
    number counter = 0;
    faisla is_active = sahi;
    
    dohrao (number i = 1; i <= 5; i++) {
        counter = counter + i;
        bolo("Count: ", counter, "\\n");
    }
    
    agar (counter > 10) {
        bolo("Mission Complete!\\n");
    }
}`}
              </code>
            </pre>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-slate-900 py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              Why YaarScript?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A modern compiler designed for the Urdu-speaking developer community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-sky-100 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Syntax Comparison */}
      <section id="syntax" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              Familiar Yet Unique
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              YaarScript keywords map naturally to standard programming concepts
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {syntaxExamples.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex-1">
                    <span className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</span>
                    <div className="font-mono text-slate-400 dark:text-slate-500 text-sm mt-1">
                      {item.standard}
                    </div>
                  </div>
                  <div className="mx-4 text-slate-300 dark:text-slate-600">→</div>
                  <div className="flex-1 text-right">
                    <div className="font-mono text-sky-600 dark:text-sky-400 font-semibold">
                      {item.yaar}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Coding?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Jump into the playground and experience YaarScript today
          </p>
          <Link
            href="/editor"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white hover:bg-slate-100 text-sky-600 font-semibold rounded-xl shadow-lg transition-all hover:scale-105"
          >
            <RiCodeSSlashLine className="w-5 h-5" />
            <span>Launch Editor</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>© 2024 YaarScript. Built with ❤️ for the Urdu developer community.</p>
        </div>
      </footer>
    </div>
  );
}
