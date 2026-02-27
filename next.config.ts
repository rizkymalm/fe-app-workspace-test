import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        domains: [
            'http://localhost:3000/',
            'https://next-gmbh-test.vercel.app/',
        ],
    },
};

export default nextConfig;
