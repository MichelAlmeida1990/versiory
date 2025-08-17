'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Play, Pause } from 'lucide-react';
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
    description: "Portfolio moderno e responsivo com design minimalista, animações suaves e otimizado para SEO.",
    image: "/images/mockup-port.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://portfolio-demo.vercel.app",
    githubUrl: "https://github.com/versiory/portfolio",
    category: "Portfolio"
  },
  {
    id: 2,
    title: "Barbearia Moderna",
    description: "Sistema completo para barbearia com agendamento online, galeria de trabalhos e preços.",
    image: "/images/mockup-barber.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    demoUrl: "https://barbearia-demo.vercel.app",
    githubUrl: "https://github.com/versiory/barbearia",
    category: "E-commerce"
  },
  {
    id: 3,
    title: "Imobiliária Digital",
    description: "Plataforma completa para imobiliária com busca avançada de imóveis e filtros inteligentes.",
    image: "/images/mockup-imobi.png",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "AWS S3", "SendGrid"],
    demoUrl: "https://imobiliaria-demo.vercel.app",
    githubUrl: "https://github.com/versiory/imobiliaria",
    category: "Imobiliária"
  },
  {
    id: 4,
    title: "App de Drinks",
    description: "Aplicativo para bar/restaurante com cardápio digital, sistema de pedidos e reservas.",
    image: "/images/mockup-drink.png",
    technologies: ["React Native", "Firebase", "Redux", "Stripe", "Push Notifications"],
    demoUrl: "https://drinks-demo.vercel.app",
    githubUrl: "https://github.com/versiory/drinks-app",
    category: "Food & Beverage"
  },
  {
    id: 5,
    title: "Studio de Fotografia",
    description: "Site profissional para fotógrafo com galeria de trabalhos e sistema de agendamento.",
    image: "/images/mockup-foto.png",
    technologies: ["React", "Sanity CMS", "Cloudinary", "EmailJS", "Framer Motion"],
    demoUrl: "https://fotografia-demo.vercel.app",
    githubUrl: "https://github.com/versiory/fotografia",
    category: "Fotografia"
  },
  {
    id: 6,
    title: "Consultório Psicológico",
    description: "Plataforma para psicóloga com informações sobre serviços e sistema de agendamento.",
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered]);

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

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-br from-versory-black via-versory-blue/20 to-versory-black' : 'bg-gradient-to-br from-blue-50 via-white to-blue-50'}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,175,238,0.1),transparent_50%)]" />
      </div>
      
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
          Explore nossos projetos em 3D
        </motion.p>
      </div>

      {/* 3D Carousel Container */}
      <div 
        ref={carouselRef}
        className="relative w-full h-[600px] flex items-center justify-center"
        style={{ 
          perspective: '1500px',
          transformStyle: 'preserve-3d'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="relative w-full h-full flex items-center justify-center"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: `rotateY(${currentIndex * (360 / projects.length)}deg)`
          }}
        >
          {projects.map((project, index) => {
            const totalProjects = projects.length;
            const angleStep = 360 / totalProjects;
            const currentAngle = index * angleStep;
            const radius = 400;
            
            const x = Math.sin((currentAngle * Math.PI) / 180) * radius;
            const z = Math.cos((currentAngle * Math.PI) / 180) * radius;
            const isActive = index === currentIndex;
            const isAdjacent = Math.abs(index - currentIndex) === 1 || 
                              (currentIndex === 0 && index === totalProjects - 1) ||
                              (currentIndex === totalProjects - 1 && index === 0);

            return (
              <motion.div
                key={project.id}
                className={`absolute cursor-pointer transition-all duration-700 ease-out ${
                  isActive ? 'z-50' : isAdjacent ? 'z-30' : 'z-10'
                }`}
                style={{
                  transform: `translateX(${x}px) translateZ(${z}px) rotateY(${-currentAngle}deg)`
                }}
                whileHover={{ 
                  scale: 1.05,
                  z: z + 100,
                }}
                onClick={() => goToProject(index)}
              >
                {/* Project Card */}
                <div className={`relative w-full h-full group transition-all duration-500 ${
                  isActive ? 'scale-100' : 'scale-75'
                }`}>
                  {/* Card Background with Glassmorphism */}
                  <div className={`absolute inset-0 rounded-2xl backdrop-blur-md border-2 ${
                    theme === 'dark' 
                      ? 'bg-versory-black/40 border-versory-azure/30' 
                      : 'bg-white/40 border-versory-azure/20'
                  } shadow-2xl`} />
                  
                  {/* Project Image */}
                  <motion.div 
                    className="relative w-full h-full rounded-2xl overflow-hidden"
                    style={{
                      transform: `rotateY(${currentAngle}deg)`
                    }}
                  >
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      style={{
                        filter: isActive ? 'brightness(1) saturate(1.1)' : 'brightness(0.7) saturate(0.8)'
                      }}
                      whileHover={{
                        filter: 'brightness(1.2) saturate(1.2)',
                        scale: 1.1
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Project Info */}
                    <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ${
                      isActive ? 'opacity-100' : 'opacity-60'
                    }`}>
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm text-white/80 mb-3 line-clamp-2">
                          {project.description}
                        </p>
                        
                        {/* Quick Actions */}
                        <div className="flex gap-2">
                          {project.demoUrl && (
                            <motion.a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-1 px-3 py-1 bg-versory-green text-black text-xs rounded-full hover:bg-versory-green/80 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={12} />
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
                              className="flex items-center gap-1 px-3 py-1 bg-versory-black/50 text-white text-xs rounded-full hover:bg-versory-black/70 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github size={12} />
                              Código
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="relative z-40 flex justify-center items-center gap-8 mt-12">
        <motion.button
          onClick={prevProject}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
            theme === 'dark' 
              ? 'border-versory-azure text-versory-azure hover:bg-versory-azure hover:text-black' 
              : 'border-versory-azure text-versory-azure hover:bg-versory-azure hover:text-white'
          }`}
        >
          <ChevronLeft size={28} />
        </motion.button>

        {/* Auto-play Toggle */}
        <motion.button
          onClick={toggleAutoPlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
            theme === 'dark' 
              ? 'border-versory-green text-versory-green hover:bg-versory-green hover:text-black' 
              : 'border-versory-green text-versory-green hover:bg-versory-green hover:text-white'
          }`}
        >
          {isAutoPlaying ? <Pause size={24} /> : <Play size={24} />}
        </motion.button>

        {/* Dots Indicator */}
        <div className="flex gap-3">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToProject(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
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
          className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
            theme === 'dark' 
              ? 'border-versory-azure text-versory-azure hover:bg-versory-azure hover:text-black' 
              : 'border-versory-azure text-versory-azure hover:bg-versory-azure hover:text-white'
          }`}
        >
          <ChevronRight size={28} />
        </motion.button>
      </div>

      {/* Project Details Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className={`relative z-20 mx-auto mt-16 max-w-5xl p-8 rounded-3xl backdrop-blur-xl border ${
            theme === 'dark' 
              ? 'bg-versory-black/70 border-versory-azure/40' 
              : 'bg-white/70 border-versory-azure/30'
          } shadow-2xl`}
        >
          <div className="text-center">
            <h3 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {projects[currentIndex].title}
            </h3>
            <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-white/80' : 'text-gray-600'}`}>
              {projects[currentIndex].description}
            </p>
            
            <div className="mb-8">
              <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-versory-azure' : 'text-versory-azure'}`}>
                Tecnologias Utilizadas:
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {projects[currentIndex].technologies.map((tech, index) => (
                  <motion.span 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`px-4 py-2 text-sm rounded-full border font-medium ${
                      theme === 'dark' 
                        ? 'bg-versory-azure/20 text-versory-azure border-versory-azure/40' 
                        : 'bg-versory-azure/10 text-versory-azure border-versory-azure/30'
                    }`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-6">
              {projects[currentIndex].demoUrl && (
                <motion.a
                  href={projects[currentIndex].demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 bg-versory-green text-black rounded-xl hover:bg-versory-green/80 transition-all duration-300 font-semibold shadow-lg"
                >
                  <ExternalLink size={20} />
                  Ver Demo
                </motion.a>
              )}
              {projects[currentIndex].githubUrl && (
                <motion.a
                  href={projects[currentIndex].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 bg-versory-black/60 text-white rounded-xl hover:bg-versory-black/80 transition-all duration-300 font-semibold shadow-lg"
                >
                  <Github size={20} />
                  Ver Código
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectCarousel3D; 