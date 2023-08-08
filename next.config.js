/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["127.0.0.1", "netlify.app", "ondigitalocean.app"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'exhibit-mcj9s.ondigitalocean.app',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
