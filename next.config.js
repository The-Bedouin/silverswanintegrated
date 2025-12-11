/** @type {import('next').NextConfig} */
const nextConfig = {
  // This ensures the dev server works properly in Codespaces
  // The -H 0.0.0.0 flag in package.json handles the hostname binding
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig

