"use client";

import { ArrowUpRight, PlayCircle } from "@phosphor-icons/react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

interface ProjectCardProps {
  num: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  url: string;
  tags: string[];
  accent: string;
  reverse?: boolean;
  index: number;
  imageId: string; // Properti baru untuk nama file gambar
}

export default function ProjectCard({
  num,
  title,
  category,
  problem,
  solution,
  url,
  tags,
  accent,
  reverse = false,
  index,
  imageId,
}: ProjectCardProps) {
  // State pengendali Iframe
  const [loadIframe, setLoadIframe] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border border-border rounded-2xl overflow-hidden bg-surface hover:border-[#2a2a2a] transition-colors duration-300"
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${
          reverse ? "md:[direction:rtl]" : ""
        }`}
      >
        {/* === INFO (BAGIAN KIRI) === */}
        <div
          className={`p-8 md:p-12 flex flex-col justify-between ${
            reverse ? "md:[direction:ltr]" : ""
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] text-muted uppercase tracking-widest font-mono">
                {num} / 04
              </span>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-all duration-200 group/arrow"
                aria-label={`Buka ${title}`}
              >
                <ArrowUpRight
                  size={16}
                  className="group-hover/arrow:translate-x-[2px] group-hover/arrow:-translate-y-[2px] transition-transform duration-200"
                />
              </a>
            </div>

            <h3
              className="font-display font-extrabold text-white tracking-tightest leading-none mb-2"
              style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
            >
              {title}
            </h3>
            <p className="text-[13px] font-medium mb-6" style={{ color: accent }}>
              {category}
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-muted mb-1">
                  Tantangan
                </p>
                <p className="text-[14px] text-muted font-light leading-relaxed">
                  {problem}
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-muted mb-1">
                  Solusi
                </p>
                <p className="text-[14px] text-muted font-light leading-relaxed">
                  {solution}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-muted border border-border px-3 py-[5px] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-medium border-b pb-[2px] transition-colors duration-200"
              style={{
                color: accent,
                borderColor: `${accent}55`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = accent)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = `${accent}55`)
              }
            >
              Lihat Live Demo <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* === VISUAL (BAGIAN KANAN - HYBRID MODE) === */}
        <div
          className={`relative overflow-hidden bg-[#080808] min-h-[260px] md:min-h-[380px] cursor-pointer group/preview ${
            reverse ? "md:[direction:ltr]" : ""
          }`}
          onMouseEnter={() => setLoadIframe(true)}
          onClick={() => setLoadIframe(true)}
        >
          {/* Gradient overlay statis */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(8,8,8,0.2) 0%, transparent 50%, rgba(8,8,8,0.5) 100%)",
            }}
          />
          {/* Garis aksen atas */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] z-30"
            style={{ background: accent, opacity: 0.6 }}
          />

          {/* STATE 1: SEBELUM DI-HOVER (GAMBAR STATIS) */}
          {!loadIframe && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
              {/* Gambar Background (Sangat ringan di-load) */}
              <Image
                src={`/images/${imageId}.webp`}
                alt={`Preview statis ${title}`}
                fill
                className="object-cover object-top opacity-40 group-hover/preview:opacity-20 transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0} // Prioritaskan gambar pertama agar LCP makin kencang
              />
              {/* Ikon Play Interactive */}
              <div className="z-30 flex flex-col items-center gap-3 text-white opacity-80 group-hover/preview:opacity-100 group-hover/preview:scale-110 transition-all duration-300">
                <PlayCircle size={48} weight="light" color={accent} className="animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: accent }}>
                  Tap to Load Interactive
                </span>
              </div>
            </div>
          )}

          {/* STATE 2: SETELAH DI-HOVER (IFRAME HIDUP) */}
          {loadIframe && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 z-0"
            >
              <iframe
                src={url}
                title={`Preview ${title}`}
                loading="eager"
                scrolling="no"
                tabIndex={-1}
                aria-hidden="true"
                className="absolute top-0 left-0 border-none pointer-events-none"
                style={{
                  width: "200%",
                  height: "200%",
                  transform: "scale(0.5)",
                  transformOrigin: "top left",
                }}
              />
            </motion.div>
          )}

          {/* Label Status di Kanan Bawah */}
          <div
            className="absolute bottom-4 right-4 z-30 text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border transition-colors duration-300"
            style={{
              color: loadIframe ? accent : "#888",
              borderColor: loadIframe ? `${accent}55` : "#333",
              background: "rgba(8,8,8,0.85)",
            }}
          >
            {loadIframe ? "Live Preview Active" : "Static Image"}
          </div>
        </div>
      </div>
    </motion.div>
  );
}