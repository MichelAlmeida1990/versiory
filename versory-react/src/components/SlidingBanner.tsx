'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const SlidingBanner = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [cacheBuster, setCacheBuster] = useState<string>('');
  
  // Number of images for seamless loop
  const imageCount = 4;
  
  // Versão da imagem - ATUALIZE ESTE VALOR quando trocar a imagem black.jpg
  // Exemplo: 'v2', 'v3', '82-desconto', etc.
  const imageVersion = '82-desconto-v2';

  useEffect(() => {
    setIsMounted(true);
    // Gera timestamp dinâmico para forçar atualização
    const timestamp = Date.now();
    setCacheBuster(`${imageVersion}-${timestamp}`);
    
    // Limpa cache do navegador se disponível
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name);
        });
      });
    }
    
    // Força reload da imagem após um pequeno delay
    const forceReload = () => {
      const timestamp2 = Date.now();
      setCacheBuster(`${imageVersion}-${timestamp2}`);
    };
    
    // Tenta forçar reload após 100ms
    setTimeout(forceReload, 100);
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  return (
    <section 
      id='sliding-banner'
      className='relative w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[450px] xl:h-[500px] overflow-hidden bg-versiory-black'
      style={{ 
        position: 'relative',
        minHeight: '200px',
      }}
    >
      {/* Container with infinite scroll animation using CSS */}
      <div
        className='absolute inset-0 flex animate-slide-banner'
        style={{
          width: `${imageCount * 100}vw`,
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          gap: 0,
          opacity: isMounted && imagesLoaded >= 2 ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        {Array.from({ length: imageCount }).map((_, index) => (
          <div
            key={index}
            className='relative flex-shrink-0'
            style={{
              width: '100vw',
              height: '100%',
              minWidth: '100vw',
              maxWidth: '100vw',
              position: 'relative',
              margin: 0,
              padding: 0,
            }}
          >
            <Image
              key={`banner-${index}-${cacheBuster || imageVersion}`}
              src={cacheBuster ? `/images/black.jpg?cb=${cacheBuster}&v=${imageVersion}` : `/images/black.jpg?v=${imageVersion}`}
              alt={`Banner ${index + 1}`}
              fill
              quality={90}
              priority={index < 2}
              sizes='100vw'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100%',
                height: '100%',
                margin: 0,
                padding: 0,
              }}
              onLoad={handleImageLoad}
              onError={(e) => {
                console.error(`Erro ao carregar imagem ${index}:`, e);
              }}
              unoptimized={true}
            />
          </div>
        ))}
      </div>

      {/* Loading placeholder */}
      {(!isMounted || imagesLoaded < 2) && (
        <div className='absolute inset-0 bg-versiory-black flex items-center justify-center z-20'>
          <div className='w-8 h-8 border-2 border-versiory-azure border-t-transparent rounded-full animate-spin' />
        </div>
      )}

      {/* Gradient edges removidos para evitar espaços brancos */}
    </section>
  );
};

export default SlidingBanner;

