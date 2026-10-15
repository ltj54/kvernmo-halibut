import { siteUrl } from "./site-config";
import type { SiteLanguage } from "./site-config";
import { contactDetails, organizationNumber } from "./business-details";

const escapeJsonLd = (json: string) => json.replaceAll("<", String.raw`\u003c`);

export default function BusinessJsonLd({ language }: Readonly<{ language: SiteLanguage }>) {
  if (!siteUrl) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kvernmo Halibut",
    email: contactDetails.email,
    telephone: contactDetails.telephone,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Norwegian organization number",
      value: organizationNumber,
    },
    url: new URL(language === "en" ? "/en/" : "/", `${siteUrl}/`).toString(),
    description: language === "en"
      ? "Boat trips and rental aboard Joelma on Altafjord in Northern Norway."
      : "Seilas og båtleie med Joelma på Altafjorden i Nord-Norge.",
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: escapeJsonLd(JSON.stringify(data)) }} />;
}
