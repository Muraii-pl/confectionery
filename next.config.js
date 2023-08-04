/** @type {import('next').NextConfig} */
path = require('path')
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
