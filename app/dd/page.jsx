"use client";

import React, { useRef } from "react"; 
import VariableProximity from "@/components/animations/VariableProximity";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-b text-white from-slate-950 to-slate-900">
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "600px",
          height: "200px",
        }}
      >
        <VariableProximity
          containerRef={containerRef}
          label="Hover me! And then star React Bits on GitHub, or else..."
          className="variable-proximity-demo"
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          radius={150}
          falloff="linear"
        />
      </div>
    </main>
  );
}
