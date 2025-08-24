'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Sparkles, Zap, Star, Heart } from 'lucide-react';

const InteractiveEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number; life: number }>>([]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  const springRotateX = useSpring(rotateX, { damping: 20, stiffness: 300 });
  const springRotateY = useSpring(rotateY, { damping: 20, stiffness: 300 });

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

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

      // Create particles on mouse move (only on client)
      if (isClient && Math.random() > 0.7) {
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

      // Create explosion effect (only on client)
      if (isClient) {
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
  }, [mouseX, mouseY, isClient]);

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

  // Canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isClient) return;

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
  }, [particles, windowSize, isClient]);

  // Don't render anything on server
  if (!isClient) {
    return null;
  }

  // Predefined positions for floating elements (deterministic)
  const floatingPositions = [
    { x: 100, y: 150 }, { x: 300, y: 200 }, { x: 500, y: 100 }, { x: 700, y: 300 },
    { x: 200, y: 400 }, { x: 400, y: 350 }, { x: 600, y: 450 }, { x: 800, y: 250 },
    { x: 150, y: 500 }, { x: 350, y: 600 }, { x: 550, y: 550 }, { x: 750, y: 400 },
    { x: 250, y: 700 }, { x: 450, y: 750 }, { x: 650, y: 650 }, { x: 850, y: 500 },
    { x: 50, y: 800 }, { x: 250, y: 900 }, { x: 450, y: 850 }, { x: 650, y: 700 },
    { x: 100, y: 1000 }, { x: 300, y: 950 }, { x: 500, y: 900 }, { x: 700, y: 750 },
    { x: 150, y: 1100 }, { x: 350, y: 1050 }, { x: 550, y: 1000 }, { x: 750, y: 850 },
    { x: 200, y: 1200 }, { x: 400, y: 1150 }, { x: 600, y: 1100 }, { x: 800, y: 950 }
  ];

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingPositions.map((pos, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: pos.x,
              y: pos.y,
              opacity: 0,
              scale: 0
            }}
            animate={{
              x: pos.x + (i * 20) % 100,
              y: pos.y + (i * 15) % 80,
              opacity: [0, 1, 0.8, 0],
              scale: [0, 1.2, 1, 0.8]
            }}
            transition={{
              duration: 8 + (i % 6),
              repeat: Infinity,
              delay: (i % 8) * 0.5,
              ease: "easeInOut"
            }}
            className="absolute"
          >
            {i % 4 === 0 && <Sparkles size={20} className="text-versiory-azure drop-shadow-lg" />}
            {i % 4 === 1 && <Zap size={20} className="text-versiory-green drop-shadow-lg" />}
            {i % 4 === 2 && <Star size={20} className="text-versiory-pink drop-shadow-lg" />}
            {i % 4 === 3 && <Heart size={20} className="text-versiory-brown drop-shadow-lg" />}
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
        <div className="w-full h-full bg-gradient-to-br from-versiory-green/20 to-versiory-azure/20 rounded-full border border-versiory-green/30 backdrop-blur-sm flex items-center justify-center">
          <div className="w-2 h-2 bg-versiory-green rounded-full animate-pulse" />
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
              delay: (i % 20) * 0.1,
            }}
            className="border border-versiory-azure/20"
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveEffects; 
