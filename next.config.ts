import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000, // 30 days
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [64, 90, 100, 128, 256],
  },
};

export default nextConfig;
