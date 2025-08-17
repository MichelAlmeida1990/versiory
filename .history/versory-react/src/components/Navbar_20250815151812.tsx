'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#empresa', label: 'EMPRESA' },
    { href: '#portfolio', label: 'PORTFÓLIO' },
    { href: '#servicos', label: 'SERVIÇOS' },
    { href: '#produtos', label: 'PRODUTOS' },
    { href: '#contato', label: 'CONTATO' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-versory-azure/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo e Social Icons */}
          <div className="flex items-center space-x-6">
            {/* Social Icons */}
            <div className="hidden md:flex flex-col space-y-2">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#00afee' }}
                className="text-white hover:text-versory-azure transition-colors"
              >
                <Facebook size={16} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#ca00ca' }}
                className="text-white hover:text-versory-pink transition-colors"
              >
                <Instagram size={16} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#00afee' }}
                className="text-white hover:text-versory-azure transition-colors"
              >
                <Linkedin size={16} />
              </motion.a>
            </div>

            {/* Logo */}
            <motion.div
              className="flex flex-col items-start"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-versory-blue via-versory-azure to-versory-pink rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Versiory</h1>
                  <p className="text-xs text-white/80">Transformando ideias em sucesso</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  color: '#ccff00',
                  scale: 1.05 
                }}
                className="text-white hover:text-versory-green transition-all duration-300 font-medium"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-versory-green text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-versory-green/25 transition-all duration-300"
            >
              EMPRESA
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-versory-azure/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white hover:text-versory-green transition-colors py-2"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-versory-green text-black px-6 py-3 rounded-full font-semibold mt-4"
              >
                EMPRESA
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 