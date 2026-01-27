'use client';

import { useState, useMemo } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MagnifyingGlassIcon,
    FunnelIcon,
    XMarkIcon,
    Squares2X2Icon,
    ListBulletIcon,
    AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';
import { useLanguage } from '@/context/LanguageContext';

type ProjectFilter = 'all' | 'featured' | 'frontend' | 'backend' | 'fullstack' | 'other';
type SortOption = 'recent' | 'oldest' | 'title';
type ViewMode = 'grid' | 'list';

export default function Projects() {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState<SortOption>('recent');
    const [viewMode, setViewMode] = useState<ViewMode>('grid');
    const [showFilters, setShowFilters] = useState(false);
    const allTechnologies = useMemo(() => {
        const techSet = new Set<string>();
        projects.forEach(project => {
            project.technologies.forEach(tech => techSet.add(tech));
        });
        return Array.from(techSet).sort();
    }, []);

    const categorizedTechs = useMemo(() => {
        const frontend = ['React', 'Next.js', 'Vue', 'Angular', 'Svelte', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'CSS', 'HTML', 'Framer Motion', 'Redux', 'Zustand'];
        const backend = ['Node.js', 'Express', 'NestJS', 'Django', 'Flask', 'FastAPI', 'Python'];
        const database = ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'GraphQL'];
        const other = allTechnologies.filter(tech =>
            !frontend.includes(tech) && !backend.includes(tech) && !database.includes(tech)
        );

        return {
            frontend: allTechnologies.filter(tech => frontend.includes(tech)),
            backend: allTechnologies.filter(tech => backend.includes(tech)),
            database: allTechnologies.filter(tech => database.includes(tech)),
            other
        };
    }, [allTechnologies]);
    const filteredProjects = useMemo(() => {
        let filtered = projects.filter(project => {
            const matchesFilter =
                activeFilter === 'all' ||
                (activeFilter === 'featured' && project.featured) ||
                (activeFilter === 'frontend' && project.technologies.some(tech =>
                    categorizedTechs.frontend.includes(tech)
                )) ||
                (activeFilter === 'fullstack' && project.technologies.some(tech =>
                    [...categorizedTechs.backend, ...categorizedTechs.database].includes(tech)
                ));
            const projectData = t.data.projects[String(project.id)];
            const matchesSearch =
                searchQuery === '' ||
                projectData.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                projectData.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                projectData.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.technologies.some(tech =>
                    tech.toLowerCase().includes(searchQuery.toLowerCase())
                ) ||
                projectData.features?.some(feature =>
                    feature.toLowerCase().includes(searchQuery.toLowerCase())
                );
            const matchesTechs =
                selectedTechs.length === 0 ||
                selectedTechs.every(tech => project.technologies.includes(tech));

            return matchesFilter && matchesSearch && matchesTechs;
        });

        filtered = [...filtered].sort((a, b) => {
            switch (sortBy) {
                case 'recent':
                    return b.id - a.id;
                case 'oldest':
                    return a.id - b.id;
                case 'title':
                    return t.data.projects[String(a.id)].title.localeCompare(t.data.projects[String(b.id)].title);
                default:
                    return 0;
            }
        });

        return filtered;
    }, [activeFilter, searchQuery, selectedTechs, sortBy, categorizedTechs]);

    const toggleTech = (tech: string) => {
        setSelectedTechs(prev =>
            prev.includes(tech)
                ? prev.filter(t => t !== tech)
                : [...prev, tech]
        );
    };

    const clearAllFilters = () => {
        setActiveFilter('all');
        setSearchQuery('');
        setSelectedTechs([]);
    };

    const hasActiveFilters = activeFilter !== 'all' || searchQuery !== '' || selectedTechs.length > 0;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring' as const,
                stiffness: 100,
                damping: 10
            }
        }
    };

    const getFilterLabel = (filter: ProjectFilter) => {
        switch (filter) {
            case 'all': return t.projects.allProjects;
            case 'featured': return t.projects.featured;
            case 'backend': return t.projects.backend;
            case 'frontend': return t.projects.frontend;
            case 'fullstack': return t.projects.fullstack;
            default: return filter;
        }
    };

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {t.projects.title}
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {projects.length} {t.projects.subtitle}
                    </motion.p>
                </div>

                {/* Search and Controls */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex flex-col lg:flex-row gap-4 mb-6">
                        {/* Search Bar */}
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder={t.projects.searchPlaceholder}
                                className="block w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-200 shadow-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                >
                                    <XMarkIcon className="h-5 w-5" />
                                </button>
                            )}
                        </div>

                        {/* Filter Toggle & Sort */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`px-4 py-3 rounded-xl font-medium transition-all flex items-center gap-2 shadow-sm ${showFilters || hasActiveFilters
                                    ? 'bg-lime-600 text-white'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >
                                <FunnelIcon className="h-5 w-5" />
                                <span className="hidden sm:inline">{t.projects.filters}</span>
                                {hasActiveFilters && (
                                    <span className="bg-white text-lime-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {(activeFilter !== 'all' ? 1 : 0) + (selectedTechs.length)}
                                    </span>
                                )}
                            </button>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortOption)}
                                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500 shadow-sm"
                            >
                                <option value="recent">{t.projects.sortRecent}</option>
                                <option value="oldest">{t.projects.sortOldest}</option>
                                <option value="title">{t.projects.sortAlphabetical}</option>
                            </select>

                            {/* View Mode Toggle */}
                            <div className="hidden md:flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-lg transition-colors ${viewMode === 'grid'
                                        ? 'bg-white dark:bg-gray-700 text-lime-600 shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                                        }`}
                                    aria-label="Grid view"
                                >
                                    <Squares2X2Icon className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-lg transition-colors ${viewMode === 'list'
                                        ? 'bg-white dark:bg-gray-700 text-lime-600 shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                                        }`}
                                    aria-label="List view"
                                >
                                    <ListBulletIcon className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Active Filters Display */}
                    {hasActiveFilters && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="flex flex-wrap gap-2 mb-4"
                        >
                            {activeFilter !== 'all' && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 rounded-full text-sm font-medium">
                                    {getFilterLabel(activeFilter)}
                                    <button
                                        onClick={() => setActiveFilter('all')}
                                        className="hover:bg-lime-200 dark:hover:bg-lime-800 rounded-full p-0.5"
                                    >
                                        <XMarkIcon className="h-3 w-3" />
                                    </button>
                                </span>
                            )}
                            {selectedTechs.map(tech => (
                                <span
                                    key={tech}
                                    className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium"
                                >
                                    {tech}
                                    <button
                                        onClick={() => toggleTech(tech)}
                                        className="hover:bg-emerald-200 dark:hover:bg-emerald-800 rounded-full p-0.5"
                                    >
                                        <XMarkIcon className="h-3 w-3" />
                                    </button>
                                </span>
                            ))}
                            <button
                                onClick={clearAllFilters}
                                className="px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 underline"
                            >
                                {t.projects.clearFilters}
                            </button>
                        </motion.div>
                    )}

                    {/* Expandable Filters */}
                    <AnimatePresence>
                        {showFilters && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="bg-gradient-to-br from-lime-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-6 border border-lime-200 dark:border-gray-700 mb-6">
                                    {/* Category Filter */}
                                    <div className="mb-6">
                                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                            <AdjustmentsHorizontalIcon className="h-4 w-4" />
                                            {t.projects.projectCategory}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {(['all', 'featured', 'frontend', 'fullstack'] as ProjectFilter[]).map((filter) => (
                                                <button
                                                    key={filter}
                                                    onClick={() => setActiveFilter(filter)}
                                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeFilter === filter
                                                        ? 'bg-gradient-to-r from-lime-600 to-emerald-600 text-white shadow-md'
                                                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                                                        }`}
                                                >
                                                    {getFilterLabel(filter)}
                                                    {filter === 'all' && ` (${projects.length})`}
                                                    {filter === 'featured' && ` (${projects.filter(p => p.featured).length})`}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Technology Filters */}
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                                            {t.projects.filterByTechnology}
                                        </h3>
                                        <div className="space-y-4">
                                            {Object.entries(categorizedTechs).map(([category, techs]) => (
                                                techs.length > 0 && (
                                                    <div key={category}>
                                                        <h4 className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2 uppercase">
                                                            {category}
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {techs.map(tech => (
                                                                <button
                                                                    key={tech}
                                                                    onClick={() => toggleTech(tech)}
                                                                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${selectedTechs.includes(tech)
                                                                        ? 'bg-lime-600 text-white shadow-md scale-105'
                                                                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-lime-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                                                                        }`}
                                                                >
                                                                    {tech}
                                                                    {selectedTechs.includes(tech) && (
                                                                        <span className="ml-1">✓</span>
                                                                    )}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Results Count */}
                <div className="mb-6 flex items-center justify-between">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t.projects.showing} <span className="font-semibold text-gray-900 dark:text-white">{filteredProjects.length}</span> {t.projects.of}{' '}
                        <span className="font-semibold text-gray-900 dark:text-white">{projects.length}</span> {t.projects.projects}
                    </p>
                </div>

                {/* Projects Grid/List */}
                {filteredProjects.length > 0 ? (
                    <motion.div
                        className={
                            viewMode === 'grid'
                                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                                : 'flex flex-col gap-6'
                        }
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {filteredProjects.map((project) => (
                            <motion.div key={project.id} variants={item}>
                                <ProjectCard project={project} viewMode={viewMode} />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-lime-100 to-emerald-100 dark:from-lime-900/30 dark:to-emerald-900/30 rounded-full mb-6">
                            <MagnifyingGlassIcon className="w-10 h-10 text-lime-600 dark:text-lime-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t.projects.noProjectsFound}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                            {t.projects.noProjectsDescription}
                        </p>
                        <button
                            onClick={clearAllFilters}
                            className="px-6 py-3 bg-gradient-to-r from-lime-600 to-emerald-600 text-white rounded-xl hover:shadow-lg transition-all font-medium"
                        >
                            {t.projects.clearFilters}
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}