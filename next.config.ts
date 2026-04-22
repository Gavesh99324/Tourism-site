import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.olankatravels.com",
      },
    ],
  },
};

export default nextConfig;
