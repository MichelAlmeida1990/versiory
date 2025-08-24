import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import ProjectCarousel3D from '@/components/ProjectCarousel3D';
import Contact from '@/components/Profile3D';
// import InteractiveEffects from '@/components/InteractiveEffects';
import TechStackVisor from '@/components/TechStackVisor';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectCarousel3D />
      <About />
      <Services />
      <Contact />
      {/* <InteractiveEffects /> */}
      <TechStackVisor />
    </main>
  );
}
