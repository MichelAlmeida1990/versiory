'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Play, Zap, Star, Heart } from 'lucide-react';
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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Content Container - Two Column Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-left"
          >
            {/* Floating Icons */}
            <div className="relative mb-8">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 text-versiory-yellow"
              >
                <Zap size={24} />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-2 right-20 text-versiory-pink"
              >
                <Star size={20} />
              </motion.div>
              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-8 -right-2 text-versiory-azure"
              >
                <Heart size={18} />
              </motion.div>
            </div>

            {/* Company Name */}
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 relative cursor-pointer select-none"
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
                  className="absolute inset-0 bg-gradient-to-r from-versiory-azure to-versiory-green rounded-lg"
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
                className="inline-block w-1 h-16 bg-versiory-azure ml-1"
              />
            </motion.h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: textIndex === 1 ? 1 : 0, 
                x: textIndex === 1 ? 0 : 100 
              }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.p
                className={`text-2xl md:text-3xl mb-8 max-w-2xl font-bold whitespace-nowrap ${theme === 'dark' ? 'text-white/90' : 'text-blue-400'}`}
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

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: textIndex === 1 ? 1 : 0, y: textIndex === 1 ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mb-8"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-versiory-green rounded-full"></div>
                  <span className={`text-lg ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                    Design moderno e responsivo
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-versiory-azure rounded-full"></div>
                  <span className={`text-lg ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                    Performance otimizada
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-versiory-pink rounded-full"></div>
                  <span className={`text-lg ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                    Tecnologias de ponta
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: textIndex === 1 ? 1 : 0, 
                y: textIndex === 1 ? 0 : 50 
              }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="px-8 py-4 bg-versiory-green text-versiory-black font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out text-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Começar Projeto</span>
                <Zap size={20} />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-versiory-azure text-versiory-azure font-bold rounded-full hover:bg-versiory-azure hover:text-white transition-all duration-300 ease-in-out text-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Ver Portfólio</span>
                <Play size={20} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Video Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-versiory-azure/20 to-versiory-green/20 p-2">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  playsInline
                  muted
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  onError={(e) => console.error('Erro no vídeo:', e)}
                  onLoadStart={() => console.log('Vídeo começando a carregar')}
                  onCanPlay={() => console.log('Vídeo pode ser reproduzido')}
                >
                  <source src="/images/WhatsApp Video 2025-08-23 at 13.55.43.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                

              </div>
              
              {/* Floating Elements around Video */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-versiory-green rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-versiory-azure rounded-full"
              />
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 -left-2 w-3 h-3 bg-versiory-pink rounded-full"
              />
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="bg-gradient-to-r from-versiory-azure/10 to-versiory-green/10 backdrop-blur-sm rounded-lg p-4 border border-versiory-azure/20"
              >
                <div className="text-2xl font-bold text-versiory-azure">50+</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>Projetos Entregues</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 }}
                className="bg-gradient-to-r from-versiory-green/10 to-versiory-pink/10 backdrop-blur-sm rounded-lg p-4 border border-versiory-green/20"
              >
                <div className="text-2xl font-bold text-versiory-green">100%</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>Satisfação</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
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
