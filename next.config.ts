import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },
  // Perf: compress semua response
  compress: true,
};

export default nextConfig;
