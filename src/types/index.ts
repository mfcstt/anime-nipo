import type { LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type Sponsor = {
  name: string;
  logo: string;
};

export type ScheduleItem = {
  time: string;
  title: string;
  description: string;
};

export type ScheduleDay = {
  id: string;
  label: string;
  date: string;
  items: ScheduleItem[];
};

export type HighlightCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type PillarCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ContestInfo = {
  icon: LucideIcon;
  image: string;
  title: string;
  description: string;
  details: string[];
  deadline: string;
  registrationUrl?: string;
};

export type GalleryImage = {
  src?: string;
  alt: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type StatItem = {
  value: number;
  suffix?: string;
  label: string;
};

export type TicketTier = {
  name: string;
  price: string;
  description: string;
  featured?: boolean;
};
