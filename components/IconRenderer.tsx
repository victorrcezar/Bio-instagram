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

// Official WhatsApp Brand Icon (Filled)
// Using the official SVG path structure to ensure authenticity
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    // We intentionally ignore stroke props for the official brand icon to maintain its solid shape
    strokeWidth="0"
    className={className}
    style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
  >
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.372a9.99 9.99 0 0 0 4.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0 0 12.012 2v0zm0 18.316h-.005a8.305 8.305 0 0 1-4.234-1.163l-.302-.18-3.15.828.842-3.07-.197-.313a8.32 8.32 0 0 1-1.269-4.437c.003-4.575 3.727-8.297 8.315-8.297 2.22 0 4.306.864 5.875 2.434a8.274 8.274 0 0 1 2.435 5.882c-.003 4.577-3.729 8.299-8.314 8.316zm4.545-6.224c-.248-.124-1.472-.727-1.699-.81-.227-.083-.393.042-.559.29-.165.248-.64.81-.786.975-.144.166-.29.186-.537.062-.248-.124-1.047-.386-1.995-1.231-.737-.657-1.234-1.468-1.379-1.716-.145-.248-.015-.382.109-.506.111-.111.248-.29.372-.435.124-.145.166-.248.248-.414.083-.166.042-.31-.02-.435-.062-.124-.559-1.346-.766-1.843-.201-.483-.406-.417-.559-.425-.145-.008-.31-.01-.476-.01-.165 0-.435.062-.662.31-.227.248-.868.848-.868 2.069 0 1.221.889 2.4 1.22 2.566.331.165 2.515 3.839 6.095 5.397 2.132.927 2.955.744 3.513.661.565-.083 1.472-.601 1.679-1.18.207-.58.207-1.076.145-1.18-.062-.104-.227-.166-.475-.29z" />
  </svg>
);

export const getSocialIcon = (platform: SocialPlatform, className?: string) => {
  // Pass props, but note WhatsAppIcon will ignore strokeWidth as it is a filled icon
  const props = { className, strokeWidth: 1.5 };
  switch (platform) {
    case SocialPlatform.Instagram: return <Instagram {...props} />;
    case SocialPlatform.LinkedIn: return <Linkedin {...props} />;
    case SocialPlatform.Twitter: return <Twitter {...props} />;
    case SocialPlatform.YouTube: return <Youtube {...props} />;
    case SocialPlatform.GitHub: return <Github {...props} />;
    case SocialPlatform.WhatsApp: return <WhatsAppIcon className={className} />;
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
    case 'WhatsApp': return <WhatsAppIcon className={className} />;
    default: return <Link {...props} />;
  }
};