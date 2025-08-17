import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import SchoolSystem from '@/components/SchoolSystem';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <main className="min-h-screen bg-versory-black">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-versory-green mb-4">
            Versiory
          </h1>
          <p className="text-2xl text-white mb-4">
            Teste - Tailwind funcionando!
          </p>
          <div className="space-y-2">
            <div className="w-20 h-20 bg-versory-blue mx-auto rounded-lg"></div>
            <div className="w-20 h-20 bg-versory-azure mx-auto rounded-lg"></div>
            <div className="w-20 h-20 bg-versory-pink mx-auto rounded-lg"></div>
            <div className="w-20 h-20 bg-versory-brown mx-auto rounded-lg"></div>
            <div className="w-20 h-20 bg-versory-green mx-auto rounded-lg"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
