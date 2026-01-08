'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});

const ScrollWordReveal = ({
  text = `YaarScript is a slang-infused Urdu styled programming language that turns regular code into cool slang. Perfect for coding as it makes every word carry personality and flair.`,
}) => {
  const containerRef = useRef(null);
  const words = text.split(' ');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const SCROLL_END = 0.7;

  return (
    <section className="mx-auto py-30 sm:px-6 max-w-5xl md:mb-12">
      <div
        ref={containerRef}
        className={`${poppins.className} relative mx-auto text-[32px] sm:text-[44px] md:text-[54px] lg:text-[60px] font-bold leading-relaxed`}
      >
        {/* Static gray background */}
        <div className="absolute inset-0 flex flex-wrap justify-center pointer-events-none select-none">
          {words.map((word, i) => (
            <span 
              key={`bg-${i}`} 
              className="mr-2 text-transparent"
              style={{ WebkitTextStroke: '1px rgba(226, 232, 240, 0.1)' }} // Faint outline
            >
              {word}
            </span>
          ))}
        </div>

        {/* Animated linear foreground */}
        <div className="relative flex flex-wrap justify-center">
          {words.map((word, i) => {
            const start = (i / words.length) * SCROLL_END;
            const end = ((i + 1) / words.length) * SCROLL_END;

            const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
            const x = useTransform(scrollYProgress, [start, end], [-2, 0]);

            return (
              <motion.span
                key={`motion-${i}`}
                style={{ 
                  opacity, 
                  x,
                  WebkitTextStroke: '1.5px #0ea5e9'
                }}
                className="inline-block mr-2 text-transparent"
              >
                {word}
              </motion.span>
            );
          })}
        </div>
      </div>
    </section>

  );
};

export default ScrollWordReveal;
