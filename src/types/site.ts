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
  description: string;
  badge: string;
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
  excerpt: string;
  date: string;
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
};

