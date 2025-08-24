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
    <main 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/images/banner1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content with relative positioning to appear above overlay */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Contact />
        <InteractiveEffects />
        <TechStackVisor />
      </div>
    </main>
  );
}
