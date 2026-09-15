export interface Project {
  id: string;
  title: string;
  description: string;
  details?: string;
  image: string;
  liveDemo?: string | null;
  github?: string | null;
  skills: string[];
  featured?: boolean;
  category?: 'backend' | 'api' | 'fullstack' | 'database';
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  youtubeUrl: string;
  description: string;
  duration?: string;
  publishedDate?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
  skills?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  items: string[];
  icon: string;
}

export type PageId = 'home' | 'about' | 'projects' | 'skills' | 'media' | 'contact';
