import React from 'react';
import { SocialLink } from '../types';
import { getSocialIcon } from './IconRenderer';
import { trackSocialClick } from '../services/analytics';

interface SocialBarProps {
  socials: SocialLink[];
}

export const SocialBar: React.FC<SocialBarProps> = ({ socials }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8 mb-10 animate-fade-in" style={{ animationDelay: '600ms' }}>
      {socials.map((social, idx) => (
        <a
          key={idx}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackSocialClick(social.platform)}
          className="
            p-3 rounded-full glass border-white/5 
            text-gray-400 transition-all duration-300
            hover:text-white hover:bg-white/10 hover:scale-110 hover:border-white/20
            focus:outline-none focus:ring-2 focus:ring-white/20
          "
          aria-label={social.platform}
        >
          {getSocialIcon(social.platform, "w-5 h-5")}
        </a>
      ))}
    </div>
  );
};