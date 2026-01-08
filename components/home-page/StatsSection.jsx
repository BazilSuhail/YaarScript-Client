"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const StatsSection = () => {
  const stats = [
    {
      value: "15+",
      title: "Urdu Keywords",
      description: "Fully documented and intuitive for Urdu speakers and slang",
      span: "md:col-span-2",
      rowSpan: ""
    },
    {
      value: "7+",
      title: "Data Types",
      description: "Strong typing system including number, float, lafz, faisla, and enums also",
      span: "",
      rowSpan: "md:row-span-2 place-content-end"
    },
    {
      value: "100%",
      title: "Free & Open Source",
      description: "Built with passion",
      span: "",
      rowSpan: ""
    },
    {
      value: "∞",
      title: "Possibilities",
      description: "Build anything with familiar language",
      span: "",
      rowSpan: ""
    }
  ];

  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <section ref={containerRef} className="relative max-w-5xl mx-auto z-10 py-10 px-6">
      {/* Scroll animation ONLY on the heading */}
      <motion.div style={{ opacity, scale, y }} className="text-center mb-16">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl pb-2 font-black text-transparent bg-clip-text bg-linear-to-r from-white via-sky-600 to-sky-800 animate-gradient bg-size-[200%_auto] mb-4 ${poppins.className}`}>
          Built for Programming
        </h2>
        
        <style jsx>{`
          @keyframes gradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient {
            animation: gradient 2s ease infinite;
          }
        `}</style>
        <p className={`text-base sm:text-lg md:text-xl text-slate-200 font-normal ${poppins.className}`}>
          Your gateway to coding with Urdu keywords
        </p>
      </motion.div>

      {/* Static grid as requested */}
      <article className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-20">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className={`col-span-1 ${stat.span} ${stat.rowSpan} bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-slate-700/50 hover:border-sky-500/50 transition-all`}
          >
            <div className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-sky-700 mb-3 md:mb-4 ${poppins.className}`}>
              {stat.value}
            </div>
            <h3 className={`text-lg sm:text-xl md:text-2xl font-medium text-slate-50 mb-2 ${poppins.className}`}>
              {stat.title}
            </h3>
            <p className={`text-sm md:text-base text-slate-400 font-normal ${poppins.className}`}>
              {stat.description}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default StatsSection;
