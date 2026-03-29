"use client";

import { motion } from "motion/react";
import { ArrowDown } from "@phosphor-icons/react";
import { CONTACT } from "@/lib/data";

const STATS = [
  { num: "4+", label: "Project live" },
  { num: "3+", label: "Industri dilayani" },
  { num: "100%", label: "Mobile-ready" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-28 pb-16 overflow-hidden">
      {/* Background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-120px] right-[-80px] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,245,100,0.07) 0%, transparent 68%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[15%] w-[360px] h-[360px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(245,166,35,0.045) 0%, transparent 68%)",
        }}
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-flex items-center gap-2 border border-border px-4 py-[6px] rounded-full w-fit mb-9"
      >
        <span className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse-dot" />
        <span className="text-[11px] text-muted uppercase tracking-widest">
          Tersedia untuk project baru · Metro, Lampung
        </span>
      </motion.div>

      {/* Title */}
      <div className="overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold leading-[0.9] tracking-tightest mb-8"
          style={{ fontSize: "clamp(54px, 9vw, 116px)" }}
        >
          <span className="block text-white">Website</span>
          <span className="block text-accent">yang bekerja</span>
          <span
            className="block"
            style={{
              WebkitTextStroke: "1px #2e2e2e",
              color: "transparent",
            }}
          >
            keras.
          </span>
        </motion.h1>
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.38 }}
        className="text-muted text-[16px] md:text-[17px] font-light leading-relaxed max-w-[440px] mb-11"
      >
        Halo, saya{" "}
        <strong className="text-text font-medium">Rassya Rifqi</strong> — web
        developer dari Metro, Lampung. Saya bikin website yang{" "}
        <strong className="text-text font-medium">
          modern, cepat, dan enak dilihat
        </strong>{" "}
        buat UMKM dan bisnis lokal yang mau tampil serius di internet.
      </motion.p>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex items-center gap-5 flex-wrap"
      >
        <a
          href="#works"
          className="inline-flex items-center gap-2 bg-accent text-bg font-semibold text-sm px-7 py-[14px] rounded-full hover:bg-[#d4ff6e] transition-colors duration-200"
        >
          Lihat Karya <ArrowDown weight="bold" size={15} />
        </a>
        <a
          href={`https://wa.me/${CONTACT.wa}?text=${CONTACT.waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted border-b border-border pb-[2px] hover:text-text hover:border-muted transition-colors duration-200"
        >
          Mulai diskusi →
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex gap-10 md:gap-14 mt-16 pt-10 border-t border-border flex-wrap"
      >
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 + i * 0.08 }}
          >
            <div className="font-display font-extrabold text-[34px] text-white tracking-tight leading-none">
              {s.num}
            </div>
            <div className="text-[13px] text-muted mt-1">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
