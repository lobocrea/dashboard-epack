/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['serverless.priver.app', 'images.pexels.com'],
  },
  swcMinify: false,
  experimental: {
    esmExternals: false,
  },
}

module.exports = nextConfig