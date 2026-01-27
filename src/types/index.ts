export interface Project {
    id: number;
    duration: string;
    technologies: string[];
    githubUrl?: string;
    demoUrl?: string;
    imageUrl?: string;
    featured?: boolean;
}


export interface Experience {
    id: number;
    company: string;
    technologies: string[];
    logo?: string;
    companyUrl?: string;
}


export interface Education {
    id: number;
    institution: string;
    location: string;
    gpa?: string;
    honors?: string[];
}


export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    issueDate?: string;
    expiryDate?: string;
    credentialUrl: string;
    credentialId?: string;
    badgeUrl?: string;
    skills?: string[];
}


export interface SkillCategory {
    id: 'infrastructure' | 'cloud' | 'automation' | 'tools' | 'development';
    skills: Skill[];
    color: string;
    icon: string;
}


export interface Skill {
    name: string;
    level: number;
    category: 'infrastructure' | 'cloud' | 'automation' | 'tools';
    icon?: string;
    yearsOfExperience?: number;
}

