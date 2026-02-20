import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Optional: Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
