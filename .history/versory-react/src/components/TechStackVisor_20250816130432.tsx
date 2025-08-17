'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  X, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  Zap,
  Globe,
  Shield,
  Cpu,
  Layers,
  Atom,
  Braces,
  FileCode,
  Server,
  GitBranch
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface TechIcon {
  name: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  animationType: 'rotate' | 'pulse' | 'float' | 'bounce' | 'shake' | 'glow';
}

const techStack: TechIcon[] = [
  { name: 'React', icon: <Atom size={32} />, color: '#61DAFB', bgColor: 'rgba(97, 218, 251, 0.1)', animationType: 'rotate' },
  { name: 'Next.js', icon: <FileCode size={32} />, color: '#FFFFFF', bgColor: 'rgba(255, 255, 255, 0.1)', animationType: 'pulse' },
  { name: 'TypeScript', icon: <Braces size={32} />, color: '#3178C6', bgColor: 'rgba(49, 120, 198, 0.1)', animationType: 'bounce' },
  { name: 'Node.js', icon: <Cpu size={32} />, color: '#339933', bgColor: 'rgba(51, 153, 51, 0.1)', animationType: 'float' },
  { name: 'Django', icon: <Database size={32} />, color: '#092E20', bgColor: 'rgba(9, 46, 32, 0.1)', animationType: 'shake' },
  { name: 'Firebase', icon: <Cloud size={32} />, color: '#FFCA28', bgColor: 'rgba(255, 202, 40, 0.1)', animationType: 'glow' },
  { name: 'Tailwind CSS', icon: <Palette size={32} />, color: '#06B6D4', bgColor: 'rgba(6, 182, 212, 0.1)', animationType: 'pulse' },
  { name: 'Framer Motion', icon: <Zap size={32} />, color: '#FF6B6B', bgColor: 'rgba(255, 107, 107, 0.1)', animationType: 'bounce' },
  { name: 'PostgreSQL', icon: <Database size={32} />, color: '#336791', bgColor: 'rgba(51, 103, 145, 0.1)', animationType: 'float' },
  { name: 'MongoDB', icon: <Server size={32} />, color: '#47A248', bgColor: 'rgba(71, 162, 72, 0.1)', animationType: 'rotate' },
  { name: 'AWS', icon: <Cloud size={32} />, color: '#FF9900', bgColor: 'rgba(255, 153, 0, 0.1)', animationType: 'glow' },
  { name: 'Docker', icon: <Layers size={32} />, color: '#2496ED', bgColor: 'rgba(36, 150, 237, 0.1)', animationType: 'shake' },
  { name: 'Git', icon: <GitBranch size={32} />, color: '#F05032', bgColor: 'rgba(240, 80, 50, 0.1)', animationType: 'bounce' },
  { name: 'REST API', icon: <Globe size={32} />, color: '#00D4AA', bgColor: 'rgba(0, 212, 170, 0.1)', animationType: 'float' },
  { name: 'GraphQL', icon: <Code size={32} />, color: '#E10098', bgColor: 'rgba(225, 0, 152, 0.1)', animationType: 'pulse' },
  { name: 'Jest', icon: <Shield size={32} />, color: '#C21325', bgColor: 'rgba(194, 19, 37, 0.1)', animationType: 'glow' },
];

const getAnimationProps = (type: string, index: number) => {
  const baseDelay = index * 0.1;
  
  switch (type) {
    case 'rotate':
      return {
        animate: {
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        },
        transition: {
          rotate: { duration: 3, repeat: Infinity, ease: "linear", delay: baseDelay },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: baseDelay }
        }
      };
    case 'pulse':
      return {
        animate: {
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: baseDelay
        }
      };
    case 'float':
      return {
        animate: {
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: baseDelay
        }
      };
    case 'bounce':
      return {
        animate: {
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
        },
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: baseDelay
        }
      };
    case 'shake':
      return {
        animate: {
          x: [0, -5, 5, -5, 0],
          rotate: [0, -2, 2, -2, 0],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: baseDelay
        }
      };
    case 'glow':
      return {
        animate: {
          boxShadow: [
            `0 0 10px currentColor`,
            `0 0 20px currentColor`,
            `0 0 30px currentColor`,
            `0 0 20px currentColor`,
            `0 0 10px currentColor`
          ],
          scale: [1, 1.05, 1],
        },
        transition: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: baseDelay
        }
      };
    default:
      return {};
  }
};

