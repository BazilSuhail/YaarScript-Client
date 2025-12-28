"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  RiCodeSSlashLine, 
  RiFlashlightLine, 
  RiTerminalBoxLine, 
  RiSparklingLine, 
  RiCpuLine, 
  RiShieldCheckLine 
} from "react-icons/ri";

const FeaturesSection = () => {
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
    <section className="relative z-10 py-20 px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-white  via-sky-600 to-sky-800 animate-linear-features bg-size-[200%_auto] mb-4">
            Powerful Features
          </h2>
          
          <style jsx>{`
            @keyframes linear-features {
              0%, 100% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
            }
            .animate-linear-features {
              animation: linear-features 2s ease infinite;
            }
          `}</style>
          <p className="text-xl text-slate-400">
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
              className="group bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-sky-500/50 transition-all hover:shadow-xl hover:shadow-sky-500/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-sky-500 to-blue-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-[14px] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
