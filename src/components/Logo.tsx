interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 36, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Rassya Rifqi"
    >
      {/* Playfair-style italic R — drawn as paths for consistency across all devices */}
      {/* Vertical stem */}
      <path
        d="M10 28 L10 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Bowl top */}
      <path
        d="M10 8 C10 8, 24 8, 24 14 C24 20, 10 20, 10 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Leg (italic diagonal) */}
      <path
        d="M10 20 L26 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Accent dot */}
      <circle cx="29" cy="7" r="3" fill="#c8f564" />
    </svg>
  );
}
