import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/env";

function getBaseUrl(): string {
  return SITE_URL.replace(/\/+$/, "");
}

/**
 * Allows crawling of public pages and points crawlers to the sitemap.
 * Disallows API routes which are not meant for indexing.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl.replace(/^https?:\/\//, ""),
  };
}
