'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'mobile' | 'design' | 'system';
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'design' | 'system'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Sistema de Delivery",
      description: "Aplicativo completo de delivery com interface moderna e funcionalidades avançadas de pedidos e pagamentos.",
      image: "/images/image_018.png",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Stripe", "Maps API"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Site Corporativo",
      description: "Website responsivo com design moderno e otimizado para conversão e SEO.",
      image: "/images/image_014.png",
      category: "web",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Landing Page",
      description: "Landing page otimizada para conversão com design atrativo e call-to-actions estratégicos.",
      image: "/images/image_011.png",
      category: "web",
      technologies: ["React", "CSS3", "JavaScript", "A/B Testing"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "App Fitness",
      description: "Aplicativo completo de fitness com tracking de exercícios, progresso e comunidade.",
      image: "/images/image_013.png",
      category: "mobile",
      technologies: ["React Native", "Node.js", "MongoDB", "Chart.js"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Sistema de Gestão",
      description: "Sistema completo de gestão empresarial com módulos integrados e dashboard analítico.",
      image: "/images/image_017.png",
      category: "system",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "E-commerce",
      description: "Plataforma de e-commerce completa com carrinho, pagamentos e gestão de produtos.",
      image: "/images/image_010.png",
      category: "web",
      technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  const categories = [
    { key: 'all', label: 'Todos' },
    { key: 'web', label: 'Web' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'design', label: 'Design' },
    { key: 'system', label: 'Sistemas' }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-versory-blue/10 to-versory-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-versory-azure to-versory-pink bg-clip-text text-transparent">
              Nosso Portfólio
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Projetos que demonstram nossa expertise em desenvolvimento web, mobile e sistemas.
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
                    ? 'bg-versory-green text-black shadow-lg shadow-versory-green/25'
                    : 'bg-versory-blue/20 text-white border border-versory-azure/30 hover:border-versory-green/50'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Carrossel de Projetos */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="relative max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-versory-black/50 to-versory-blue/20 backdrop-blur-sm border border-versory-azure/30 rounded-2xl p-8"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Imagem do Projeto */}
                  <div className="relative group">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative overflow-hidden rounded-xl"
                    >
                      <img
                        src={filteredProjects[currentProject]?.image}
                        alt={filteredProjects[currentProject]?.title}
                        className="w-full h-64 lg:h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Overlay com links */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-4">
                          {filteredProjects[currentProject]?.demoUrl && (
                            <motion.a
                              href={filteredProjects[currentProject]?.demoUrl}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="bg-versory-green text-black p-3 rounded-full hover:shadow-lg transition-all duration-300"
                            >
                              <ExternalLink size={20} />
                            </motion.a>
                          )}
                          {filteredProjects[currentProject]?.githubUrl && (
                            <motion.a
                              href={filteredProjects[currentProject]?.githubUrl}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="bg-versory-azure text-white p-3 rounded-full hover:shadow-lg transition-all duration-300"
                            >
                              <Github size={20} />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Informações do Projeto */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-versory-green mb-2">
                        {filteredProjects[currentProject]?.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {filteredProjects[currentProject]?.description}
                      </p>
                    </div>

                    {/* Tecnologias */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Tecnologias Utilizadas</h4>
                      <div className="flex flex-wrap gap-2">
                        {filteredProjects[currentProject]?.technologies.map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-3 py-1 bg-versory-blue/30 border border-versory-azure/30 rounded-full text-sm text-versory-azure"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Indicadores */}
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">
                        {currentProject + 1} de {filteredProjects.length}
                      </span>
                      <div className="flex space-x-2">
                        {filteredProjects.map((_, index) => (
                          <motion.button
                            key={index}
                            onClick={() => setCurrentProject(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentProject
                                ? 'bg-versory-green'
                                : 'bg-versory-azure/30'
                            }`}
                            whileHover={{ scale: 1.2 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controles do Carrossel */}
            <motion.button
              onClick={prevProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-versory-blue/80 backdrop-blur-sm border border-versory-azure/30 text-white p-3 rounded-full hover:bg-versory-azure transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              onClick={nextProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-versory-blue/80 backdrop-blur-sm border border-versory-azure/30 text-white p-3 rounded-full hover:bg-versory-azure transition-all duration-300"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Portfolio; 