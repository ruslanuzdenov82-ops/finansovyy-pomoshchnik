import Header from "@/components/Header";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative grid h-[100svh] max-h-[900px] min-h-[620px] grid-rows-[auto_1fr_auto] overflow-hidden md:h-[800px]"
    >
      <Header />

      <div className="relative flex flex-col justify-center overflow-hidden">
        <h1 className="hero-run text-primary ml-[-20px] whitespace-nowrap font-head text-[clamp(96px,16.25vw,208px)] font-black uppercase leading-[1.05] tracking-[-0.03em] md:ml-[-60px]">
          Счёт для бизнеса · Сбер · Т-Банк · Точка · Альфа
        </h1>
        <p className="absolute bottom-[78px] left-5 max-w-[260px] text-[16px] font-medium md:bottom-[18px] md:left-[52px] md:max-w-none md:text-[18px]">
          Актуальные условия РКО. Оформление в один клик.
        </p>
        <a
          href="#banks"
          className="absolute bottom-[10px] left-5 bg-primary px-[30px] py-4 text-[18px] font-medium text-primary-foreground transition-colors hover:bg-secondary md:left-auto md:right-[52px]"
        >
          Выбрать банк →
        </a>
      </div>

      <svg
        className="block h-[140px] w-full text-primary/80 md:h-[210px]"
        viewBox="50 0 1170 210"
        preserveAspectRatio="none"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <g fill="currentColor">
          <rect x="60" y="120" width="70" height="90" />
          <rect x="140" y="80" width="70" height="130" />
          <rect x="220" y="140" width="70" height="70" />
          <rect x="430" y="60" width="70" height="150" />
          <rect x="510" y="110" width="70" height="100" />
          <rect x="760" y="30" width="70" height="180" />
          <rect x="840" y="90" width="70" height="120" />
          <rect x="1060" y="70" width="70" height="140" />
          <rect x="1140" y="130" width="70" height="80" />
        </g>
        <g>
          <rect x="300" y="100" width="70" height="110" />
          <rect x="590" y="140" width="70" height="70" />
          <rect x="670" y="80" width="70" height="130" />
          <rect x="920" y="50" width="70" height="160" />
          <rect x="1000" y="120" width="50" height="90" />
          <path d="M0 209H1280" />
          <path d="M60 40 L130 90 L210 20 L290 100 L360 60 L500 30 L580 70 L740 50 L830 10 L1000 30 L1130 40 L1220 90" />
        </g>
        <g fill="currentColor">
          <circle cx="130" cy="90" r="6" />
          <circle cx="500" cy="30" r="6" />
          <circle cx="830" cy="10" r="6" />
          <circle cx="1210" cy="84" r="6" />
        </g>
      </svg>
    </section>
  );
};

export default Hero;