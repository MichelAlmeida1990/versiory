import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LoadingScreen from '@/components/LoadingScreen';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Versiory - Desenvolvimento Web Moderno',
  description: 'Especialistas em desenvolvimento web moderno e soluções digitais inovadoras. React, Next.js, Django e muito mais.',
  keywords: 'desenvolvimento web, React, Next.js, Django, Firebase, sites responsivos, aplicações web',
  authors: [{ name: 'Versiory Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Versiory - Desenvolvimento Web Moderno',
    description: 'Especialistas em desenvolvimento web moderno e soluções digitais inovadoras.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/logo.png" as="image" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <ThemeProvider>
          <LoadingScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
