"use client";

import { useRef, useLayoutEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'motion/react';

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return undefined;

    const updateWidth = () => setWidth(ref.current?.offsetWidth ?? 0);
    const observer = new ResizeObserver(updateWidth);
    observer.observe(ref.current);
    updateWidth();

    return () => observer.disconnect();
  }, [ref]);

  return width;
}

export const ScrollVelocity = ({
  scrollContainerRef,
  texts = [],
  velocity = 32,
  className = '',
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle
}) => {
  function VelocityText({
    children,
    baseVelocity = velocity,
    scrollContainerRef,
    className = '',
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle
  }) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400
    });
    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);
    const directionRef = useRef(baseVelocity < 0 ? -1 : 1);
    const velocityInputMax = velocityMapping?.input?.[1] || 1000;
    const velocityOutputMax = velocityMapping?.output?.[1] || 1.5;

    function wrap(min, max, v) {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }

    useAnimationFrame((t, delta) => {
      if (copyWidth === 0) return;

      const currentScrollVelocity = smoothVelocity.get();
      if (Math.abs(currentScrollVelocity) > 8) {
        const scrollDirection = currentScrollVelocity > 0 ? 1 : -1;
        directionRef.current = scrollDirection * (baseVelocity < 0 ? -1 : 1);
      }

      const scrollBoost = Math.min(
        Math.abs(currentScrollVelocity) / velocityInputMax,
        velocityOutputMax
      );
      const moveBy = directionRef.current * Math.abs(baseVelocity) * (1 + scrollBoost) * (delta / 1000);
      baseX.set(wrap(-copyWidth, 0, baseX.get() + moveBy));
    });

    const x = useTransform(baseX, (value) => {
      if (copyWidth === 0) return '0px';
      return `${wrap(-copyWidth, 0, value)}px`;
    });

    const spans = [];
    for (let i = 0; i < (numCopies ?? 1); i++) {
      spans.push(
        <span className={`shrink-0 ${className}`} key={i} ref={i === 0 ? copyRef : null}>
          {children}
        </span>
      );
    }

    return (
      <div className={`${parallaxClassName || ''} scroll-velocity-mask relative overflow-hidden`} style={{position: 'relative', ...parallaxStyle}}>
        <motion.div
          className={`${scrollerClassName} flex whitespace-nowrap text-center font-sans text-[45px] sm:text-[28px] font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-20]`}
          style={{ x, ...scrollerStyle }}
        >
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          <span 
            className='text-transparent bg-clip-text' 
            style={{ 
              WebkitTextStroke: '1.5px #0ea5e9', // Using sky-500 for the stroke
              backgroundClip: 'text'
            }}
          >
          {text}&nbsp;
          </span>
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;
