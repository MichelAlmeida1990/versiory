'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const SlidingBanner = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  
  // Number of images for seamless loop
  const imageCount = 4;
  
  // Versão da imagem - ATUALIZE ESTE VALOR quando trocar a imagem black.jpg
  // Exemplo: 'v2', 'v3', '82-desconto', etc.
  // Isso força o navegador a buscar a nova versão da imagem
  const imageVersion = '82-desconto';

  useEffect(() => {
    setIsMounted(true);
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
              position: 'relative',
            }}
          >
            <Image
              key={`banner-${index}-${imageVersion}`}
              src={`/images/black.jpg?t=${imageVersion}`}
              alt={`Banner ${index + 1}`}
              fill
              className='object-cover'
              quality={90}
              priority={index < 2}
              sizes='100vw'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
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

      {/* Gradient edges for smooth blending - Responsive */}
      <div className='absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-versiory-black to-transparent z-10 pointer-events-none' />
      <div className='absolute inset-y-0 right-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-versiory-black to-transparent z-10 pointer-events-none' />
    </section>
  );
};

export default SlidingBanner;

