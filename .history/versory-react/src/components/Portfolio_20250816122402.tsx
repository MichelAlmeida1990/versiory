'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Star, Users, Calendar } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import OptimizedImage from './OptimizedImage';
import { useTheme } from '../contexts/ThemeContext';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
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
}

const Portfolio = () => {
  const { theme } = useTheme();
  const [currentProject, setCurrentProject] = useState(0);
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'system' | 'ecommerce' | 'professional'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "App de Academia",
      description: "Aplicação React completa e profissional para gestão de academias. Sistema robusto com autenticação Firebase, dashboard interativo, gerenciamento de perfis, catálogo de exercícios e estatísticas avançadas com gráficos.",
      image: "/images/image_018.png",
      category: "mobile",
      technologies: ["React 18", "Material-UI", "Firebase", "Chart.js", "Framer Motion", "React Router"],
      demoUrl: "https://michelalmeida1990.github.io/Portfolio-Profissional/",
      githubUrl: "https://github.com/michelalmeida1990",
      featured: true,
      stats: {
        users: "500+",
        rating: 4.9,
        date: "2024"
      }
    },
    {
      id: 2,
      title: "Sistema de Gestão Escolar",
      description: "Sistema completo full-stack para gestão acadêmica e administrativa de escolas. Inclui módulos de alunos, professores, turmas, notas, frequência, biblioteca e financeiro.",
      image: "/images/image_017.png",
      category: "system",
      technologies: ["Python", "Django", "Bootstrap", "Chart.js", "PostgreSQL"],
      demoUrl: "https://michelalmeida1990.github.io/Portfolio-Profissional/",
      githubUrl: "https://github.com/michelalmeida1990",
      featured: true,
      stats: {
        users: "1000+",
        rating: 4.8,
        date: "2024"
      }
    },
    {
      id: 3,
      title: "Barbearia do Di",
      description: "Site responsivo para barbearia com sistema de agendamento e galeria de serviços. Interface moderna e funcionalidades de agendamento online.",
      image: "/images/image_013.png",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
      demoUrl: "https://michelalmeida1990.github.io/Portfolio-Profissional/",
      githubUrl: "https://github.com/michelalmeida1990"
    },
    {
      id: 4,
      title: "Santo Drink",
      description: "E-commerce de bebidas com catálogo de produtos e sistema de carrinho de compras. Plataforma completa para venda online de bebidas.",
      image: "/images/image_010.png",
      category: "ecommerce",
      technologies: ["HTML", "CSS", "JavaScript", "E-commerce"],
      demoUrl: "https://michelalmeida1990.github.io/Portfolio-Profissional/",
      githubUrl: "https://github.com/michelalmeida1990"
    },
    {
      id: 5,
      title: "Site Psicóloga Lígia Silva",
      description: "Site profissional para psicóloga clínica especializada em Terapia Cognitivo-Comportamental (TCC). Inclui informações sobre áreas de atendimento e formulário de contato.",
      image: "/images/Psicologa.png",
      category: "professional",
      technologies: ["HTML", "CSS", "JavaScript", "Google Meet", "Responsive"],
      demoUrl: "https://michelalmeida1990.github.io/Portfolio-Profissional/",
      githubUrl: "https://github.com/michelalmeida1990"
    },
    {
      id: 6,
      title: "Site Imobiliária",
      description: "Site profissional para imobiliária com catálogo de imóveis, sistema de busca, filtros avançados e formulário de contato para clientes interessados.",
      image: "/images/imobiliaria.png",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "Filtros", "Responsive"],
      demoUrl: "https://michelalmeida1990.github.io/Portfolio-Profissional/",
      githubUrl: "https://github.com/michelalmeida1990"
    },
    {
      id: 7,
      title: "Portfólio Fotógrafo",
      description: "Site profissional para fotógrafo com galeria de trabalhos, portfólio interativo e sistema de contato. Design moderno e elegante.",
      image: "/images/image_016.png",
      category: "professional",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Responsive"],
      demoUrl: "https://michelalmeida1990.github.io/Portfolio-Profissional/",
      githubUrl: "https://github.com/michelalmeida1990"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { key: 'all', label: 'Todos os Projetos', color: 'from-versory-green to-versory-azure' },
    { key: 'mobile', label: 'Aplicativos Mobile', color: 'from-versory-azure to-versory-pink' },
    { key: 'system', label: 'Sistemas', color: 'from-versory-pink to-versory-green' },
    { key: 'web', label: 'Sites Web', color: 'from-versory-green to-versory-brown' },
    { key: 'ecommerce', label: 'E-commerce', color: 'from-versory-brown to-versory-blue' },
    { key: 'professional', label: 'Sites Profissionais', color: 'from-versory-blue to-versory-azure' }
  ];

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
    setCurrentProject(0);
  }, [filter]);

  return (
    <section id="portfolio" className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-b from-versory-black to-versory-blue/10' : 'bg-gradient-to-b from-gray-50 to-blue-50/30'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-versory-pink/20 to-versory-green/20 backdrop-blur-sm border border-versory-pink/30 rounded-full px-6 py-3 mb-6"
          >
            <Star size={20} className="text-versory-green" />
            <span className="text-versory-pink font-semibold">Portfólio Real</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
                         className={`text-4xl lg:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
          >
            <span className="bg-gradient-to-r from-versory-pink to-versory-green bg-clip-text text-transparent">
              PROJETOS
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
                         className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}
          >
            Projetos reais desenvolvidos com tecnologias modernas e foco em experiência do usuário.
          </motion.p>
        </ScrollReveal>

        {/* Filtros */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.key as any)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category.key
                    ? `bg-gradient-to-r ${category.color} text-black`
                    : 'bg-versory-black/50 text-white border border-versory-azure/30 hover:border-versory-green/50'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Carrossel de Projetos */}
        <ScrollReveal direction="up" delay={0.4}>
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
                    {/* Imagem do Projeto */}
                    <div className="relative group">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-versory-blue/20 to-versory-azure/20 backdrop-blur-sm border border-versory-azure/30"
                      >
                        <div className="aspect-video bg-gradient-to-br from-versory-black/50 to-versory-blue/20 flex items-center justify-center overflow-hidden">
                          <OptimizedImage 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full"
                            priority={index === 0}
                          />
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
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-versory-green to-versory-azure text-black px-3 py-1 rounded-full text-xs font-bold">
                            ⭐ Destaque
                          </div>
                        )}
                      </motion.div>
                    </div>

                    {/* Informações do Projeto */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {project.title}
                        </h3>
                        <p className="text-white/80 leading-relaxed text-lg">
                          {project.description}
                        </p>
                      </div>

                      {/* Tecnologias */}
                      <div>
                        <h4 className="text-versory-green font-semibold mb-3">Tecnologias Utilizadas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-versory-black/50 border border-versory-azure/30 rounded-full text-white/80 text-sm"
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
            <div className="flex justify-center mt-12 space-x-4">
              <motion.button
                onClick={prevProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-versory-black/50 border border-versory-azure/30 rounded-full flex items-center justify-center text-versory-azure hover:border-versory-green/50 transition-all duration-300"
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
                className="w-12 h-12 bg-versory-black/50 border border-versory-azure/30 rounded-full flex items-center justify-center text-versory-azure hover:border-versory-green/50 transition-all duration-300"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Portfolio; 