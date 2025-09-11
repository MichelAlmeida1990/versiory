'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, ExternalLink, Code } from 'lucide-react';

interface RichSnippetsTesterProps {
  url: string;
  title: string;
}

export default function RichSnippetsTester({
  url,
  title,
}: RichSnippetsTesterProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const testRichSnippets = async () => {
    setIsLoading(true);
    setError(null);
    setResults(null);

    try {
      // Teste com Google Rich Results Test API
      const response = await fetch(
        `https://search.google.com/test/rich-results?url=${encodeURIComponent(url)}`
      );

      if (!response.ok) {
        throw new Error('Erro ao testar rich snippets');
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setIsLoading(false);
    }
  };

  const openGoogleTest = () => {
    window.open(
      `https://search.google.com/test/rich-results?url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const openSchemaValidator = () => {
    window.open(
      `https://validator.schema.org/#url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  return (
    <div className='p-6 bg-white rounded-lg shadow-lg border'>
      <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
        <Code className='text-blue-500' size={24} />
        Teste de Rich Snippets
      </h3>

      <div className='mb-4'>
        <p className='text-sm text-gray-600 mb-2'>
          <strong>URL:</strong> {url}
        </p>
        <p className='text-sm text-gray-600'>
          <strong>Página:</strong> {title}
        </p>
      </div>

      <div className='flex gap-3 mb-4'>
        <button
          onClick={testRichSnippets}
          disabled={isLoading}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 flex items-center gap-2'
        >
          {isLoading ? (
            <>
              <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>
              Testando...
            </>
          ) : (
            <>
              <CheckCircle size={16} />
              Testar Automaticamente
            </>
          )}
        </button>

        <button
          onClick={openGoogleTest}
          className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center gap-2'
        >
          <ExternalLink size={16} />
          Google Rich Results Test
        </button>

        <button
          onClick={openSchemaValidator}
          className='px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 flex items-center gap-2'
        >
          <ExternalLink size={16} />
          Schema Validator
        </button>
      </div>

      {error && (
        <div className='p-4 bg-red-50 border border-red-200 rounded-lg mb-4'>
          <div className='flex items-center gap-2 text-red-700'>
            <XCircle size={20} />
            <strong>Erro:</strong> {error}
          </div>
        </div>
      )}

      {results && (
        <div className='p-4 bg-green-50 border border-green-200 rounded-lg'>
          <div className='flex items-center gap-2 text-green-700 mb-2'>
            <CheckCircle size={20} />
            <strong>Resultado do Teste:</strong>
          </div>
          <pre className='text-sm text-gray-700 overflow-auto'>
            {JSON.stringify(results, null, 2)}
          </pre>
        </div>
      )}

      <div className='mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg'>
        <h4 className='font-semibold text-blue-800 mb-2'>
          Schemas Implementados:
        </h4>
        <ul className='text-sm text-blue-700 space-y-1'>
          <li>✅ Organization Schema</li>
          <li>✅ Website Schema</li>
          <li>✅ Service Schema</li>
          <li>✅ ContactPoint Schema</li>
        </ul>
      </div>
    </div>
  );
}
