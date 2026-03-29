export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-7 border-t border-border flex flex-col md:flex-row justify-between items-center gap-2">
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
      <span className="text-[13px] text-muted">
        © 2025 · Metro, Lampung · Dibuat dengan ☕ dan banyak commit
      </span>
    </footer>
  );
}
