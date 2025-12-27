"use client";

import React from "react";
import { motion } from "framer-motion";

const CodePreview = () => {
  return (
    <section className="relative py-20 px-4 z-10">
      {/* Floating code preview */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-245 mx-auto"
      >
        <div className="relative group">
          {/* Animated background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 rounded-md blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>

          {/* Main terminal container */}
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-lg shadow-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm">

            {/* Terminal Header */}
            <div className="relative bg-gradient-to-r from-slate-800/90 via-slate-850/90 to-slate-800/90 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-slate-700/50">
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
  );
};

export default CodePreview;
