'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Eye } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Profissional",
    description: "Portfolio moderno e responsivo com design minimalista, animações suaves e otimizado para SEO. Interface intuitiva que destaca projetos e habilidades profissionais.",
    image: "/images/mockup-port.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://portfolio-demo.vercel.app",
    githubUrl: "https://github.com/versiory/portfolio",
    category: "Portfolio"
  },
  {
    id: 2,
    title: "Barbearia Moderna",
    description: "Sistema completo para barbearia com agendamento online, galeria de trabalhos, preços e contato. Interface elegante e funcional para clientes e administradores.",
    image: "/images/mockup-barber.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    demoUrl: "https://barbearia-demo.vercel.app",
    githubUrl: "https://github.com/versiory/barbearia",
    category: "E-commerce"
  },
  {
    id: 3,
    title: "Imobiliária Digital",
    description: "Plataforma completa para imobiliária com busca avançada de imóveis, filtros inteligentes, galeria de fotos e sistema de contato. Design profissional e responsivo.",
    image: "/images/mockup-imobi.png",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "AWS S3", "SendGrid"],
    demoUrl: "https://imobiliaria-demo.vercel.app",
    githubUrl: "https://github.com/versiory/imobiliaria",
    category: "Imobiliária"
  },
  {
    id: 4,
    title: "App de Drinks",
    description: "Aplicativo para bar/restaurante com cardápio digital, sistema de pedidos, reservas e delivery. Interface moderna com animações e experiência de usuário otimizada.",
    image: "/images/mockup-drink.png",
    technologies: ["React Native", "Firebase", "Redux", "Stripe", "Push Notifications"],
    demoUrl: "https://drinks-demo.vercel.app",
    githubUrl: "https://github.com/versiory/drinks-app",
    category: "Food & Beverage"
  },
  {
    id: 5,
    title: "Studio de Fotografia",
    description: "Site profissional para fotógrafo com galeria de trabalhos, blog, sistema de agendamento e portfólio interativo. Design elegante que destaca a arte fotográfica.",
    image: "/images/mockup-foto.png",
    technologies: ["React", "Sanity CMS", "Cloudinary", "EmailJS", "Framer Motion"],
    demoUrl: "https://fotografia-demo.vercel.app",
    githubUrl: "https://github.com/versiory/fotografia",
    category: "Fotografia"
  },
  {
    id: 6,
    title: "Consultório Psicológico",
    description: "Plataforma para psicóloga com informações sobre serviços, blog sobre saúde mental, sistema de agendamento e área do paciente. Design acolhedor e profissional.",
    image: "/images/mockup-psi.png",
    technologies: ["Next.js", "Supabase", "Stripe", "SendGrid", "Calendly API"],
    demoUrl: "https://psicologa-demo.vercel.app",
    githubUrl: "https://github.com/versiory/psicologa",
    category: "Saúde"
  }
];

