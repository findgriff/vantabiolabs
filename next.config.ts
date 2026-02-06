import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Prevent Turbopack from inferring an incorrect monorepo root when multiple
    // lockfiles exist elsewhere on disk.
    root: process.cwd(),
  },
};

export default nextConfig;
