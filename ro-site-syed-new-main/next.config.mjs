/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  
  allowedDevOrigins: [
    'ais-dev-abmeh3yb627htbk7uvaams-159400676689.asia-east1.run.app',
    'ais-pre-abmeh3yb627htbk7uvaams-159400676689.asia-east1.run.app',
    '**.run.app',
    '**.asia-east1.run.app',
  ],
  
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'assets.mixkit.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  compress: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' 
      ? { exclude: ['error', 'warn'] } 
      : false,
  },

  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  // ✅ Sirf optimizeCss rakho
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;