import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import SchoolSystem from '@/components/SchoolSystem';

export default function Home() {
  return (
    <main className="min-h-screen bg-versory-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <SchoolSystem />
    </main>
  );
}
