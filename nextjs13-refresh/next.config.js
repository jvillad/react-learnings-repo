/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['dummyimage.com', 'au.lamarzoccohome.com'],
  },
};

module.exports = nextConfig;
