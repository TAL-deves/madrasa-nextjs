/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  output: 'export',
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}

module.exports = nextConfig;

