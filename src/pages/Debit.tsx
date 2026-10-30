import { useEffect } from "react";
import Header from "@/components/Header";
import DebitCardItem from "@/components/DebitCardItem";
import Footer from "@/components/Footer";
import { debitCards } from "@/data/debit";

const facts = [
  { v: "0 ₽", t: "Выпуск и обслуживание" },
  { v: "до 30%", t: "Кешбэк у партнёров" },
  { v: "до 13,5%", t: "На остаток по счёту" },
  { v: String(debitCards.length), t: "Банков на выбор" },
];

const Debit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground">
      <Header />

      <section className="px-5 pb-16 pt-16 md:px-[52px] md:pb-24 md:pt-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <h1 className="font-head text-[clamp(48px,8vw,120px)] font-black uppercase leading-[0.9] tracking-[-0.04em]">
            Дебетовые
            <br />
            <span className="text-primary">карты</span>
          </h1>
          <p className="max-w-[420px] border-l-2 border-border pl-6 text-[18px] leading-[1.45]">
            Кешбэк, бонусы и скидки у партнёров. Сравни карты разных банков и оформи бесплатную онлайн за пару минут.
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
          {debitCards.map((c, i) => (
            <DebitCardItem key={c.id} card={c} index={i} />
          ))}
        </div>

        <p className="mt-8 max-w-[900px] text-[13px] leading-[1.5] text-muted-foreground">
          Условия по картам носят справочный характер. Актуальные тарифы, размер кешбэка и ставки уточняйте на сайте банка. Реклама.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Debit;