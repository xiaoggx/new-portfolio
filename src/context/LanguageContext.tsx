'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translations, translations, defaultLanguage } from '@/i18n/translations';

interface LanguageContextType {
    language: Language;
    t: Translations;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectBrowserLanguage(): Language {
    if (typeof window === 'undefined') return defaultLanguage;

    const browserLang = navigator.language || (navigator as unknown as { userLanguage?: string }).userLanguage || '';

    if (browserLang.toLowerCase().startsWith('pt')) {
        return 'pt';
    }

    return 'en';
}

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguageState] = useState<Language>(defaultLanguage);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedLang = localStorage.getItem('portfolio-language') as Language | null;

        if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
            setLanguageState(savedLang);
        } else {
            const detectedLang = detectBrowserLanguage();
            setLanguageState(detectedLang);
            localStorage.setItem('portfolio-language', detectedLang);
        }

        setMounted(true);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('portfolio-language', lang);
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
    };

    const toggleLanguage = () => {
        const newLang = language === 'pt' ? 'en' : 'pt';
        setLanguage(newLang);
    };

    if (!mounted) {
        return (
            <LanguageContext.Provider value={{
                language: defaultLanguage,
                t: translations[defaultLanguage],
                setLanguage: () => { },
                toggleLanguage: () => { },
            }}>
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{
            language,
            t: translations[language],
            setLanguage,
            toggleLanguage,
        }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
