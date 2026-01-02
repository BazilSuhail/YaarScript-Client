"use client";

import { useRef } from "react"; 
import ScrollVelocity from "@/components/animations/ScrollVelocity";
import HeroSection from "@/components/home-page/HeroSection";
import CodePreview from "@/components/home-page/CodePreview";
import StatsSection from "@/components/home-page/StatsSection";
import FeaturesSection from "@/components/home-page/FeaturesSection";
import CTASection from "@/components/home-page/CTASection"; 
import ScrollWordReveal from "@/components/home-page/ScrollWordReveal"; 
import HomeFooter from "@/components/home-page/HomeFooter";
import NeuralGlow from "@/components/animations/NeuralGlow";
import { ReactLenis } from 'lenis/react';


export default function Home() {
  const containerRef = useRef(null); 
  
  return (
        <ReactLenis root >
    <main ref={containerRef} className="min-h-screen relative bg-linear-to-b from-slate-950 to-slate-900">
      {/* RippleGrid Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden " aria-hidden="true">
         <NeuralGlow />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Scroll Velocity */}
      <section className="max-w-5xl mx-auto mb-20 px-4 z-10 text-sky-200 ]">
        <ScrollVelocity
          texts={['YaarScript •', 'Urdu Styled Compiler •']}
          velocity={50}
          className="custom-scroll-text"
        />
      </section>

      {/* Code Preview Section */}
      <CodePreview />

      <ScrollWordReveal />
      
      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <CTASection />

      <HomeFooter /> 
    </main>
    </ReactLenis>
  );
}