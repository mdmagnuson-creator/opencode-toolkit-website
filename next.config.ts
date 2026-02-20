import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages deploys to /repo-name/ subdirectory
  basePath: isProd ? "/opencode-toolkit-website" : "",
  assetPrefix: isProd ? "/opencode-toolkit-website/" : "",
  trailingSlash: true,
};

export default nextConfig;
