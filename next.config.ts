import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/gbc_shinoosaka',
  assetPrefix: '/gbc_shinoosaka',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
