'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
              className="fixed top-24 right-8 z-40 w-12 h-12 bg-gradient-to-r from-versiory-green to-versiory-azure rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun size={20} className="text-white" />
        ) : (
          <Moon size={20} className="text-white" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 