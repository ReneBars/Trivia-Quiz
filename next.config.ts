import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // your existing Next.js config options

  webpack(config) {
    // Alias `@` to the project root
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

export default nextConfig;
