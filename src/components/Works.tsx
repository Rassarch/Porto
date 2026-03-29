import FadeUp from "./FadeUp";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/lib/data";

export default function Works() {
  return (
    <section id="works" className="px-6 md:px-10 py-24 md:py-32">
      <FadeUp>
        <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.2em] mb-4">
          Selected Works
        </p>
        <h2
          className="font-display font-extrabold text-white tracking-tightest leading-[1.02] mb-4"
          style={{ fontSize: "clamp(32px, 5vw, 54px)" }}
        >
          Proyek Pilihan
        </h2>
        <p className="text-muted text-base font-light max-w-[420px] mb-14">
          Empat demo berbeda industri — fitness, travel, properti, dan F&B.
          Semua dibangun dengan Next.js + Tailwind CSS.
        </p>
      </FadeUp>

      <div className="flex flex-col gap-3">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.id}
            {...project}
            reverse={i % 2 !== 0}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
