import React, { useState, useRef, useEffect } from 'react';
import { BioLink, LinkType } from '../types';
import { IconRenderer } from './IconRenderer';
import { trackClick } from '../services/analytics';

interface LinkCardProps {
  link: BioLink;
  index: number;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackClick(link.id, link.url);
    // Simulate navigation delay for animation
    setTimeout(() => {
      window.open(link.url, '_blank');
    }, 150);
  };

  const isHero = link.type === LinkType.Hero;
  
  // Parallax Effect for Hero
  useEffect(() => {
    if (!isHero) return;

    const handleScroll = () => {
      if (cardRef.current && bgRef.current) {
        const scrollY = window.scrollY;
        // Calculate a subtle offset based on scroll position
        const factor = 0.15;
        const offsetY = scrollY * factor;
        
        // We apply the transform directly to the background element for performance
        // Scale 1.2 ensures no edges are shown during the movement
        bgRef.current.style.transform = `translateY(${offsetY}px) scale(1.2)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calc

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHero]);

  // Staggered animation delay based on index
  const animationDelay = `${index * 100}ms`;

  // Hero Entrance: pop-in (bouncy) | Standard Entrance: fade-in-up
  const entranceAnimation = isHero ? 'animate-pop-in' : 'animate-fade-in-up';

  return (
    <a
      ref={cardRef}
      href={link.url}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay }}
      className={`
        group relative flex items-center w-full overflow-hidden
        rounded-2xl border cursor-pointer transition-all duration-300 ease-out
        opacity-0 ${entranceAnimation}
        p-4 sm:p-5
        active:scale-[0.98] active:opacity-90
        ${isHero 
          ? 'border-up-accent/50 py-6 sm:py-7 shadow-xl shadow-up-accent/20 hover:shadow-2xl hover:shadow-up-accent/50 hover:border-up-accent hover:scale-[1.02] sm:hover:scale-[1.03]' 
          : 'glass border-white/5 hover:border-white/20 hover:scale-[1.01] sm:hover:scale-[1.02] hover:bg-up-deep/60 active:bg-white/5 mb-3 sm:mb-0'
        }
      `}
    >
      {/* Hero Background with Parallax */}
      {isHero && (
        <div 
          ref={bgRef}
          className="absolute inset-0 -z-10 bg-gradient-to-r from-up-accent/30 to-up-deep/60 transition-colors duration-300"
          style={{ 
            transform: 'scale(1.2)',
            willChange: 'transform' 
          }}
        />
      )}

      {/* Hover Glow Effect Background (Distinct for Hero) */}
      <div 
        className={`
          absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 pointer-events-none
          ${isHero 
            ? 'bg-gradient-to-r from-up-accent/20 via-white/10 to-transparent' 
            : 'bg-gradient-to-r from-white/5 to-transparent'
          }
          ${isHovered ? 'opacity-100' : ''}
        `} 
      />

      {/* Shimmer effect for Hero */}
      {isHero && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 pointer-events-none" />
      )}

      {/* Icon Container */}
      <div 
        className={`
          relative z-10 flex items-center justify-center rounded-full 
          transition-all duration-300 shrink-0 mr-3.5 sm:mr-5
          w-10 h-10 sm:w-12 sm:h-12
          ${isHero 
            ? 'bg-white text-up-dark shadow-lg group-hover:scale-110' 
            : 'bg-white/5 text-white group-hover:bg-white group-hover:text-up-dark'
          }
        `}
      >
        <IconRenderer name={link.iconName} className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex-1 min-w-0 flex flex-col justify-center">
        <h3 
          className={`
            font-heading font-bold transition-colors duration-300
            ${isHero 
              ? 'text-lg sm:text-xl text-white tracking-wide leading-snug whitespace-normal' 
              : 'text-base sm:text-lg text-gray-100 truncate group-active:text-white'
            }
          `}
        >
          {link.title}
        </h3>
        {link.subtitle && (
          <p className={`
            text-gray-400 transition-colors font-light mt-0.5 sm:mt-1 group-hover:text-gray-300
            ${isHero ? 'text-sm sm:text-base whitespace-normal leading-snug' : 'text-xs sm:text-sm truncate'}
          `}>
            {link.subtitle}
          </p>
        )}
      </div>

      {/* Right Side: Arrow */}
      <div className="relative z-10 flex items-center pl-3">
        {/* Arrow / Indicator - Visible on Hero, Fade in on hover for others */}
        <div className={`
          transition-all duration-300
          ${isHero 
             ? 'text-white translate-x-0 opacity-100' // Always visible on hero
             : 'text-gray-400 opacity-50 -translate-x-1 sm:-translate-x-2 sm:opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
          }
        `}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </a>
  );
};