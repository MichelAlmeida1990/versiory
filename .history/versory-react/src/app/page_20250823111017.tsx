'use client';

import About from '@/components/About';
import Services from '@/components/Services';
import ProjectCarousel3D from '@/components/ProjectCarousel3D';
import Contact from '@/components/Profile3D';
import InteractiveEffects from '@/components/InteractiveEffects';
import TechStackVisor from '@/components/TechStackVisor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { useTheme } from './contexts/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  
  const backgroundStyle = theme === 'dark' 
    ? {
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)',
        backgroundAttachment: 'fixed'
      }
    : {
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #e2e8f0 75%, #f8fafc 100%)',
        backgroundAttachment: 'fixed'
      };

  return (
    <main 
      className="min-h-screen"
      style={backgroundStyle}
    >
      <Navbar />
      <Hero />
      <ProjectCarousel3D />
      <About />
      <Services />
      <Contact />
      <InteractiveEffects />
      <TechStackVisor />
    </main>
  );
}