const TechStackVisor = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <>
      {/* Botão de Abertura */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-versory-green to-versory-azure text-black px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
      >
        <Code size={20} />
        <span>Tech Stack</span>
      </motion.button>

      {/* Visor Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm`}
              onClick={() => setIsOpen(false)}
            />

            {/* Visor Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={`relative w-full max-w-4xl border border-versory-azure/30 rounded-2xl p-8 shadow-2xl ${theme === 'dark' ? 'bg-gradient-to-br from-versory-black via-versory-blue/20 to-versory-black' : 'bg-gradient-to-br from-white via-blue-50/20 to-white'}`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-versory-green/20 to-versory-azure/20 rounded-lg flex items-center justify-center">
                    <Code size={24} className="text-versory-green" />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Tech Stack</h2>
                    <p className="text-versory-azure/80 text-sm">Nossas Tecnologias</p>
                  </div>
                </div>
                
                                 <motion.button
                   onClick={() => setIsOpen(false)}
                   whileHover={{ scale: 1.1, rotate: 90 }}
                   whileTap={{ scale: 0.9 }}
                   className={`w-10 h-10 border border-versory-azure/30 rounded-full flex items-center justify-center text-versory-azure hover:bg-versory-azure hover:text-black transition-all duration-300 ${theme === 'dark' ? 'bg-versory-black/50' : 'bg-blue-light'}`}
                 >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Visor Container */}
                                                           <div className={`relative overflow-hidden border border-versory-azure/20 rounded-xl p-6 ${theme === 'dark' ? 'bg-versory-black/50' : 'bg-white/10 backdrop-blur-md'}`}>
                {/* Marquee Container */}
                <div className="flex space-x-8 animate-marquee">
                  {/* Primeira linha de ícones */}
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={`${tech.name}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex-shrink-0 flex flex-col items-center space-y-2 group"
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <motion.div
                        {...getAnimationProps(tech.animationType, index)}
                        whileHover={{ 
                          scale: 1.3, 
                          rotateY: 180,
                          rotateX: 180,
                          boxShadow: `0 0 40px ${tech.color}60`,
                          filter: 'brightness(1.5)',
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="w-16 h-16 rounded-xl flex items-center justify-center border border-versory-azure/20 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                        style={{ 
                          backgroundColor: tech.bgColor,
                          color: tech.color
                        }}
                      >
                        {tech.icon}
                      </motion.div>
                      
                      {/* Tooltip */}
                      <AnimatePresence>
                        {hoveredTech === tech.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.8 }}
                            className="absolute -top-12 bg-versory-black/90 border border-versory-azure/30 rounded-lg px-3 py-2 text-xs text-white backdrop-blur-sm z-10"
                            style={{ color: tech.color }}
                          >
                            {tech.name}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-versory-black/90"></div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      <span className={`text-xs font-medium text-center max-w-16 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                  
                  {/* Duplicação para continuidade do marquee */}
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={`${tech.name}-duplicate-${index}`}
                      className="flex-shrink-0 flex flex-col items-center space-y-2 group"
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <motion.div
                        {...getAnimationProps(tech.animationType, index)}
                        whileHover={{ 
                          scale: 1.3, 
                          rotateY: 180,
                          rotateX: 180,
                          boxShadow: `0 0 40px ${tech.color}60`,
                          filter: 'brightness(1.5)',
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="w-16 h-16 rounded-xl flex items-center justify-center border border-versory-azure/20 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                        style={{ 
                          backgroundColor: tech.bgColor,
                          color: tech.color
                        }}
                      >
                        {tech.icon}
                      </motion.div>
                      <span className={`text-xs font-medium text-center max-w-16 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Segunda linha de ícones (mais lenta) */}
                <div className="flex space-x-8 animate-marquee-reverse mt-8">
                  {techStack.slice().reverse().map((tech, index) => (
                    <motion.div
                      key={`reverse-${tech.name}-${index}`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex-shrink-0 flex flex-col items-center space-y-2 group"
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <motion.div
                        {...getAnimationProps(tech.animationType, index)}
                        whileHover={{ 
                          scale: 1.4, 
                          rotateX: 180,
                          rotateY: 180,
                          boxShadow: `0 0 30px ${tech.color}50`,
                          filter: 'brightness(1.3)',
                        }}
                        whileTap={{ scale: 0.8 }}
                        className="w-12 h-12 rounded-lg flex items-center justify-center border border-versory-pink/20 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                        style={{ 
                          backgroundColor: tech.bgColor,
                          color: tech.color
                        }}
                      >
                        {tech.icon}
                      </motion.div>
                      <span className={`text-xs font-medium text-center max-w-12 ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 text-center">
                <p className="text-versory-azure/80 text-sm">
                  Passe o mouse sobre os ícones para ver as animações interativas
                </p>
                <div className={`flex justify-center space-x-4 mt-4 text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                  <span>🔄 Rotação</span>
                  <span>💓 Pulso</span>
                  <span>🌊 Flutuação</span>
                  <span>⚡ Brilho</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TechStackVisor; 