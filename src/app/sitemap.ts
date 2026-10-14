import type { MetadataRoute } from "next";
import { canIndexSite, siteUrl } from "./site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!canIndexSite || !siteUrl) return [];

  const now = new Date();
  return [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/en/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
