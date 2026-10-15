import "../globals.css";
import type { Metadata } from "next";
import { getSiteMetadata } from "../site-config";
import BusinessJsonLd from "../business-jsonld";

export const metadata: Metadata = getSiteMetadata("nb");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb">
      <body>
        <BusinessJsonLd language="nb" />
        {children}
      </body>
    </html>
  );
}
