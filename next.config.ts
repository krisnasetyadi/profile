import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "unsplash.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "128.199.172.39",
      "admin.paulusshpartners.com",
      "127.0.0.1",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "admin.paulusshpartners.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
