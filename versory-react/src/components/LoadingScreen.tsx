'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    setIsClient(true);
    
    // Set window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Hide loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Don't render on server
  if (!isClient) {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  // Predefined positions for particles (deterministic)
  const particlePositions = [
    { x: 100, y: 150 }, { x: 300, y: 200 }, { x: 500, y: 100 }, { x: 700, y: 300 },
    { x: 200, y: 400 }, { x: 400, y: 350 }, { x: 600, y: 450 }, { x: 800, y: 250 },
    { x: 150, y: 500 }, { x: 350, y: 600 }, { x: 550, y: 550 }, { x: 750, y: 400 },
    { x: 250, y: 700 }, { x: 450, y: 750 }, { x: 650, y: 650 }, { x: 850, y: 500 },
    { x: 50, y: 800 }, { x: 250, y: 900 }, { x: 450, y: 850 }, { x: 650, y: 700 }
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-versiory-black via-versiory-blue/20 to-versiory-black z-50 flex items-center justify-center"
    >
      <div className="text-center relative">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            {/* Logo */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-24 h-24 mx-auto mb-4"
            >
              <Image 
                src="/images/logo.png" 
                alt="versiory Logo" 
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            {/* Glow Effect */}
            <motion.div
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-br from-versiory-azure/30 via-versiory-pink/30 to-versiory-green/30 rounded-full blur-xl"
            />
          </div>
          
          {/* Company Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl font-bold bg-gradient-to-r from-versiory-green to-versiory-azure bg-clip-text text-transparent"
          >
            VERSIORY
          </motion.h1>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-64 h-1 bg-gradient-to-r from-versiory-green to-versiory-azure rounded-full mx-auto mb-4"
        />

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-versiory-azure/80 text-sm"
        >
          Carregando projetos...
        </motion.p>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: pos.x,
                y: pos.y,
                opacity: 0
              }}
              animate={{
                x: pos.x + (i * 20) % 100,
                y: pos.y + (i * 15) % 80,
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: (i % 4) * 0.5,
              }}
              className="absolute w-1 h-1 bg-versiory-azure rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 
