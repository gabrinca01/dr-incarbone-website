import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/env";

function getBaseUrl(): string {
  return SITE_URL.replace(/\/+$/, "");
}

/**
 * Public sitemap for search engines.
 * The site is a single-page App Router homepage; hash sections are not separate routes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();

  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
