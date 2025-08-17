import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-versory-black">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-versory-green mb-4">
            Versiory
          </h1>
          <p className="text-2xl text-white">
            Teste - Página funcionando!
          </p>
        </div>
      </div>
    </main>
  );
}
