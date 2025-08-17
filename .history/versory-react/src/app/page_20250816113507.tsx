import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Profile3D';
import InteractiveEffects from '@/components/InteractiveEffects';
import TechStackVisor from '@/components/TechStackVisor';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <InteractiveEffects />
      <TechStackVisor />
    </main>
  );
}
