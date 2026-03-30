"use client";

import FadeUp from "./FadeUp";
import { PROCESS } from "@/lib/data";
import { RocketLaunch, Icon } from "@phosphor-icons/react";

const iconMap: Record<string, Icon> = {
  RocketLaunch: RocketLaunch,
  // Nanti kalau ada ikon lain, tinggal tambahkan di sini
};

export default function Process() {
  return (
    <section className="bg-surface border-y border-border px-6 md:px-10 py-24 md:py-32">
      <FadeUp>
        <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.2em] mb-4">
          Cara kerja
        </p>
        <h2
          className="font-display font-extrabold text-white tracking-tightest leading-[1.02] mb-4"
          style={{ fontSize: "clamp(32px, 5vw, 54px)" }}
        >
          Proses Sederhana
        </h2>
        <p className="text-muted text-base font-light max-w-[420px] mb-14">
          Dari obrolan pertama sampai website kamu live — transparan dan
          terstruktur.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* 2. Destructure 'icon' dari data PROCESS */}
        {PROCESS.map(({ num, title, desc, icon }, i) => {
          // 3. Tentukan komponen ikon yang mau di-render
          const IconComponent = icon ? iconMap[icon] : null;

          return (
            <FadeUp key={num} delay={i * 0.08}>
              <div className="relative">
                {/* Connector line (desktop only) */}
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-4 left-8 right-0 h-px bg-border" />
                )}
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mb-5 relative z-10">
                  <span className="font-display font-bold text-bg text-[11px]">
                    {num}
                  </span>
                </div>
                
                {/* 4. Tampilkan Ikon bersebelahan dengan Title */}
                <h3 className="font-display font-bold text-white text-[17px] tracking-tight mb-2 flex items-center gap-2">
                  {title}
                  {IconComponent && (
                    <IconComponent weight="duotone" className="w-5 h-5 text-accent" />
                  )}
                </h3>
                
                <p className="text-[13px] text-muted font-light leading-relaxed">
                  {desc}
                </p>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}