import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LoadingScreen from '@/components/LoadingScreen';
import { ThemeProvider } from '@/contexts/ThemeContext';
import SchemaOrg from '@/components/SchemaOrg';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://versiory.com'),
  title: 'Versiory - Desenvolvimento Web Moderno',
  description:
    'Especialistas em desenvolvimento web moderno e soluções digitais inovadoras. React, Next.js, Django e muito mais.',
  keywords:
    'desenvolvimento web, React, Next.js, Django, Firebase, sites responsivos, aplicações web',
  authors: [{ name: 'Versiory Team' }],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Versiory - Desenvolvimento Web Moderno',
    description:
      'Especialistas em desenvolvimento web moderno e soluções digitais inovadoras.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://versiory.com',
    siteName: 'Versiory',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Versiory - Desenvolvimento Web Moderno',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Versiory - Desenvolvimento Web Moderno',
    description:
      'Especialistas em desenvolvimento web moderno e soluções digitais inovadoras.',
    images: ['/images/logo.png'],
  },
  alternates: {
    canonical: 'https://versiory.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR' className='scroll-smooth'>
      <head>
        {/* Preload critical resources */}
        <link rel='preload' href='/images/logo.png' as='image' />

        {/* DNS prefetch for external resources */}
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='dns-prefetch' href='//fonts.gstatic.com' />

        {/* Preconnect to external domains */}
        <link
          rel='preconnect'
          href=' orçament  
        https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />

        {/* Schema.org structured data */}
        <SchemaOrg />

        {/* Google Search Console Verification */}
        <meta
          name='google-site-verification'
          content='HOLP-I_HcPY15Ky3II_QFPAIH2zQ8e844sb'
        />
      </head>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <GoogleAnalytics
          measurementId={
            process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'
          }
        />
        <ThemeProvider>
          <LoadingScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
