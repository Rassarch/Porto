import type { Metadata } from "next";
import { Syne, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

// 1. Konfigurasi Font bawaan Next.js
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap", // Penting untuk performa agar teks tidak menghilang saat loading
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
  variable: "--font-playfair",
  display: "swap",
});

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
    icon: "/favicon.ico", // Nanti kamu bisa ubah ini ke icon.svg lagi jika sudah siap
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      {/* 2. Suntikkan variabel font ke dalam body */}
      <body className={`${syne.variable} ${dmSans.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}