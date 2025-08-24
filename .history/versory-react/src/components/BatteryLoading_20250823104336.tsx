'use client';

import { useState, useEffect } from 'react';

const BatteryLoading = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div className="relative">
        {/* Battery outline */}
        <div className="w-32 h-16 bg-transparent border-4 border-white rounded-lg relative">
          {/* Battery terminal */}
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-8 bg-white rounded-r"></div>
          
          {/* Battery fill */}
          <div 
            className="h-full bg-gradient-to-r from-blue-400 to-blue-300 rounded-l transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
          
          {/* Battery level indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-lg drop-shadow-lg">
              {progress}%
            </span>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="mt-6 text-center">
          <h1 className="text-white text-3xl font-bold mb-2 drop-shadow-lg">
            VERSIORY
          </h1>
          <p className="text-blue-100 text-sm animate-pulse">
            Carregando...
          </p>
        </div>
        
        {/* Animated dots */}
        <div className="flex justify-center mt-4 space-x-1">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default BatteryLoading; 