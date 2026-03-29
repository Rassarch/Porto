import FadeUp from "./FadeUp";
import { SKILLS } from "@/lib/data";
import {
  Lightning,
  ChatCircle,
  Target,
} from "@phosphor-icons/react/dist/ssr";

const VALUES = [
  {
    Icon: Lightning,
    title: "Pengiriman Tepat Waktu",
    desc: "Setiap project punya timeline yang jelas dan aku berkomitmen untuk menepatinya.",
  },
  {
    Icon: ChatCircle,
    title: "Komunikasi Aktif",
    desc: "Update progress rutin, responsif terhadap feedback, dan tidak menghilang di tengah project.",
  },
  {
    Icon: Target,
    title: "Fokus pada Hasil",
    desc: "Bukan cuma keren — tapi website yang beneran membantu bisnis kamu berkembang.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left */}
        <FadeUp>
          <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.2em] mb-4">
            Tentang saya
          </p>
          <h2
            className="font-display font-extrabold text-white tracking-tightest leading-[1.02] mb-8"
            style={{ fontSize: "clamp(32px, 4vw, 50px)" }}
          >
            Halo, saya<br />Rassya Rifqi.
          </h2>
          <div className="space-y-5 text-[15px] text-muted font-light leading-relaxed">
            <p>
              Saya web developer dari{" "}
              <strong className="text-text font-medium">Metro, Lampung</strong>{" "}
              yang fokus bikin website buat bisnis lokal dan UMKM. Mulai serius
              terjun ke dunia web karena satu alasan sederhana:{" "}
              <strong className="text-text font-medium">
                banyak bisnis bagus di sekitar saya yang belum punya tampilan
                digital yang layak.
              </strong>
            </p>
            <p>
              Saya otodidak — belajar dari nol, ngulik sendiri, dan hasilnya
              bisa kamu lihat di 4 project di atas. Dari gym premium, travel
              agent, kost-kostan, sampai coffee shop.
            </p>
            <p>
              Saya percaya website yang bagus bukan soal kerennya aja — tapi
              soal{" "}
              <strong className="text-text font-medium">
                apakah dia beneran membantu bisnis kamu berkembang.
              </strong>
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {SKILLS.map((s) => (
              <span
                key={s}
                className="text-[12px] text-muted border border-border px-4 py-[6px] rounded-full hover:border-accent hover:text-accent transition-colors duration-200 cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </FadeUp>

        {/* Right */}
        <div className="space-y-3">
          {VALUES.map(({ Icon, title, desc }, i) => (
            <FadeUp key={title} delay={i * 0.1}>
              <div className="bg-surface border border-border rounded-xl p-7 hover:border-[#2a2a2a] transition-colors duration-200">
                <Icon size={22} className="text-accent mb-4" weight="regular" />
                <h3 className="font-display font-bold text-white text-[16px] tracking-tight mb-2">
                  {title}
                </h3>
                <p className="text-[13px] text-muted font-light leading-relaxed">
                  {desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
