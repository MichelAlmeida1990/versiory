'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const SlidingBanner = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <section className='relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-versiory-black' />
    );
  }

  // Number of images for seamless loop
  const imageCount = 4;

  return (
    <section className='relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-versiory-black'>
      {/* Container with infinite scroll animation using CSS */}
      <div
        className='absolute inset-0 flex animate-slide-banner'
        style={{
          width: `${imageCount * 100}vw`,
        }}
      >
        {Array.from({ length: imageCount }).map((_, index) => (
          <div
            key={index}
            className='relative flex-shrink-0'
            style={{
              width: '100vw',
              height: '100%',
            }}
          >
            <Image
              src='/images/black.jpg'
              alt='Banner'
              fill
              className='object-cover'
              quality={90}
              priority={index < 2}
              sizes='100vw'
            />
          </div>
        ))}
      </div>

      {/* Gradient edges for smooth blending */}
      <div className='absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-versiory-black to-transparent z-10 pointer-events-none' />
      <div className='absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-versiory-black to-transparent z-10 pointer-events-none' />
    </section>
  );
};

export default SlidingBanner;

