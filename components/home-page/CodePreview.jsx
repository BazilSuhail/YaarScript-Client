"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CodePreview = () => {
  const [animationKey, setAnimationKey] = useState(0);

  // Trigger animation loop every cycle
  useEffect(() => {
    const totalAnimationTime = (1.2 + 31 * 0.04 + 0.6 + 31 * 0.04 + 0.5) * 1000; // in milliseconds
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

  const glowVariants = {
    initial: { opacity: 0.2 },
    animate: {
      opacity: [0.2, 0.35, 0.2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const lightVariants = {
    animate: (color) => ({
      boxShadow: [
        `0 0 8px ${color}`,
        `0 0 12px ${color}`,
        `0 0 8px ${color}`,
      ],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
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

  // Character-by-character typing animation
  const successText = "Execution completed successfully";
  const charVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: 1.2 + i * 0.04,
        duration: 0.05,
      },
    }),
    exit: (i) => ({
      opacity: 0,
      transition: {
        delay: 1.2 + successText.length * 0.04 + 0.6 + i * 0.04,
        duration: 0.05,
      },
    }),
  };

  // Checkmark drawing animation
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
      boxShadow: [
        "0 0 0 0 rgba(34, 197, 94, 0.7)",
        "0 0 0 8px rgba(34, 197, 94, 0)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: 3.5,
      },
    },
  };

  // Loop control - cycles the entire animation
  const loopDuration = 1.2 + successText.length * 0.04 + 0.6 + successText.length * 0.04 + 0.5;
  const containerLoopVariants = {
    animate: {
      transition: {
        repeat: Infinity,
        repeatDelay: 0,
        delayChildren: 0,
      },
    },
  };

  return (
    <section className="relative py-20 px-4 z-10">
      {/* Floating code preview */}
      <motion.div
        variants={containerFloatVariants}
        initial="initial"
        animate="animate"
        className="max-w-245 mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          {/* Animated background glow */}
          <motion.div
            variants={glowVariants}
            initial="initial"
            animate="animate"
            className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-md blur-xl group-hover:opacity-40 transition-opacity duration-500"
          ></motion.div>

          {/* Main terminal container */}
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-lg shadow-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm">

            {/* Terminal Header */}
            <div className="relative bg-gradient-to-r from-slate-800/90 via-slate-850/90 to-slate-800/90 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-slate-700/50">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <motion.div
                    custom="rgba(239, 68, 68, 0.8)"
                    animate="animate"
                    variants={lightVariants}
                    className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer shadow-lg"
                  ></motion.div>
                  <motion.div
                    custom="rgba(234, 179, 8, 0.8)"
                    animate="animate"
                    variants={lightVariants}
                    className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer shadow-lg"
                  ></motion.div>
                  <motion.div
                    custom="rgba(34, 197, 94, 0.8)"
                    animate="animate"
                    variants={lightVariants}
                    className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer shadow-lg"
                  ></motion.div>
                </div>
                <div className="hidden sm:flex items-center space-x-2 ml-4">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50"
                  ></motion.div>
                  <span className="text-slate-400 text-xs font-medium">LIVE DEMO</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-slate-400 text-sm font-mono tracking-wide">main.yr</span>
                <div className="hidden sm:flex items-center space-x-1.5 text-xs text-slate-500">
                  <div className="px-2 py-1 bg-slate-700/50 rounded border border-slate-600/50">UTF-8</div>
                  <div className="px-2 py-1 bg-slate-700/50 rounded border border-slate-600/50">YaarScript</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2">
              {/* Code Section */}
              <div className="relative border-r border-slate-700/50">
                <div className="sticky top-0 bg-slate-800/80 backdrop-blur-sm px-6 py-3 border-b border-slate-700/50 flex items-center justify-between z-10">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span className="text-slate-400 text-xs font-semibold tracking-wider">CODE</span>
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
                    {/* Line numbers */}
                    <div className="select-none pr-4 text-slate-600 text-sm font-mono leading-7 text-right">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>10</div>
                    </div>

                    {/* Code content */}
                    <pre className="flex-1 text-left font-mono">
                      <code className="text-sm leading-7">
                        <span className="text-sky-400 font-semibold">yaar</span> <span className="text-slate-500">{'{'}</span>{'\n'}
                        {'  '}<span className="text-sky-300 font-medium">bolo</span><span className="text-slate-500">(</span><span className="text-sky-200">"Assalam-o-Alaikum!"</span><span className="text-slate-500">);</span>{'\n'}
                        {'\n'}
                        {'  '}<span className="text-sky-400">number</span> <span className="text-slate-200">counter</span> <span className="text-slate-400">=</span> <span className="text-sky-300">0</span><span className="text-slate-500">;</span>{'\n'}
                        {'  '}<span className="text-sky-400">faisla</span> <span className="text-slate-200">is_active</span> <span className="text-slate-400">=</span> <span className="text-sky-300">sahi</span><span className="text-slate-500">;</span>{'\n'}
                        {'\n'}
                        {'  '}<span className="text-sky-400 font-semibold">dohrao</span> <span className="text-slate-500">(</span><span className="text-sky-400">number</span> <span className="text-slate-200">i</span> <span className="text-slate-400">=</span> <span className="text-sky-300">1</span><span className="text-slate-500">;</span> <span className="text-slate-200">i</span> <span className="text-slate-400">{'<='}</span> <span className="text-sky-300">3</span><span className="text-slate-500">;</span> <span className="text-slate-200">i</span><span className="text-slate-400">++</span><span className="text-slate-500">) {'{'}</span>{'\n'}
                        {'    '}<span className="text-slate-200">counter</span> <span className="text-slate-400">=</span> <span className="text-slate-200">counter</span> <span className="text-slate-400">+</span> <span className="text-slate-200">i</span><span className="text-slate-500">;</span>{'\n'}
                        {'    '}<span className="text-sky-300 font-medium">bolo</span><span className="text-slate-500">(</span><span className="text-sky-200">"Count: "</span><span className="text-slate-500">,</span> <span className="text-slate-200">counter</span><span className="text-slate-500">);</span>{'\n'}
                        {'  '}<span className="text-slate-500">{'}'}</span>{'\n'}
                        <span className="text-slate-500">{'}'}</span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* Output Section */}
              <div className="relative bg-gradient-to-br from-slate-950/80 to-slate-900/80 backdrop-blur-sm">
                <div className="sticky top-0 bg-slate-800/80 backdrop-blur-sm px-6 py-3 border-b border-slate-700/50 flex items-center justify-between z-10">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-slate-400 text-xs font-semibold tracking-wider">OUTPUT</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50"></div>
                    <span className="text-emerald-400 text-xs font-medium">Running</span>
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
                        <span className="text-emerald-300 font-medium">Assalam-o-Alaikum!</span>
                      </motion.div>
                      <motion.div
                        custom={1}
                        variants={outputVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-start space-x-3 mb-2"
                      >
                        <span className="text-sky-400/50 text-xs mt-0.5">›</span>
                        <span className="text-sky-300">Count: <span className="text-orange-400">1</span></span>
                      </motion.div>
                      <motion.div
                        custom={2}
                        variants={outputVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-start space-x-3 mb-2"
                      >
                        <span className="text-sky-400/50 text-xs mt-0.5">›</span>
                        <span className="text-sky-300">Count: <span className="text-orange-400">3</span></span>
                      </motion.div>
                      <motion.div
                        custom={3}
                        variants={outputVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-start space-x-3 mb-4"
                      >
                        <span className="text-sky-400/50 text-xs mt-0.5">›</span>
                        <span className="text-sky-300">Count: <span className="text-orange-400">6</span></span>
                      </motion.div>
                      <motion.div
                        custom={4}
                        variants={outputVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center space-x-2 pt-4 border-t border-slate-700/30"
                      >
                        {/* Animated checkmark with pulse */}
                        <motion.div
                          variants={checkmarkVariants}
                          initial="hidden"
                          animate={["visible", "pulse"]}
                        >
                          <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </motion.div>

                        {/* Character-by-character typing animation */}
                        <motion.span
                          key={`anim-${animationKey}`}
                          className="text-emerald-400 text-xs font-medium inline-flex"
                        >
                          {successText.split("").map((char, i) => (
                            <motion.span
                              key={`char-${i}-${animationKey}`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
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
