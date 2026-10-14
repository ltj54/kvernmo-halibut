import "../globals.css";
import { getSiteMetadata } from "../site-config";
import BusinessJsonLd from "../business-jsonld";

export const metadata = getSiteMetadata("en");

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
