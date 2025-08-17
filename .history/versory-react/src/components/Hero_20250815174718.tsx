'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Smartphone, Code, Palette } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useMemo } from 'react';

const Hero = () => {
  // Memoize window dimensions to avoid recalculation
  const windowDimensions = useMemo(() => {
    if (typeof window !== 'undefined') {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
    return { width: 1200, height: 800 };
  }, []);

  // Memoize particle positions
  const particles = useMemo(() => 
    [...Array(15)].map(() => ({
      x: Math.random() * windowDimensions.width,
      y: Math.random() * windowDimensions.height,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
    })), [windowDimensions]
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-versory-black">
      {/* Background Image Banner */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSIjMDMxZjVmIi8+CjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgZmlsbD0idXJsKCNncmFkaWVudDApIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50MCIgeDE9IjAiIHkxPSIwIiB4Mj0iMTIwMCIgeTI9IjgwMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuOCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMzFmNWYiIHN0b3Atb3BhY2l0eT0iMC4yIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+')"
          }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-versory-black via-versory-black/80 to-versory-blue/20" />
        
        {/* Optimized Background Elements */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: particle.x,
                y: particle.y,
                opacity: 0
              }}
              animate={{
                x: Math.random() * windowDimensions.width,
                y: Math.random() * windowDimensions.height,
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
              className="absolute w-2 h-2 bg-versory-azure rounded-full blur-sm"
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <ScrollReveal direction="left" className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-versory-green/20 to-versory-azure/20 backdrop-blur-sm border border-versory-green/30 rounded-full px-6 py-3 mb-6"
            >
              <Sparkles size={20} className="text-versory-green" />
              <span className="text-versory-azure font-semibold">Portfólio de Projetos Reais</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-versory-green to-versory-azure bg-clip-text text-transparent">
                VERSORY
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed"
            >
              Desenvolvimento web moderno e inovador. 
              <br />
              Criamos soluções digitais que transformam negócios.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <div className="flex items-center space-x-2 text-versory-green">
                <Code size={16} />
                <span className="text-sm font-medium">React & Next.js</span>
              </div>
              <div className="flex items-center space-x-2 text-versory-azure">
                <Palette size={16} />
                <span className="text-sm font-medium">Design Moderno</span>
              </div>
              <div className="flex items-center space-x-2 text-versory-pink">
                <Smartphone size={16} />
                <span className="text-sm font-medium">Mobile First</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(204, 255, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-versory-green text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
              >
                Começar Projeto
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-versory-azure text-versory-azure px-8 py-4 rounded-full font-bold text-lg hover:bg-versory-azure hover:text-black transition-all duration-300"
              >
                Ver Portfólio
              </motion.button>
            </motion.div>
          </ScrollReveal>

          {/* Optimized Mobile Showcase */}
          <ScrollReveal direction="right" className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
              }}
            >
              {/* Main Showcase Container */}
              <motion.div
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 2,
                  scale: 1.02,
                }}
                transition={{ duration: 0.5 }}
                className="relative"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Featured Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 -left-4 z-20"
                >
                  <div className="bg-gradient-to-r from-versory-green to-versory-azure text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    ⭐ Destaque
                  </div>
                </motion.div>

                {/* Stats Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -top-4 -right-4 z-20"
                >
                  <div className="bg-versory-black/80 backdrop-blur-sm border border-versory-azure/30 rounded-lg p-3 text-white">
                    <div className="flex items-center space-x-2 text-sm">
                      <span>👥 500+</span>
                      <span>⭐ 4.9</span>
                    </div>
                  </div>
                </motion.div>

                {/* Optimized Mobile Grid Showcase */}
                <div className="relative w-full max-w-lg mx-auto">
                  {/* Grid of Mobile Screens */}
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          delay: 0.8 + (i * 0.1),
                          duration: 0.6
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          z: 50,
                          rotateY: 10
                        }}
                        className="relative group"
                        style={{
                          transform: `translateZ(${i * 5}px)`,
                        }}
                      >
                        {/* Mobile Frame */}
                        <div className="relative w-24 h-40 lg:w-32 lg:h-48 mx-auto">
                          <div className="w-full h-full bg-gradient-to-br from-versory-blue/20 to-versory-azure/20 backdrop-blur-sm border-2 border-versory-azure/30 rounded-2xl overflow-hidden shadow-2xl">
                            {/* Screen Content */}
                            <div className="w-full h-full bg-gradient-to-br from-versory-black/50 to-versory-blue/20 flex items-center justify-center">
                              <div className="text-center p-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-versory-green to-versory-azure rounded-lg mx-auto mb-2 flex items-center justify-center">
                                  <span className="text-black font-bold text-xs">
                                    {['V', 'I', 'P', 'S', 'B', 'F', 'E', 'T'][i]}
                                  </span>
                                </div>
                                <div className="text-versory-green text-xs font-semibold">
                                  {['Versory', 'Imobiliária', 'Psicóloga', 'Santo Drink', 'Barbearia', 'Fotógrafo', 'E-commerce', 'Tech'][i]}
                                </div>
                              </div>
                            </div>
                            
                            {/* Optimized Glow Effect */}
                            <motion.div
                              animate={{
                                opacity: [0.3, 0.8, 0.3],
                              }}
                              transition={{
                                duration: 2 + i,
                                repeat: Infinity,
                                delay: i * 0.5,
                              }}
                              className="absolute inset-0 bg-gradient-to-br from-versory-azure/20 via-versory-pink/20 to-versory-green/20 rounded-2xl"
                            />
                          </div>
                          
                          {/* Floating Elements */}
                          <motion.div
                            animate={{ 
                              y: [0, -10, 0],
                              rotate: [0, 5, 0]
                            }}
                            transition={{
                              duration: 3 + i,
                              repeat: Infinity,
                              delay: i * 0.3,
                            }}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-versory-green/20 to-versory-azure/20 backdrop-blur-sm border border-versory-green/30 rounded-full flex items-center justify-center"
                          >
                            <Sparkles size={8} className="text-versory-green" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Background Glow */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 100px rgba(0, 175, 238, 0.2)",
                      "0 0 150px rgba(204, 0, 204, 0.2)",
                      "0 0 100px rgba(0, 175, 238, 0.2)"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-versory-azure/10 via-versory-pink/10 to-versory-green/10 rounded-3xl blur-3xl"
                  style={{
                    transform: 'translateZ(-10px)',
                  }}
                />
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-12 h-12 bg-versory-blue/20 border border-versory-azure/30 rounded-full flex items-center justify-center text-versory-azure hover:bg-versory-azure hover:text-black transition-all duration-300"
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero; 