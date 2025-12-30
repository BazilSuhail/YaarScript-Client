"use client";

import React from "react";
import { motion } from "framer-motion";
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

  return (
    <section className="relative max-w-5xl mx-auto z-10 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl pb-2 font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-400 via-sky-600 to-sky-800 animate-gradient bg-[length:200%_auto] mb-4 ${poppins.className}`}>
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

      <article className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-20">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            viewport={{ once: true }}
            className={`col-span-1 ${stat.span} ${stat.rowSpan} bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-slate-700/50 hover:border-sky-500/50 transition-all`}
          >
            <div className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700 mb-3 md:mb-4 ${poppins.className}`}>
              {stat.value}
            </div>
            <h3 className={`text-lg sm:text-xl md:text-2xl font-medium text-slate-50 mb-2 ${poppins.className}`}>
              {stat.title}
            </h3>
            <p className={`text-sm md:text-base text-slate-400 font-normal ${poppins.className}`}>
              {stat.description}
            </p>
          </motion.div>
        ))}
      </article>
    </section>
  );
};

export default StatsSection;
