'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Smartphone, Code, Palette } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-versory-black">
      {/* Clean Background with Subtle Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-versory-black via-versory-black/95 to-versory-blue/20" />
        
        {/* Subtle Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-versory-azure/30 rounded-full" />
          <div className="absolute top-40 right-32 w-24 h-24 border border-versory-green/30 rounded-full" />
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-versory-azure/20 rounded-full" />
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-versory-green/20 rounded-full" />
        </div>
        
        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-versory-azure/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

             {/* Content */}
       <div className="relative z-10 text-center px-4 py-16 max-w-4xl mx-auto">
         <ScrollReveal direction="up" delay={0.3}>
           <motion.h1
             className="text-6xl md:text-8xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-versory-green to-versory-azure bg-clip-text text-transparent"
           >
             VERSIORY
           </motion.h1>
         </ScrollReveal>

         <ScrollReveal direction="up" delay={0.4}>
           <motion.p
             className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light"
           >
             Desenvolvimento web moderno e inovador
           </motion.p>
         </ScrollReveal>

         <div className="flex justify-center items-center">
           <ScrollReveal direction="up" delay={0.5}>
             <motion.button
               className="px-10 py-4 bg-versory-green text-versory-black font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out text-lg"
             >
               Começar Projeto
             </motion.button>
           </ScrollReveal>
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