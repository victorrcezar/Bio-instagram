import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-brand-dark">
      
      {/* Top Right Gradient: Brand Glow / Purple Mix */}
      <div className="absolute -top-[10%] -right-[10%] w-[90vw] h-[90vh] sm:w-[80vh] sm:h-[80vh] rounded-full bg-brand-accent mix-blend-screen opacity-[0.12] blur-[120px] animate-pulse-slow" />
      
      {/* Bottom Left Gradient: Purple/Violet for depth */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[80vw] h-[80vh] sm:w-[70vh] sm:h-[70vh] rounded-full bg-purple-900 mix-blend-screen opacity-[0.15] blur-[100px]" />

      {/* Center Highlight for focus */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[50vw] h-[50vh] rounded-full bg-brand-glow opacity-[0.05] blur-[90px]" />

      {/* Noise Texture Overlay */}
      <div 
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-[0.035] animate-noise pointer-events-none mix-blend-overlay z-0"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
    </div>
  );
};