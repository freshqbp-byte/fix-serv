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
  
  // ✅ Image Optimization (WebP/AVIF + long cache)
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.mixkit.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ✅ Compression (gzip/brotli)
  compress: true,

  // ✅ SWC Minify (fast build)
  swcMinify: true,

  // ✅ Production me console.log hatao
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' 
      ? { exclude: ['error', 'warn'] } 
      : false,
  },

  // ✅ Security
  poweredByHeader: false,

  // ✅ Source maps off
  productionBrowserSourceMaps: false,

  // ✅ Legacy JS disable (24 KiB savings) + CSS optimize
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
    optimizeCss: true,
  },
};

export default nextConfig;