import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // @ts-ignore - turbopack config not in types yet
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
