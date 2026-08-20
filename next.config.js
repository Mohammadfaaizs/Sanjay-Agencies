/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sanjayagencies.in',
      },
    ],
  },
}

module.exports = nextConfig
