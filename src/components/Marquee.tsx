import { MARQUEE_ITEMS } from "@/lib/data";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="border-y border-border py-4 overflow-hidden bg-surface">
      <div className="flex animate-marquee gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 text-[13px] font-medium text-muted uppercase tracking-widest flex-shrink-0"
          >
            {item}
            <span className="text-accent text-lg leading-none">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
