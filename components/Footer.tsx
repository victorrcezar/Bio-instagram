import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
      <div className="flex items-center justify-center gap-2 mb-2 opacity-60">
         <div className="w-1 h-1 rounded-full bg-white"></div>
         <div className="w-1 h-1 rounded-full bg-white"></div>
         <div className="w-1 h-1 rounded-full bg-white"></div>
      </div>
      <p className="text-xs font-medium tracking-widest text-white font-bold uppercase">
        UP! Company
      </p>
    </footer>
  );
};