'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export default function GoogleAnalytics({
  measurementId,
}: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  );
}

// Hook para tracking de eventos
export const useAnalytics = () => {
  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const trackPageView = (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  };

  return { trackEvent, trackPageView };
};

// Declaração global para TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
