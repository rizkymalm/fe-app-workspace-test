import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        dangerouslyAllowLocalIP: true,
        domains: [
            'http://localhost:3000/',
            'https://next-gmbh-test.vercel.app/',
        ],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000', // Specify the port your images are served from
                pathname: '/**', // Use '/**' to allow all paths, or be more specific
            },
        ],
    },
};

export default nextConfig;
