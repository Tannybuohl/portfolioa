/**
 * Shared TypeScript types for the portfolio
 */

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// Social link types
export interface SocialLink {
  platform: string;
  url: string;
  icon?: React.ReactNode;
}

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// Skill types
export interface Skill {
  name: string;
  level?: number; // 0-100
  category?: string;
}

// Experience types
export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  technologies?: string[];
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

