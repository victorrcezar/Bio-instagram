import React, { useState, useRef } from 'react';
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
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackClick(link.id, link.url);
    setTimeout(() => {
      window.open(link.url, '_blank');
    }, 150);
  };

  const isHero = link.type === LinkType.Hero;
  
  // Staggered animation delay
  const animationDelay = `${index * 100}ms`;

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
        rounded-2xl cursor-pointer transition-all duration-300 ease-out
        opacity-0 animate-fade-in-up
        p-3.5 sm:p-5
        active:scale-[0.98] active:opacity-90
        ${isHero 
          ? 'border border-brand-accent/40 shadow-[0_4px_20px_-8px_rgba(37,99,235,0.4)] hover:shadow-[0_10px_40px_-5px_rgba(37,99,235,0.65)] hover:border-brand-accent/70 hover:-translate-y-0.5' 
          : 'glass glass-card-hover mb-3 sm:mb-0'
        }
      `}
    >
      {/* Hero Background Gradient */}
      {isHero && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-accent/90 to-purple-800/90 transition-transform duration-500" />
      )}

      {/* Hover Light Effect (Standard Cards) */}
      {!isHero && (
        <div 
          className={`
            absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
            -translate-x-full transition-transform duration-700 ease-in-out
            ${isHovered ? 'translate-x-full' : ''}
          `}
        />
      )}

      {/* Shimmer effect (Hero) */}
      {isHero && (
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 pointer-events-none" />
      )}

      {/* Icon Container - Responsive Sizing */}
      <div 
        className={`
          relative z-10 flex items-center justify-center rounded-full 
          transition-all duration-300 shrink-0 mr-3 sm:mr-4
          w-10 h-10 sm:w-12 sm:h-12
          ${isHero 
            ? 'bg-white/10 text-white backdrop-blur-md shadow-inner border border-white/20' 
            : 'bg-brand-primary/50 text-brand-text group-hover:bg-brand-accent group-hover:text-white group-hover:scale-110'
          }
        `}
      >
        <IconRenderer name={link.iconName} className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      {/* Text Content - Responsive Typography */}
      <div className="relative z-10 flex-1 min-w-0 flex flex-col justify-center gap-0.5">
        <h3 
          className={`
            font-heading font-bold transition-colors duration-300 whitespace-normal break-words
            ${isHero 
              ? 'text-[15px] sm:text-lg text-white tracking-wide leading-normal' 
              : 'text-[15px] sm:text-base text-brand-text leading-normal'
            }
          `}
        >
          {link.title}
        </h3>
        {link.subtitle && (
          <p className={`
            transition-colors font-medium truncate
            ${isHero 
              ? 'text-blue-100 text-xs sm:text-sm opacity-90' 
              : 'text-brand-muted text-xs sm:text-sm group-hover:text-brand-text/80'
            }
          `}>
            {link.subtitle}
          </p>
        )}
      </div>

      {/* Right Side Arrow - Responsive Sizing */}
      <div className="relative z-10 flex items-center pl-2 sm:pl-3">
        <div className={`
          p-1 sm:p-1.5 rounded-full transition-all duration-300
          ${isHero 
             ? 'bg-white/20 text-white' 
             : 'text-brand-muted opacity-50 group-hover:text-brand-accent group-hover:opacity-100 group-hover:bg-brand-accent/10 group-hover:translate-x-1'
          }
        `}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </a>
  );
};