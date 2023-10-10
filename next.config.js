/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  env: {
    BASE_URL: isProduction ? process.env.PRODUCTION_BASE_URL : process.env.DEVELOPMENT_BASE_URL,
  },
};

