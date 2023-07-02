/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com", "i.ibb.co", "i.postimg.cc"],
  },
};

module.exports = nextConfig;
