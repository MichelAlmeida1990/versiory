import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import SchoolSystem from '@/components/SchoolSystem';
import Portfolio from '@/components/Portfolio';
import Profile3D from '@/components/Profile3D';

export default function Home() {
  return (
    <main className="min-h-screen bg-versory-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <SchoolSystem />
      <Portfolio />
      <Profile3D />
    </main>
  );
}
