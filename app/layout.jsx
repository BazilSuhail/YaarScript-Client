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
  metadataBase: new URL("https://yaarscript.netlify.app"),
  applicationName: "YaarScript",
  category: "technology",
  creator: "Bazil Suhail",
  publisher: "YaarScript",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "YaarScript", "Urdu programming language", "Urdu coding", "Roman Urdu programming", "Rust programming language", "WebAssembly compiler", "browser code editor", "programming language for beginners"
  ],
  authors: [{ name: "Bazil Suhail" }],
  openGraph: {
    title: "YaarScript | Coding in Urdu",
    description: "Experience the fusion of cultural heritage and modern tech. YaarScript is a high-performance language compiled to WebAssembly.",
    url: "https://yaarscript.netlify.app",
    siteName: "YaarScript",
    images: [{ url: "/yaar-script.webp", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YaarScript | Coding in Urdu",
    description: "A Rust-powered Urdu-slang programming language and browser playground.",
    images: ["/yaar-script.webp"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "YaarScript",
    "url": "https://yaarscript.netlify.app",
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
    ],
    "softwareApplication": {
      "@type": "SoftwareApplication",
      "name": "YaarScript",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Web",
      "description": "A Rust and WebAssembly-powered Urdu-slang programming language."
    }
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
