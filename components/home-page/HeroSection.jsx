"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { RiRocket2Line, RiGlobalLine, RiLightbulbLine } from "react-icons/ri";
import { Poppins } from "next/font/google";
import FuzzyText from "@/components/animations/FuzzyText";

const poppins = Poppins({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-16 md:pt-22 flex items-center justify-center overflow-hidden z-10 pointer-events-none">
      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-sky-950/30 text-sky-400 rounded-full text-xs md:text-sm font-semibold mb-8 border border-sky-800">
            <RiGlobalLine className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">Open Source • Roman Urdu • WebAssembly</span>
            <span className="sm:hidden">Open Source • Urdu Based</span>
          </div>

          <h1 className={`text-[28px]  md:text-6xl lg:text-[55px] font-black text-slate-50 mb-6 leading-tight ${poppins.className}`}>
            <FuzzyText
              text="Apki Zuban"
              font={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 110 }}
              color="#ffffff"
              gradientMiddle="#38bdf8"
              gradientEnd="#075985"
              baseIntensity={1}
              hoverIntensity={4}
              className="lg:scale-125"
            />
            <span className="block mt-1">
              <FuzzyText
                text="Apki marzi wala Code"
                font={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 55 }}
                color="#7dd3fc"
                gradientMiddle="#38bdf8"
                gradientEnd="#0284c7"
                baseIntensity={1}
                hoverIntensity={4}
                className="lg:scale-125"
              />
            </span>
          </h1>

          <p className={`text-[13px] sm:text-base md:text-lg text-slate-100 max-w-2xl mx-auto mb-10 leading-relaxed font-medium ${poppins.className}`}>
            YaarScript ek modern compiler hai jo <strong>Urdu/Roman Urdu keywords</strong> ke sath programming ko asaan banata hai.
            Apni zuban mein clean aur powerful code likho.
          </p>

          <div className="flex gap-3 justify-center mb-16">
            <Link
              href="/editor"
              className="group pointer-events-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-linear-to-r from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-700 text-white text-sm font-semibold rounded-xl shadow-lg shadow-sky-500/20 transition-all hover:shadow-xl hover:shadow-sky-500/30"
            >
              <RiRocket2Line className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Try Editor</span>
            </Link>
            <Link
              href="/docs"
              className="inline-flex pointer-events-auto items-center justify-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 text-sm font-semibold rounded-xl border border-slate-700 transition-all hover:border-sky-500"
            >
              <RiLightbulbLine className="w-4 h-4" />
              <span>Documentation</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
