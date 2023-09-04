/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'dist',
    output: 'export',
    webpack: (config, { dev }) => {
        // Add custom webpack configurations here
        return config;
      },
};

module.exports = nextConfig;

