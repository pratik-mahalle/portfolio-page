export enum Tab {
  OVERVIEW = 'Overview',
  REPOSITORIES = 'Repositories',
  PROJECTS = 'Projects',
  PACKAGES = 'Packages',
  STARS = 'Stars'
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  language: string;
  stars?: number;
  forks?: number;
  link?: string;
}

export interface UserProfile {
  name: string;
  username: string;
  avatarUrl: string;
  bio: string;
  company?: string;
  email: string;
  phone: string;
  website?: string;
  location: string;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    youtube?: string;
  };
  stats: {
    followers: number;
    following: number;
  };
  currentBuild?: {
    name: string;
    description: string;
    tags: string[];
    link?: string;
  };
  latestYoutubeVideo?: {
    title: string;
    url: string;
    thumbnail: string;
  };
}