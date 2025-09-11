import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import ProjectCarousel3D from '@/components/ProjectCarousel3D';
import Contact from '@/components/Profile3D';
// import InteractiveEffects from '@/components/InteractiveEffects';
import TechStackVisor from '@/components/TechStackVisor';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Versiory - Desenvolvimento Web Moderno | Sites, Apps e E-commerce',
  description:
    'Especialistas em desenvolvimento web moderno. Criamos sites responsivos, aplicativos mobile, e-commerce e sistemas de gestão com React, Next.js e Django.',
  keywords:
    'desenvolvimento web, sites responsivos, aplicativos mobile, e-commerce, React, Next.js, Django, Firebase, desenvolvimento de software',
  openGraph: {
    title: 'Versiory - Desenvolvimento Web Moderno | Sites, Apps e E-commerce',
    description:
      'Especialistas em desenvolvimento web moderno. Criamos sites responsivos, aplicativos mobile, e-commerce e sistemas de gestão.',
    url: 'https://versiory.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Versiory - Desenvolvimento Web Moderno | Sites, Apps e E-commerce',
    description:
      'Especialistas em desenvolvimento web moderno. Criamos sites responsivos, aplicativos mobile, e-commerce e sistemas de gestão.',
  },
  alternates: {
    canonical: 'https://versiory.com',
  },
};

export default function Home() {
  return (
    <main className='min-h-screen'>
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
