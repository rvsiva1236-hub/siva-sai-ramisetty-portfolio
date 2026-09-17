export interface PersonalInfo {
  name: string;
  degree: string;
  institution: string;
  graduationPeriod: string;
  cgpa: string;
  summary: string;
  email: string;
  phone: string;
  linkedin: string;
  linkedinDisplay: string;
  github: string;
  githubDisplay: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  description?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  role?: string;
  technologies: string[];
  overview: string;
  metrics?: ProjectMetric[];
  keyContributions: string[];
  features?: string[];
  workflow?: string[];
  category: 'AI / ML' | 'Full Stack' | 'Frontend';
  liveUrl?: string;
  outcome?: string;
}

export interface Certification {
  name: string;
}

export interface Activity {
  title: string;
  period: string;
  bullets: string[];
  stats?: { label: string; value: string }[];
}
