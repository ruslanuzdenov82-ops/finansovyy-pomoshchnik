import { useEffect } from "react";
import Header from "@/components/Header";
import MfoCard from "@/components/MfoCard";
import Footer from "@/components/Footer";
import { mfoOffers } from "@/data/mfo";

const facts = [
  { v: "0%", t: "Первый заём у многих МФО" },
  { v: "15 мин", t: "Решение и деньги на карту" },
  { v: "24/7", t: "Заявки круглосуточно" },
  { v: String(mfoOffers.length), t: "Проверенных организаций" },
];

const Mfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground">
      <Header />

      <section className="px-5 pb-16 pt-16 md:px-[52px] md:pb-24 md:pt-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <h1 className="font-head text-[clamp(48px,8vw,120px)] font-black uppercase leading-[0.9] tracking-[-0.04em]">
            Займы
            <br />
            <span className="text-primary">в МФО</span>
          </h1>
          <p className="max-w-[420px] border-l-2 border-border pl-6 text-[18px] leading-[1.45]">
            Микрофинансовые организации из реестра Банка России. Сравни условия и оформи заём онлайн на карту за несколько минут.
          </p>
        </div>

        <ul className="mt-12 grid border-2 border-border sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <li key={f.t} className="border-b-2 border-border p-6 last:border-b-0 sm:[&:nth-child(odd)]:border-r-2 lg:border-b-0 lg:border-r-2 lg:last:border-r-0">
              <span className="font-head text-[40px] font-black leading-none text-primary">{f.v}</span>
              <p className="mt-2 text-[15px] text-muted-foreground">{f.t}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mfoOffers.map((o, i) => (
            <MfoCard key={o.id} offer={o} index={i} />
          ))}
        </div>

        <p className="mt-8 max-w-[900px] text-[13px] leading-[1.5] text-muted-foreground">
          Займы предоставляются микрофинансовыми организациями. Полная стоимость займа и условия указаны на сайте организации. Оценивайте свои финансовые возможности и риски. Реклама.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Mfo;