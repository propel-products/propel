/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 13+
  outputFileTracingRoot: __dirname,
  // Performance optimizations
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Compress output (enabled by default in Next.js 15)
  compress: true,
}

module.exports = nextConfig
