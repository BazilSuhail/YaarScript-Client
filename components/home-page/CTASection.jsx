"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiRocket2Line } from "react-icons/ri";

const CTASection = () => {
  return (
    <section className="relative z-10 py-20 px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 p-1"
        >
          <div className="relative bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 rounded-[2.8rem] px-12 py-20 text-center">
            {/* Noise texture overlay */}
            <div 
              className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 200px'
              }}
            />

            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 via-blue-300 to-white animate-gradient-cta bg-[length:200%_auto] mb-6">
                Start Exploring
              </h2>
              
              <style jsx>{`
                @keyframes gradient-cta {
                  0%, 100% {
                    background-position: 0% 50%;
                  }
                  50% {
                    background-position: 100% 50%;
                  }
                }
                .animate-gradient-cta {
                  animation: gradient-cta 2s ease infinite;
                }
              `}</style>
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
  );
};

export default CTASection;
