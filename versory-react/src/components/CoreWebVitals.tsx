'use client';

import { useEffect, useState } from 'react';
import { Activity, Clock, Zap, Target } from 'lucide-react';

interface WebVitalsData {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

export default function CoreWebVitals() {
  const [vitals, setVitals] = useState<WebVitalsData>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular coleta de Core Web Vitals
    const collectVitals = () => {
      // Em uma implementação real, você usaria web-vitals library
      const mockVitals: WebVitalsData = {
        lcp: 1.2, // Largest Contentful Paint
        fid: 50, // First Input Delay
        cls: 0.05, // Cumulative Layout Shift
        fcp: 0.8, // First Contentful Paint
        ttfb: 200, // Time to First Byte
      };

      setVitals(mockVitals);
      setIsLoading(false);
    };

    // Simular delay de coleta
    setTimeout(collectVitals, 1000);
  }, []);

  const getVitalStatus = (
    value: number,
    type: 'lcp' | 'fid' | 'cls' | 'fcp' | 'ttfb'
  ) => {
    const thresholds = {
      lcp: { good: 2.5, poor: 4.0 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      fcp: { good: 1.8, poor: 3.0 },
      ttfb: { good: 800, poor: 1800 },
    };

    const threshold = thresholds[type];
    if (value <= threshold.good) return { status: 'good', color: 'green' };
    if (value <= threshold.poor)
      return { status: 'needs-improvement', color: 'yellow' };
    return { status: 'poor', color: 'red' };
  };

  const formatValue = (value: number, type: string) => {
    if (type === 'lcp' || type === 'fcp') return `${value.toFixed(1)}s`;
    if (type === 'fid' || type === 'ttfb') return `${value}ms`;
    if (type === 'cls') return value.toFixed(3);
    return value.toString();
  };

  const vitalsConfig = [
    {
      key: 'lcp' as keyof WebVitalsData,
      name: 'Largest Contentful Paint',
      description: 'Tempo para renderizar o maior elemento de conteúdo',
      icon: Target,
      unit: 's',
    },
    {
      key: 'fid' as keyof WebVitalsData,
      name: 'First Input Delay',
      description: 'Tempo de resposta à primeira interação do usuário',
      icon: Zap,
      unit: 'ms',
    },
    {
      key: 'cls' as keyof WebVitalsData,
      name: 'Cumulative Layout Shift',
      description: 'Estabilidade visual da página',
      icon: Activity,
      unit: '',
    },
    {
      key: 'fcp' as keyof WebVitalsData,
      name: 'First Contentful Paint',
      description: 'Tempo para renderizar o primeiro conteúdo',
      icon: Clock,
      unit: 's',
    },
    {
      key: 'ttfb' as keyof WebVitalsData,
      name: 'Time to First Byte',
      description: 'Tempo para receber o primeiro byte do servidor',
      icon: Clock,
      unit: 'ms',
    },
  ];

  if (isLoading) {
    return (
      <div className='p-6 bg-white rounded-lg shadow-lg border'>
        <h3 className='text-xl font-bold mb-4'>Core Web Vitals</h3>
        <div className='animate-pulse space-y-4'>
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className='h-16 bg-gray-200 rounded'></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='p-6 bg-white rounded-lg shadow-lg border'>
      <h3 className='text-xl font-bold mb-4'>Core Web Vitals</h3>
      <p className='text-sm text-gray-600 mb-6'>
        Métricas essenciais para experiência do usuário e SEO
      </p>

      <div className='space-y-4'>
        {vitalsConfig.map(vital => {
          const value = vitals[vital.key];
          if (!value) return null;

          const status = getVitalStatus(value, vital.key);
          const Icon = vital.icon;

          return (
            <div key={vital.key} className='p-4 border rounded-lg'>
              <div className='flex items-center justify-between mb-2'>
                <div className='flex items-center gap-3'>
                  <Icon size={20} className='text-gray-600' />
                  <div>
                    <div className='font-semibold'>{vital.name}</div>
                    <div className='text-sm text-gray-600'>
                      {vital.description}
                    </div>
                  </div>
                </div>
                <div className='text-right'>
                  <div
                    className={`text-2xl font-bold ${
                      status.color === 'green'
                        ? 'text-green-600'
                        : status.color === 'yellow'
                          ? 'text-yellow-600'
                          : 'text-red-600'
                    }`}
                  >
                    {formatValue(value, vital.key)}
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      status.color === 'green'
                        ? 'text-green-600'
                        : status.color === 'yellow'
                          ? 'text-yellow-600'
                          : 'text-red-600'
                    }`}
                  >
                    {status.status === 'good'
                      ? '✅ Bom'
                      : status.status === 'needs-improvement'
                        ? '⚠️ Precisa melhorar'
                        : '❌ Ruim'}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg'>
        <h4 className='font-semibold text-blue-800 mb-2'>
          💡 Dicas de Otimização:
        </h4>
        <ul className='text-sm text-blue-700 space-y-1'>
          <li>• Use imagens otimizadas (WebP, lazy loading)</li>
          <li>• Minimize CSS e JavaScript</li>
          <li>• Use CDN para recursos estáticos</li>
          <li>• Implemente service workers para cache</li>
          <li>• Otimize fontes (preload, font-display: swap)</li>
        </ul>
      </div>
    </div>
  );
}
