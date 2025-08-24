'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Hero = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [selectionProgress, setSelectionProgress] = useState(0);
  
  const companyName = "VERSIORY";
  const description = "Desenvolvimento web moderno e inovador";
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        if (charIndex < companyName.length) {
          setCharIndex(charIndex + 1);
        } else if (textIndex === 0) {
          setTextIndex(1);
          setCharIndex(0);
        }
      }, 150);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, charIndex, textIndex, companyName.length]);

  // Selection animation effect
  useEffect(() => {
    if (isSelected) {
      const timer = setInterval(() => {
        setSelectionProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => {
              setIsSelected(false);
              setSelectionProgress(0);
            }, 500);
            return 100;
          }
          return prev + 5;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isSelected]);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center px-4 py-16 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-extrabold leading-tight mb-6 relative cursor-pointer select-none"
              onMouseEnter={() => setIsSelected(true)}
              onMouseLeave={() => {
                if (!isSelected) {
                  setIsSelected(false);
                  setSelectionProgress(0);
                }
              }}
            >
              {/* Selection background */}
              {isSelected && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${selectionProgress}%` }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg"
                  style={{ zIndex: -1 }}
                />
              )}
              
               {companyName.split('').map((letter, index) => (
                 <motion.span
                   key={index}
                   initial={{ opacity: 0, y: 50, scale: 0.5 }}
                   animate={{ 
                     opacity: charIndex > index ? 1 : 0,
                     y: charIndex > index ? [0, -5, 0] : 50,
                     scale: charIndex > index ? 1 : 0.5,
                     rotateY: charIndex > index ? [0, 5, 0] : 0
                   }}
                   transition={{ 
                     duration: 0.3,
                     delay: index * 0.1,
                     type: "spring",
                     stiffness: 200,
                     damping: 10,
                     y: {
                       duration: 2,
                       repeat: Infinity,
                       repeatType: "reverse",
                       delay: index * 0.1 + 1
                     },
                     rotateY: {
                       duration: 3,
                       repeat: Infinity,
                       repeatType: "reverse",
                       delay: index * 0.1 + 1.5
                     }
                   }}
                   className={`inline-block ${isSelected ? 'text-white' : 'bg-gradient-to-r from-versiory-green to-versiory-azure bg-clip-text text-transparent'}`}
                   style={{
                     animationDelay: `${index * 0.1}s`,
                     transformStyle: "preserve-3d"
                   }}
                 >
                   {letter}
                 </motion.span>
               ))}
                               <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1 h-20 bg-versiory-azure ml-1"
                />
             </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ 
              opacity: textIndex === 1 ? 1 : 0, 
              x: textIndex === 1 ? 0 : 100 
            }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
                                     <motion.p
              className={`text-3xl md:text-4xl mb-12 max-w-3xl mx-auto font-bold ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}
            >
              {description.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: textIndex === 1 ? 1 : 0,
                    y: textIndex === 1 ? [0, -3, 0] : 20
                  }}
                  transition={{ 
                    duration: 0.3,
                    delay: 0.8 + (index * 0.05),
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1.2 + (index * 0.05)
                    }
                  }}
                                     className="inline-block"
                   style={{ whiteSpace: 'pre' }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: textIndex === 1 ? 1 : 0, 
              y: textIndex === 1 ? 0 : 50 
            }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex justify-center items-center"
          >
            <motion.button
              className="px-10 py-4 bg-versiory-green text-versiory-black font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Começar Projeto
            </motion.button>
          </motion.div>
        </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} className="text-versiory-azure" />
      </motion.div>

      {/* Theme Toggle */}
      <ThemeToggle />
    </section>
  );
};

export default Hero; 
