export type FolderType = 
  | 'experience'
  | 'ml-projects'
  | 'full-stack-ai'
  | 'full-stack'
  | 'speaking'
  | 'education';

export interface Folder {
  id: FolderType;
  title: string;
  icon: string;
  color: string;
  lucideIcon?: React.ComponentType<{ size?: number; className?: string }>;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  description: string | string[];
  technologies: string[];
  link?: string;
}
