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

      <div className="fixed inset-0 w-full h-full overflow-hidden opacity-75 z-0" aria-hidden="true">
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
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-sky-100 dark:bg-sky-950/30 text-sky-700 dark:text-sky-400 rounded-full text-xs md:text-sm font-semibold mb-8 border border-sky-200 dark:border-sky-800">
              <RiGlobalLine className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">Open Source • Roman Urdu • WebAssembly</span>
              <span className="sm:hidden">Open Source • Urdu Based</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-slate-50 mb-6 leading-tight">
              <span className="text-4xl md:text-6xl lg:text-[110px]">Apki Zuban</span>
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-sky-500 via-blue-500 to-indigo-600">
                Apka Code
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              YaarScript ek modern compiler hai jo <strong>Urdu/Roman Urdu keywords</strong> ke sath programming ko asaan banata hai.
              Apni zuban mein clean aur powerful code likho.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
              <Link
                href="/editor"
                className="group pointer-events-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-linear-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white text-sm font-semibold rounded-xl shadow-lg shadow-sky-500/20 transition-all hover:shadow-xl hover:shadow-sky-500/30"
              >
                <RiRocket2Line className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>Try Editor</span>
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-700 transition-all hover:border-sky-500 dark:hover:border-sky-500"
              >
                <RiLightbulbLine className="w-4 h-4" />
                <span>Documentation</span>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

