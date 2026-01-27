import { Skill, SkillCategory } from '@/types';

export const skills: Skill[] = [
  // Infrastructure
  { name: 'Linux (Ubuntu/Arch)', level: 95, category: 'infrastructure', yearsOfExperience: 4 },
  { name: 'Active Directory', level: 70, category: 'infrastructure', yearsOfExperience: 1 },
  { name: 'pfSense', level: 80, category: 'infrastructure', yearsOfExperience: 2 },
  { name: 'TCP/IP Networking', level: 90, category: 'infrastructure', yearsOfExperience: 2 },
  { name: 'VPNs', level: 85, category: 'infrastructure', yearsOfExperience: 2 },
  { name: 'Cisco IOS/Routing', level: 80, category: 'infrastructure', yearsOfExperience: 2 },
  { name: 'Nginx/Traefik', level: 85, category: 'infrastructure', yearsOfExperience: 3 },

  // Cloud & Containers
  { name: 'Docker', level: 95, category: 'tools', yearsOfExperience: 2 },
  { name: 'Kubernetes', level: 75, category: 'tools', yearsOfExperience: 1 },
  { name: 'Oracle Cloud (OCI)', level: 80, category: 'cloud', yearsOfExperience: 2 },
  { name: 'AWS', level: 70, category: 'cloud', yearsOfExperience: 1 },

  // Development & Automation
  { name: 'Python', level: 85, category: 'development', yearsOfExperience: 5 },
  { name: 'TypeScript', level: 85, category: 'development', yearsOfExperience: 2 },
  { name: 'Tailwind CSS', level: 90, category: 'development', yearsOfExperience: 2 },
  { name: 'Bash/Shell', level: 80, category: 'automation', yearsOfExperience: 3 },
  { name: 'PowerShell', level: 75, category: 'automation', yearsOfExperience: 3 },
  { name: 'Git/CI/CD', level: 85, category: 'development', yearsOfExperience: 3 },
  { name: 'Pandas/Data Analysis', level: 75, category: 'development', yearsOfExperience: 1 },
  { name: 'LLM/AI Integration', level: 70, category: 'development', yearsOfExperience: 1 },

  // Tools & Databases
  { name: 'PostgreSQL', level: 85, category: 'tools', yearsOfExperience: 2 },
  { name: 'Loki/Grafana/Promtail', level: 80, category: 'tools', yearsOfExperience: 2 },
  { name: 'Microsoft 365', level: 90, category: 'tools', yearsOfExperience: 10 },
  { name: 'Cloudflare', level: 90, category: 'tools', yearsOfExperience: 2 },
  { name: 'Portainer', level: 90, category: 'tools', yearsOfExperience: 2 },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'infrastructure',
    skills: skills.filter(s => s.category === 'infrastructure'),
    color: 'from-blue-500 to-cyan-500',
    icon: '🌐',
  },
  {
    id: 'cloud',
    skills: skills.filter(s => s.category === 'cloud'),
    color: 'from-purple-500 to-pink-500',
    icon: '☁️',
  },
  {
    id: 'automation',
    skills: skills.filter(s => s.category === 'automation'),
    color: 'from-lime-500 to-emerald-500',
    icon: '⚙️',
  },
  {
    id: 'tools',
    skills: skills.filter(s => s.category === 'tools'),
    color: 'from-orange-500 to-red-500',
    icon: '🛠️',
  },
];

export type { Skill, SkillCategory };
