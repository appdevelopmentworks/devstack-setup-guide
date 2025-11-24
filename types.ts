export type OS = 'windows' | 'mac' | 'linux';

export interface Command {
  label?: string;
  code: string;
}

export interface Step {
  title: string;
  description: string;
  command?: Command;
  imagePlaceholder?: string; // Using placeholder URLs for this demo
  warning?: string;
  tip?: string;
}

export interface Manual {
  id: string;
  title: string;
  category: 'Language' | 'Editor' | 'Version Control' | 'Trading' | 'Other';
  icon: string; // Name of the icon to render
  shortDescription: string;
  steps: Step[];
  officialUrl: string;
}