import type { NextConfig } from "next";

const basePath = process.env.GITHUB_PAGES === "true" ? "/kvernmo-halibut" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
