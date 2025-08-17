'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3000);

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

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
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
          Clique nos projetos para ver mais detalhes
        </motion.p>
      </div>

      {/* 3D Carousel Container */}
      <div 
        className="relative w-full h-96 flex items-center justify-center"
        style={{ perspective: '1000px' }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {projects.map((project, index) => {
            const totalProjects = projects.length;
            const angleStep = 360 / totalProjects;
            const currentAngle = (index - currentIndex) * angleStep;
            const radius = 300;
            
            const x = Math.sin((currentAngle * Math.PI) / 180) * radius;
            const z = Math.cos((currentAngle * Math.PI) / 180) * radius;
            const scale = z > 0 ? 1 : 0.5;
            const opacity = z > 0 ? 1 : 0.3;
            const isActive = index === currentIndex;

            return (
              <motion.div
                key={project.id}
                className={`absolute cursor-pointer transition-all duration-500 ease-out ${
                  isActive ? 'z-30' : 'z-10'
                }`}
                style={{
                  transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
                  opacity: opacity,
                  width: '250px',
                  height: '180px',
                }}
                whileHover={{ 
                  scale: scale * 1.1,
                  z: z + 50,
                }}
                onClick={() => goToProject(index)}
              >
                {/* Project Image */}
                <div className="relative w-full h-full group">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                    style={{
                      filter: isActive ? 'brightness(1)' : 'brightness(0.8)',
                    }}
                    whileHover={{
                      filter: 'brightness(1.1)',
                      boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.4)'
                    }}
                  />
                  
                  {/* Project Title Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl flex items-end p-4 transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="text-white">
                      <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                      <p className="text-xs text-white/80 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative z-20 mx-auto mt-12 max-w-4xl p-6 rounded-2xl backdrop-blur-md border ${
          theme === 'dark' 
            ? 'bg-versory-black/60 border-versory-azure/30' 
            : 'bg-white/60 border-versory-azure/30'
        } shadow-2xl`}
      >
        <div className="text-center">
          <h3 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {projects[currentIndex].title}
          </h3>
          <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-white/80' : 'text-gray-600'}`}>
            {projects[currentIndex].description}
          </p>
          
          <div className="mb-6">
            <h4 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-versory-azure' : 'text-versory-azure'}`}>
              Tecnologias Utilizadas:
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              {projects[currentIndex].technologies.map((tech, index) => (
                <span 
                  key={index}
                  className={`px-3 py-1 text-sm rounded-full border ${
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

          <div className="flex justify-center gap-4">
            {projects[currentIndex].demoUrl && (
              <motion.a
                href={projects[currentIndex].demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-versory-green text-black rounded-lg hover:bg-versory-green/80 transition-colors font-semibold"
              >
                <ExternalLink size={18} />
                Ver Demo
              </motion.a>
            )}
            {projects[currentIndex].githubUrl && (
              <motion.a
                href={projects[currentIndex].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-versory-black/50 text-white rounded-lg hover:bg-versory-black/70 transition-colors font-semibold"
              >
                <Github size={18} />
                Ver Código
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCarousel3D; 