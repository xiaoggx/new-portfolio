import { Experience, Education } from '@/types';

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'EldersMC',
    technologies: ['Linux', 'Docker', 'Oracle Cloud', 'Python', 'Grafana', 'Promtail', 'Loki', 'PostgreSQL', 'Cloudflare', 'Tailscale'],
  },
  {
    id: 2,
    company: 'Outlier AI',
    technologies: ['LLMs', 'JSON/XML', 'Prompt Engineering'],
  },
  {
    id: 3,
    company: 'Freelance',
    technologies: ['Microsoft Office 365', 'Google Workspace', 'OCR Tools', 'Copyediting'],
  },
];

export const education: Education[] = [
  {
    id: 1,
    institution: 'UNIRIO - Universidade Federal do Estado do Rio de Janeiro',
    location: 'Rio de Janeiro, RJ',
  },
];
