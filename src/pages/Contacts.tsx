import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const contacts = [
  {
    icon: "Send",
    label: "Telegram",
    value: "@financ_rko",
    href: "https://t.me/financ_rko",
    note: "Быстрее всего ответим здесь",
  },
  {
    icon: "Mail",
    label: "Почта",
    value: "financ_rko@mail.ru",
    href: "mailto:financ_rko@mail.ru",
    note: "Для писем и предложений о сотрудничестве",
  },
];

const Contacts = () => {
  useEffect(() => {
    document.title = "Контакты — Твой помощник в финансах";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground">
      <Header />

      <section className="px-5 pb-20 pt-16 md:px-[52px] md:pb-28 md:pt-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <h1 className="font-head text-[clamp(48px,8vw,120px)] font-black uppercase leading-[0.9] tracking-[-0.04em]">
            Конт<span className="text-primary">акты</span>
          </h1>
          <p className="max-w-[420px] border-l-2 border-border pl-6 text-[18px] leading-[1.45]">
            Поможем выбрать банк для РКО или регистрации ИП/ООО. Пишите — ответим и подскажем лучший вариант.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex animate-fade-in flex-col border-2 border-border bg-card p-8 transition-colors hover:bg-muted"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground">
                  <Icon name={c.icon} size={26} />
                </span>
                <span className="text-[28px] transition-transform group-hover:translate-x-1">→</span>
              </div>
              <p className="mt-8 text-[14px] uppercase tracking-[0.04em] text-muted-foreground">{c.label}</p>
              <p className="mt-2 break-all font-head text-[clamp(24px,3vw,40px)] font-black leading-none tracking-[-0.02em] group-hover:text-primary">
                {c.value}
              </p>
              <p className="mt-4 text-[15px] text-muted-foreground">{c.note}</p>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
