const Rocket = ({ className = "" }: { className?: string }) => (
  <svg
    className={`rocket-fly pointer-events-none absolute left-0 z-0 h-[90px] w-[90px] text-foreground md:h-[130px] md:w-[130px] ${className}`}
    viewBox="0 0 100 100"
    fill="currentColor"
    aria-hidden
  >
    <g transform="rotate(45 50 50)">
      <path d="M50 6 C62 18 66 34 66 52 L66 70 L34 70 L34 52 C34 34 38 18 50 6 Z" />
      <path d="M34 54 L20 72 L20 82 L34 72 Z" />
      <path d="M66 54 L80 72 L80 82 L66 72 Z" />
      <circle cx="50" cy="38" r="7" fill="hsl(var(--background))" />
      <path d="M40 74 L60 74 L56 86 L50 96 L44 86 Z" opacity="0.55" />
    </g>
  </svg>
);

export default Rocket;
