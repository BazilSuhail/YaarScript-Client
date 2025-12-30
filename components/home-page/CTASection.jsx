"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiRocket2Line } from "react-icons/ri";
import MetaBalls from "../animations/MetaBalls";

const CTASection = () => {
  return (
    <section className="relative z-10 py-20 px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] backdrop-blur-xs bg-sky-900/10 p-1"
        >
          <div className="relative bg-transparent rounded-[2.8rem] px-12 py-30 text-center overflow-hidden">
            
            {/* MetaBalls Background - Absolute positioning */}
            <div className="absolute inset-0 pointer-events-auto z-0">
              <MetaBalls
                color="#f0f9ff"
                cursorBallColor="#38bdf8"
                cursorBallSize={3}
                ballCount={22}
                animationSize={20}
                enableMouseInteraction={true}
                enableTransparency={true}
                hoverSmoothness={0.05}
                clumpFactor={1.2}
                speed={0.4}
              />
            </div>

            {/* Noise texture overlay */}
            <div 
              className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none z-[1]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 200px'
              }}
            />

            <div className="relative z-10 pointer-events-none">
              <h2 className="text-5xl md:text-6xl pb-4 font-black text-transparent bg-clip-text bg-linear-to-br from-sky-900 via-sky-400 to-sky-700 animate-gradient-cta bg-[length:200%_auto] mb-6">
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
                className="inline-flex items-center justify-center space-x-3 px-8 py-3 bg-white hover:bg-slate-50 text-sky-600 font-bold rounded-xl shadow-2xl transition-all hover:scale-105 pointer-events-auto"
              >
                <span className="text-md">Launch Playground</span>
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
