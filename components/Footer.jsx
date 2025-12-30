"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiGithubFill, RiUser3Line, RiCodeSSlashLine } from "react-icons/ri";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  
  const pathname = usePathname();

  // If the current page is "/", do not render the footer
  if (pathname === "/") return null;
  const links = [
    {
      icon: <RiUser3Line className="w-6 h-6 md:w-8 md:h-8" />,
      label: "Bazil Suhail",
      href: "https://bazilsuhail.netlify.app",
      description: "Creator",
    },
    {
      icon: <RiGithubFill className="w-6 h-6 md:w-8 md:h-8" />,
      label: "Client Repo",
      href: "https://github.com/BazilSuhail/YaarScript-Client",
      description: "Frontend",
    },
    {
      icon: <RiCodeSSlashLine className="w-6 h-6 md:w-8 md:h-8" />,
      label: "Compiler Repo",
      href: "https://github.com/BazilSuhail/YaarScript",
      description: "Rust Backend",
    },
  ];

  return (
    <footer className="relative">
      <div className="w-full bg-linear-to-l from-slate-600 via-slate-700 to-slate-600 h-1 mx-auto"></div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Logo / Brand */}
          <div className="text-center">
            <h3
              className={`${poppins.className} text-4xl md:text-6xl lg:text-[110px] font-bold`}
              style={{
                background: "linear-gradient(90deg, #fff, #38bdf8, #0284c7, #fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% 200%",
                animation: "gradientShift 3s ease infinite",
              }}
            >
              YaarScript
            </h3>

            <p
              className={`${poppins.className} text-lg lg:text-2xl mt-4 text-sky-200`}
              style={{ fontWeight: 500 }}
            >
              Apki Zuban, Apki Marzi wala Code
            </p>

            <style jsx>{`
              @keyframes gradientShift {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
            `}</style>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:mt-12 lg:gap-8">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto"
              >
                <div className="flex items-center space-x-4 md:space-x-5 px-8 py-5 md:px-10 md:py-6 lg:px-12 lg:py-7 bg-slate-800/50 hover:bg-slate-800/70 border border-slate-800/50 hover:border-sky-500/50 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/25">
                  <div className="text-sky-400 group-hover:text-sky-300 transition-colors">
                    {link.icon}
                  </div>

                  <div className="text-left">
                    <div
                      className={`${poppins.className} text-base md:text-lg lg:text-xl font-semibold text-slate-200 group-hover:text-white transition-colors`}
                      style={{ fontWeight: 400 }}
                    >
                      {link.label}
                    </div>
                    <div
                      className={`${poppins.className} text-sm md:text-base text-slate-500 group-hover:text-slate-400 transition-colors`}
                      style={{ fontWeight: 400 }}
                    >
                      {link.description}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-linear-to-r from-transparent via-slate-700 to-transparent" />

          {/* Copyright */}
          <div className="text-center">
            <p
              className={`${poppins.className} text-xs text-slate-300`}
              style={{ fontWeight: 400 }}
            >
              © {new Date().getFullYear()} YaarScript. Built with{" "}
              <span className="text-sky-400">♥</span> by Bazil Suhail
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
