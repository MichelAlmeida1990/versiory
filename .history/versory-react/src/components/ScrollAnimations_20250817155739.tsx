'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationsProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
}

export const ScrollAnimations = ({ 
  children, 
  className = '', 
  direction = 'up', 
  delay = 0, 
  duration = 0.8,
  distance = 50,
  threshold = 0.1 
}: ScrollAnimationsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, threshold, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, threshold, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Transform calculations based on direction
  const transformUp = useTransform(scrollYProgress, [0, threshold, 1], [distance, 0, 0]);
  const transformDown = useTransform(scrollYProgress, [0, threshold, 1], [-distance, 0, 0]);
  const transformLeft = useTransform(scrollYProgress, [0, threshold, 1], [distance, 0, 0]);
  const transformRight = useTransform(scrollYProgress, [0, threshold, 1], [-distance, 0, 0]);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return transformUp;
      case 'down':
        return transformDown;
      case 'left':
        return transformLeft;
      case 'right':
        return transformRight;
      default:
        return transformUp;
    }
  };

  const transform = getTransform();

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        opacity,
        scale,
        y: direction === 'up' || direction === 'down' ? transform : 0,
        x: direction === 'left' || direction === 'right' ? transform : 0,
      }}
      transition={{
        duration,
        delay,
        ease: [0.17, 0.55, 0.55, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
}

export const ParallaxSection = ({ 
  children, 
  className = '', 
  speed = 0.5, 
  direction = 'up' 
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    direction === 'up' ? [0, -100 * speed] : [0, 100 * speed]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const StaggerContainer = ({ 
  children, 
  className = '', 
  staggerDelay = 0.1,
  direction = 'up'
}: StaggerContainerProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.17, 0.55, 0.55, 1]
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {Array.isArray(children) ? 
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        )) : 
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      }
    </motion.div>
  );
}; 