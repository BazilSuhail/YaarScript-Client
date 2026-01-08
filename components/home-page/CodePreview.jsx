"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CodePreview = () => {
  const [animationKey, setAnimationKey] = useState(0);

  // Trigger animation loop every cycle
  useEffect(() => {
    const totalAnimationTime = (1.2 + 31 * 0.04 + 0.6 + 31 * 0.04 + 0.5) * 1000;
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, totalAnimationTime);

    return () => clearInterval(interval);
  }, []);

  const outputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const containerFloatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const successText = "Execution completed successfully";
  
  const checkmarkVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },
    pulse: {
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: 3.5,
      },
    },
  };

  return (
    <section className="relative py-20 px-4 z-10">
      <motion.div
        variants={containerFloatVariants}
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          {/* Main terminal container matching previous components */}
          <div className="relative bg-slate-800/30 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-700/50">

            {/* Terminal Header */}
            <div className="relative bg-slate-800/50 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-slate-700/50">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 transition-colors cursor-pointer"></div>
                </div>
                <div className="hidden sm:flex items-center space-x-2 ml-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
                  <span className="text-slate-400 text-xs font-medium tracking-widest">LIVE DEMO</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-slate-400 text-sm font-mono tracking-wide">main.yr</span>
                <div className="hidden sm:flex items-center space-x-1.5 text-xs text-slate-500">
                  <div className="px-2 py-1 bg-slate-700/30 rounded-lg border border-slate-600/30">UTF-8</div>
                  <div className="px-2 py-1 bg-slate-700/30 rounded-lg border border-slate-600/30">YaarScript</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2">
              {/* Code Section */}
              <div className="relative border-r border-slate-700/50">
                <div className="bg-slate-800/40 backdrop-blur-sm px-6 py-3 border-b border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span className="text-slate-400 text-xs font-semibold tracking-wider uppercase">Code</span>
                  </div>
                  <button className="text-slate-500 hover:text-slate-300 transition-colors text-xs font-medium flex items-center space-x-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy</span>
                  </button>
                </div>

                <div className="p-6 md:p-8 overflow-x-auto">
                  <div className="flex">
                    <div className="select-none pr-4 text-slate-600 text-sm font-mono leading-7 text-right">
                      {[1,2,3,4,5,6,7,8,9,10].map(n => <div key={n}>{n}</div>)}
                    </div>
                    <pre className="flex-1 text-left font-mono">
                      <code className="text-sm leading-7">
                        <span className="text-sky-400 font-semibold">yaar</span> <span className="text-slate-500">{'{'}</span>{"\n"}
                        {"  "}<span className="text-sky-300 font-medium">bolo</span><span className="text-slate-500">(</span><span className="text-sky-200">"Assalam-o-Alaikum!"</span><span className="text-slate-500">);</span>{"\n"}
                        {"\n"}
                        {"  "}<span className="text-sky-400">number</span> <span className="text-slate-200">counter</span> <span className="text-slate-400">=</span> <span className="text-sky-300">0</span><span className="text-slate-500">;</span>{"\n"}
                        {"  "}<span className="text-sky-400">faisla</span> <span className="text-slate-200">is_active</span> <span className="text-slate-400">=</span> <span className="text-sky-300">sahi</span><span className="text-slate-500">;</span>{"\n"}
                        {"\n"}
                        {"  "}<span className="text-sky-400 font-semibold">dohrao</span> <span className="text-slate-500">(</span><span className="text-sky-400">number</span> <span className="text-slate-200">i</span> <span className="text-slate-400">=</span> <span className="text-sky-300">1</span><span className="text-slate-500">;</span> <span className="text-slate-200">i</span> <span className="text-slate-400">{"<="}</span> <span className="text-sky-300">3</span><span className="text-slate-500">;</span> <span className="text-slate-200">i</span><span className="text-slate-400">++</span><span className="text-slate-500">) {"{"}</span>{"\n"}
                        {"    "}<span className="text-slate-200">counter</span> <span className="text-slate-400">=</span> <span className="text-slate-200">counter</span> <span className="text-slate-400">+</span> <span className="text-slate-200">i</span><span className="text-slate-500">;</span>{"\n"}
                        {"    "}<span className="text-sky-300 font-medium">bolo</span><span className="text-slate-500">(</span><span className="text-sky-200">"Count: "</span><span className="text-slate-500">,</span> <span className="text-slate-200">counter</span><span className="text-slate-500">);</span>{"\n"}
                        {"  "}<span className="text-slate-500">{"}"}</span>{"\n"}
                        <span className="text-slate-500">{"}"}</span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* Output Section */}
              <div className="relative bg-slate-900/20 backdrop-blur-sm">
                <div className="bg-slate-800/40 backdrop-blur-sm px-6 py-3 border-b border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-slate-400 text-xs font-semibold tracking-wider uppercase">Output</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="text-emerald-400 text-xs font-medium uppercase tracking-tighter">Running</span>
                  </div>
                </div>

                <div className="p-6 md:p-8 min-h-[300px]">
                  <pre className="text-left overflow-x-auto font-mono">
                    <code className="text-sm leading-7">
                      <motion.div
                        custom={0}
                        variants={outputVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-start space-x-3 mb-2"
                      >
                        <span className="text-emerald-400/50 text-xs mt-0.5">›</span>
                        <span className="text-emerald-300 font-medium font-sans">Assalam-o-Alaikum!</span>
                      </motion.div>
                      {[1, 3, 6].map((count, i) => (
                        <motion.div
                          key={count}
                          custom={i + 1}
                          variants={outputVariants}
                          initial="hidden"
                          animate="visible"
                          className="flex items-start space-x-3 mb-2"
                        >
                          <span className="text-sky-400/50 text-xs mt-0.5">›</span>
                          <span className="text-sky-300">Count: <span className="text-orange-400">{count}</span></span>
                        </motion.div>
                      ))}
                      <motion.div
                        custom={4}
                        variants={outputVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center space-x-2 pt-4 border-t border-slate-700/30"
                      >
                        <motion.div
                          variants={checkmarkVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                        <motion.span
                          key={`anim-${animationKey}`}
                          className="text-emerald-400 text-xs font-medium inline-flex tracking-tight"
                        >
                          {successText.split("").map((char, i) => (
                            <motion.span
                              key={`char-${i}-${animationKey}`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{
                                duration: 0.05,
                                delay: 1.2 + i * 0.04,
                              }}
                            >
                              {char}
                            </motion.span>
                          ))}
                        </motion.span>
                      </motion.div>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CodePreview;
