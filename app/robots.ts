import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // /website is the admin panel; /api is the CMS and forms API
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/website"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
