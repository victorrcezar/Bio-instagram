import React from 'react';
import { SocialLink } from '../types';
import { getSocialIcon } from './IconRenderer';
import { trackSocialClick } from '../services/analytics';

interface SocialBarProps {
  socials: SocialLink[];
}

export const SocialBar: React.FC<SocialBarProps> = ({ socials }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 mb-8 sm:mb-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
      {socials.map((social, idx) => (
        <a
          key={idx}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackSocialClick(social.platform)}
          className="
            group p-2.5 sm:p-3 rounded-full bg-brand-primary/40 border border-white/5 
            text-brand-muted transition-all duration-300
            hover:text-white hover:bg-brand-accent hover:border-brand-accent hover:shadow-[0_0_15px_-3px_rgba(37,99,235,0.4)] hover:-translate-y-1
            active:scale-90
          "
          aria-label={social.platform}
        >
          {getSocialIcon(social.platform, "w-5 h-5 sm:w-6 sm:h-6")}
        </a>
      ))}
    </div>
  );
};