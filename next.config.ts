import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Required under `output: "export"` — there is no server to optimise on
  // demand. The screenshots are pre-sized and already WebP.
  images: { unoptimized: true },
};

export default nextConfig;
