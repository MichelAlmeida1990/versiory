'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { User, Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';

const Profile3D = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-versory-blue/10 to-versory-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-versory-green/20 to-versory-azure/20 backdrop-blur-sm border border-versory-green/30 rounded-full px-6 py-3 mb-6"
          >
            <User size={20} className="text-versory-green" />
            <span className="text-versory-azure font-semibold">Perfil 3D</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-versory-green to-versory-azure bg-clip-text text-transparent">
              Michel Paulo
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Desenvolvedor Full-Stack com formação em Tecnologia da Informação e experiência em criar aplicações web modernas e robustas.
          </motion.p>
        </div>

        <div className="flex justify-center">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
            className="relative"
          >
            <motion.div
              style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative"
            >
              {/* Card Principal 3D */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative w-80 h-96 bg-gradient-to-br from-versory-blue/20 via-versory-azure/20 to-versory-pink/20 backdrop-blur-sm border border-versory-azure/30 rounded-2xl p-8 shadow-2xl"
                style={{
                  transform: 'translateZ(20px)',
                }}
              >
                {/* Foto de Perfil 3D */}
                <motion.div
                  className="relative w-32 h-32 mx-auto mb-6"
                  style={{
                    transform: 'translateZ(40px)',
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-versory-azure to-versory-pink rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                    M
                  </div>
                  
                  {/* Efeito de brilho */}
                  <motion.div
                    animate={{
                      opacity: isHovered ? [0.3, 0.8, 0.3] : 0.3,
                    }}
                    transition={{
                      duration: 2,
                      repeat: isHovered ? Infinity : 0,
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"
                  />
                </motion.div>

                {/* Informações */}
                <div className="text-center space-y-4" style={{ transform: 'translateZ(30px)' }}>
                  <h3 className="text-2xl font-bold text-white">Michel Paulo de Almeida</h3>
                  <p className="text-versory-green font-semibold">Desenvolvedor Full-Stack</p>
                  <p className="text-white/80 text-sm">
                    Especializado em React, Django, Firebase e desenvolvimento web moderno
                  </p>
                </div>

                {/* Estatísticas */}
                <div className="grid grid-cols-3 gap-4 mt-6" style={{ transform: 'translateZ(25px)' }}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-versory-green">7+</div>
                    <div className="text-white/70 text-xs">Projetos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-versory-green">3+</div>
                    <div className="text-white/70 text-xs">Anos Exp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-versory-green">100%</div>
                    <div className="text-white/70 text-xs">Satisfação</div>
                  </div>
                </div>
              </motion.div>

              {/* Cards de Contato 3D */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -left-4 top-1/2 transform -translate-y-1/2"
                style={{
                  transform: 'translateZ(10px) translateX(-100%) translateY(-50%)',
                }}
              >
                <div className="bg-gradient-to-br from-versory-green/20 to-versory-azure/20 backdrop-blur-sm border border-versory-green/30 rounded-xl p-4 w-48">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-white/90">
                      <Mail size={16} className="text-versory-green" />
                      <span className="text-sm">michelpaulo06@hotmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/90">
                      <Phone size={16} className="text-versory-green" />
                      <span className="text-sm">(11) 95940-7653</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/90">
                      <MapPin size={16} className="text-versory-green" />
                      <span className="text-sm">Mauá - São Paulo</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Cards de Redes Sociais 3D */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -right-4 top-1/2 transform -translate-y-1/2"
                style={{
                  transform: 'translateZ(10px) translateX(100%) translateY(-50%)',
                }}
              >
                <div className="bg-gradient-to-br from-versory-pink/20 to-versory-green/20 backdrop-blur-sm border border-versory-pink/30 rounded-xl p-4 w-48">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-white/90">
                      <Linkedin size={16} className="text-versory-azure" />
                      <span className="text-sm">LinkedIn</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/90">
                      <Github size={16} className="text-versory-azure" />
                      <span className="text-sm">GitHub</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/90">
                      <Instagram size={16} className="text-versory-azure" />
                      <span className="text-sm">Instagram</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Certificações 3D */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                style={{
                  transform: 'translateZ(15px) translateY(100%)',
                }}
              >
                <div className="bg-gradient-to-br from-versory-brown/20 to-versory-blue/20 backdrop-blur-sm border border-versory-brown/30 rounded-xl p-4 w-64">
                  <h4 className="text-versory-green font-semibold mb-2 text-center">Certificações</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-white/80">
                    <div>• Microsoft Azure</div>
                    <div>• AWS Cloud</div>
                    <div>• Oracle Front-End</div>
                    <div>• Java Programming</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(204, 255, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-versory-green text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
          >
            Entre em Contato
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile3D; 