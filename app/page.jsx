"use client";

import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import RippleGrid from "@/components/home/FaultyTerminal";
import ScrollVelocity from "@/components/home/ScrollVelocity";
import HeroSection from "@/components/home-page/HeroSection";
import CodePreview from "@/components/home-page/CodePreview";
import StatsSection from "@/components/home-page/StatsSection";
import FeaturesSection from "@/components/home-page/FeaturesSection";
import CTASection from "@/components/home-page/CTASection";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={containerRef} className="min-h-screen relative bg-linear-to-b from-slate-950 to-slate-900">
      {/* RippleGrid Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden opacity-55 z-0" aria-hidden="true">
        <RippleGrid
          enableRainbow={true}
          gridColor="#ffffff"
          rippleIntensity={0.03}
          gridSize={45}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={2}
          opacity={0.8}
        />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Scroll Velocity */}
      <section className="max-w-5xl mx-auto mb-20 px-4 z-10 text-white">
        <ScrollVelocity
          texts={['React Bits', 'Scroll Down']}
          velocity={50}
          className="custom-scroll-text"
        />
      </section>

      {/* Code Preview Section */}
      <CodePreview />

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}