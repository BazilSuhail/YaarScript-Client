'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const ScrollWordReveal = ({
  text = `DiObral is a luxury fashion brand offering timeless, high-quality clothing with minimalist elegance. It blends sophistication and modern style, focusing on craftsmanship and clean design for confident self-expression.`,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const words = text.split(' ');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const SCROLL_END = 0.7;

  return (
    <div className="max-w-[1024px] mx-auto px-4 lg:py-32">
      <div
        ref={containerRef}
        className="relative mx-auto text-[22px] lg:text-[37px] font-semibold leading-relaxed"
      >
        {/* Static gray background */}
        <div className="absolute inset-0 flex flex-wrap justify-center text-gray-400 opacity-40 pointer-events-none select-none">
          {words.map((word, i) => (
            <span key={`bg-${i}`} className="whitespace-pre mr-1">
              {word}
            </span>
          ))}
        </div>

        {/* Animated foreground */}
        <div className="relative flex flex-wrap justify-center">
          {words.map((word, i) => {
            const start = (i / words.length) * SCROLL_END;
            const end = ((i + 1) / words.length) * SCROLL_END;

            const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
            const x = useTransform(scrollYProgress, [start, end], [-2, 0]);

            return (
              <motion.span
                key={`motion-${i}`}
                style={{ opacity, x }}
                className="inline-block whitespace-pre mr-1 text-red-700"
              >
                {word}
              </motion.span>
            );
          })}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-16 lg:mt-24 gap-y-6 gap-x-12">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-2xl lg:text-4xl font-bold text-red-700">40k+</p>
          <p className="text-xs lg:text-[15px] mt-2 ml-1 text-gray-500">
            Over 40,000 delighted customers trust our brand.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg lg:scale-[1.1]">
          <p className="text-2xl lg:text-4xl font-bold text-red-800">200k+</p>
          <p className="text-xs lg:text-[15px] mt-2 ml-1 text-gray-500">
            200,000+ elegant fashion pieces sold worldwide.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-2xl lg:text-4xl font-bold text-red-700">15+</p>
          <p className="text-xs lg:text-[15px] mt-2 ml-1 text-gray-500">
            15+ years crafting timeless luxury fashion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollWordReveal;
