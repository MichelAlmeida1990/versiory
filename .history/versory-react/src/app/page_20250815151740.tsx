import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <main className="min-h-screen bg-versory-black">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
    </main>
  );
}
