import { LucideIcon } from 'lucide-react';

export enum SocialPlatform {
  Instagram = 'Instagram',
  LinkedIn = 'LinkedIn',
  Twitter = 'Twitter',
  YouTube = 'YouTube',
  WhatsApp = 'WhatsApp',
  Email = 'Email',
  GitHub = 'GitHub',
  Facebook = 'Facebook',
  Twitch = 'Twitch',
  TikTok = 'TikTok'
}

export enum LinkType {
  Standard = 'standard',
  Hero = 'hero', // Special highlighted card
  Video = 'video', // Embed support (optional)
}

export interface BioLink {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  iconName: string; // String reference to map to Lucide icon
  type: LinkType;
  highlight?: boolean; // For hero effects
}

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface ProfileConfig {
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  coverUrl?: string; // Optional background override
  logoUrl?: string; // Company logo
}

export interface AppData {
  profile: ProfileConfig;
  links: BioLink[];
  socials: SocialLink[];
}