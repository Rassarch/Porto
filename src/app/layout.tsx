import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rassya Rifqi — Web Developer Metro, Lampung",
  description:
    "Jasa pembuatan website modern, cepat, dan responsif untuk UMKM dan bisnis lokal. Berbasis di Metro, Lampung. Dibangun dengan Next.js & Tailwind CSS.",
  keywords: [
    "web developer Metro Lampung",
    "jasa website Metro",
    "freelance web developer Indonesia",
    "pembuatan website UMKM",
    "Rassya Rifqi",
  ],
  authors: [{ name: "Rassya Rifqi" }],
  creator: "Rassya Rifqi",
  openGraph: {
    title: "Rassya Rifqi — Web Developer Metro, Lampung",
    description:
      "Website modern, cepat, dan responsif untuk bisnis lokal Anda.",
    type: "website",
    locale: "id_ID",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
