import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    // Site images, admin uploads served locally, and uploads stored in Vercel Blob
    localPatterns: [{ pathname: "/images/**" }, { pathname: "/img/**" }, { pathname: "/api/media/file/**" }],
    remotePatterns: [{ protocol: "https", hostname: "*.public.blob.vercel-storage.com" }],
  },
  turbopack: {
    root: path.resolve(dirname),
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

export default withPayload(nextConfig, { devBundleServerPackages: false });
