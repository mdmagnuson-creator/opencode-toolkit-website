import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Custom domain yo-go.ai serves from root, no basePath needed
  trailingSlash: true,
};

export default nextConfig;
