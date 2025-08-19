'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap, Users, Shield, TrendingUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { theme } = useTheme();
  
  const values = [
    {
      letter: 'P',
      title: 'ersonalização',
      description: 'Soluções digitais que refletem identidade e objetivos reais',
      icon: Target,
      color: 'from-versiory-blue to-versiory-azure'
    },
    {
      letter: 'E',
      title: 'stratégia',
      description: 'Posicionamento de marca com foco em conversão e relevância',
      icon: Eye,
      color: 'from-versiory-brown to-versiory-blue'
    },
    {
      letter: 'R',
      title: 'esultados',
      description: 'Projetos que geram engajamento, atraem e fidelizam',
      icon: Zap,
      color: 'from-versiory-pink to-versiory-green'
    },
    {
      letter: 'F',
      title: 'uncionalidade',
      description: 'Interfaces intuitivas, com usabilidade e eficiência',
      icon: Shield,
      color: 'from-versiory-green to-versiory-brown'
    },
    {
      letter: 'E',
      title: 'volução',
      description: 'Utilização das tecnologias mais atualizadas do mercado',
      icon: TrendingUp,
      color: 'from-versiory-azure to-versiory-pink'
    },
    {
      letter: 'C',
      title: 'olaboração',
      description: 'Comunicação aberta e processos claros ao que foi acordado',
      icon: Users,
      color: 'from-versiory-blue to-versiory-pink'
    },
    {
      letter: 'T',
      title: 'ransparência',
      description: 'Relações genuínas, com escuta ativa e comunicação clara',
      icon: Heart,
      color: 'from-versiory-pink to-versiory-green'
    }
  ];

  const headerAnimation = useScrollAnimation({ delay: 0.2 });
  const visionMissionAnimation = useScrollAnimation({ delay: 0.4 });
  const ctaAnimation = useScrollAnimation({ delay: 0.6 });
  const valuesAnimation = useScrollAnimation({ delay: 0.8 });

  return (
    <section id="empresa" className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-b from-versiory-black to-versiory-blue/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerAnimation.ref} style={headerAnimation.style} className="text-center mb-16">
          <h2 className={`text-4xl lg:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-versiory-green via-versiory-azure to-versiory-pink bg-clip-text text-transparent">
              Sobre a Versiory
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
            A Versiory é uma empresa jovem especializada em solução web, nascemos para fortalecer sua autoridade online, atrair mais clientes e gerar valor real para suas marcas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Visão e Missão */}
          <div ref={visionMissionAnimation.ref} style={visionMissionAnimation.style} className="space-y-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`backdrop-blur-sm border border-versiory-azure/60 rounded-2xl p-8 ${theme === 'dark' ? 'bg-gradient-to-br from-versiory-blue/10 to-versiory-azure/10' : 'bg-blue-light/70'}`}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-versiory-green to-versiory-azure bg-clip-text text-transparent mb-4">Nossa Visão</h3>
              <p className={`leading-relaxed ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>
               Ser reconhecida pela criatividade, excelência em inovação digital, inteligência estratégica e pelo compromisso contínuo com a evolução sustentável dos negócios de nossos clientes e parceiros.
             </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`backdrop-blur-sm border border-versiory-pink/60 rounded-2xl p-8 ${theme === 'dark' ? 'bg-gradient-to-br from-versiory-pink/10 to-versiory-green/10' : 'bg-blue-light/70'}`}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-versiory-green to-versiory-azure bg-clip-text text-transparent mb-4">Nossa Missão</h3>
              <p className={`leading-relaxed ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>
               Fortalecer a autoridade digital de nossos clientes, atrair oportunidades estratégicas e valorizar o posicionamento dos negócios por meio de soluções digitais de alto impacto.
             </p>
            </motion.div>
          </div>

          {/* CTA */}
          <div ref={ctaAnimation.ref} style={ctaAnimation.style} className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`backdrop-blur-sm border border-versiory-green/60 rounded-2xl p-8 ${theme === 'dark' ? 'bg-gradient-to-br from-versiory-green/10 to-versiory-azure/10' : 'bg-blue-light/70'}`}
            >
              <h3 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                <span className="bg-gradient-to-r from-versiory-green via-versiory-azure to-versiory-pink bg-clip-text text-transparent">
                  Vamos Criar Juntos?
                </span>
              </h3>
              <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                Transforme sua presença digital com soluções personalizadas e inovadoras.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(204, 255, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-versiory-green text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
              >
                Começar Projeto
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Valores */}
        <div ref={valuesAnimation.ref} style={valuesAnimation.style}>
          <div className="text-center mb-12">
            <h3 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              <span className="bg-gradient-to-r from-versiory-green via-versiory-azure to-versiory-pink bg-clip-text text-transparent">
                Nossos Valores
              </span>
            </h3>
            <p className={`text-xl ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
              Os princípios que guiam nosso trabalho e relacionamento com clientes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={`${value.letter}${value.title}`} className="relative">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`backdrop-blur-sm border border-versiory-azure/60 rounded-2xl p-6 h-full ${theme === 'dark' ? 'bg-gradient-to-br from-versiory-blue/5 to-versiory-azure/5' : 'bg-blue-light/70'}`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <value.icon size={24} className="text-white" />
                  </div>
                  <h4 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <span className="bg-gradient-to-r from-versiory-green to-versiory-azure bg-clip-text text-transparent">{value.letter}</span>{value.title}
                  </h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                    {value.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
