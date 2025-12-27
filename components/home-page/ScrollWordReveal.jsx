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
    <section className="mx-auto py-30 px-6 max-w-5xl md:mb-12">
      <div
        ref={containerRef}
        className={`${poppins.className} relative mx-auto text-[22px] lg:text-[60px] font-bold leading-relaxed`}
      >
        {/* Static gray background */}
        <div className="absolute inset-0 flex flex-wrap justify-center text-slate-200 opacity-25 pointer-events-none select-none">
          {words.map((word, i) => (
            <span key={`bg-${i}`} className="mr-2">
              {word}
            </span>
          ))}
        </div>

        {/* Animated gradient foreground */}
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
                className="inline-block mr-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 animate-gradient-text"
              >
                {word}
              </motion.span>
            );
          })}
        </div>
      </div>

      {/* Gradient animation style */}
      <style jsx>{`
        @keyframes gradient-text {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .animate-gradient-text {
          background-size: 200% 100%; /* important to make gradient move */
          animation: gradient-text 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ScrollWordReveal;
