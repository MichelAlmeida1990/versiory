'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'INÍCIO', href: '#home' },
    { name: 'SOBRE', href: '#about' },
    { name: 'SERVIÇOS', href: '#services' },
    { name: 'PORTFÓLIO', href: '#portfolio' },
    { name: 'SISTEMA', href: '#school-system' },
    { name: 'CONTATO', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
             className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         isScrolled
           ? `${theme === 'dark' ? 'bg-versory-black/90' : 'bg-white/90'} backdrop-blur-md border-b border-versory-azure/20`
           : 'bg-transparent'
       }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img 
              src="/images/logo.png" 
              alt="Versory Logo" 
              className="w-16 h-16 object-contain"
            />
            <span className="text-3xl font-bold bg-gradient-to-r from-versory-green to-versory-azure bg-clip-text text-transparent">
              VERSIORY
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                                 className={`${theme === 'dark' ? 'text-white/80' : 'text-gray-800/80'} hover:text-versory-green transition-colors duration-300 font-medium`}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-versory-blue/20 border border-versory-azure/30 rounded-full flex items-center justify-center text-versory-azure hover:bg-versory-azure hover:text-black transition-all duration-300"
            >
              <Facebook size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-versory-blue/20 border border-versory-azure/30 rounded-full flex items-center justify-center text-versory-azure hover:bg-versory-azure hover:text-black transition-all duration-300"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-versory-blue/20 border border-versory-azure/30 rounded-full flex items-center justify-center text-versory-azure hover:bg-versory-azure hover:text-black transition-all duration-300"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 bg-versory-blue/20 border border-versory-azure/30 rounded-lg flex items-center justify-center text-versory-azure"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
                     className={`md:hidden overflow-hidden ${theme === 'dark' ? 'bg-versory-black/95' : 'bg-white/95'} backdrop-blur-md border-t border-versory-azure/20`}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 10 }}
                                 className={`block px-4 py-2 ${theme === 'dark' ? 'text-white/80' : 'text-gray-800/80'} hover:text-versory-green transition-colors duration-300`}
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-4 pt-4 border-t border-versory-azure/20">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-versory-blue/20 border border-versory-azure/30 rounded-full flex items-center justify-center text-versory-azure"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-versory-blue/20 border border-versory-azure/30 rounded-full flex items-center justify-center text-versory-azure"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-versory-blue/20 border border-versory-azure/30 rounded-full flex items-center justify-center text-versory-azure"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 