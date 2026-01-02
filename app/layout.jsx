import { Geist, Geist_Mono, Outfit, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
  title: {
    default: "YaarScript – The Urdu-Based Programming Language",
    template: "%s | YaarScript"
  },
  description: "A modern, professional programming language that brings the warmth of Urdu to software development. Built with Rust and WebAssembly.",
  keywords: [
    "YaarScript", "yaarscript", "YaarScript", "Yaarscript", "yaarScript", "yaar script", "urdu programming", "coding in urdu", "bazil suhail", "urdu script"
  ],
  authors: [{ name: "Bazil Suhail" }],
  metadataBase: new URL("https://yaarscript.netlify.app"),
  openGraph: {
    title: "YaarScript | Coding in Urdu",
    description: "Experience the fusion of cultural heritage and modern tech. YaarScript is a high-performance language compiled to WebAssembly.",
    url: "https://yaarscript.netlify.app",
    siteName: "YaarScript",
    images: [{ url: "/yaar-script.webp", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "YaarScript",
    "url": "https://yaarscript.netlify.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://yaarscript.netlify.app/docs?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "hasPart": [
      {
        "@type": "WebPage",
        "@id": "https://yaarscript.netlify.app/docs",
        "name": "Documentation",
        "description": "Learn YaarScript syntax and features"
      },
      {
        "@type": "WebPage",
        "@id": "https://yaarscript.netlify.app/editor",
        "name": "Playground",
        "description": "Write and run YaarScript code online"
      }
    ]
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="google-site-verification" content="yw2lbThbcjn36B3nLMMWy7CUBQxk4GblW0fgZgex-oE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-sky-500/30`}
      >
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
