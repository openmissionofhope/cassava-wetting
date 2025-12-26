/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,

  // GitHub Pages project site lives under /<repo>
  basePath: "/cassava-wetting",
  assetPrefix: "/cassava-wetting/",

  images: { unoptimized: true },
};

module.exports = nextConfig;
