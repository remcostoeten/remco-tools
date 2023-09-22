import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    experimental: {
        appDir: true,
        mdxRs: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.licdn.com',
            },
        ],
    },
};

export default withContentlayer(nextConfig);
