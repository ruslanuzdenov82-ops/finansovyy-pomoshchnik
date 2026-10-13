import { useState } from "react";
import Icon from "@/components/ui/icon";

const links = [
  { href: "/#banks", label: "Банки РКО" },
  { href: "/registration", label: "Регистрация ИП/ООО" },
  { href: "/#reviews", label: "Отзывы" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 flex items-start px-5 pt-6 md:px-[52px] md:pt-8">
      <a
        href="/"
        className="w-auto font-body text-[24px] font-medium leading-[0.95] tracking-[-0.04em] md:w-[270px] md:text-[34px]"
      >
        Твой помощник
        <br />в финансах
      </a>
      <p className="hidden w-[330px] border-l-2 border-border pl-[26px] text-[18px] font-medium leading-[1.45] lg:block">
        Все банки для бизнеса на одной странице. Сравни РКО и регистрацию бизнеса ИП/ООО — открой счёт за минуту.
      </p>
      <nav className="ml-auto hidden gap-8 lg:gap-12 text-[18px] font-medium md:flex">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="story-link relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all hover:after:w-full">
            {l.label}
          </a>
        ))}
      </nav>
      <button
        aria-label="Меню"
        onClick={() => setOpen((v) => !v)}
        className="ml-auto flex h-11 w-11 items-center justify-center border-2 border-border md:hidden"
      >
        <Icon name={open ? "X" : "Menu"} size={22} />
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full mt-3 animate-fade-in border-y-2 border-border bg-background md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b-2 border-border px-5 py-4 font-head text-2xl font-black uppercase last:border-b-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
