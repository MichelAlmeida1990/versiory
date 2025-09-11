'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true, delay = 0 } = options;
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: triggerOnce,
    amount: threshold,
    margin: '-100px 0px -100px 0px',
  });

  return {
    ref,
    isInView,
    style: {
      transform: isInView ? 'none' : 'translateY(50px)',
      opacity: isInView ? 1 : 0,
      transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
    },
  };
};

export const useParallaxScroll = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return {
    ref,
    style: {
      transform: `translateY(${offset}px)`,
    },
  };
};
