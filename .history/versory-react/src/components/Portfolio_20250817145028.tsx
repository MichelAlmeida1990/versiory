'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Star, Users, Calendar, Smartphone, Monitor, ShoppingCart, Building, Camera } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

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
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'system' | 'ecommerce' | 'professional'>('all');
  const [mounted, setMounted] = useState(false);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "App de Academia",
      description: "Aplicação React completa e profissional para gestão de academias. Sistema robusto com autenticação Firebase, dashboard interativo, gerenciamento de perfis, catálogo de exercícios e estatísticas avançadas com gráficos.",
      image: "/images/image_018.png",
      mockup: "/images/mockup-1.png",
      category: "mobile",
      technologies: ["React 18", "Material-UI", "Firebase", "Chart.js", "Framer Motion", "React Router"],
      demoUrl: "https://michelalmeida1990.github.io/Portfolio-Profissional/",
      githubUrl: "https://github.com/michelalmeida1990",
      featured: true,
      stats: {
        users: "500+",
        rating: 4.9,
        date: "2024"
      },
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Sistema de Gestão Escolar",
      description: "Sistema completo full-stack para gestão acadêmica e administrativa de escolas. Inclui módulos de alunos, professores, turmas, notas, frequência, biblioteca e financeiro.",
      image: "/images/image_017.png",
      mockup: "/images/mockup-2.png",
      category: "system",
      technologies: ["Python", "Django", "Bootstrap", "Chart.js", "PostgreSQL"],
      demoUrl: "https://michelalmeida1990.github.io/Portfolio-Profissional/",
      githubUrl: "https://github.com/michelalmeida1990",
      featured: true,
      stats: {
        users: "1000+",
        rating: 4.8,
        date: "2024"
      },
      icon: <Building className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Barbearia do Di",
      description: "Site responsivo para barbearia com sistema de agendamento e galeria de serviços. Interface moderna e funcionalidades de agendamento online.",
      image: "/images/image_013.png",
      mockup: "/images/mockup-3.png",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
      demoUrl: "https://michelalmeida1990.github.io/Portfolio-Profissional/",
      githubUrl: "https://github.com/michelalmeida1990",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Santo Drink",
      description: "E-commerce de bebidas com catálogo de produtos e sistema de carrinho de compras. Plataforma completa para venda online de bebidas.",
      image: "/images/image_010.png",
      category: "ecommerce",
      technologies: ["HTML", "CSS", "JavaScript", "E-commerce"],
      demoUrl: "https://michelalmeida1990.github.io/Portfolio-Profissional/",
      githubUrl: "https://github.com/michelalmeida1990",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Site Psicóloga Lígia Silva",
      description: "Site profissional para psicóloga clínica especializada em Terapia Cognitivo-Comportamental (TCC). Inclui informações sobre áreas de atendimento e formulário de contato.",
      image: "/images/Psicologa.png",
      category: "professional",
      technologies: ["HTML", "CSS", "JavaScript", "Google Meet", "Responsive"],
      demoUrl: "https://michelalmeida1990.github.io/Portfolio-Profissional/",
      githubUrl: "https://github.com/michelalmeida1990",
      icon: <Building className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Site Imobiliária",
      description: "Site profissional para imobiliária com catálogo de imóveis, sistema de busca, filtros avançados e formulário de contato para clientes interessados.",
      image: "/images/imobiliaria.png",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "Filtros", "Responsive"],
      demoUrl: "https://michelalmeida1990.github.io/Portfolio-Profissional/",
      githubUrl: "https://github.com/michelalmeida1990",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      id: 7,
      title: "Portfólio Fotógrafo",
      description: "Site profissional para fotógrafo com galeria de trabalhos, portfólio interativo e sistema de contato. Design moderno e elegante.",
      image: "/images/image_016.png",
      category: "professional",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Responsive"],
      demoUrl: "https://michelalmeida1990.github.io/Portfolio-Profissional/",
      githubUrl: "https://github.com/michelalmeida1990",
      icon: <Camera className="w-6 h-6" />
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { key: 'all', label: 'Todos os Projetos', color: 'from-versory-green to-versory-azure', icon: <Star className="w-5 h-5" /> },
    { key: 'mobile', label: 'Aplicativos Mobile', color: 'from-versory-azure to-versory-pink', icon: <Smartphone className="w-5 h-5" /> },
    { key: 'system', label: 'Sistemas', color: 'from-versory-pink to-versory-green', icon: <Building className="w-5 h-5" /> },
    { key: 'web', label: 'Sites Web', color: 'from-versory-green to-versory-brown', icon: <Monitor className="w-5 h-5" /> },
    { key: 'ecommerce', label: 'E-commerce', color: 'from-versory-brown to-versory-blue', icon: <ShoppingCart className="w-5 h-5" /> },
    { key: 'professional', label: 'Sites Profissionais', color: 'from-versory-blue to-versory-azure', icon: <Building className="w-5 h-5" /> }
  ];

  const headerAnimation = useScrollAnimation({ delay: 0.2 });
  const filtersAnimation = useScrollAnimation({ delay: 0.4 });
  const filtersStagger = useStaggerAnimation(categories, 0.1);
  const carouselAnimation = useScrollAnimation({ delay: 0.6 });
  const navigationAnimation = useScrollAnimation({ delay: 0.8 });

  const nextProject = () => {
    setCurrentProject((prev) => 
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProject((prev) => 
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setCurrentProject(0);
  }, [filter]);

  if (!mounted) {
    return null;
  }

  return (
    <section id="portfolio" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-versory-black to-versory-blue/10' : 'bg-transparent'}`}>
      {/* Efeito de Gradiente Animado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-versory-green/5 via-versory-azure/5 to-versory-pink/5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-versory-green/3 to-transparent"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent via-versory-azure/3 to-transparent"></div>
        
        {/* Elementos decorativos estáticos */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-versory-green/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-versory-azure/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-versory-pink/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-versory-green/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerAnimation.ref} style={headerAnimation.style} className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-versory-pink/20 to-versory-green/20 backdrop-blur-sm border border-versory-pink/30 rounded-full px-6 py-3 mb-6">
            <Star size={20} className="text-versory-green" />
            <span className="text-versory-pink font-semibold">Portfólio Real</span>
          </div>
          
          <h2 className={`text-4xl lg:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-versory-green via-versory-azure to-versory-pink bg-clip-text text-transparent">
              PROJETOS
            </span>
          </h2>
          
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
            Projetos reais desenvolvidos com tecnologias modernas e foco em experiência do usuário.
          </p>
        </div>

        {/* Filtros */}
        <div ref={filtersAnimation.ref} style={filtersAnimation.style}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <div key={category.key} ref={filtersStagger.refs[index]} style={filtersStagger.getStaggerStyle(index)}>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: filter === category.key 
                      ? "0 0 30px rgba(204, 255, 0, 0.4)" 
                      : "0 0 20px rgba(0, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(category.key as any)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 relative overflow-hidden ${
                    filter === category.key
                      ? `bg-gradient-to-r ${category.color} text-black`
                      : `${theme === 'dark' ? 'bg-versory-black/50' : 'bg-blue-light'} ${theme === 'dark' ? 'text-white' : 'text-gray-800'} border border-versory-azure/30 hover:border-versory-green/50`
                  }`}
                >
                  {/* Efeito de brilho no hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 -skew-x-12 transform translate-x-[-100%] hover:translate-x-[100%]"></div>
                  {category.icon}
                  <span>{category.label}</span>
                </motion.button>
              </div>
            ))}
          </div>
        </div>

        {/* Carrossel de Projetos */}
        <div ref={carouselAnimation.ref} style={carouselAnimation.style}>
          <div className="relative">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                index === currentProject && (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                  >
                    {/* Mockup do Projeto */}
                    <div className="relative group">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-versory-blue/10 to-versory-azure/10 backdrop-blur-sm border border-versory-azure/60"
                        style={{
                          background: `linear-gradient(135deg, 
                            ${theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.1)'} 0%, 
                            rgba(0, 255, 255, 0.1) 50%, 
                            rgba(204, 255, 0, 0.1) 100%)`
                        }}
                      >
                        {/* Mockup Principal */}
                        <div className="relative">
                          {project.mockup ? (
                            <div className="relative group">
                              <OptimizedImage 
                                src={project.mockup} 
                                alt={`Mockup ${project.title}`}
                                className="w-full h-auto"
                                priority={index === 0}
                              />
                              
                              {/* Overlay com a tela do projeto */}
                              <div className="absolute inset-0 flex items-center justify-center p-8">
                                <motion.div 
                                  className="w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-gray-800"
                                  whileHover={{ scale: 1.02 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <OptimizedImage 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                  />
                                </motion.div>
                              </div>
                              
                              {/* Efeito de brilho */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                          ) : (
                            <div className="aspect-video bg-gradient-to-br from-versory-black/50 to-versory-blue/20 flex items-center justify-center overflow-hidden rounded-xl">
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full"
                              >
                                <OptimizedImage 
                                  src={project.image} 
                                  alt={project.title}
                                  className="w-full h-full object-cover"
                                  priority={index === 0}
                                />
                              </motion.div>
                            </div>
                          )}
                        </div>
                        
                        {/* Overlay com Stats */}
                        {project.stats && (
                          <div className="absolute top-4 right-4 bg-versory-black/80 backdrop-blur-sm rounded-lg p-3">
                            <div className="flex items-center space-x-2 text-white/90 text-sm">
                              <Users size={16} />
                              <span>{project.stats.users}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-white/90 text-sm">
                              <Star size={16} className="text-versory-green" />
                              <span>{project.stats.rating}</span>
                            </div>
                          </div>
                        )}

                        {/* Badge Featured */}
                        {project.featured && (
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-versory-green to-versory-azure text-black px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                            <Star size={12} />
                            <span>Destaque</span>
                          </div>
                        )}

                        {/* Badge Categoria */}
                        <div className="absolute bottom-4 left-4 bg-versory-black/80 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2">
                          {project.icon}
                          <span className="text-white/90 text-sm font-medium">
                            {categories.find(cat => cat.key === project.category)?.label}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Informações do Projeto */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          {project.icon && (
                            <div className="p-2 bg-gradient-to-r from-versory-green to-versory-azure rounded-lg">
                              {project.icon}
                            </div>
                          )}
                          <h3 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {project.title}
                          </h3>
                        </div>
                        <p className={`leading-relaxed text-lg ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                          {project.description}
                        </p>
                      </div>

                      {/* Tecnologias */}
                      <div>
                        <h4 className="bg-gradient-to-r from-versory-green to-versory-azure bg-clip-text text-transparent font-semibold mb-3">Tecnologias Utilizadas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 border border-versory-azure/60 rounded-full text-sm ${theme === 'dark' ? 'bg-versory-black/30 text-white/80' : 'bg-blue-light/70 text-gray-700'}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Botões */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(204, 255, 0, 0.3)" }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-versory-green text-black px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                        >
                          <ExternalLink size={20} />
                          <span>Ver Demo</span>
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="border-2 border-versory-azure text-versory-azure px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-versory-azure hover:text-black transition-all duration-300"
                        >
                          <Github size={20} />
                          <span>Código</span>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>

            {/* Navegação */}
            <div ref={navigationAnimation.ref} style={navigationAnimation.style} className="flex justify-center mt-12 space-x-4">
              <motion.button
                onClick={prevProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 border border-versory-azure/60 rounded-full flex items-center justify-center text-versory-azure hover:border-versory-green/70 transition-all duration-300 ${theme === 'dark' ? 'bg-versory-black/30' : 'bg-blue-light/70'}`}
              >
                <ChevronLeft size={24} />
              </motion.button>
              
              <div className="flex items-center space-x-2">
                {filteredProjects.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentProject
                        ? 'bg-versory-green scale-125'
                        : 'bg-versory-azure/50 hover:bg-versory-azure'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 border border-versory-azure/60 rounded-full flex items-center justify-center text-versory-azure hover:border-versory-green/70 transition-all duration-300 ${theme === 'dark' ? 'bg-versory-black/30' : 'bg-blue-light/70'}`}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 