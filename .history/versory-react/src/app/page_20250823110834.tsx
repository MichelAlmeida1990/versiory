import About from '@/components/About';
import Services from '@/components/Services';
import ProjectCarousel3D from '@/components/ProjectCarousel3D';
import Contact from '@/components/Profile3D';
import InteractiveEffects from '@/components/InteractiveEffects';
import TechStackVisor from '@/components/TechStackVisor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)',
        backgroundAttachment: 'fixed'
      }}
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
