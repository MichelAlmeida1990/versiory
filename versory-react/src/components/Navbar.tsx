'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Image from 'next/image';

const Navbar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  };

  // Removido o useEffect que detectava scroll para manter navbar sempre escura

  const navItems = [
    { name: 'INÍCIO', href: '#home' },
    { name: 'SOBRE', href: '#empresa' },
    { name: 'SERVIÇOS', href: '#servicos' },
    { name: 'PORTFÓLIO', href: '#portfolio' },
    { name: 'CONTATO', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-versiory-azure/30 transition-all duration-300 shadow-2xl`}
      style={{
        backgroundColor:
          theme === 'dark'
            ? 'rgba(0, 0, 0, 0.75)'
            : 'rgba(255, 255, 255, 0.75)',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='flex items-center space-x-3'
          >
            <Image
              src='/images/logo.png'
              alt='versiory Logo'
              width={64}
              height={64}
              priority
              className='w-16 h-16 object-contain'
            />
            <motion.span
              className='text-3xl font-bold bg-gradient-to-r from-versiory-green to-versiory-azure bg-clip-text text-transparent'
              animate={{
                opacity: [1, 0.3, 1],
                filter: ['brightness(1)', 'brightness(0.5)', 'brightness(1)'],
              }}
              transition={{
                opacity: { duration: 2, repeat: Infinity },
                filter: { duration: 2, repeat: Infinity },
              }}
            >
              VERSIORY
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map(item => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${theme === 'dark' ? 'text-white/80' : 'text-gray-800/80'} hover:text-versiory-green transition-colors duration-300 font-medium`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Social Icons */}
          <div className='hidden md:flex items-center space-x-4'>
            <motion.a
              href={isMounted ? 'https://facebook.com/versiory' : '#'}
              target={isMounted ? '_blank' : undefined}
              rel={isMounted ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-10 h-10 bg-versiory-blue/20 border border-versiory-azure/30 rounded-full flex items-center justify-center text-versiory-azure hover:bg-versiory-azure hover:text-black transition-all duration-300'
            >
              <Facebook size={20} />
            </motion.a>
            <motion.a
              href={isMounted ? 'https://instagram.com/versiory' : '#'}
              target={isMounted ? '_blank' : undefined}
              rel={isMounted ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-10 h-10 bg-versiory-blue/20 border border-versiory-azure/30 rounded-full flex items-center justify-center text-versiory-azure hover:bg-versiory-azure hover:text-black transition-all duration-300'
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              href={isMounted ? 'https://linkedin.com/company/versiory' : '#'}
              target={isMounted ? '_blank' : undefined}
              rel={isMounted ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-10 h-10 bg-versiory-blue/20 border border-versiory-azure/30 rounded-full flex items-center justify-center text-versiory-azure hover:bg-versiory-azure hover:text-black transition-all duration-300'
            >
              <Linkedin size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden w-10 h-10 bg-versiory-blue/20 border border-versiory-azure/30 rounded-lg flex items-center justify-center text-versiory-azure'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden ${theme === 'dark' ? 'bg-versiory-black/95' : 'bg-blue-light'} backdrop-blur-md border-t border-versiory-azure/20`}
        >
          <div className='py-4 space-y-4'>
            {navItems.map(item => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ x: 10 }}
                className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white/80' : 'text-gray-800/80'} hover:text-versiory-green transition-colors duration-300`}
              >
                {item.name}
              </motion.button>
            ))}

            {/* Mobile Social Icons */}
            <div className='flex justify-center space-x-4 pt-4 border-t border-versiory-azure/20'>
              <motion.a
                href={isMounted ? 'https://facebook.com/versiory' : '#'}
                target={isMounted ? '_blank' : undefined}
                rel={isMounted ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='w-10 h-10 bg-versiory-blue/20 border border-versiory-azure/30 rounded-full flex items-center justify-center text-versiory-azure'
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href={isMounted ? 'https://instagram.com/versiory' : '#'}
                target={isMounted ? '_blank' : undefined}
                rel={isMounted ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='w-10 h-10 bg-versiory-blue/20 border border-versiory-azure/30 rounded-full flex items-center justify-center text-versiory-azure'
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href={isMounted ? 'https://linkedin.com/company/versiory' : '#'}
                target={isMounted ? '_blank' : undefined}
                rel={isMounted ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='w-10 h-10 bg-versiory-blue/20 border border-versiory-azure/30 rounded-full flex items-center justify-center text-versiory-azure'
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
