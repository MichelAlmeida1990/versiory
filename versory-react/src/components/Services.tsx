'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Palette,
  Database,
  Code,
  Zap,
  Shield,
  TrendingUp,
  LucideIcon,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  category: 'web' | 'mobile' | 'design' | 'system';
  features: string[];
  color: string;
  gradient: string;
}

const Services = () => {
  const { theme } = useTheme();

  const services: Service[] = [
    {
      id: 1,
      title: 'Site',
      description:
        'Sites responsivos e otimizados para conversão com design moderno e SEO avançado.',
      icon: Globe,
      category: 'web',
      features: [
        'Design Responsivo',
        'SEO Otimizado',
        'Performance',
        'Analytics',
      ],
      color: 'from-versiory-pink to-versiory-azure',
      gradient: 'bg-gradient-to-br from-versiory-pink to-versiory-azure',
    },
    {
      id: 2,
      title: 'Landing Page',
      description:
        'Landing pages de alta conversão com A/B testing e otimização contínua.',
      icon: Zap,
      category: 'web',
      features: ['A/B Testing', 'Conversão', 'Integração', 'Tracking'],
      color: 'from-versiory-azure to-versiory-blue',
      gradient: 'bg-gradient-to-br from-versiory-azure to-versiory-blue',
    },
    {
      id: 3,
      title: 'Delivery',
      description:
        'Aplicativos de delivery completos com geolocalização e pagamentos integrados.',
      icon: Smartphone,
      category: 'mobile',
      features: ['GPS', 'Pagamentos', 'Notificações', 'Tracking'],
      color: 'from-versiory-green to-versiory-brown',
      gradient: 'bg-gradient-to-br from-versiory-green to-versiory-brown',
    },
    {
      id: 4,
      title: 'E-commerce',
      description:
        'Plataformas de e-commerce completas com gestão de produtos e vendas.',
      icon: Database,
      category: 'system',
      features: ['Carrinho', 'Pagamentos', 'Estoque', 'Relatórios'],
      color: 'from-versiory-blue to-versiory-pink',
      gradient: 'bg-gradient-to-br from-versiory-blue to-versiory-pink',
    },
    {
      id: 5,
      title: 'Design UI/UX',
      description:
        'Design de interfaces modernas focadas na experiência do usuário.',
      icon: Palette,
      category: 'design',
      features: ['Wireframes', 'Prototipagem', 'Design System', 'Usabilidade'],
      color: 'from-versiory-pink to-versiory-green',
      gradient: 'bg-gradient-to-br from-versiory-pink to-versiory-green',
    },
    {
      id: 6,
      title: 'Sistemas',
      description:
        'Sistemas de gestão empresarial com módulos integrados e dashboard.',
      icon: Code,
      category: 'system',
      features: ['Dashboard', 'Módulos', 'Relatórios', 'API'],
      color: 'from-versiory-brown to-versiory-azure',
      gradient: 'bg-gradient-to-br from-versiory-brown to-versiory-azure',
    },
  ];

  const headerAnimation = useScrollAnimation({ delay: 0.2 });
  const servicesAnimation = useScrollAnimation({ delay: 0.4 });
  const statsAnimation = useScrollAnimation({ delay: 0.8 });

  return (
    <section
      id='servicos'
      className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-b from-versiory-black to-versiory-blue/10' : 'bg-transparent'}`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          ref={headerAnimation.ref}
          style={headerAnimation.style}
          className='text-center mb-16'
        >
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-versiory-azure/20 to-versiory-pink/20 backdrop-blur-sm border border-versiory-azure/30 rounded-full px-6 py-3 mb-6'>
            <Code size={20} className='text-versiory-azure' />
            <span className='text-versiory-pink font-semibold'>
              Nossos Serviços
            </span>
          </div>

          <h2
            className={`text-4xl lg:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
          >
            <span className='bg-gradient-to-r from-versiory-green via-versiory-azure to-versiory-pink bg-clip-text text-transparent'>
              SERVIÇOS
            </span>
          </h2>

          <p
            className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}
          >
            Soluções digitais completas para impulsionar seu negócio e alcançar
            resultados excepcionais.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div ref={servicesAnimation.ref} style={servicesAnimation.style}>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className='group relative h-full'
              >
                <div
                  className={`relative overflow-hidden rounded-2xl p-8 h-full transition-all duration-500 backdrop-blur-sm border group-hover:border-white/60 ${theme === 'dark' ? `${service.gradient} bg-opacity-10 border-white/30` : 'bg-blue-light/70 border-versiory-azure/60'}`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <service.icon size={32} className='text-white' />
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-lg mb-6 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}
                  >
                    {service.description}
                  </p>

                  <div className='space-y-2'>
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center space-x-2 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}
                      >
                        <div className='w-2 h-2 bg-versiory-green rounded-full'></div>
                        <span className='text-sm'>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <div
          ref={statsAnimation.ref}
          style={statsAnimation.style}
          className='mt-20'
        >
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {[
              { number: '50+', label: 'Projetos Entregues', icon: TrendingUp },
              { number: '100%', label: 'Satisfação', icon: Shield },
              { number: '24/7', label: 'Suporte', icon: Zap },
              { number: '3x', label: 'Mais Conversão', icon: Globe },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className='text-center backdrop-blur-sm border border-versiory-azure/60 rounded-2xl p-6'
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r from-versiory-green to-versiory-azure rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <stat.icon size={24} className='text-white' />
                </div>
                <p
                  className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                >
                  {stat.number}
                </p>
                <p
                  className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
