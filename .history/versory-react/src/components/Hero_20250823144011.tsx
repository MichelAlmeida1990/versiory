'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Play, Zap, Star, Heart, Volume2, VolumeX } from 'lucide-react';
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
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
  const [videoError, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const companyName = "VERSIORY";
  const description = "Desenvolvimento web moderno e inovador";
  
  // Detect mobile device - Fixed hydration issue
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  }, []);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Simplified text animation for mobile
  useEffect(() => {
    if (isVisible && !isMobile) {
      const timer = setTimeout(() => {
        if (charIndex < companyName.length) {
          setCharIndex(charIndex + 1);
        } else if (textIndex === 0) {
          setTextIndex(1);
          setCharIndex(0);
        }
      }, 150);
      
      return () => clearTimeout(timer);
    } else if (isVisible && isMobile) {
      // On mobile, show text immediately without animation
      setCharIndex(companyName.length);
      setTextIndex(1);
    }
  }, [isVisible, charIndex, textIndex, companyName.length, isMobile]);

  // Selection animation effect - Reduced frequency on mobile
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
          return prev + (isMobile ? 10 : 5); // Faster on mobile to reduce duration
        });
      }, isMobile ? 30 : 50); // Faster interval on mobile
      return () => clearInterval(timer);
    }
  }, [isSelected, isMobile]);
  
  // Force video load if needed
  useEffect(() => {
    if (videoRef.current && !videoLoaded && !videoError) {
      const timer = setTimeout(() => {
        if (videoRef.current && !videoLoaded) {
          videoRef.current.load();
        }
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [videoLoaded, videoError]);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Content Container - Two Column Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? -50 : -100 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : (isMobile ? -50 : -100) }}
            transition={{ duration: isMobile ? 0.6 : 0.8, delay: 0.3 }}
            className="text-left"
          >
            {/* Floating Icons - Reduced animations on mobile */}
            <div className="relative mb-8">
              {!isMobile && (
                <>
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
                </>
              )}
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
            initial={{ opacity: 0, x: isMobile ? 50 : 100 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : (isMobile ? 50 : 100) }}
            transition={{ duration: isMobile ? 0.6 : 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Video Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-versiory-azure/20 to-versiory-green/20 p-2">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                {!videoError ? (
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    playsInline
                    muted={isMuted}
                    preload="metadata"
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                    onLoadedData={() => setVideoLoaded(true)}
                    onError={(e) => {
                      console.error('Erro no vídeo:', e);
                      setVideoError(true);
                    }}
                    onLoadStart={() => console.log('Vídeo começando a carregar')}
                    onCanPlay={() => console.log('Vídeo pode ser reproduzido')}
                  >
                    <source src="/images/WhatsApp Video 2025-08-23 at 13.55.43.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-versiory-azure/20 to-versiory-green/20 flex items-center justify-center">
                    <div className="text-center">
                      <Play size={64} className="text-versiory-azure mx-auto mb-4" />
                      <p className="text-versiory-azure font-semibold">Vídeo não disponível</p>
                      <button 
                        onClick={() => {
                          setVideoError(false);
                          if (videoRef.current) {
                            videoRef.current.load();
                          }
                        }}
                        className="mt-4 px-4 py-2 bg-versiory-azure text-white rounded-lg hover:bg-versiory-azure/80 transition-colors"
                      >
                        Tentar novamente
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Loading Indicator */}
                {!videoLoaded && !videoError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="text-center">
                      <div className="w-8 h-8 border-2 border-versiory-azure border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                      <p className="text-white text-sm">Carregando vídeo...</p>
                    </div>
                  </div>
                )}
                
                {/* Audio Control Button */}
                <motion.button
                  onClick={toggleMute}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-black/70 transition-all duration-300 z-10"
                  whileHover={!isMobile ? { scale: 1.1 } : {}}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 }}
                >
                  {isMuted ? (
                    <VolumeX size={20} className="text-white" />
                  ) : (
                    <Volume2 size={20} className="text-white" />
                  )}
                </motion.button>
                

              </div>
              
              {/* Floating Elements around Video - Reduced on mobile */}
              {!isMobile && (
                <>
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
                </>
              )}
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
