import type { MetadataRoute } from "next";
import { canIndexSite, siteUrl } from "./site-config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: canIndexSite ? "/" : undefined,
      disallow: canIndexSite ? undefined : "/",
    },
    ...(canIndexSite && siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}
