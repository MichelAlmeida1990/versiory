'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Target, Eye, Heart, Zap, Users, Shield, TrendingUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  const values = [
    {
      letter: 'P',
      title: 'ersonalização',
      description: 'Soluções digitais que refletem identidade e objetivos reais',
      icon: Target,
      color: 'from-versory-blue to-versory-azure'
    },
    {
      letter: 'E',
      title: 'volução',
      description: 'Utilização das tecnologias mais atualizadas do mercado',
      icon: TrendingUp,
      color: 'from-versory-azure to-versory-pink'
    },
    {
      letter: 'R',
      title: 'esultados',
      description: 'Projetos que geram engajamento, atraem e fidelizam',
      icon: Zap,
      color: 'from-versory-pink to-versory-green'
    },
    {
      letter: 'F',
      title: 'uncionalidade',
      description: 'Interfaces intuitivas, com usabilidade e eficiência',
      icon: Shield,
      color: 'from-versory-green to-versory-brown'
    },
    {
      letter: 'S',
      title: 'tratégia',
      description: 'Posicionamento de marca com foco em conversão e relevância',
      icon: Eye,
      color: 'from-versory-brown to-versory-blue'
    },
    {
      letter: 'C',
      title: 'olaboração',
      description: 'Comunicação aberta e processos claros ao que foi acordado',
      icon: Users,
      color: 'from-versory-blue to-versory-pink'
    },
    {
      letter: 'T',
      title: 'ransparência',
      description: 'Relações genuínas, com escuta ativa e comunicação clara',
      icon: Heart,
      color: 'from-versory-pink to-versory-green'
    }
  ];

  return (
         <section id="empresa" className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-b from-versory-black to-versory-blue/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl lg:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
          >
            <span className="bg-gradient-to-r from-versory-azure to-versory-pink bg-clip-text text-transparent">
              Sobre a Versiory
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}
          >
            A Versiory é uma empresa jovem especializada em solução web, nascemos para fortalecer sua autoridade online, atrair mais clientes e gerar valor real para suas marcas.
          </motion.p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Visão e Missão */}
          <div className="space-y-8">
            <ScrollReveal direction="left" delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                                                                   className={`backdrop-blur-sm border border-versory-azure/30 rounded-2xl p-8 ${theme === 'dark' ? 'bg-gradient-to-br from-versory-blue/20 to-versory-azure/20' : 'bg-blue-light'}`}
              >
                                 <h3 className="text-2xl font-bold text-versory-green mb-4">Nossa Visão</h3>
                 <p className={`leading-relaxed ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>
                  Ser reconhecida pela criatividade, excelência em inovação digital, inteligência estratégica e pelo compromisso contínuo com a evolução sustentável dos negócios de nossos clientes e parceiros.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                                                                   className={`backdrop-blur-sm border border-versory-pink/30 rounded-2xl p-8 ${theme === 'dark' ? 'bg-gradient-to-br from-versory-pink/20 to-versory-green/20' : 'bg-blue-light'}`}
              >
                                 <h3 className="text-2xl font-bold text-versory-green mb-4">Nossa Missão</h3>
                 <p className={`leading-relaxed ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>
                  Fortalecer a autoridade digital de nossos clientes, atrair oportunidades estratégicas e valorizar o posicionamento dos negócios por meio de soluções digitais de alto impacto.
                </p>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* CTA Button */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="text-center lg:text-left">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 40px rgba(204, 255, 0, 0.4)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-versory-green text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
              >
                Ver Demo
              </motion.button>
            </div>
          </ScrollReveal>
        </div>

        {/* Valores */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="text-center mb-12">
                         <h3 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Nossos Valores</h3>
             <p className={`${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>Os pilares que guiam nossa jornada de inovação</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <ScrollReveal key={`value-${index}-${value.letter}`} direction="up" delay={0.1 * index}>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                                                                   className={`backdrop-blur-sm border border-versory-azure/20 rounded-xl p-6 hover:border-versory-green/50 transition-all duration-300 ${theme === 'dark' ? 'bg-gradient-to-br from-versory-black/50 to-versory-blue/20' : 'bg-blue-light'}`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <value.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-versory-green">{value.letter}</span>
                                             <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{value.title}</span>
                     </div>
                     <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 