import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base Background Color */}
      <div className="absolute inset-0 bg-up-dark" />
      
      {/* Top Right Gradient - Reduced opacity for better contrast */}
      <div className="absolute -top-[10%] -right-[10%] w-[80vw] h-[80vh] sm:w-[70vh] sm:h-[70vh] rounded-full bg-up-deep mix-blend-screen opacity-20 blur-[100px] animate-pulse" />
      
      {/* Bottom Left Gradient - Reduced opacity for better contrast */}
      <div className="absolute -bottom-[10%] -left-[10%] w-[70vw] h-[70vh] sm:w-[60vh] sm:h-[60vh] rounded-full bg-up-accent mix-blend-screen opacity-15 blur-[80px]" />

      {/* Noise Texture Overlay */}
      {/* We use a large container (200%) to allow the noise to vibrate/move without showing edges */}
      <div 
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-[0.04] animate-noise pointer-events-none mix-blend-overlay z-0"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glassmorphism overlay to smooth everything out - High blur for better readability */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-up-dark/10" />

      {/* Subtle Grid Pattern (optional tech feel) */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }} 
      />
    </div>
  );
};