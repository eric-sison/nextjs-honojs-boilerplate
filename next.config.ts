import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"], // include domain names and/or IP addresses for local dev server
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
