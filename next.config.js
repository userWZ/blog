/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: "www.notion.so",
    },
    {
      protocol: 'https',
      hostname: "firebasestorage.googleapis.com",
    },
    {
      protocol: 'https',
      hostname: "raw.githubusercontent.com",
    }],
  },
};

module.exports = nextConfig;
