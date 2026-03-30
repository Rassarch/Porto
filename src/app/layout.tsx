// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rassyarifqi.vercel.app"),
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
  alternates: {
    canonical: "/", // = https://rassyarifqi.vercel.app/
  },
  openGraph: {
    title: "Rassya Rifqi — Web Developer Metro, Lampung",
    description: "Website modern, cepat, dan responsif untuk bisnis lokal Anda.",
    type: "website",
    locale: "id_ID",
    url: "https://rassyarifqi.vercel.app",
    siteName: "Rassya Rifqi Portfolio",
    images: ["/og-image.png"], // bikin file ini di /public
  },
  twitter: {
    card: "summary_large_image",
    title: "Rassya Rifqi — Web Developer Metro, Lampung",
    description:
      "Jasa pembuatan website modern untuk UMKM dan bisnis lokal di Metro, Lampung.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "google76f2e0479c83d0d9.html",
  }
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