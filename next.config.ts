import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["forsikringtipset.no"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "forsikringtipset.no",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "forsikringtipset.no",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
