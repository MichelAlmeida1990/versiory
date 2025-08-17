'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, Github, Award, Users, Clock, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { theme } = useTheme();
  const headerAnimation = useScrollAnimation({ delay: 0.2 });
  const contactInfoAnimation = useScrollAnimation({ delay: 0.4 });
  const statsAnimation = useScrollAnimation({ delay: 0.6 });
  const certificationsAnimation = useScrollAnimation({ delay: 0.8 });
  const certificationsStagger = useStaggerAnimation([
    { name: 'Microsoft Azure', icon: 'MS', color: 'versory-azure' },
    { name: 'AWS Cloud', icon: 'AWS', color: 'versory-orange' },
    { name: 'Oracle Front-End', icon: 'OR', color: 'versory-red' },
    { name: 'Java Programming', icon: 'J', color: 'versory-green' }
  ], 0.15);
  const ctaAnimation = useScrollAnimation({ delay: 1.0 });

  return (
    <section id="contact" className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-b from-versory-black to-versory-blue/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerAnimation.ref} style={headerAnimation.style} className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-versory-green/20 to-versory-azure/20 backdrop-blur-sm border border-versory-green/30 rounded-full px-6 py-3 mb-6">
            <Mail size={20} className="text-versory-green" />
            <span className="text-versory-azure font-semibold">Entre em Contato</span>
          </div>
          
          <h2 className={`text-4xl lg:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-versory-green via-versory-azure to-versory-pink bg-clip-text text-transparent">
              VERSIORY
            </span>
          </h2>
          
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
            Especialistas em desenvolvimento web moderno e soluções digitais inovadoras.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Informações da Empresa */}
          <div ref={contactInfoAnimation.ref} style={contactInfoAnimation.style} className="space-y-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`backdrop-blur-sm border border-versory-azure/60 rounded-2xl p-8 ${theme === 'dark' ? 'bg-gradient-to-br from-versory-blue/5 to-versory-azure/5' : 'bg-blue-light/70'}`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className={`flex items-center space-x-4 ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-versory-green/20 to-versory-azure/20 rounded-lg flex items-center justify-center">
                    <Mail size={20} className="text-versory-green" />
                  </div>
                  <div>
                    <p className="text-sm text-versory-azure/80">Email</p>
                    <p className="font-semibold">michelpaulo06@hotmail.com</p>
                  </div>
                </div>

                <div className={`flex items-center space-x-4 ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-versory-green/20 to-versory-azure/20 rounded-lg flex items-center justify-center">
                    <Phone size={20} className="text-versory-green" />
                  </div>
                  <div>
                    <p className="text-sm text-versory-azure/80">Telefone</p>
                    <p className="font-semibold">(11) 95854-0171</p>
                  </div>
                </div>

                <div className={`flex items-center space-x-4 ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-versory-green/20 to-versory-azure/20 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-versory-green" />
                  </div>
                  <div>
                    <p className="text-sm text-versory-azure/80">Localização</p>
                    <p className="font-semibold">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="mt-8">
                <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Redes Sociais</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gradient-to-br from-versory-blue/20 to-versory-azure/20 border border-versory-azure/30 rounded-lg flex items-center justify-center text-versory-azure hover:bg-versory-azure hover:text-black transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gradient-to-br from-versory-pink/20 to-versory-azure/20 border border-versory-pink/30 rounded-lg flex items-center justify-center text-versory-pink hover:bg-versory-pink hover:text-black transition-all duration-300"
                  >
                    <Instagram size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gradient-to-br from-versory-green/20 to-versory-azure/20 border border-versory-green/30 rounded-lg flex items-center justify-center text-versory-green hover:bg-versory-green hover:text-black transition-all duration-300"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Estatísticas e Certificações */}
            <div className="space-y-8">
              {/* Estatísticas */}
              <div ref={statsAnimation.ref} style={statsAnimation.style}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`backdrop-blur-sm border border-versory-green/60 rounded-2xl p-8 ${theme === 'dark' ? 'bg-gradient-to-br from-versory-green/5 to-versory-azure/5' : 'bg-blue-light/70'}`}
                >
                  <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Nossos Números</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-versory-green/20 to-versory-azure/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users size={24} className="text-versory-green" />
                      </div>
                      <p className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>7+</p>
                      <p className="text-sm text-versory-azure/80">Projetos</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-versory-azure/20 to-versory-pink/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Clock size={24} className="text-versory-azure" />
                      </div>
                      <p className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>3+</p>
                      <p className="text-sm text-versory-azure/80">Anos Exp</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-versory-pink/20 to-versory-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle size={24} className="text-versory-pink" />
                      </div>
                      <p className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>100%</p>
                      <p className="text-sm text-versory-azure/80">Satisfação</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Certificações */}
              <div ref={certificationsAnimation.ref} style={certificationsAnimation.style}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`backdrop-blur-sm border border-versory-pink/60 rounded-2xl p-8 ${theme === 'dark' ? 'bg-gradient-to-br from-versory-pink/5 to-versory-green/5' : 'bg-blue-light/70'}`}
                >
                  <h3 className={`text-2xl font-bold mb-6 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <Award size={24} className="text-versory-green mr-3" />
                    Certificações
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                                         <div className={`flex items-center space-x-3 p-3 rounded-lg ${theme === 'dark' ? 'bg-versory-black/10' : 'bg-blue-light/70'}`}>
                       <div className="w-8 h-8 bg-gradient-to-br from-versory-blue/20 to-versory-azure/20 rounded flex items-center justify-center">
                         <span className="text-xs font-bold text-versory-azure">MS</span>
                       </div>
                       <span className={`text-sm ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>Microsoft Azure</span>
                     </div>
                    
                                         <div className={`flex items-center space-x-3 p-3 rounded-lg ${theme === 'dark' ? 'bg-versory-black/10' : 'bg-blue-light/70'}`}>
                       <div className="w-8 h-8 bg-gradient-to-br from-versory-orange/20 to-versory-yellow/20 rounded flex items-center justify-center">
                         <span className="text-xs font-bold text-versory-orange">AWS</span>
                       </div>
                       <span className={`text-sm ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>AWS Cloud</span>
                     </div>
                    
                    <div className={`flex items-center space-x-3 p-3 rounded-lg ${theme === 'dark' ? 'bg-versory-black/20' : 'bg-blue-light'}`}>
                      <div className="w-8 h-8 bg-gradient-to-br from-versory-red/20 to-versory-pink/20 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-versory-red">OR</span>
                      </div>
                      <span className={`text-sm ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>Oracle Front-End</span>
                    </div>
                    
                    <div className={`flex items-center space-x-3 p-3 rounded-lg ${theme === 'dark' ? 'bg-versory-black/20' : 'bg-blue-light'}`}>
                      <div className="w-8 h-8 bg-gradient-to-br from-versory-green/20 to-versory-blue/20 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-versory-green">J</span>
                      </div>
                      <span className={`text-sm ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>Java Programming</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div ref={ctaAnimation.ref} style={ctaAnimation.style} className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(204, 255, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-versory-green text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
            >
              Entre em Contato
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 