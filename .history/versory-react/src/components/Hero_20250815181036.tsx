'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Smartphone, Code, Palette } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
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
        <div className="absolute inset-0 bg-gradient-to-br from-versory-black/80 via-versory-black/60 to-versory-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-16 max-w-4xl mx-auto">
        <ScrollReveal direction="up" delay={0.2}>
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-versory-green to-versory-azure text-white shadow-lg mb-6"
          >
            <Sparkles size={16} /> Portfólio de Projetos Reais
          </motion.span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-versory-green to-versory-azure bg-clip-text text-transparent"
          >
            VERSORY
          </motion.h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <motion.p
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Desenvolvimento web moderno e inovador. Criamos soluções digitais que transformam negócios.
          </motion.p>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <ScrollReveal direction="up" delay={0.5}>
            <motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-versory-blue/20 text-versory-azure border border-versory-azure/50">
              <Code size={16} /> React & Next.js
            </motion.span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.6}>
            <motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-versory-blue/20 text-versory-azure border border-versory-azure/50">
              <Palette size={16} /> Design Moderno
            </motion.span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.7}>
            <motion.span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-versory-blue/20 text-versory-azure border border-versory-azure/50">
              <Smartphone size={16} /> Mobile First
            </motion.span>
          </ScrollReveal>
        </div>

        <div className="flex justify-center items-center gap-6">
          <ScrollReveal direction="up" delay={0.8}>
            <motion.button
              className="px-8 py-4 bg-versory-green text-versory-black font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Começar Projeto
            </motion.button>
          </ScrollReveal>
          {/* Removed the "Ver Portfólio" button and "Barbearia do DI" text */}
        </div>
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