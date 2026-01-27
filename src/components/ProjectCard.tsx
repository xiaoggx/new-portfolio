'use client';

import { useState, useRef } from 'react';
import { Project } from '@/types';
import {
    CodeBracketIcon,
    ArrowTopRightOnSquareIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    ClockIcon,
    UserCircleIcon,
    TrophyIcon,
    CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectCardProps {
    project: Project;
    viewMode?: 'grid' | 'list';
}

export default function ProjectCard({ project, viewMode = 'grid' }: ProjectCardProps) {
    const { t, language } = useLanguage();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const cardVariants = {
        initial: { y: 0 },
        hover: { y: -8, transition: { duration: 0.3 } },
    };

    const contentVariants = {
        expanded: {
            height: 'auto',
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: 'easeInOut' as const
            }
        },
        collapsed: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut' as const
            }
        }
    };

    const projectData = t.data.projects[String(project.id)];

    if (viewMode === 'list') {
        return (
            <motion.div
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.01 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex flex-col md:flex-row">
                    {/* Project Image */}
                    <div className="md:w-1/3 h-64 md:h-auto bg-gray-100 dark:bg-gray-700 overflow-hidden relative">
                        {project.featured && (
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-lime-500 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-md flex items-center gap-1">
                                <StarIconSolid className="w-3 h-3" />
                                {t.projects.featured}
                            </div>
                        )}
                        {project.imageUrl ? (
                            <Image
                                src={project.imageUrl}
                                alt={projectData.title}
                                width={600}
                                height={400}
                                className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-lime-100 to-emerald-100 dark:from-gray-700 dark:to-gray-800">
                                <CodeBracketIcon className="w-20 h-20 text-lime-600 dark:text-lime-400" />
                            </div>
                        )}
                    </div>

                    {/* Project Content */}
                    <div className="flex-1 p-6 md:p-8">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {projectData.title}
                                </h3>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="flex items-center gap-1">
                                        <UserCircleIcon className="w-4 h-4" />
                                        {projectData.role}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <ClockIcon className="w-4 h-4" />
                                        {project.duration}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 ml-4">
                                {project.githubUrl && (
                                    <Link
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-lime-50 dark:bg-gray-700 text-lime-700 dark:text-lime-300 hover:bg-lime-100 dark:hover:bg-gray-600 transition-colors"
                                        aria-label="View code on GitHub"
                                    >
                                        <CodeBracketIcon className="w-5 h-5" />
                                    </Link>
                                )}
                                {project.demoUrl && (
                                    <Link
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-emerald-50 dark:bg-gray-700 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-gray-600 transition-colors"
                                        aria-label="View live demo"
                                    >
                                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                                    </Link>
                                )}
                            </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            {projectData.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-lime-50 to-emerald-50 dark:from-lime-900/30 dark:to-emerald-900/30 text-lime-700 dark:text-lime-300 rounded-lg border border-lime-200 dark:border-lime-900/50"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 h-full flex flex-col"
            initial="initial"
            whileHover="hover"
            variants={cardVariants}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Featured Badge */}
            {project.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-lime-500 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-md flex items-center gap-1">
                    <StarIconSolid className="w-3 h-3" />
                    {t.projects.featured}
                </div>
            )}

            {/* Project Image */}
            <div className="h-52 bg-gray-100 dark:bg-gray-700 overflow-hidden relative group">
                {project.imageUrl ? (
                    <Image
                        src={project.imageUrl}
                        alt={projectData.title}
                        width={600}
                        height={300}
                        className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                        priority
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-lime-100 to-emerald-100 dark:from-gray-700 dark:to-gray-800">
                        <CodeBracketIcon className="w-16 h-16 text-lime-600 dark:text-lime-400" />
                    </div>
                )}

                {/* Overlay with links */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center gap-3 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {project.githubUrl && (
                        <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-lg font-medium hover:bg-white transition-colors flex items-center gap-2 shadow-lg"
                        >
                            <CodeBracketIcon className="w-4 h-4" />
                            {t.projects.viewCode}
                        </Link>
                    )}
                    {project.demoUrl && (
                        <Link
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-lime-600 text-white rounded-lg font-medium hover:bg-lime-700 transition-colors flex items-center gap-2 shadow-lg"
                        >
                            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                            {t.projects.viewDemo}
                        </Link>
                    )}
                </motion.div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex-1 flex flex-col">
                <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {projectData.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 gap-3">
                        <span className="flex items-center gap-1">
                            <UserCircleIcon className="w-3.5 h-3.5" />
                            {projectData.role}
                        </span>
                        <span className="flex items-center gap-1">
                            <ClockIcon className="w-3.5 h-3.5" />
                            {project.duration}
                        </span>
                    </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 text-sm flex-grow">
                    {projectData.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium bg-gradient-to-r from-lime-50 to-emerald-50 dark:from-lime-900/30 dark:to-emerald-900/30 text-lime-700 dark:text-lime-300 rounded-lg border border-lime-200 dark:border-lime-900/50"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg">
                            +{project.technologies.length - 3}
                        </span>
                    )}
                </div>

                {/* Expandable Content */}
                <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-auto">
                    <button
                        onClick={toggleExpand}
                        className="w-full flex items-center justify-between text-sm font-semibold text-lime-600 dark:text-lime-400 hover:text-lime-700 dark:hover:text-lime-300 transition-colors group"
                    >
                        <span className="flex items-center gap-1">
                            {isExpanded ? t.common.close : t.projects.viewDetails}
                            <motion.span
                                animate={{ x: isExpanded ? 0 : [0, 4, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </span>
                        {isExpanded ? (
                            <ChevronUpIcon className="w-5 h-5" />
                        ) : (
                            <ChevronDownIcon className="w-5 h-5" />
                        )}
                    </button>

                    <AnimatePresence>
                        <motion.div
                            ref={contentRef}
                            initial="collapsed"
                            animate={isExpanded ? 'expanded' : 'collapsed'}
                            variants={contentVariants}
                            className="overflow-hidden"
                        >
                            <div className="mt-4 space-y-4">
                                {projectData.features && projectData.features.length > 0 && (
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                            <CheckCircleIcon className="w-4 h-4 text-lime-500" />
                                            {language === 'pt' ? 'Funcionalidades' : 'Key Features'}
                                        </h4>
                                        <ul className="space-y-1.5">
                                            {projectData.features.map((feature, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    className="flex items-start gap-2"
                                                >
                                                    <span className="text-lime-500 text-lg leading-none">•</span>
                                                    <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {projectData.achievements && projectData.achievements.length > 0 && (
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                            <TrophyIcon className="w-4 h-4 text-yellow-500" />
                                            {t.experience.achievements}
                                        </h4>
                                        <ul className="space-y-1.5">
                                            {projectData.achievements.map((achievement, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    className="flex items-start gap-2"
                                                >
                                                    <span className="text-yellow-500 text-lg leading-none">★</span>
                                                    <span className="text-sm text-gray-600 dark:text-gray-300">{achievement}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}