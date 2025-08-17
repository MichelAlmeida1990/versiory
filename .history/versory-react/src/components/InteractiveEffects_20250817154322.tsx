'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Sparkles, Zap, Star, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const InteractiveEffects = () => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number; life: number }>>([]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  const springRotateX = useSpring(rotateX, { damping: 20, stiffness: 300 });
  const springRotateY = useSpring(rotateY, { damping: 20, stiffness: 300 });

  // Set window size on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
      mouseX.set(x - rect.width / 2);
      mouseY.set(y - rect.height / 2);

      // Create particles on mouse move
      if (Math.random() > 0.7) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          life: 1
        };
        setParticles(prev => [...prev, newParticle]);
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const x = e.clientX - (containerRef.current.getBoundingClientRect().left);
      const y = e.clientY - (containerRef.current.getBoundingClientRect().top);

      // Create explosion effect
      for (let i = 0; i < 10; i++) {
        const newParticle = {
          id: Date.now() + Math.random() + i,
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          life: 1
        };
        setParticles(prev => [...prev, newParticle]);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('click', handleClick);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('click', handleClick);
      }
    };
  }, [mouseX, mouseY]);

  // Particle animation
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            life: particle.life - 0.02
          }))
          .filter(particle => particle.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  // Canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = windowSize.width;
    canvas.height = windowSize.height;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw particles
    particles.forEach(particle => {
      ctx.save();
      ctx.globalAlpha = particle.life;
      ctx.fillStyle = `hsl(${particle.id % 360}, 70%, 60%)`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  }, [particles, windowSize]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * (windowSize.width || 1200),
              y: Math.random() * (windowSize.height || 800),
              opacity: 0,
              scale: 0
            }}
            animate={{
              x: Math.random() * (windowSize.width || 1200),
              y: Math.random() * (windowSize.height || 800),
              opacity: [0, 1, 0.8, 0],
              scale: [0, 1.2, 1, 0.8]
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
            className="absolute"
          >
            {i % 4 === 0 && <Sparkles size={20} className="text-versory-azure drop-shadow-lg" />}
            {i % 4 === 1 && <Zap size={20} className="text-versory-green drop-shadow-lg" />}
            {i % 4 === 2 && <Star size={20} className="text-versory-pink drop-shadow-lg" />}
            {i % 4 === 3 && <Heart size={20} className="text-versory-brown drop-shadow-lg" />}
          </motion.div>
        ))}
      </div>

      {/* Mouse Follower */}
      <motion.div
        style={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
          rotateX: springRotateX,
          rotateY: springRotateY,
        }}
        className="absolute w-12 h-12 pointer-events-none"
      >
        <div className="w-full h-full bg-gradient-to-br from-versory-green/20 to-versory-azure/20 rounded-full border border-versory-green/30 backdrop-blur-sm flex items-center justify-center">
          <div className="w-2 h-2 bg-versory-green rounded-full animate-pulse" />
        </div>
      </motion.div>

      {/* Interactive Grid */}
      <div className="absolute inset-0 grid grid-cols-20 grid-rows-20 opacity-10">
        {[...Array(400)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="border border-versory-azure/20"
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveEffects; 