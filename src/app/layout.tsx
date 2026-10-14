import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kvernmo Halibut – konseptutkast",
  description: "Uforpliktende konseptutkast for en nettside om seilas i Vest-Finnmark.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  );
}
