import { Geist, Geist_Mono } from "next/font/google";
import { Outfit, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MetadataHandler from "./metaData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: "YaarScript – Urdu Programming Language",
  description: "A modern, professional programming language bringing the warmth of Urdu to software development. Built with Rust and WebAssembly for high-performance, culturally accessible coding.",
  keywords: [
    "YaarScript",
    "yaar script",
    "yaar script urdu",
    "yaar script coding",
    "Programming in Urdu",
    "Urdu Coding Language",
    "yaar script language",
    "yaar script bazil suhail",
    "Urdu Programming Language",
    "Rust Language",
    "WebAssembly",
    "Wasm",
    "Localized Coding",
    "Urdu Scripting",
    "Bazil Suhail"
  ],
  authors: [{ name: "Bazil Suhail" }],
  creator: "Bazil Suhail",
  publisher: "YaarScript",
  robots: "index, follow",
  metadataBase: new URL("https://yaarscript.netlify.app"),
  openGraph: {
    title: "YaarScript | Coding in Urdu",
    description: "Experience the fusion of cultural heritage and modern tech. YaarScript is a high-performance language compiled to WebAssembly.",
    url: "https://yaarscript.netlify.app",
    siteName: "YaarScript",
    images: [
      {
        url: "/yaar-script.webp", // Make sure to add a cool preview image in your public folder!
        width: 1200,
        height: 630,
        alt: "YaarScript - Program in Urdu Slang",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="description" content="YaarScript is a modern, professional programming language that combines the familiarity of Urdu with the power of Rust and WebAssembly for a high-performance, culturally accessible coding experience." />
        <meta name="google-site-verification" content="yw2lbThbcjn36B3nLMMWy7CUBQxk4GblW0fgZgex-oE" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-sky-500/30`}
      >
        <MetadataHandler/>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              const theme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              
              if (theme === 'dark' || (!theme && prefersDark)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();
          `}
        </Script>
        <Navbar />
        {children} 
      </body>
    </html>
  );
}