<section className="relative py-20 px-4 z-10">         
            {/* Floating code preview */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-245 mx-auto"
            >
              <div className="relative group">
                {/* Animated linear background */}
                <div className="absolute -inset-1 bg-linear-to-r from-sky-500 via-blue-500 to-indigo-600 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                
                {/* Main terminal container */}
                <div className="relative bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 rounded-[1.75rem] shadow-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm">
                  
                  {/* Terminal Header */}
                  <div className="relative bg-linear-to-r from-slate-800/90 via-slate-850/90 to-slate-800/90 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-slate-700/50">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer shadow-lg shadow-red-500/30"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer shadow-lg shadow-yellow-500/30"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer shadow-lg shadow-green-500/30"></div>
                      </div>
                      <div className="hidden sm:flex items-center space-x-2 ml-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></div>
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
                              <span className="text-purple-400 font-semibold">yaar</span> <span className="text-slate-500">{'{'}</span>{'\n'}
                              {'  '}<span className="text-blue-400 font-medium">bolo</span><span className="text-slate-500">(</span><span className="text-emerald-400">"Assalam-o-Alaikum!"</span><span className="text-slate-500">);</span>{'\n'}
                              {'\n'}
                              {'  '}<span className="text-cyan-400">number</span> <span className="text-slate-200">counter</span> <span className="text-pink-400">=</span> <span className="text-orange-400">0</span><span className="text-slate-500">;</span>{'\n'}
                              {'  '}<span className="text-cyan-400">faisla</span> <span className="text-slate-200">is_active</span> <span className="text-pink-400">=</span> <span className="text-orange-400">sahi</span><span className="text-slate-500">;</span>{'\n'}
                              {'\n'}
                              {'  '}<span className="text-purple-400 font-semibold">dohrao</span> <span className="text-slate-500">(</span><span className="text-cyan-400">number</span> <span className="text-slate-200">i</span> <span className="text-pink-400">=</span> <span className="text-orange-400">1</span><span className="text-slate-500">;</span> <span className="text-slate-200">i</span> <span className="text-pink-400">{'<='}</span> <span className="text-orange-400">3</span><span className="text-slate-500">;</span> <span className="text-slate-200">i</span><span className="text-pink-400">++</span><span className="text-slate-500">) {'{'}</span>{'\n'}
                              {'    '}<span className="text-slate-200">counter</span> <span className="text-pink-400">=</span> <span className="text-slate-200">counter</span> <span className="text-pink-400">+</span> <span className="text-slate-200">i</span><span className="text-slate-500">;</span>{'\n'}
                              {'    '}<span className="text-blue-400 font-medium">bolo</span><span className="text-slate-500">(</span><span className="text-emerald-400">"Count: "</span><span className="text-slate-500">,</span> <span className="text-slate-200">counter</span><span className="text-slate-500">);</span>{'\n'}
                              {'  '}<span className="text-slate-500">{'}'}</span>{'\n'}
                              <span className="text-slate-500">{'}'}</span>
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                    
                    {/* Output Section */}
                    <div className="relative bg-linear-to-br from-slate-950/80 to-slate-900/80 backdrop-blur-sm">
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
                            <div className="flex items-start space-x-3 mb-2">
                              <span className="text-emerald-400/50 text-xs mt-0.5">›</span>
                              <span className="text-emerald-300 font-medium">Assalam-o-Alaikum!</span>
                            </div>
                            <div className="flex items-start space-x-3 mb-2">
                              <span className="text-sky-400/50 text-xs mt-0.5">›</span>
                              <span className="text-sky-300">Count: <span className="text-orange-400">1</span></span>
                            </div>
                            <div className="flex items-start space-x-3 mb-2">
                              <span className="text-sky-400/50 text-xs mt-0.5">›</span>
                              <span className="text-sky-300">Count: <span className="text-orange-400">3</span></span>
                            </div>
                            <div className="flex items-start space-x-3 mb-4">
                              <span className="text-sky-400/50 text-xs mt-0.5">›</span>
                              <span className="text-sky-300">Count: <span className="text-orange-400">6</span></span>
                            </div>
                            <div className="flex items-center space-x-2 pt-4 border-t border-slate-700/30">
                              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-emerald-400 text-xs font-medium">Execution completed successfully</span>
                            </div>
                          </code>
                        </pre>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section - "Built for Programming" */}
      <section className="relative max-w-5xl mx-auto z-10 py-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-sky-500 via-blue-500 to-indigo-600 mb-4">
            Built for Programming
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Your gateway to coding with Urdu keywords
          </p>
        </motion.div>

        <article className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-20">
          {/* Stat 1 - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 bg-slate-900/5 dark:bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-slate-200/50 dark:border-slate-700/50 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all"
          >
            <div className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-blue-600 mb-3 md:mb-4">
              15+
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
              Urdu Keywords
            </h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
              Fully documented and intuitive for Urdu speakers and slang
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 md:row-span-2 bg-slate-900/5 place-content-end dark:bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-slate-200/50 dark:border-slate-700/50 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all"
          >
            <div className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-blue-600 mb-3 md:mb-4">
              7+
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
              Data Types
            </h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
              Strong typing system including number, float, lafz, faisla, and enums also
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1 bg-slate-900/5 dark:bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-slate-200/50 dark:border-slate-700/50 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all"
          >
            <div className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-blue-600 mb-3 md:mb-4">
              100%
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
              Free & Open Source
            </h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
              Built with passion
            </p>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-1 bg-slate-900/5 dark:bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-slate-200/50 dark:border-slate-700/50 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all"
          >
            <div className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-blue-600 mb-3 md:mb-4">
              ∞
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
              Possibilities
            </h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
              Build anything with familiar language
            </p>
          </motion.div>


        </article>
      </section>

      {/* Features Section - "Powerful Features" */}
      <section className="relative z-10 py-20 px-6 pointer-events-none">
        <div className="max-w-5xl mx-auto pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-sky-500 via-blue-500 to-indigo-600 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Everything you need to write modern code
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-900/5 dark:bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 dark:border-slate-700/50 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all hover:shadow-xl hover:shadow-sky-500/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-sky-500 to-blue-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-[14px] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - "Start Exploring" */}
      <section className="relative z-10 py-20 px-6 pointer-events-none">
        <div className="max-w-5xl mx-auto pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[3rem] bg-linear-to-r from-sky-500 via-blue-500 to-indigo-600 p-1"
          >
            <div className="relative bg-linear-to-br from-sky-400 via-blue-500 to-indigo-600 rounded-[2.8rem] px-12 py-20 text-center">
              {/* Noise texture overlay */}
              <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  backgroundSize: '200px 200px'
                }}
              />

              <div className="relative z-10">
                <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                  Start Exploring
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Try YaarScript in your browser - No installation required
                </p>
                <Link
                  href="/editor"
                  className="inline-flex items-center justify-center space-x-3 px-12 py-5 bg-white hover:bg-slate-50 text-sky-600 font-bold rounded-2xl shadow-2xl transition-all hover:scale-105"
                >
                  <span className="text-lg">Launch Playground</span>
                  <RiRocket2Line className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}