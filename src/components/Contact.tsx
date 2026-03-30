import FadeUp from "./FadeUp";
import { CONTACT } from "@/lib/data";
import {
  WhatsappLogo,
  EnvelopeSimple,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-surface border-t border-border px-6 md:px-10 py-24 md:py-32 text-center"
    >
      <div className="max-w-[600px] mx-auto">
        <FadeUp>
          <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.2em] mb-8">
            Mulai project
          </p>

          <h2
            className="font-display font-extrabold text-white tracking-tightest leading-[0.88] mb-6"
            style={{ fontSize: "clamp(48px, 9vw, 100px)" }}
          >
            Mari<br />
            <span className="text-accent">Ngobrol.</span>
          </h2>

          <p className="text-[15px] text-muted font-light leading-relaxed mb-10 max-w-[420px] mx-auto">
            Punya ide buat website bisnis kamu? Cerita dulu aja — gratis,
            santai, tanpa komitmen. Kita cari solusi yang paling pas bareng.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`https://wa.me/${CONTACT.wa}?text=${CONTACT.waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-bg font-semibold text-[14px] px-7 py-4 rounded-full hover:bg-[#d4ff6e] transition-colors duration-200"
            >
              <WhatsappLogo size={17} weight="fill" />
              WhatsApp Sekarang
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 border border-border text-muted text-[14px] px-6 py-4 rounded-full hover:border-[#3a3a3a] hover:text-text transition-colors duration-200"
            >
              <EnvelopeSimple size={16} />
              Email
            </a>
            {/* <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-muted text-[14px] px-6 py-4 rounded-full hover:border-[#3a3a3a] hover:text-text transition-colors duration-200"
            >
              <LinkedinLogo size={16} />
              LinkedIn
            </a> */}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
