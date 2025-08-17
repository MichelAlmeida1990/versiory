'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Smartphone, Code, Palette } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
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
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-versory-black">
      {/* Background Image Banner */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/banner.png')"
          }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-versory-black/70 via-versory-black/50 to-versory-black/30" />
      </div>

                           {/* Content */}
        <div className="relative z-10 text-center px-4 py-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
                         <motion.h1
               className="text-6xl md:text-8xl font-extrabold leading-tight mb-6"
             >
               {companyName.split('').map((letter, index) => (
                 <motion.span
                   key={index}
                   initial={{ opacity: 0, y: 50, scale: 0.5 }}
                   animate={{ 
                     opacity: charIndex > index ? 1 : 0,
                     y: charIndex > index ? 0 : 50,
                     scale: charIndex > index ? 1 : 0.5
                   }}
                   transition={{ 
                     duration: 0.3,
                     delay: index * 0.1,
                     type: "spring",
                     stiffness: 200,
                     damping: 10
                   }}
                   className="inline-block bg-gradient-to-r from-versory-green to-versory-azure bg-clip-text text-transparent"
                   style={{
                     animationDelay: `${index * 0.1}s`
                   }}
                 >
                   {letter}
                 </motion.span>
               ))}
               <motion.span
                 animate={{ opacity: [1, 0, 1] }}
                 transition={{ duration: 0.8, repeat: Infinity }}
                 className="inline-block w-1 h-20 bg-versory-azure ml-1"
               />
             </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: textIndex === 1 ? 1 : 0, 
              y: textIndex === 1 ? 0 : 30 
            }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light"
            >
              {description}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: textIndex === 1 ? 1 : 0, 
              scale: textIndex === 1 ? 1 : 0.8 
            }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex justify-center items-center"
          >
            <motion.button
              className="px-10 py-4 bg-versory-green text-versory-black font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Começar Projeto
            </motion.button>
          </motion.div>
        </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} className="text-versory-azure" />
      </motion.div>
    </section>
  );
};

export default Hero; 