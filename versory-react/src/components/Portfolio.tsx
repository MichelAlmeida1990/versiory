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
  ClipboardList,
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

const Portfolio = () => {
  const { theme } = useTheme();
  const [currentProject, setCurrentProject] = useState(0);
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
      image: '/images/gestao-escolar-unsplash.png',
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
    {
      id: 8,
      title: 'Sistema de Gestão de Processos',
      description:
        'Sistema completo para gestão e acompanhamento de processos e tarefas. Interface moderna com dashboard interativo, gerenciamento de tarefas, status de processos, filtros avançados e relatórios em tempo real.',
      image: '/images/gestao-juridica.png',
      category: 'system',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Vercel',
        'Gestão de Tarefas',
      ],
      demoUrl: 'https://sistema-de-gest-o-de-processos-si8r.vercel.app/tasks',
      githubUrl: 'https://github.com/michelalmeida1990',
      featured: true,
      stats: {
        users: '200+',
        rating: 4.7,
        date: '2024',
      },
      icon: <ClipboardList className='w-6 h-6' />,
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

  const nextProject = () => {
    setCurrentProject(prev =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProject(prev =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    setCurrentProject(0);
  }, [filter]);

  return (
    <section
      id='portfolio'
      className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-versiory-black to-versiory-blue/10' : 'bg-transparent'}`}
    >
      {/* Efeito de Gradiente Animado */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-r from-versiory-green/5 via-versiory-azure/5 to-versiory-pink/5'></div>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-versiory-green/3 to-transparent'></div>
        <div className='absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent via-versiory-azure/3 to-transparent'></div>

        {/* Elementos decorativos estáticos */}
        <div className='absolute top-20 left-10 w-32 h-32 bg-versiory-green/10 rounded-full blur-3xl'></div>
        <div className='absolute top-40 right-20 w-24 h-24 bg-versiory-azure/10 rounded-full blur-2xl'></div>
        <div className='absolute bottom-20 left-1/4 w-40 h-40 bg-versiory-pink/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-40 right-1/3 w-20 h-20 bg-versiory-green/10 rounded-full blur-xl'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-versiory-pink/20 to-versiory-green/20 backdrop-blur-sm border border-versiory-pink/30 rounded-full px-6 py-3 mb-6'>
            <Star size={20} className='text-versiory-green' />
            <span className='text-versiory-pink font-semibold'>
              Portfólio Real
            </span>
          </div>

          <h2
            className={`text-4xl lg:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
          >
            <span className='bg-gradient-to-r from-versiory-green via-versiory-azure to-versiory-pink bg-clip-text text-transparent'>
              PROJETOS
            </span>
          </h2>

          <p
            className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}
          >
            Projetos reais desenvolvidos com tecnologias modernas e foco em
            experiência do usuário.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className='flex flex-wrap justify-center gap-4 mb-12'>
            {categories.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      filter === category.key
                        ? '0 0 30px rgba(204, 255, 0, 0.4)'
                        : '0 0 20px rgba(0, 255, 255, 0.3)',
                  }}
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
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 relative overflow-hidden ${
                    filter === category.key
                      ? `bg-gradient-to-r ${category.color} text-black`
                      : `${theme === 'dark' ? 'bg-versiory-black/50' : 'bg-blue-light'} ${theme === 'dark' ? 'text-white' : 'text-gray-800'} border border-versiory-azure/30 hover:border-versiory-green/50`
                  }`}
                >
                  {/* Efeito de brilho no hover */}
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 -skew-x-12 transform translate-x-[-100%] hover:translate-x-[100%]'></div>
                  {category.icon}
                  <span>{category.label}</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Carrossel de Projetos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className='relative'>
            <AnimatePresence>
              {filteredProjects.map(
                (project, index) =>
                  index === currentProject && (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className='grid lg:grid-cols-2 gap-12 items-stretch'
                    >
                      {/* Mockup do Projeto */}
                      <div
                        className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-versiory-blue/10 to-versiory-azure/10 backdrop-blur-sm border border-versiory-azure/60 shadow-2xl h-full'
                        style={{
                          background: `linear-gradient(135deg, 
                             ${theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.1)'} 0%, 
                             rgba(0, 255, 255, 0.1) 50%, 
                             rgba(204, 255, 0, 0.1) 100%)`,
                          boxShadow: `0 25px 50px -12px ${theme === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'}`,
                        }}
                      >
                        {/* Efeito de brilho no card */}
                        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'></div>

                        {/* Mockup Principal */}
                        <div className='relative'>
                          {project.mockup ? (
                            <div
                              className='relative group aspect-video overflow-hidden rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300'
                              onClick={e => {
                                console.log('🖼️ CLIQUE NA IMAGEM MOCKUP!');
                                console.log('🎯 Projeto:', project.title);
                                console.log('🔗 URL:', project.demoUrl);
                                console.log(
                                  '📱 Tem demoUrl?',
                                  !!project.demoUrl
                                );
                                e.preventDefault();
                                e.stopPropagation();
                                if (project.demoUrl) {
                                  console.log(
                                    '✅ Abrindo URL:',
                                    project.demoUrl
                                  );
                                  window.open(project.demoUrl, '_blank');
                                } else {
                                  console.log(
                                    '❌ URL não definida para este projeto'
                                  );
                                  alert('URL não disponível para este projeto');
                                }
                              }}
                            >
                              <Image
                                src={project.mockup}
                                alt={`Mockup ${project.title}`}
                                fill
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                className='object-cover w-full h-full'
                              />

                              {/* Efeito de brilho */}
                              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'></div>

                              {/* Indicador de clique */}
                              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
                                <div className='bg-black/70 backdrop-blur-sm rounded-full p-3'>
                                  <ExternalLink
                                    size={24}
                                    className='text-white'
                                  />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div
                              className='aspect-video bg-gradient-to-br from-versiory-black/50 to-versiory-blue/20 flex items-center justify-center overflow-hidden rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300'
                              onClick={e => {
                                console.log('🖼️ CLIQUE NA IMAGEM!');
                                console.log('🎯 Projeto:', project.title);
                                console.log('🔗 URL:', project.demoUrl);
                                console.log(
                                  '📱 Tem demoUrl?',
                                  !!project.demoUrl
                                );
                                e.preventDefault();
                                e.stopPropagation();
                                if (project.demoUrl) {
                                  console.log(
                                    '✅ Abrindo URL:',
                                    project.demoUrl
                                  );
                                  window.open(project.demoUrl, '_blank');
                                } else {
                                  console.log(
                                    '❌ URL não definida para este projeto'
                                  );
                                  alert('URL não disponível para este projeto');
                                }
                              }}
                            >
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                priority={project.id === 1}
                                className='object-cover'
                              />

                              {/* Indicador de clique */}
                              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
                                <div className='bg-black/70 backdrop-blur-sm rounded-full p-3'>
                                  <ExternalLink
                                    size={24}
                                    className='text-white'
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Overlay com Stats */}
                        {project.stats && (
                          <div className='absolute top-4 right-4 bg-versiory-black/80 backdrop-blur-sm rounded-lg p-3 pointer-events-none'>
                            <div className='flex items-center space-x-2 text-white/90 text-sm'>
                              <Users size={16} />
                              <span>{project.stats.users}</span>
                            </div>
                            <div className='flex items-center space-x-2 text-white/90 text-sm'>
                              <Star size={16} className='text-versiory-green' />
                              <span>{project.stats.rating}</span>
                            </div>
                          </div>
                        )}

                        {/* Badge Featured */}
                        {project.featured && (
                          <div className='absolute top-4 left-4 bg-gradient-to-r from-versiory-green to-versiory-azure text-black px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg animate-pulse pointer-events-none'>
                            <Star size={12} />
                            <span>Destaque</span>
                          </div>
                        )}

                        {/* Badge Categoria */}
                        <div className='absolute bottom-4 left-4 bg-versiory-black/80 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2 pointer-events-none'>
                          {project.icon}
                          <span className='text-white/90 text-sm font-medium'>
                            {
                              categories.find(
                                cat => cat.key === project.category
                              )?.label
                            }
                          </span>
                        </div>
                      </div>

                      {/* Informações do Projeto */}
                      <div className='space-y-6'>
                        <div>
                          <div className='flex items-center space-x-3 mb-4'>
                            {project.icon && (
                              <div className='p-2 bg-gradient-to-r from-versiory-green to-versiory-azure rounded-lg'>
                                {project.icon}
                              </div>
                            )}
                            <h3
                              className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                            >
                              {project.title}
                            </h3>
                          </div>
                          <p
                            className={`leading-relaxed text-lg ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}
                          >
                            {project.description}
                          </p>
                        </div>

                        {/* Tecnologias */}
                        <div>
                          <h4 className='bg-gradient-to-r from-versiory-green to-versiory-azure bg-clip-text text-transparent font-semibold mb-3'>
                            Tecnologias Utilizadas:
                          </h4>
                          <div className='flex flex-wrap gap-2'>
                            {project.technologies.map(tech => (
                              <span
                                key={tech}
                                className={`px-3 py-1 border border-versiory-azure/60 rounded-full text-sm ${theme === 'dark' ? 'bg-versiory-black/30 text-white/80' : 'bg-blue-light/70 text-gray-700'}`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Botão Código */}
                        <div className='flex justify-center'>
                          <motion.button
                            onClick={e => {
                              console.log(
                                '🔘 Botão Código clicado!',
                                project.title
                              );
                              e.stopPropagation();
                              window.open(project.githubUrl, '_blank');
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='border-2 border-versiory-azure text-versiory-azure px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-versiory-azure hover:text-black transition-all duration-300'
                          >
                            <Github size={20} />
                            <span>Ver Código</span>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>

            {/* Navegação */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className='flex justify-center mt-12 space-x-4'
            >
              <motion.button
                onClick={prevProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 border border-versiory-azure/60 rounded-full flex items-center justify-center text-versiory-azure hover:border-versiory-green/70 transition-all duration-300 ${theme === 'dark' ? 'bg-versiory-black/30' : 'bg-blue-light/70'}`}
              >
                <ChevronLeft size={24} />
              </motion.button>

              <div className='flex items-center space-x-2'>
                {filteredProjects.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentProject
                        ? 'bg-versiory-green scale-125'
                        : 'bg-versiory-azure/50 hover:bg-versiory-azure'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 border border-versiory-azure/60 rounded-full flex items-center justify-center text-versiory-azure hover:border-versiory-green/70 transition-all duration-300 ${theme === 'dark' ? 'bg-versiory-black/30' : 'bg-blue-light/70'}`}
              >
                <ChevronRight size={24} />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
