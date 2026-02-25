import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Fix workspace root detection when there are multiple lockfiles
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
