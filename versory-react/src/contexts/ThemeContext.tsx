'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // SEMPRE inicializar com 'dark' para garantir consistência SSR/CSR
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Aplicar tema inicial imediatamente para evitar flash
    const savedTheme = localStorage.getItem('versiory-theme') as Theme | null;
    const initialTheme = savedTheme || 'dark';
    
    // Aplicar tema antes de atualizar o estado para evitar flash
    document.documentElement.setAttribute('data-theme', initialTheme);
    if (initialTheme !== theme) {
      setTheme(initialTheme);
    }
  }, []);

  useEffect(() => {
    // Aplicar tema ao documento
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('versiory-theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
