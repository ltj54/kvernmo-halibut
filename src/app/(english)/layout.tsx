import "../globals.css";
import type { Metadata } from "next";
import { getSiteMetadata } from "../site-config";
import BusinessJsonLd from "../business-jsonld";

export const metadata: Metadata = getSiteMetadata("en");

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <BusinessJsonLd language="en" />
        {children}
      </body>
    </html>
  );
}
