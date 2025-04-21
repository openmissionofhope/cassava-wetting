/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Set to true for static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
