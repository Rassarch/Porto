import {
  BuildingOffice,
  ShoppingCart,
  DeviceMobile,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";
import FadeUp from "./FadeUp";

const SERVICES = [
  {
    Icon: BuildingOffice,
    title: "Company Profile",
    desc: "Website profesional yang membangun kepercayaan. Desain elegan, konten persuasif, performa tinggi untuk bisnis Anda.",
    tag: "Landing Page · Company Profile",
  },
  {
    Icon: ShoppingCart,
    title: "Platform Bisnis",
    desc: "Sistem booking, katalog produk, atau marketplace — arsitektur skalabel yang mudah dikelola tanpa keahlian teknis.",
    tag: "Booking · Katalog · Dashboard",
  },
  {
    Icon: DeviceMobile,
    title: "Mobile-First & Cepat",
    desc: "Semua website dioptimalkan untuk HP — skor performa tinggi bahkan di koneksi lambat dan perangkat lama.",
    tag: "Responsive · Performance",
  },
  {
    Icon: MagnifyingGlass,
    title: "SEO On-Page",
    desc: "Struktur heading, meta tag, alt text, dan URL bersih agar bisnis kamu lebih mudah ditemukan di Google.",
    tag: "SEO · Visibility",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-10 py-24 md:py-32">
      <FadeUp>
        <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.2em] mb-4">
          Yang saya kerjakan
        </p>
        <h2
          className="font-display font-extrabold text-white tracking-tightest leading-[1.02] mb-4"
          style={{ fontSize: "clamp(32px, 5vw, 54px)" }}
        >
          Layanan
        </h2>
        <p className="text-muted text-base font-light max-w-[400px] mb-14">
          Dari konsep sampai live — saya handle semuanya.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden">
        {SERVICES.map(({ Icon, title, desc, tag }, i) => (
          <FadeUp key={title} delay={i * 0.07}>
            <div className="bg-surface hover:bg-[#141414] transition-colors duration-200 p-8 md:p-10 h-full">
              <div className="w-11 h-11 rounded-xl bg-bg border border-border flex items-center justify-center mb-6">
                <Icon size={20} className="text-text" weight="regular" />
              </div>
              <h3 className="font-display font-bold text-[18px] text-white tracking-tight mb-3">
                {title}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed mb-5 font-light">
                {desc}
              </p>
              <span className="inline-block text-[11px] text-muted border border-border px-3 py-1 rounded-full">
                {tag}
              </span>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
