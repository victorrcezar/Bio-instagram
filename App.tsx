import React, { useState, useEffect } from 'react';
import { DATA } from './data';
import { LinkCard } from './components/LinkCard';
import { SocialBar } from './components/SocialBar';
import { Footer } from './components/Footer';
import { Background } from './components/Background';
import { Share2 } from 'lucide-react';

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: DATA.profile.name,
      text: `${DATA.profile.bio} - Confira este perfil:`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Error sharing', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copiado! Compartilhe no WhatsApp, Instagram ou onde preferir.");
    }
  };

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      <Background />

      {/* Top Bar (Share Button) */}
      <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-50 animate-fade-in">
        <button 
          onClick={handleShare}
          className="p-2.5 sm:p-3 rounded-full bg-brand-primary/30 border border-white/5 backdrop-blur-md text-brand-text hover:bg-brand-accent/20 hover:text-white hover:border-brand-accent/40 transition-all active:scale-90"
          aria-label="Compartilhar Perfil"
        >
          <Share2 size={18} className="sm:w-5 sm:h-5" strokeWidth={2} />
        </button>
      </div>

      {/* Main Container */}
      <main className={`
        w-full max-w-lg mx-auto 
        px-4 sm:px-6 
        pt-12 sm:pt-24 pb-12
        flex flex-col items-center
        transition-opacity duration-700
        ${loaded ? 'opacity-100' : 'opacity-0'}
      `}>
        
        {/* Header Section */}
        <header className="flex flex-col items-center text-center mb-8 sm:mb-10 w-full">
          {/* Logo (Brand Indication) */}
          <div className="mb-4 sm:mb-6 opacity-80 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
             {DATA.profile.logoUrl && (
                 <img src={DATA.profile.logoUrl} alt="Company Logo" className="w-7 h-7 sm:w-9 sm:h-9 object-contain opacity-60 grayscale hover:grayscale-0 transition-all duration-500" />
             )}
          </div>

          {/* Avatar with Glow */}
          <div className="relative mb-5 sm:mb-6 group animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {/* Animated Glow behind avatar */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-accent via-purple-500 to-brand-glow blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow"></div>
            
            <img 
              src={DATA.profile.avatarUrl} 
              alt={DATA.profile.name} 
              className="relative w-24 h-24 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-brand-primary shadow-2xl z-10"
            />
            
            {/* Online/Status Indicator */}
            <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 z-20 w-4 h-4 sm:w-6 sm:h-6 bg-green-500 border-4 border-brand-primary rounded-full"></div>
          </div>

          {/* Name & Role */}
          <h1 className="font-heading text-xl sm:text-3xl font-bold tracking-tight mb-2 text-white animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {DATA.profile.name}
          </h1>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '250ms' }}>
            <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/50 border border-brand-accent/20 text-brand-glow text-[10px] sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4">
              {DATA.profile.role}
            </span>
          </div>

          {/* Bio */}
          <p className="text-brand-muted text-sm sm:text-base font-normal leading-relaxed max-w-[90%] sm:max-w-md animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            {DATA.profile.bio}
          </p>
        </header>

        {/* Links Grid */}
        <div className="w-full flex flex-col gap-3">
          {DATA.links.map((link, index) => (
            <LinkCard key={link.id} link={link} index={index} />
          ))}
        </div>

        {/* Socials */}
        <SocialBar socials={DATA.socials} />

        {/* Footer */}
        <Footer />

      </main>
    </div>
  );
};

export default App;