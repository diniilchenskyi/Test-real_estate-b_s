import type { NextConfig } from "next";

const backendUrl = (process.env.BACKEND_PROXY_URL || "http://127.0.0.1:4000").replace(
  /\/$/,
  ""
);

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${backendUrl}/api/v1/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
