import React, { useState, useEffect } from 'react';
import { DATA } from './data';
import { LinkCard } from './components/LinkCard';
import { SocialBar } from './components/SocialBar';
import { Footer } from './components/Footer';
import { Background } from './components/Background';
import { Share2 } from 'lucide-react';

const App: React.FC = () => {
  // Simple state to simulate "loading" for that instant premium feel calculation
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
      // Fallback: Copy to clipboard with a helpful alert for manual sharing
      navigator.clipboard.writeText(window.location.href);
      alert("Link copiado! Compartilhe no WhatsApp, Instagram ou onde preferir.");
    }
  };

  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden">
      <Background />

      {/* Top Bar (Share Button) */}
      <div className="absolute top-5 right-5 z-50 animate-fade-in">
        <button 
          onClick={handleShare}
          className="p-3 rounded-full glass text-white/80 hover:text-white hover:bg-white/10 transition-all active:scale-90 active:bg-white/20"
          aria-label="Compartilhar Perfil"
        >
          <Share2 size={22} strokeWidth={1.5} />
        </button>
      </div>

      {/* Main Container */}
      <main className={`
        w-full max-w-md sm:max-w-xl mx-auto 
        px-6 sm:px-6 
        pt-16 sm:pt-24 pb-10
        flex flex-col items-center
        transition-opacity duration-700
        ${loaded ? 'opacity-100' : 'opacity-0'}
      `}>
        
        {/* Header Section */}
        <header className="flex flex-col items-center text-center mb-8 sm:mb-12 w-full">
          {/* Logo (Brand Indication) */}
          <div className="mb-5 sm:mb-6 opacity-80 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
             {DATA.profile.logoUrl && (
                 <img src={DATA.profile.logoUrl} alt="Company Logo" className="w-7 h-7 sm:w-9 sm:h-9 object-contain opacity-50 grayscale hover:grayscale-0 transition-all" />
             )}
          </div>

          {/* Avatar */}
          <div className="relative mb-5 sm:mb-6 group animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-up-accent to-transparent blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <img 
              src={DATA.profile.avatarUrl} 
              alt={DATA.profile.name} 
              className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover border-2 border-white/10 shadow-2xl"
            />
          </div>

          {/* Name & Role */}
          <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {DATA.profile.name}
          </h1>
          <p className="text-white font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 animate-fade-in-up" style={{ animationDelay: '250ms' }}>
            {DATA.profile.role}
          </p>

          {/* Bio */}
          <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed w-full max-w-[90%] sm:max-w-sm animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            {DATA.profile.bio}
          </p>
        </header>

        {/* Links Grid */}
        <div className="w-full flex flex-col gap-3 sm:gap-4">
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