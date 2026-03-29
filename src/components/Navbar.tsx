"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/data";

const NAV_LINKS = [
  { href: "#works", label: "Portofolio" },
  { href: "#services", label: "Layanan" },
  { href: "#about", label: "Tentang" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-300 ${
        scrolled
          ? "border-b border-border backdrop-blur-md bg-bg/80"
          : "border-b border-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center leading-none" aria-label="Rassya Rifqi">
        <span className="relative inline-flex items-end">
          <span
            className="text-white leading-none select-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "26px",
              letterSpacing: "-1px",
            }}
          >
            R
          </span>
          <span
            className="absolute bg-accent rounded-full"
            style={{ width: "5px", height: "5px", top: "2px", right: "-2px" }}
          />
        </span>
        <span
          className="text-white ml-[7px] select-none"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            letterSpacing: "-0.3px",
          }}
        >
          assya
        </span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm text-muted hover:text-text transition-colors duration-200"
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={`https://wa.me/${CONTACT.wa}?text=${CONTACT.waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium bg-accent text-bg px-[18px] py-[8px] rounded-full hover:bg-[#d4ff6e] transition-colors duration-200"
          >
            Hubungi Saya →
          </a>
        </li>
      </ul>

      {/* Mobile CTA */}
      <a
        href={`https://wa.me/${CONTACT.wa}?text=${CONTACT.waText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden text-[13px] font-medium bg-accent text-bg px-4 py-2 rounded-full"
      >
        WA →
      </a>
    </nav>
  );
}
