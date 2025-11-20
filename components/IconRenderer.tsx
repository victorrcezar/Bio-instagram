import React from 'react';
import { 
  Rocket, 
  Mail, 
  Link, 
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Github,
  MessageCircle,
  AtSign,
  Facebook,
  Twitch,
  Music, // Using Music as a fallback for TikTok
  BookOpen
} from 'lucide-react';
import { SocialPlatform } from '../types';

export const getSocialIcon = (platform: SocialPlatform, className?: string) => {
  const props = { className, strokeWidth: 1.5 };
  switch (platform) {
    case SocialPlatform.Instagram: return <Instagram {...props} />;
    case SocialPlatform.LinkedIn: return <Linkedin {...props} />;
    case SocialPlatform.Twitter: return <Twitter {...props} />;
    case SocialPlatform.YouTube: return <Youtube {...props} />;
    case SocialPlatform.GitHub: return <Github {...props} />;
    case SocialPlatform.WhatsApp: return <MessageCircle {...props} />;
    case SocialPlatform.Email: return <AtSign {...props} />;
    case SocialPlatform.Facebook: return <Facebook {...props} />;
    case SocialPlatform.Twitch: return <Twitch {...props} />;
    case SocialPlatform.TikTok: return <Music {...props} />;
    default: return <Link {...props} />;
  }
};

interface IconRendererProps {
  name: string;
  className?: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, className }) => {
  const props = { className, strokeWidth: 1.5 };

  switch (name) {
    case 'Rocket': return <Rocket {...props} />;
    case 'Mail': return <Mail {...props} />;
    case 'MessageCircle': return <MessageCircle {...props} />;
    case 'BookOpen': return <BookOpen {...props} />;
    default: return <Link {...props} />;
  }
};