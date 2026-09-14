/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['192.168.1.4', '192.168.1.4:3000', 'localhost:3000'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.gigaenergy.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      }
    ],
  },
};

export default nextConfig;
