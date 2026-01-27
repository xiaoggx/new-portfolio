export type Language = 'pt' | 'en';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    skills: string;
    experience: string;
    projects: string;
    testimonials: string;
    blog: string;
    contact: string;
  };
  // Hero Section
  hero: {
    greeting: string;
    name: string;
    roles: string[];
    description: string;
    viewWork: string;
    getInTouch: string;
    scrollToExplore: string;
    availableBadge: string;
  };
  // Skills Section
  skills: {
    title: string;
    subtitle: string;
    badge: string;
    categories: {
      infrastructure: string;
      cloud: string;
      automation: string;
      tools: string;
    };
    yearsExperience: string;
    totalSkills: string;
    yearsCoding: string;
    projectsCompleted: string;
    certifications: string;
  };
  // Experience Section
  experience: {
    title: string;
    subtitle: string;
    workExperience: string;
    education: string;
    certificates: string;
    responsibilities: string;
    achievements: string;
    present: string;
    technologies: string;
  };
  // Projects Section
  projects: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filters: string;
    allProjects: string;
    featured: string;
    infrastructure: string;
    devops: string;
    frontend: string;
    backend: string;
    fullstack: string;
    projectCategory: string;
    filterByTechnology: string;
    sortRecent: string;
    sortOldest: string;
    sortAlphabetical: string;
    showing: string;
    of: string;
    projects: string;
    noProjectsFound: string;
    noProjectsDescription: string;
    clearFilters: string;
    viewDetails: string;
    viewCode: string;
    viewDemo: string;
  };
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    sendMessage: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
    requiredField: string;
    availableForWork: string;
    availableDescription: string;
    contactInfo: string;
    responseTime: string;
  };
  // Resume Section
  resume: {
    title: string;
    subtitle: string;
    download: string;
    downloading: string;
    viewOnline: string;
    print: string;
    downloads: string;
    lastUpdated: string;
    includes: string;
    items: string[];
  };
  // Footer
  footer: {
    rights: string;
    builtWith: string;
    role: string;
  };
  // Common
  common: {
    readMore: string;
    loading: string;
    error: string;
    success: string;
    download: string;
    share: string;
    close: string;
    scrollUp: string;
  };

  // Data Content
  data: {
    projects: Record<string, {
      title: string;
      description: string;
      role: string;
      features: string[];
      achievements: string[];
    }>;
    experience: Record<string, {
      position: string;
      location: string;
      type: string;
      description: string;
      responsibilities: string[];
      achievements: string[];
      startDate: string;
      endDate: string;
    }>;
    education: Record<string, {
      degree: string;
      field: string;
      description: string;
      startDate: string;
      endDate: string;
    }>;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      home: 'Início',
      skills: 'Habilidades',
      experience: 'Experiência',
      projects: 'Projetos',
      testimonials: 'Depoimentos',
      blog: 'Blog',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, sou',
      name: 'Gabriel L. Andrade',
      roles: [
        'Engenheiro DevOps & Cloud',
        'Administrador de Infraestrutura',
        'Especialista Linux',
        'Entusiasta de Automação'
      ],
      description: 'Especialista em infraestrutura cloud, Linux e automação. Gerencio ambientes com 5.000+ usuários mantendo 99.8% de uptime. Certificações Cisco (CCNA, IT Essentials).',
      viewWork: 'Ver Projetos',
      getInTouch: 'Entre em Contato',
      scrollToExplore: 'Role para explorar',
      availableBadge: 'Disponível para novas oportunidades',
    },
    skills: {
      title: 'Habilidades & Tecnologias',
      subtitle: 'Visão geral das minhas competências técnicas e níveis de proficiência',
      badge: 'Expertise Técnica',
      categories: {
        infrastructure: 'Infraestrutura & Redes',
        cloud: 'Cloud & Containers',
        automation: 'Automação & DevOps',
        tools: 'Ferramentas & Monitoramento',
      },
      yearsExperience: 'anos de experiência',
      totalSkills: 'Tecnologias',
      yearsCoding: 'Anos de Experiência',
      projectsCompleted: 'Projetos',
      certifications: 'Certificações',
    },
    experience: {
      title: 'Experiência Profissional',
      subtitle: 'Minha trajetória profissional e formação acadêmica',
      workExperience: 'Experiência',
      education: 'Formação',
      certificates: 'Certificados',
      responsibilities: 'Responsabilidades',
      achievements: 'Conquistas',
      present: 'Atual',
      technologies: 'Tecnologias',
    },
    projects: {
      title: 'Meus Projetos',
      subtitle: 'projetos demonstrando minhas habilidades e experiência',
      searchPlaceholder: 'Buscar por nome, tecnologia, funcionalidades...',
      filters: 'Filtros',
      allProjects: 'Todos',
      featured: 'Destaque',
      infrastructure: 'Infraestrutura',
      devops: 'DevOps',
      frontend: 'Frontend',
      backend: 'Backend',
      fullstack: 'Fullstack',
      projectCategory: 'Categoria do Projeto',
      filterByTechnology: 'Filtrar por Tecnologia',
      sortRecent: 'Mais Recentes',
      sortOldest: 'Mais Antigos',
      sortAlphabetical: 'Alfabético',
      showing: 'Exibindo',
      of: 'de',
      projects: 'projetos',
      noProjectsFound: 'Nenhum projeto encontrado',
      noProjectsDescription: 'Tente ajustar seus termos de busca ou filtros.',
      clearFilters: 'Limpar filtros',
      viewDetails: 'Ver detalhes',
      viewCode: 'Ver código',
      viewDemo: 'Ver demo',
    },
    contact: {
      title: 'Vamos Conversar',
      subtitle: 'Tem um projeto em mente ou quer colaborar? Adoraria ouvir de você!',
      name: 'Nome',
      email: 'E-mail',
      subject: 'Assunto',
      message: 'Mensagem',
      sendMessage: 'Enviar Mensagem',
      sending: 'Enviando...',
      successMessage: 'Mensagem enviada com sucesso! Retornarei em breve.',
      errorMessage: 'Erro ao enviar mensagem. Tente novamente.',
      requiredField: 'Obrigatório',
      availableForWork: 'Disponível para Trabalho',
      availableDescription: 'Atualmente disponível para projetos freelance e oportunidades em tempo integral. Home office ou híbrido.',
      contactInfo: 'Informações de Contato',
      responseTime: 'Respondo normalmente em 24 horas.',
    },
    resume: {
      title: 'Baixar Currículo',
      subtitle: 'Obtenha uma visão completa das minhas habilidades, experiência e conquistas em PDF.',
      download: 'Baixar Currículo',
      downloading: 'Baixando...',
      viewOnline: 'Ver Online',
      print: 'Imprimir',
      downloads: 'downloads',
      lastUpdated: 'Última atualização',
      includes: 'O que está incluso:',
      items: [
        'Resumo profissional',
        'Experiência de trabalho',
        'Habilidades técnicas',
        'Formação e certificações',
        'Projetos notáveis',
        'Informações de contato',
      ],
    },
    footer: {
      rights: 'Todos os direitos reservados',
      builtWith: 'Desenvolvido com',
      role: 'Engenheiro DevOps & Cloud',
    },
    common: {
      readMore: 'Ler mais',
      loading: 'Carregando...',
      error: 'Erro',
      success: 'Sucesso',
      download: 'Baixar',
      share: 'Compartilhar',
      close: 'Fechar',
      scrollUp: 'Voltar ao topo',
    },
    data: {
      projects: {
        '1': {
          title: "Projeto ETL DIO",
          description: "Pipeline ETL desenvolvida para o curso de Ciência de Dados com Python da DIO. Simula um sistema de marketing e engajamento personalizado para uma comunidade de Minecraft, automatizando o contato com diferentes níveis de jogadores.",
          role: "Engenheiro de Dados",
          features: [
            "Extração de dados fictícios de membros do servidor a partir de arquivo CSV",
            "Transformação utilizando API da DeepSeek para gerar mensagens personalizadas",
            "Carregamento dos resultados em arquivo CSV para uso posterior"
          ],
          achievements: [
            "Pipeline ETL completo seguindo metodologia do curso DIO",
            "Integração com API de LLM para geração de conteúdo personalizado"
          ]
        },
        '2': {
          title: "Dashboard de Vendas do Servidor EldersMC",
          description: "Sistema completo de análise de dados de vendas do servidor EldersMC, integrando processamento de dados com Python, visualização em Excel e um Dashboard web moderno com Next.js e React.",
          role: "Desenvolvedor Full Stack",
          features: [
            "Processamento de Dados (ETL) com scripts Python para geração de dados de vendas",
            "Dashboard Excel automatizado com geração de relatórios .xlsx com gráficos nativos",
            "Aplicação Web moderna com interface temática do servidor EldersMC",
            "Gráficos interativos e análise de vendas por plataforma (Java vs Bedrock)",
            "Ranking de jogadores por gasto total"
          ],
          achievements: [
            "Dashboard interativo com dados de vendas em tempo real",
            "Relatórios automatizados em Excel e Web"
          ]
        },
        '3': {
          title: "Redução de Custos com AWS",
          description: "Relatório interativo de implementação de serviços AWS para otimização de custos operacionais, desenvolvido para o desafio da DIO. Documenta a implementação de 3 serviços AWS na empresa Abstergo Industries.",
          role: "Arquiteto de Soluções Cloud",
          features: [
            "Visibilidade de Custos: Monitoramento granular de consumo com AWS Cost Explorer",
            "Alertas Proativos: Configuração de orçamentos e alertas com AWS Budgets",
            "Automação Serverless: Otimização automática com AWS Lambda + EventBridge"
          ],
          achievements: [
            "Relatório interativo documentando estratégia de otimização de custos",
            "Demonstração prática de serviços AWS para eficiência operacional"
          ]
        },
        '4': {
          title: "Tradutor de JSON para Plugins de Minecraft",
          description: "Ferramenta em Python para traduzir arquivos JSON e YAML de plugins de Minecraft para diferentes idiomas, preservando todos os códigos de formatação e placeholders.",
          role: "Desenvolvedor Python",
          features: [
            "Tradução automática de arquivos JSON e YAML",
            "Preservação de códigos de formatação Minecraft (cores, formatação)",
            "Preservação de placeholders e variáveis",
            "Suporte a múltiplos idiomas"
          ],
          achievements: [
            "Ferramenta automatizada para tradução de plugins",
            "Processamento em lote de arquivos de configuração"
          ]
        }
      },
      experience: {
        '1': {
          position: 'Engenheiro DevOps e Infraestrutura Cloud',
          location: 'Rio de Janeiro, RJ (Remoto)',
          type: 'Tempo Integral',
          startDate: 'Dez 2024',
          endDate: 'Atual',
          description: 'Administração de infraestrutura on-premise e cloud para desenvolvimento de softwares e plataformas de ciência de dados.',
          responsibilities: [
            'Arquitetou e mantém ambiente de servidores em VPS na Oracle Cloud Infrastructure (OCI) com Debian/Ubuntu, aplicando conceitos CCNA para roteamento, DNS e segurança de rede',
            'Protegeu infraestrutura contra DDoS com Cloudflare e configurou VPN segura via Tailscale para acesso remoto',
            'Automatizou deploy de aplicações com Docker, Nginx e Portainer, garantindo 99% de uptime para comunidade com 5.000+ usuários',
            'Desenvolveu scripts em Python para automação de tarefas administrativas e monitoramento proativo de serviços',
            'Monitoramento proativo via Grafana Stack'
          ],
          achievements: [
            'Infraestrutura suportando 5.000+ usuários ativos',
            'Mantendo 99.8% de uptime nos serviços críticos',
            'Integração de monitoramento com Grafana para análise de performance e previsão de tendências via Python Discord Bot'
          ]
        },
        '2': {
          position: 'Anotador de Dados – Analista RLHF',
          location: 'Rio de Janeiro, RJ',
          type: 'Tempo Integral',
          startDate: 'Mar 2024',
          endDate: 'Atual',
          description: 'Focado no Fine Tuning de LLMs por meio de feedback humano de alta qualidade e rotulagem de dados.',
          responsibilities: [
            'Avaliação criteriosa de respostas geradas por IA, focando em precisão factual, coerência lógica e tom de voz.',
            'Identificação de vieses cognitivos e falhas de segurança (jailbreaks/hallucinations), auxiliando no desenvolvimento de modelos mais robustos',
            'Elaboração de prompts e respostas "padrão ouro" para guiar o aprendizado supervisionado da inteligência artificial.'
          ],
          achievements: [
            'Desenvolvi templates de feedback estruturado que reduziram o tempo de revisão de dados em 15%, mantendo o alto padrão de qualidade.'
          ]
        },
        '3': {
          position: 'Editor de Conteúdo e Revisor Técnico',
          location: 'Híbrido Presencial/Remoto',
          type: 'Freelance',
          startDate: 'Jan 2022',
          endDate: 'Mar 2024',
          description: 'Digitalização de manuscritos e gestão de qualidade editorial para obras literárias.',
          responsibilities: [
            'Digitalização e estruturação de manuscritos originais com foco em fidelidade técnica.',
            'Revisão gramatical, ortográfica e sintática profunda para fins editoriais.',
            'Garantia de segurança de dados e confidencialidade de propriedade intelectual.',
            'Formatação padronizada seguindo normas específicas de publicação.'
          ],
          achievements: [
            'Otimização do fluxo de trabalho entre autor e editora através de digitalização organizada.'
          ]
        }
      },
      education: {
        '1': {
          degree: 'Licenciatura',
          field: 'Pedagogia',
          startDate: '2018',
          endDate: '/',
          description: 'Cursando licenciatura em Pedagogia porém migrando para a área de tecnologia.'
        }
      }
    },
  },

  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      testimonials: 'Testimonials',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Gabriel L. Andrade',
      roles: [
        'DevOps & Cloud Engineer',
        'Infrastructure Administrator',
        'Linux Specialist',
        'Automation Enthusiast'
      ],
      description: 'Cloud infrastructure, Linux, and automation specialist. Managing environments with 5,000+ users while maintaining 99.8% uptime. Cisco certifications (CCNA, IT Essentials).',
      viewWork: 'View Projects',
      getInTouch: 'Get In Touch',
      scrollToExplore: 'Scroll to explore',
      availableBadge: 'Available for new opportunities',
    },
    skills: {
      title: 'Skills & Technologies',
      subtitle: 'A comprehensive overview of my technical skills and proficiency levels',
      badge: 'Technical Expertise',
      categories: {
        infrastructure: 'Infrastructure & Networking',
        cloud: 'Cloud & Containers',
        automation: 'Automation & DevOps',
        tools: 'Tools & Monitoring',
      },
      yearsExperience: 'years experience',
      totalSkills: 'Technologies',
      yearsCoding: 'Years Experience',
      projectsCompleted: 'Projects',
      certifications: 'Certifications',
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'My professional journey and academic background',
      workExperience: 'Experience',
      education: 'Education',
      certificates: 'Certificates',
      responsibilities: 'Responsibilities',
      achievements: 'Achievements',
      present: 'Present',
      technologies: 'Technologies',
    },
    projects: {
      title: 'My Projects',
      subtitle: 'projects showcasing my skills and experience',
      searchPlaceholder: 'Search by name, technology, features...',
      filters: 'Filters',
      allProjects: 'All',
      featured: 'Featured',
      infrastructure: 'Infrastructure',
      devops: 'DevOps',
      frontend: 'Frontend',
      backend: 'Backend',
      fullstack: 'Fullstack',
      projectCategory: 'Project Category',
      filterByTechnology: 'Filter by Technology',
      sortRecent: 'Most Recent',
      sortOldest: 'Oldest First',
      sortAlphabetical: 'Alphabetical',
      showing: 'Showing',
      of: 'of',
      projects: 'projects',
      noProjectsFound: 'No projects found',
      noProjectsDescription: 'Try adjusting your search terms or filters.',
      clearFilters: 'Clear filters',
      viewDetails: 'View details',
      viewCode: 'View code',
      viewDemo: 'View demo',
    },
    contact: {
      title: "Let's Talk",
      subtitle: "Have a project in mind or want to collaborate? I'd love to hear from you!",
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      successMessage: "Message sent successfully! I'll get back to you soon.",
      errorMessage: 'Failed to send message. Please try again.',
      requiredField: 'Required',
      availableForWork: 'Available for Work',
      availableDescription: 'Currently available for freelance projects and full-time opportunities. Remote or hybrid.',
      contactInfo: 'Contact Information',
      responseTime: 'I typically respond within 24 hours.',
    },
    resume: {
      title: 'Download Resume',
      subtitle: 'Get a comprehensive overview of my skills, experience, and achievements in PDF format.',
      download: 'Download Resume',
      downloading: 'Downloading...',
      viewOnline: 'View Online',
      print: 'Print',
      downloads: 'downloads',
      lastUpdated: 'Last updated',
      includes: "What's included:",
      items: [
        'Professional summary',
        'Work experience',
        'Technical skills',
        'Education & certifications',
        'Notable projects',
        'Contact information',
      ],
    },
    footer: {
      rights: 'All rights reserved',
      builtWith: 'Built with',
      role: 'DevOps & Cloud Engineer',
    },
    common: {
      readMore: 'Read more',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      download: 'Download',
      share: 'Share',
      close: 'Close',
      scrollUp: 'Back to top',
    },
    data: {
      projects: {
        '1': {
          title: "ETL Pipeline Project DIO",
          description: "ETL pipeline developed for the DIO Data Science with Python course. Simulates a personalized marketing and engagement system for a Minecraft community, automating contact with players at different levels.",
          role: "Data Engineer",
          features: [
            "Extraction of fictitious server member data from CSV file",
            "Transformation using DeepSeek API to generate personalized messages",
            "Loading results into CSV file for later use"
          ],
          achievements: [
            "Complete ETL pipeline following DIO course methodology",
            "Integration with LLM API for personalized content generation"
          ]
        },
        '2': {
          title: "EldersMC Server Sales Dashboard",
          description: "Complete sales data analysis system for the EldersMC server, integrating data processing with Python, Excel visualization, and a modern web dashboard with Next.js and React.",
          role: "Full Stack Developer",
          features: [
            "Data Processing (ETL) with Python scripts for sales data generation",
            "Automated Excel dashboard with .xlsx report generation featuring native charts",
            "Modern web application with EldersMC server themed interface",
            "Interactive charts and sales analysis by platform (Java vs Bedrock)",
            "Player ranking by total spending"
          ],
          achievements: [
            "Interactive dashboard with real-time sales data",
            "Automated reports in Excel and Web"
          ]
        },
        '3': {
          title: "AWS Cost Reduction",
          description: "Interactive report on AWS services implementation for operational cost optimization, developed for the DIO challenge. Documents the implementation of 3 AWS services at Abstergo Industries.",
          role: "Cloud Solutions Architect",
          features: [
            "Cost Visibility: Granular consumption monitoring with AWS Cost Explorer",
            "Proactive Alerts: Budget and alert configuration with AWS Budgets",
            "Serverless Automation: Automatic optimization with AWS Lambda + EventBridge"
          ],
          achievements: [
            "Interactive report documenting cost optimization strategy",
            "Practical demonstration of AWS services for operational efficiency"
          ]
        },
        '4': {
          title: "JSON Translator for Minecraft Plugins",
          description: "Python tool for translating Minecraft plugin JSON and YAML files to different languages, preserving all formatting codes and placeholders.",
          role: "Python Developer",
          features: [
            "Automatic translation of JSON and YAML files",
            "Preservation of Minecraft formatting codes (colors, formatting)",
            "Preservation of placeholders and variables",
            "Multi-language support"
          ],
          achievements: [
            "Automated tool for plugin translation",
            "Batch processing of configuration files"
          ]
        }
      },
      experience: {
        '1': {
          position: 'DevOps and Cloud Infrastructure Engineer',
          location: 'Rio de Janeiro, RJ (Remote)',
          type: 'Full-time',
          startDate: 'Dec 2024',
          endDate: 'Present',
          description: 'On-premise and cloud infrastructure administration for software development and data science platforms.',
          responsibilities: [
            'Architected and maintains VPS server environment on Oracle Cloud Infrastructure (OCI) with Debian/Ubuntu, applying CCNA concepts for routing, DNS, and network security',
            'Protected infrastructure against DDoS with Cloudflare and configured secure VPN via Tailscale for remote access',
            'Automated application deployment with Docker, Nginx, and Portainer, ensuring 99% uptime for a 5,000+ user community',
            'Developed Python scripts for administrative task automation and proactive service monitoring',
            'Proactive monitoring via Grafana Stack'
          ],
          achievements: [
            'Infrastructure supporting 5,000+ active users',
            'Maintaining 99.8% uptime on critical services',
            'Monitoring integration with Grafana for performance analysis and trend forecasting via Python Discord Bot'
          ]
        },
        '2': {
          position: 'Data Annotator – RLHF Analyst',
          location: 'Rio de Janeiro, RJ',
          type: 'Full-time',
          startDate: 'Mar 2024',
          endDate: 'Present',
          description: 'Focused on LLM Fine Tuning through high-quality human feedback and data labeling.',
          responsibilities: [
            'Rigorous evaluation of AI-generated responses, focusing on factual accuracy, logical coherence, and tone of voice.',
            'Identification of cognitive biases and security flaws (jailbreaks/hallucinations), assisting in developing more robust models',
            'Creation of "gold standard" prompts and responses to guide supervised AI learning.'
          ],
          achievements: [
            'Developed structured feedback templates that reduced data review time by 15% while maintaining high quality standards.'
          ]
        },
        '3': {
          position: 'Content Editor and Technical Reviewer',
          location: 'Hybrid On-site/Remote',
          type: 'Freelance',
          startDate: 'Jan 2022',
          endDate: 'Mar 2024',
          description: 'Manuscript digitization and editorial quality management for literary works.',
          responsibilities: [
            'Digitization and structuring of original manuscripts with focus on technical fidelity.',
            'In-depth grammatical, spelling, and syntactic review for editorial purposes.',
            'Data security and intellectual property confidentiality assurance.',
            'Standardized formatting following specific publication guidelines.'
          ],
          achievements: [
            'Workflow optimization between author and publisher through organized digitization.'
          ]
        }
      },
      education: {
        '1': {
          degree: 'Teaching Degree',
          field: 'Education/Pedagogy',
          startDate: '2018',
          endDate: '/',
          description: 'Pursuing a teaching degree in Education while transitioning to the technology field.'
        }
      }
    },
  },
};

export const defaultLanguage: Language = 'pt';

export const getTranslation = (lang: Language = defaultLanguage): Translations => {
  return translations[lang] || translations.pt;
};
