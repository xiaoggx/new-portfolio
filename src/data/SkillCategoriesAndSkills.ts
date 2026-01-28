import { Skill, SkillCategory } from '@/types';

export const skills: Skill[] = [
  // Development
  { name: 'Python', level: 90, category: 'development', yearsOfExperience: 5 },
  { name: 'TypeScript/JS', level: 85, category: 'development', yearsOfExperience: 3 },
  { name: 'C/C++', level: 75, category: 'development', yearsOfExperience: 1 },
  { name: 'Java', level: 70, category: 'development', yearsOfExperience: 1 },
  { name: 'React/Astro', level: 80, category: 'development', yearsOfExperience: 2 },
  { name: 'FastAPI/Django', level: 85, category: 'development', yearsOfExperience: 3 },
  { name: 'Tailwind/CSS/HTML', level: 90, category: 'development', yearsOfExperience: 3 },

  // AI & Data Science
  { name: 'PyTorch/TensorFlow', level: 80, category: 'ai-data', yearsOfExperience: 4 },
  { name: 'Pandas/NumPy/Scikit-learn', level: 80, category: 'ai-data', yearsOfExperience: 4 },
  { name: 'Ollama/LLMs', level: 75, category: 'ai-data', yearsOfExperience: 2 },
  { name: 'Jupyter', level: 80, category: 'ai-data', yearsOfExperience: 4 },

  // Infrastructure & DevOps
  { name: 'Docker/Kubernetes', level: 95, category: 'infrastructure', yearsOfExperience: 2 },
  { name: 'Oracle Cloud (OCI)/AWS/Azure', level: 80, category: 'infrastructure', yearsOfExperience: 2 },
  { name: 'Nginx/Traefik', level: 85, category: 'infrastructure', yearsOfExperience: 3 },

  // Systems & Platforms
  { name: 'Arch Linux', level: 75, category: 'systems', yearsOfExperience: 2 },
  { name: 'Debian/Ubuntu', level: 90, category: 'systems', yearsOfExperience: 4 },

  // Databases & Tools
  { name: 'PostgreSQL/MariaDB/SQL', level: 85, category: 'databases', yearsOfExperience: 2 },
  { name: 'Git/VS Code', level: 90, category: 'databases', yearsOfExperience: 3 },

  // Creative & Specialized
  { name: 'DiscordJS/Nextcord', level: 90, category: 'specialized', yearsOfExperience: 2 },
  { name: 'Neovim', level: 60, category: 'specialized', yearsOfExperience: 1 },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'development',
    skills: skills.filter(s => s.category === 'development'),
    color: 'from-blue-500 to-cyan-500',
    icon: '💻',
  },
  {
    id: 'ai-data',
    skills: skills.filter(s => s.category === 'ai-data'),
    color: 'from-purple-500 to-pink-500',
    icon: '🧠',
  },
  {
    id: 'infrastructure',
    skills: skills.filter(s => s.category === 'infrastructure'),
    color: 'from-sky-500 to-blue-500',
    icon: '☁️',
  },
  {
    id: 'systems',
    skills: skills.filter(s => s.category === 'systems'),
    color: 'from-orange-500 to-yellow-500',
    icon: '🐧',
  },
  {
    id: 'databases',
    skills: skills.filter(s => s.category === 'databases'),
    color: 'from-emerald-500 to-green-500',
    icon: '🗄️',
  },
  {
    id: 'specialized',
    skills: skills.filter(s => s.category === 'specialized'),
    color: 'from-violet-500 to-indigo-500',
    icon: '🎮',
  },
];

export type { Skill, SkillCategory };
