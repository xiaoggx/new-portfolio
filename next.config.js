/** @type {import('next').NextConfig} */
const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
    },
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    },
    {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin'
    },
    {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
    }
];

const nextConfig = {
    output: 'standalone',
    poweredByHeader: false,

    images: {
        unoptimized: true,
        formats: ['image/avif', 'image/webp'],
        domains: ['images.unsplash.com'],
    },

    trailingSlash: true,

    reactStrictMode: true,

    swcMinify: true,

    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

    eslint: {
        ignoreDuringBuilds: true,
    },

    typescript: {
        ignoreBuildErrors: true,
    },

    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['@heroicons/react'],
    },

    async headers() {
        return [
            {
                source: '/:path*',
                headers: securityHeaders,
            },
        ];
    },
};

module.exports = nextConfig;
