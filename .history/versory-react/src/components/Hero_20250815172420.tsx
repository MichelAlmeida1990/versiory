'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Zap, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-versory-black">
      {/* Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-versory-azure rounded-full"
          />
        ))}
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
              <span className="text-versory-azure font-semibold">Transformando Ideias em Sucesso</span>
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
                <Zap size={16} />
                <span className="text-sm font-medium">React & Next.js</span>
              </div>
              <div className="flex items-center space-x-2 text-versory-azure">
                <Star size={16} />
                <span className="text-sm font-medium">Design Moderno</span>
              </div>
              <div className="flex items-center space-x-2 text-versory-pink">
                <Sparkles size={16} />
                <span className="text-sm font-medium">Performance</span>
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

          {/* 3D Profile Image */}
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
              {/* Main Image Container */}
              <motion.div
                whileHover={{ 
                  rotateY: 15,
                  rotateX: 5,
                  scale: 1.05,
                  z: 50
                }}
                transition={{ duration: 0.5 }}
                className="relative"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Large Profile Image */}
                <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] mx-auto">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 50px rgba(0, 175, 238, 0.3)",
                        "0 0 100px rgba(204, 0, 204, 0.3)",
                        "0 0 50px rgba(0, 175, 238, 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="w-full h-full rounded-full overflow-hidden border-4 border-versory-azure/30"
                    style={{
                      transform: 'translateZ(20px)',
                    }}
                  >
                    <img 
                      src="/images/perfil3d.png" 
                      alt="Versory Profile" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Glow Effect */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-versory-azure/20 via-versory-pink/20 to-versory-green/20 rounded-full"
                    style={{
                      transform: 'translateZ(10px)',
                    }}
                  />
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-versory-green/20 to-versory-azure/20 backdrop-blur-sm border border-versory-green/30 rounded-full flex items-center justify-center"
                  style={{
                    transform: 'translateZ(30px)',
                  }}
                >
                  <Zap size={24} className="text-versory-green" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-versory-pink/20 to-versory-green/20 backdrop-blur-sm border border-versory-pink/30 rounded-full flex items-center justify-center"
                  style={{
                    transform: 'translateZ(25px)',
                  }}
                >
                  <Star size={20} className="text-versory-pink" />
                </motion.div>

                <motion.div
                  animate={{ 
                    x: [0, 10, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: 2,
                  }}
                  className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-versory-azure/20 to-versory-brown/20 backdrop-blur-sm border border-versory-azure/30 rounded-full flex items-center justify-center"
                  style={{
                    transform: 'translateZ(35px)',
                  }}
                >
                  <Sparkles size={16} className="text-versory-azure" />
                </motion.div>
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