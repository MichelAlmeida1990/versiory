'use client';

import { useState, useEffect } from 'react';

const BatteryLoading = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isCharging, setIsCharging] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (isCharging) {
          if (prev >= 100) {
            setIsCharging(false);
            return 100;
          }
          return prev + 1;
        } else {
          if (prev <= 0) {
            setIsCharging(true);
            return 0;
          }
          return prev - 1;
        }
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isCharging]);

  // Auto-hide after 5 seconds
  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      {/* Blue banner background like the image */}
      <div className="relative w-full max-w-2xl mx-4">
        {/* Main blue banner */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-2xl p-8 relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20"></div>
          
          {/* Battery container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Battery */}
            <div className="w-40 h-20 bg-transparent border-4 border-white rounded-lg relative mb-6">
              {/* Battery terminal */}
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-10 bg-white rounded-r"></div>
              
              {/* Battery fill with charging animation */}
              <div 
                className={`h-full rounded-l transition-all duration-200 ease-out ${
                  isCharging 
                    ? 'bg-gradient-to-r from-green-400 to-green-300' 
                    : 'bg-gradient-to-r from-red-400 to-red-300'
                }`}
                style={{ width: `${progress}%` }}
              ></div>
              
              {/* Battery level indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-xl drop-shadow-lg">
                  {progress}%
                </span>
              </div>
            </div>
            
            {/* VERSIORY text */}
            <h1 className="text-white text-5xl font-bold mb-4 drop-shadow-lg text-center">
              VERSIORY
            </h1>
            
            {/* Status text */}
            <p className="text-blue-100 text-lg animate-pulse">
              {isCharging ? 'Carregando...' : 'Descarregando...'}
            </p>
            
            {/* Animated charging indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              <div className={`w-3 h-3 rounded-full animate-pulse ${
                isCharging ? 'bg-green-400' : 'bg-red-400'
              }`}></div>
              <div className={`w-3 h-3 rounded-full animate-pulse ${
                isCharging ? 'bg-green-400' : 'bg-red-400'
              }`} style={{ animationDelay: '0.2s' }}></div>
              <div className={`w-3 h-3 rounded-full animate-pulse ${
                isCharging ? 'bg-green-400' : 'bg-red-400'
              }`} style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatteryLoading; 