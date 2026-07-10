export type ThemeMode = "light" | "dark" | "system";

export interface ContactDetails {
  email: string;
  phone: string;
  linkedinUrl: string;
  location: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  siteUrl: string;
  footerText: string;
  contact: ContactDetails;
}

export interface Profile {
  fullName: string;
  initials: string;
  designation: string;
  currentCompany: string;
  headline: string;
  alternativeHeroLine: string;
  summary: string;
  shortIntro: string;
  careerDirection: string;
  location: string;
  profileImage: string;
  profileImageAvailable: boolean;
  aboutImage?: string;
  focusAreas: string[];
  values: ProfessionalValue[];
}

export interface ProfessionalValue {
  title: string;
  description: string;
}

export interface RoleProgression {
  designation: string;
  dateRange: string;
  summary?: string;
  responsibilities: string[];
  competencies: string[];
}

export interface CompanyExperience {
  company: string;
  designation?: string;
  employmentType: string;
  dateRange: string;
  location: string;
  workMode: string;
  summary: string;
  responsibilities?: string[];
  competencies?: string[];
  industries?: string[];
  tools?: string[];
  roleProgression?: RoleProgression[];
}

export interface Education {
  institution: string;
  qualification: string;
  specialization: string;
  dateRange: string;
  location?: string;
  relevantAreas?: string[];
}

export interface Project {
  title: string;
  date: string;
  overview: string;
  sections: Array<{
    title: string;
    description: string;
  }>;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface Industry {
  title: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  context: string;
  sections: Array<{
    title: string;
    items: string[];
  }>;
  tools: string[];
  skills: string[];
  learning: string;
}

export interface Resource {
  slug: string;
  title: string;
  purpose: string;
  whenToUse: string;
  suggestedFields: string[];
  checklist: string[];
  practicalNotes: string[];
  confidentialityNote: string;
}

export interface SocialLink {
  label: string;
  href: string;
  external: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SEOPageData {
  title: string;
  description: string;
  path: string;
}
