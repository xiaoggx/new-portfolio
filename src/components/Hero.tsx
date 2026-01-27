'use client';

import { motion } from 'framer-motion';
import { ArrowDownIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();
    const [displayedText, setDisplayedText] = useState('');
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const role = t.hero.roles[currentRoleIndex];
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= role.length) {
                setDisplayedText(role.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setCurrentRoleIndex((prev) => (prev + 1) % t.hero.roles.length);
                }, 2000);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, [currentRoleIndex, t.hero.roles]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring' as const,
                stiffness: 100,
                damping: 10,
            },
        },
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-emerald-900/20" />
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-lime-400/30 dark:bg-lime-500/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/30 dark:bg-emerald-500/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            <motion.div
                className="w-full max-w-5xl mx-auto text-center relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Greeting Badge */}
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-lime-200 dark:border-gray-700">
                    <SparklesIcon className="w-5 h-5 text-lime-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t.hero.availableBadge}
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6"
                >
                    {t.hero.greeting}{' '}
                    <span className="relative inline-block">
                        <span className="relative z-10 bg-gradient-to-r from-lime-600 to-emerald-600 dark:from-lime-400 dark:to-emerald-400 bg-clip-text text-transparent">
                            Gabriel Andrade
                        </span>
                        <motion.span
                            className="absolute -bottom-2 left-0 w-full h-3 bg-lime-200 dark:bg-lime-900/50 -z-0"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.8, delay: 1 }}
                        />
                    </span>
                </motion.h1>

                {/* Animated Role */}
                <motion.h2
                    variants={itemVariants}
                    className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-300 mb-8 h-16 md:h-20"
                >
                    <span className="inline-block min-w-[300px] md:min-w-[400px] text-left">
                        {displayedText}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                            className="inline-block w-0.5 h-8 md:h-10 bg-lime-600 dark:bg-lime-400 ml-1 align-middle"
                        />
                    </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    {t.hero.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
                >
                    <motion.a
                        href="#projects"
                        className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-lime-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            {t.hero.viewWork}
                            <motion.svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </motion.svg>
                        </span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-lime-600"
                            initial={{ x: '100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.a>

                    <motion.a
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-4 border-2 border-lime-600 dark:border-lime-400 text-lime-600 dark:text-lime-400 rounded-xl font-semibold hover:bg-lime-50 dark:hover:bg-lime-900/20 transition-all shadow-lg backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t.hero.getInTouch}
                    </motion.a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.a
                    href="#about"
                    variants={itemVariants}
                    className="inline-flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-lime-600 dark:hover:text-lime-400 transition-colors cursor-pointer"
                >
                    <span className="text-sm font-medium">{t.hero.scrollToExplore}</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ArrowDownIcon className="w-6 h-6" />
                    </motion.div>
                </motion.a>
            </motion.div>
        </section>
    );
}