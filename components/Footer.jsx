'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiGithubFill, RiUser3Line, RiCodeSSlashLine } from "react-icons/ri";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const Footer = () => {
  const pathname = usePathname();

  // If the current page is "/", do not render the footer
  if (pathname === "/") return null;

  const links = [
    {
      icon: <RiUser3Line className="w-5 h-5" />,
      label: "Bazil Suhail",
      href: "https://bazilsuhail.netlify.app",
      description: "Creator"
    },
    {
      icon: <RiGithubFill className="w-5 h-5" />,
      label: "Client Repo",
      href: "https://github.com/BazilSuhail/YaarScript-Client",
      description: "Frontend"
    },
    {
      icon: <RiCodeSSlashLine className="w-5 h-5" />,
      label: "Compiler Repo",
      href: "https://github.com/BazilSuhail/YaarScript",
      description: "Rust Backend"
    }
  ];

  return (
    <footer className="relative bg-linear-to-b from-slate-950 to-slate-900 ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-center space-y-8">
          
          {/* Logo/Brand */}
          <div className="text-center">
            <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 mb-2 ${poppins.className}`}>
              YaarScript
            </h3>
            <p className={`text-sm text-slate-400 ${poppins.className}`}>
              Apki Zuban, Apki Marzi ka Code
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="flex items-center space-x-3 px-6 py-3 bg-slate-900/50 hover:bg-slate-800/70 border border-slate-800/50 hover:border-sky-500/50 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/20">
                  {/* Icon */}
                  <div className="text-sky-400 group-hover:text-sky-300 transition-colors">
                    {link.icon}
                  </div>
                  
                  {/* Text */}
                  <div className="text-left">
                    <div className={`text-sm font-semibold text-slate-200 group-hover:text-white transition-colors ${poppins.className}`}>
                      {link.label}
                    </div>
                    <div className={`text-xs text-slate-500 group-hover:text-slate-400 transition-colors ${poppins.className}`}>
                      {link.description}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          {/* Copyright */}
          <div className="text-center">
            <p className={`text-xs text-slate-500 ${poppins.className}`}>
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
