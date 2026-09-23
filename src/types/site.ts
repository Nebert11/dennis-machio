import type { LucideIcon } from 'lucide-react';

export type Project = {
  number: string;
  slug: string;
  title: string;
  category: string;
  type: string;
  image: string;
  detail: string;
  role?: string;
  tags?: string[];
  year?: string;
};

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  text: string;
  deliverables: string[];
};

export type Venture = {
  id: string;
  title: string;
  role?: string;
  url?: string;
  image?: string;
  description: string;
  badge: string;
};

export type TalentProfile = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  details: string[];
  videos?: { id: string; title: string }[];
};

export type ProductionEvent = {
  id: string;
  title: string;
  role: string;
  type: string;
  description: string;
  year?: string;
  image?: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  tag: string;
};

export type StatItem = {
  value: string;
  label: string;
  subtext: string;
};

export type JournalArticle = {
  id: string;
  title: string;
  subtitle?: string;
  byline: string;
  image: string;
  content: string[];
};

export type GalleryVideo = {
  id: string;
  title: string;
  poster: string;
  url?: string;
};

export type GalleryPhoto = {
  id: string;
  title: string;
  image: string;
};

export type ImageSet = {
  hero: string;
  portrait: string;
  portraitTwo: string;
  portraitThree: string;
  euKenya: string;
  amakove: string;
  sasiniConference: string;
  elf: string;
  storiesInsights: string;
  projDencast: string;
  storyDetail: string;
  creative: string;
};

