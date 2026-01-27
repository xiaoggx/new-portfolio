import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  adjustFontFallback: false,
  preload: true,
});

const fontVariables = `${inter.variable} font-sans`;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

export const metadata: Metadata = {
  title: 'Gabriel L. Andrade | Portfolio',
  description: 'DevOps & Cloud Engineer - Personal portfolio showcasing projects and skills',
  keywords: ['portfolio', 'devops', 'cloud', 'infrastructure', 'linux', 'docker', 'python', 'next.js'],
  authors: [{ name: 'Gabriel L. Andrade' }],
  metadataBase: new URL('https://portfolio.eldersmc.top'),
  openGraph: {
    title: 'Gabriel L. Andrade | Portfolio',
    description: 'DevOps & Cloud Engineer - Personal portfolio showcasing projects and skills',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'pt_BR',
    url: 'https://portfolio.eldersmc.top',
    siteName: 'Gabriel L. Andrade Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel L. Andrade | Portfolio',
    description: 'DevOps & Cloud Engineer - Personal portfolio showcasing projects and skills',
  },
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVariables} min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-200`}>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
