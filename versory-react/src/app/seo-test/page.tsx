'use client';

import { useState } from 'react';
import RichSnippetsTester from '@/components/RichSnippetsTester';
import CoreWebVitals from '@/components/CoreWebVitals';
import { Globe, Search, BarChart3, Zap } from 'lucide-react';

export default function SEOTestPage() {
  const [selectedUrl, setSelectedUrl] = useState('https://versiory.com');

  const pages = [
    {
      url: 'https://versiory.com',
      title: 'Página Principal',
      description: 'Homepage com informações sobre a empresa e serviços',
    },
    {
      url: 'https://versiory.com/orcamento',
      title: 'Página de Orçamento',
      description: 'Página para solicitação de orçamentos e preços',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            🚀 Dashboard de Testes SEO
          </h1>
          <p className='text-xl text-gray-600'>
            Ferramentas para testar e monitorar o SEO do site Versiory
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
          {/* Rich Snippets Tester */}
          <div className='lg:col-span-2'>
            <RichSnippetsTester
              url={selectedUrl}
              title={
                pages.find(p => p.url === selectedUrl)?.title ||
                'Página Selecionada'
              }
            />
          </div>

          {/* Core Web Vitals */}
          <div className='lg:col-span-2'>
            <CoreWebVitals />
          </div>

          {/* Page Selector */}
          <div className='bg-white rounded-lg shadow-lg border p-6'>
            <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
              <Globe className='text-blue-500' size={24} />
              Selecionar Página para Teste
            </h3>

            <div className='space-y-3'>
              {pages.map(page => (
                <button
                  key={page.url}
                  onClick={() => setSelectedUrl(page.url)}
                  className={`w-full p-4 rounded-lg border text-left transition-all ${
                    selectedUrl === page.url
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className='font-semibold text-gray-900'>
                    {page.title}
                  </div>
                  <div className='text-sm text-gray-600'>
                    {page.description}
                  </div>
                  <div className='text-xs text-gray-500 mt-1'>{page.url}</div>
                </button>
              ))}
            </div>
          </div>

          {/* SEO Status */}
          <div className='bg-white rounded-lg shadow-lg border p-6'>
            <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
              <BarChart3 className='text-green-500' size={24} />
              Status SEO
            </h3>

            <div className='space-y-4'>
              <div className='flex items-center justify-between p-3 bg-green-50 rounded-lg'>
                <span className='font-medium'>Robots.txt</span>
                <span className='text-green-600 font-semibold'>
                  ✅ Configurado
                </span>
              </div>

              <div className='flex items-center justify-between p-3 bg-green-50 rounded-lg'>
                <span className='font-medium'>Sitemap.xml</span>
                <span className='text-green-600 font-semibold'>
                  ✅ Configurado
                </span>
              </div>

              <div className='flex items-center justify-between p-3 bg-green-50 rounded-lg'>
                <span className='font-medium'>Schema.org</span>
                <span className='text-green-600 font-semibold'>
                  ✅ Implementado
                </span>
              </div>

              <div className='flex items-center justify-between p-3 bg-green-50 rounded-lg'>
                <span className='font-medium'>Meta Tags</span>
                <span className='text-green-600 font-semibold'>
                  ✅ Otimizado
                </span>
              </div>

              <div className='flex items-center justify-between p-3 bg-green-50 rounded-lg'>
                <span className='font-medium'>Google Analytics</span>
                <span className='text-green-600 font-semibold'>
                  ✅ Configurado
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className='bg-white rounded-lg shadow-lg border p-6'>
          <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
            <Zap className='text-yellow-500' size={24} />
            Ações Rápidas
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <a
              href='https://search.google.com/search-console'
              target='_blank'
              rel='noopener noreferrer'
              className='p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-center'
            >
              <Search className='mx-auto mb-2 text-blue-500' size={32} />
              <div className='font-semibold'>Google Search Console</div>
              <div className='text-sm text-gray-600'>Submeter sitemap</div>
            </a>

            <a
              href='https://analytics.google.com'
              target='_blank'
              rel='noopener noreferrer'
              className='p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all text-center'
            >
              <BarChart3 className='mx-auto mb-2 text-green-500' size={32} />
              <div className='font-semibold'>Google Analytics</div>
              <div className='text-sm text-gray-600'>Monitorar performance</div>
            </a>

            <a
              href='https://pagespeed.web.dev/'
              target='_blank'
              rel='noopener noreferrer'
              className='p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all text-center'
            >
              <Zap className='mx-auto mb-2 text-purple-500' size={32} />
              <div className='font-semibold'>PageSpeed Insights</div>
              <div className='text-sm text-gray-600'>
                Testar Core Web Vitals
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
