import type { Metadata } from "next";

export type SiteLanguage = "nb" | "en";

export const siteUrl = process.env.SITE_URL?.replace(/\/$/, "");
export const canIndexSite = Boolean(siteUrl && process.env.SITE_INDEXABLE === "true");
const basePath = process.env.GITHUB_PAGES === "true" ? "/kvernmo-halibut" : "";

const pageInfo = {
  nb: {
    path: "/",
    title: "Hvalsafari på Altafjorden med Joelma | Kvernmo Halibut",
    description: "Opplev Altafjorden fra motorseileren Joelma. Tur med Bjørne som skipper eller leie uten mannskap etter avtale. Hval og spekkhogger kan dukke opp i sesong.",
    locale: "nb_NO",
  },
  en: {
    path: "/en/",
    title: "Whale watching in Altafjord aboard Joelma | Kvernmo Halibut",
    description: "Explore Altafjord aboard Joelma, a Nauticat 525 motor sailer. Join Bjørne as skipper or ask about an uncrewed rental. Whales and orcas may appear in season.",
    locale: "en_GB",
  },
} satisfies Record<SiteLanguage, { path: string; title: string; description: string; locale: string }>;

export function getSiteMetadata(language: SiteLanguage): Metadata {
  const page = pageInfo[language];
  const canonical = siteUrl ? new URL(page.path, `${siteUrl}/`) : undefined;
  const norwegianUrl = siteUrl ? new URL("/", `${siteUrl}/`).toString() : undefined;
  const englishUrl = siteUrl ? new URL("/en/", `${siteUrl}/`).toString() : undefined;

  return {
    ...(siteUrl ? { metadataBase: new URL(`${siteUrl}/`) } : {}),
    title: page.title,
    description: page.description,
    icons: { icon: { url: `${basePath}/favicon.svg`, type: "image/svg+xml" } },
    ...(canonical && norwegianUrl && englishUrl
      ? {
          alternates: {
            canonical,
            languages: { "nb-NO": norwegianUrl, en: englishUrl },
          },
        }
      : {}),
    robots: { index: canIndexSite, follow: canIndexSite },
    openGraph: {
      type: "website",
      siteName: "Kvernmo Halibut",
      title: page.title,
      description: page.description,
      locale: page.locale,
      ...(siteUrl ? { images: [{ url: new URL("/images/joelma-seilas.webp", `${siteUrl}/`).toString(), alt: "Joelma sailing in Altafjord" }] } : {}),
      ...(canonical ? { url: canonical } : {}),
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description },
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
      : {}),
  };
}
