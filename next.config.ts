import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      // Help Center was merged into Support; keep old links working
      { source: "/help_center", destination: "/support", permanent: true },
      { source: "/help-center", destination: "/support", permanent: true },
      // Old About URL linked from earlier pages
      { source: "/about_us", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
