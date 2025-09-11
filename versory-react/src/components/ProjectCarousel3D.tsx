'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Star,
  Users,
  Smartphone,
  Monitor,
  ShoppingCart,
  Building,
  Camera,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  mockup?: string;
  category: 'web' | 'mobile' | 'system' | 'ecommerce' | 'professional';
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  stats?: {
    users?: string;
    rating?: number;
    date?: string;
  };
  icon?: React.ReactNode;
}

const ProjectCarousel3D = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<
    'all' | 'web' | 'mobile' | 'system' | 'ecommerce' | 'professional'
  >('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'App de Academia',
      description:
        'Aplicação React completa e profissional para gestão de academias. Sistema robusto com autenticação Firebase, dashboard interativo, gerenciamento de perfis, catálogo de exercícios e estatísticas avançadas com gráficos.',
      image: '/images/academia-unsplash.png?v=1',
      category: 'mobile',
      technologies: [
        'React 18',
        'Material-UI',
        'Firebase',
        'Chart.js',
        'Framer Motion',
        'React Router',
      ],
      demoUrl: 'https://michelalmeida1990.github.io/App-de-academia/',
      githubUrl: 'https://github.com/michelalmeida1990',
      featured: true,
      stats: {
        users: '500+',
        rating: 4.9,
        date: '2024',
      },
      icon: <Smartphone className='w-6 h-6' />,
    },
    {
      id: 2,
      title: 'Sistema de Gestão Escolar',
      description:
        'Sistema completo full-stack para gestão acadêmica e administrativa de escolas. Inclui módulos de alunos, professores, turmas, notas, frequência, biblioteca e financeiro.',
      image: '/images/gestao-escolar-unsplash.png?v=1',
      category: 'system',
      technologies: ['Python', 'Django', 'Bootstrap', 'Chart.js', 'PostgreSQL'],
      demoUrl: 'https://michel1990.pythonanywhere.com/',
      githubUrl: 'https://github.com/michelalmeida1990',
      featured: true,
      stats: {
        users: '1000+',
        rating: 4.8,
        date: '2024',
      },
      icon: <Building className='w-6 h-6' />,
    },
    {
      id: 3,
      title: 'Barbearia do Di',
      description:
        'Site responsivo para barbearia com sistema de agendamento e galeria de serviços. Interface moderna e funcionalidades de agendamento online.',
      image: '/images/barbearia-unsplash.png?v=2',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      demoUrl: 'https://barbearia-do-di.vercel.app/',
      githubUrl: 'https://github.com/michelalmeida1990',
      icon: <Monitor className='w-6 h-6' />,
    },
    {
      id: 4,
      title: 'Santo Drink',
      description:
        'E-commerce de bebidas com catálogo de produtos e sistema de carrinho de compras. Plataforma completa para venda online de bebidas.',
      image: '/images/tech-development.png',
      category: 'ecommerce',
      technologies: ['HTML', 'CSS', 'JavaScript', 'E-commerce'],
      demoUrl: 'https://michelalmeida1990.github.io/SITE-DE-BEBIDAS-DO-SANTO/',
      githubUrl: 'https://github.com/michelalmeida1990',
      icon: <ShoppingCart className='w-6 h-6' />,
    },
    {
      id: 5,
      title: 'Site Psicóloga Lígia Silva',
      description:
        'Site profissional para psicóloga clínica especializada em Terapia Cognitivo-Comportamental (TCC). Inclui informações sobre áreas de atendimento e formulário de contato.',
      image: '/images/Psicologa.png',
      category: 'professional',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Google Meet', 'Responsive'],
      demoUrl: 'https://michelalmeida1990.github.io/Projeto-Psicologa/',
      githubUrl: 'https://github.com/michelalmeida1990',
      icon: <Building className='w-6 h-6' />,
    },
    {
      id: 6,
      title: 'Site Imobiliária',
      description:
        'Site profissional para imobiliária com catálogo de imóveis, sistema de busca, filtros avançados e formulário de contato para clientes interessados.',
      image: '/images/imobiliaria.png',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Filtros', 'Responsive'],
      demoUrl: 'https://projeto-imobiliaria-five.vercel.app/',
      githubUrl: 'https://github.com/michelalmeida1990',
      icon: <Monitor className='w-6 h-6' />,
    },
    {
      id: 7,
      title: 'Site Fotógrafa Cristiane Justino',
      description:
        'Site profissional para fotógrafa com portfólio, sistema de agendamento online, galeria de trabalhos e formulário de contato. Design elegante e responsivo.',
      image: '/images/fotografo.png',
      category: 'professional',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Agendamento'],
      demoUrl: 'https://michelalmeida1990.github.io/Projeto-Fotografo/',
      githubUrl: 'https://github.com/michelalmeida1990',
      icon: <Camera className='w-6 h-6' />,
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter(project => project.category === filter);

  const categories = [
    {
      key: 'all',
      label: 'Todos os Projetos',
      color: 'from-versiory-green to-versiory-azure',
      icon: <Star className='w-5 h-5' />,
    },
    {
      key: 'mobile',
      label: 'Aplicativos Mobile',
      color: 'from-versiory-azure to-versiory-pink',
      icon: <Smartphone className='w-5 h-5' />,
    },
    {
      key: 'system',
      label: 'Sistemas',
      color: 'from-versiory-pink to-versiory-green',
      icon: <Building className='w-5 h-5' />,
    },
    {
      key: 'web',
      label: 'Sites Web',
      color: 'from-versiory-green to-versiory-brown',
      icon: <Monitor className='w-5 h-5' />,
    },
    {
      key: 'ecommerce',
      label: 'E-commerce',
      color: 'from-versiory-brown to-versiory-blue',
      icon: <ShoppingCart className='w-5 h-5' />,
    },
    {
      key: 'professional',
      label: 'Sites Profissionais',
      color: 'from-versiory-blue to-versiory-azure',
      icon: <Building className='w-5 h-5' />,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, filteredProjects.length]);

  const getCardStyle = (index: number) => {
    const distance = Math.abs(index - currentIndex);
    const maxDistance = 2;

    if (distance === 0) {
      return {
        transform: 'translateX(0) scale(1) rotateY(0deg)',
        zIndex: 10,
        opacity: 1,
        filter: 'blur(0px)',
      };
    } else if (distance === 1) {
      const direction = index > currentIndex ? 1 : -1;
      return {
        transform: `translateX(${direction * 60}%) scale(0.8) rotateY(${direction * 15}deg)`,
        zIndex: 5,
        opacity: 0.7,
        filter: 'blur(1px)',
      };
    } else {
      const direction = index > currentIndex ? 1 : -1;
      return {
        transform: `translateX(${direction * 120}%) scale(0.6) rotateY(${direction * 30}deg)`,
        zIndex: 1,
        opacity: 0.3,
        filter: 'blur(2px)',
      };
    }
  };

  return (
    <section
      id='portfolio'
      className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-versiory-black to-versiory-blue/10' : 'bg-transparent'}`}
    >
      {/* Background Effects */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-r from-versiory-green/5 via-versiory-azure/5 to-versiory-pink/5'></div>
        <div className='absolute top-20 left-10 w-32 h-32 bg-versiory-green/10 rounded-full blur-3xl'></div>
        <div className='absolute top-40 right-20 w-24 h-24 bg-versiory-azure/10 rounded-full blur-2xl'></div>
        <div className='absolute bottom-20 left-1/4 w-40 h-40 bg-versiory-pink/10 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-12 sm:mb-16'
        >
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-versiory-pink/20 to-versiory-green/20 backdrop-blur-sm border border-versiory-pink/30 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6'>
            <Star size={16} className='sm:w-5 sm:h-5 text-versiory-green' />
            <span className='text-versiory-pink font-semibold text-sm sm:text-base'>
              Carrossel 3D
            </span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
          >
            <span className='bg-gradient-to-r from-versiory-green via-versiory-azure to-versiory-pink bg-clip-text text-transparent'>
              PROJETOS
            </span>
          </h2>

          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto px-4 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}
          >
            Carrossel de cartas 3D com projetos reais desenvolvidos com
            tecnologias modernas.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className='flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12'>
            {categories.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    setFilter(
                      category.key as
                        | 'web'
                        | 'mobile'
                        | 'system'
                        | 'ecommerce'
                        | 'professional'
                    )
                  }
                  className={`px-3 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm ${
                    filter === category.key
                      ? `bg-gradient-to-r ${category.color} text-black`
                      : `${theme === 'dark' ? 'bg-versiory-black/50' : 'bg-blue-light'} ${theme === 'dark' ? 'text-white' : 'text-gray-800'} border border-versiory-azure/30 hover:border-versiory-green/50`
                  }`}
                >
                  <span className='w-4 h-4 sm:w-5 sm:h-5'>{category.icon}</span>
                  <span className='hidden sm:block'>{category.label}</span>
                  <span className='sm:hidden'>
                    {category.label.split(' ')[0]}
                  </span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3D Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center'
        >
          {/* Carousel Container */}
          <div className='relative w-full h-full flex items-center justify-center perspective-1000'>
            {filteredProjects.map((project, index) => {
              const style = getCardStyle(index);
              const isActive = index === currentIndex;

              return (
                <motion.div
                  key={project.id}
                  initial={false}
                  animate={style}
                  transition={{
                    duration: 0.8,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                  }}
                  className='absolute w-72 h-[20rem] sm:w-80 sm:h-[24rem] md:w-96 md:h-[28rem] cursor-pointer'
                  onClick={() => setCurrentIndex(index)}
                >
                  {/* Project Card */}
                  <motion.div
                    whileHover={isActive ? { scale: 1.05 } : {}}
                    className={`w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
                      isActive
                        ? 'ring-4 ring-versiory-green/50 shadow-versiory-green/20'
                        : 'ring-2 ring-versiory-azure/30'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, 
                        ${theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)'} 0%, 
                        rgba(0, 255, 255, 0.1) 50%, 
                        rgba(204, 255, 0, 0.1) 100%)`,
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${theme === 'dark' ? 'rgba(0, 255, 255, 0.2)' : 'rgba(0, 255, 255, 0.3)'}`,
                    }}
                  >
                    {/* Project Image */}
                    <div className='relative h-40 sm:h-48 md:h-56 overflow-hidden'>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-cover transition-transform duration-500 hover:scale-110'
                      />

                      {/* Overlay */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className='absolute top-2 left-2 sm:top-3 sm:left-3 bg-gradient-to-r from-versiory-green to-versiory-azure text-black px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1'>
                          <Star size={10} />
                          <span className='text-xs'>Destaque</span>
                        </div>
                      )}

                      {/* Category Badge */}
                      <div className='absolute top-2 right-2 sm:top-3 sm:right-3 bg-versiory-black/80 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-1'>
                        {project.icon}
                        <span className='text-white/90 text-xs font-medium hidden sm:block'>
                          {
                            categories
                              .find(cat => cat.key === project.category)
                              ?.label.split(' ')[0]
                          }
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className='p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 md:space-y-6'>
                      <div>
                        <h3
                          className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                        >
                          {project.title}
                        </h3>
                        <motion.a
                          href={project.demoUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          whileHover={{ scale: 1.02 }}
                          className={`text-sm sm:text-base leading-relaxed font-bold cursor-pointer transition-all duration-300 ${
                            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                          }`}
                        >
                          {project.description.length > 80
                            ? `${project.description.substring(0, 80)}...`
                            : project.description}
                        </motion.a>
                      </div>

                      {/* Technologies */}
                      <div className='flex flex-wrap gap-1'>
                        {project.technologies.slice(0, 2).map(tech => (
                          <span
                            key={tech}
                            className={`px-2 py-1 border border-versiory-azure/60 rounded-full text-xs ${theme === 'dark' ? 'bg-versiory-black/30 text-white/80' : 'bg-blue-light/70 text-gray-700'}`}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className='px-2 py-1 text-xs text-versiory-azure'>
                            +{project.technologies.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className='flex gap-2'
                        >
                          <motion.a
                            href={project.demoUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='flex-1 bg-versiory-green text-black px-2 py-2 sm:px-3 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm flex items-center justify-center space-x-1'
                          >
                            <ExternalLink
                              size={12}
                              className='sm:w-3.5 sm:h-3.5'
                            />
                            <span>Demo</span>
                          </motion.a>
                          <motion.a
                            href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='flex-1 border border-versiory-azure text-versiory-azure px-2 py-2 sm:px-3 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm flex items-center justify-center space-x-1 hover:bg-versiory-azure hover:text-black transition-colors'
                          >
                            <Github size={12} className='sm:w-3.5 sm:h-3.5' />
                            <span>Code</span>
                          </motion.a>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 border border-versiory-azure/60 rounded-full flex items-center justify-center text-versiory-azure hover:border-versiory-green/70 transition-all duration-300 bg-versiory-black/30 backdrop-blur-sm'
          >
            <ChevronLeft size={16} className='sm:w-6 sm:h-6' />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 border border-versiory-azure/60 rounded-full flex items-center justify-center text-versiory-azure hover:border-versiory-green/70 transition-all duration-300 bg-versiory-black/30 backdrop-blur-sm'
          >
            <ChevronRight size={16} className='sm:w-6 sm:h-6' />
          </motion.button>
        </motion.div>

        {/* Dots Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className='flex justify-center mt-8 space-x-2'
        >
          {filteredProjects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-versiory-green scale-125'
                  : 'bg-versiory-azure/50 hover:bg-versiory-azure'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCarousel3D;
