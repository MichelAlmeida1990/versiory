'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById('empresa');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-versory-black via-versory-blue/20 to-versory-black overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-versory-azure rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-versory-pink rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-versory-green rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-versory-azure rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-versory-pink rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-versory-blue/20 backdrop-blur-sm border border-versory-azure/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles size={16} className="text-versory-green" />
              <span className="text-versory-azure text-sm font-medium">Inovação Digital</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              <span className="block">Ajudamos</span>
              <span className="block text-versory-green">criar a sua</span>
              <span className="block bg-gradient-to-r from-versory-azure to-versory-pink bg-clip-text text-transparent">
                presença digital
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Transformamos ideias em experiências digitais excepcionais que conectam, engajam e convertem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
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
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Circle */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-80 h-80 bg-gradient-to-br from-versory-blue via-versory-azure to-versory-pink rounded-full mx-auto relative"
              >
                <div className="absolute inset-4 bg-black rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-versory-green to-versory-brown rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-black font-bold text-2xl">V</span>
                    </div>
                    <h3 className="text-white font-bold text-xl">Versiory</h3>
                    <p className="text-versory-azure text-sm">Digital Solutions</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-versory-green rounded-full flex items-center justify-center"
              >
                <span className="text-black font-bold">⚡</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-versory-pink rounded-full flex items-center justify-center"
              >
                <span className="text-white font-bold">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-versory-azure hover:text-versory-green transition-colors"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero; 