const ProjectCarousel3D = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const getProjectPosition = (index: number) => {
    const diff = (index - currentIndex + projects.length) % projects.length;
    
    if (diff === 0) return { z: 0, scale: 1, opacity: 1, rotateY: 0 };
    if (diff === 1) return { z: -200, scale: 0.8, opacity: 0.7, rotateY: 45 };
    if (diff === projects.length - 1) return { z: -200, scale: 0.8, opacity: 0.7, rotateY: -45 };
    if (diff === 2) return { z: -400, scale: 0.6, opacity: 0.4, rotateY: 90 };
    if (diff === projects.length - 2) return { z: -400, scale: 0.6, opacity: 0.4, rotateY: -90 };
    
    return { z: -600, scale: 0.4, opacity: 0.1, rotateY: diff > projects.length / 2 ? 180 : -180 };
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-br from-versory-black via-versory-blue/20 to-versory-black' : 'bg-gradient-to-br from-blue-50 via-white to-blue-50'}`} />
      
      {/* Header */}
      <div className="relative z-10 text-center pt-20 pb-10">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl md:text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
        >
          <span className="bg-gradient-to-r from-versory-green via-versory-azure to-versory-pink bg-clip-text text-transparent">
            Nossos Projetos
          </span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`text-xl ${theme === 'dark' ? 'text-white/80' : 'text-gray-600'}`}
        >
          Passe o mouse sobre os projetos para ver mais detalhes
        </motion.p>
      </div>

      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className="relative w-full h-96 flex items-center justify-center perspective-1000"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Projects */}
        {projects.map((project, index) => {
          const position = getProjectPosition(index);
          const isActive = index === currentIndex;
          const isHovered = hoveredProject === index;

          return (
            <motion.div
              key={project.id}
              className={`absolute w-80 h-64 cursor-pointer transition-all duration-500 ${
                isActive ? 'z-20' : 'z-10'
              }`}
              style={{
                transform: `translateZ(${position.z}px) scale(${position.scale}) rotateY(${position.rotateY}deg)`,
                opacity: position.opacity,
              }}
              whileHover={{ 
                scale: isActive ? 1.05 : 1.1,
                rotateY: isActive ? 0 : position.rotateY * 0.8,
                z: isActive ? 50 : position.z + 100
              }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => goToProject(index)}
            >
              {/* Project Card */}
              <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 transition-all duration-300 ${
                isActive 
                  ? 'border-versory-azure shadow-versory-azure/30' 
                  : 'border-versory-azure/30 shadow-versory-azure/10'
              }`}>
                
                {/* Project Image */}
                <div className="relative w-full h-full">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    
                    {/* Project Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-white/80 mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-versory-azure/20 text-versory-azure text-xs rounded-full border border-versory-azure/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-white/20 text-white/80 text-xs rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        {project.demoUrl && (
                          <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-1 px-3 py-1 bg-versory-green text-black text-sm rounded-full hover:bg-versory-green/80 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Eye size={14} />
                            Demo
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-1 px-3 py-1 bg-versory-black/50 text-white text-sm rounded-full hover:bg-versory-black/70 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={14} />
                            Código
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="relative z-30 flex justify-center items-center gap-8 mt-8">
        <motion.button
          onClick={prevProject}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
            theme === 'dark' 
              ? 'border-versory-azure text-versory-azure hover:bg-versory-azure hover:text-black' 
              : 'border-versory-azure text-versory-azure hover:bg-versory-azure hover:text-white'
          }`}
        >
          <ChevronLeft size={24} />
        </motion.button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToProject(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-versory-azure scale-125' 
                  : theme === 'dark' 
                    ? 'bg-white/30 hover:bg-white/50' 
                    : 'bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>

        <motion.button
          onClick={nextProject}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
            theme === 'dark' 
              ? 'border-versory-azure text-versory-azure hover:bg-versory-azure hover:text-black' 
              : 'border-versory-azure text-versory-azure hover:bg-versory-azure hover:text-white'
          }`}
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      {/* Project Details Panel */}
      <AnimatePresence>
        {hoveredProject !== null && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className={`absolute right-8 top-1/2 transform -translate-y-1/2 w-80 p-6 rounded-2xl backdrop-blur-md border ${
              theme === 'dark' 
                ? 'bg-versory-black/80 border-versory-azure/30' 
                : 'bg-white/80 border-versory-azure/30'
            } shadow-2xl z-40`}
          >
            <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {projects[hoveredProject].title}
            </h3>
            <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-white/80' : 'text-gray-600'}`}>
              {projects[hoveredProject].description}
            </p>
            
            <div className="mb-4">
              <h4 className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-versory-azure' : 'text-versory-azure'}`}>
                Tecnologias Utilizadas:
              </h4>
              <div className="flex flex-wrap gap-1">
                {projects[hoveredProject].technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className={`px-2 py-1 text-xs rounded-full border ${
                      theme === 'dark' 
                        ? 'bg-versory-azure/20 text-versory-azure border-versory-azure/30' 
                        : 'bg-versory-azure/10 text-versory-azure border-versory-azure/20'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              {projects[hoveredProject].demoUrl && (
                <motion.a
                  href={projects[hoveredProject].demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-versory-green text-black rounded-lg hover:bg-versory-green/80 transition-colors"
                >
                  <ExternalLink size={16} />
                  Ver Demo
                </motion.a>
              )}
              {projects[hoveredProject].githubUrl && (
                <motion.a
                  href={projects[hoveredProject].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-versory-black/50 text-white rounded-lg hover:bg-versory-black/70 transition-colors"
                >
                  <Github size={16} />
                  Código
                </motion.a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCarousel3D; 