import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
      <div className="flex items-center justify-center gap-2 mb-3 opacity-50">
         <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
         <div className="w-1.5 h-1.5 rounded-full bg-brand-text"></div>
         <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
      </div>
      <p className="text-[10px] sm:text-xs font-medium tracking-[0.2em] text-brand-muted/60 uppercase hover:text-brand-accent transition-colors cursor-default">
        UP! Company &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};