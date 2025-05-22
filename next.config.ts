import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/fiaca-web',
  assetPrefix: '/fiaca-web/',
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
