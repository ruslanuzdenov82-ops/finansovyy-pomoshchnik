import { useEffect } from "react";
import Header from "@/components/Header";
import RegCard from "@/components/RegCard";
import Rocket from "@/components/Rocket";
import Footer from "@/components/Footer";
import { regOffers } from "@/data/registration";

const steps = [
  { n: "01", t: "Выбери банк", d: "Сравни условия и нажми «Зарегистрировать»" },
  { n: "02", t: "Заполни заявку", d: "Банк подготовит документы за тебя" },
  { n: "03", t: "Подпиши", d: "Онлайн, в офисе или с менеджером" },
  { n: "04", t: "Получи ИП/ООО", d: "Через 3 рабочих дня — со счётом" },
];

const Registration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground">
      <Header />

      <section className="relative overflow-hidden px-5 pb-16 pt-16 md:px-[52px] md:pb-24 md:pt-24">
        <Rocket className="top-[120px] md:top-[200px]" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <h1 className="font-head text-[clamp(48px,8vw,120px)] font-black uppercase leading-[0.9] tracking-[-0.04em]">
            Регистрация
            <br />
            <span className="text-primary">ИП и ООО</span>
          </h1>
          <p className="max-w-[420px] border-l-2 border-border pl-6 text-[18px] leading-[1.45]">
            Банки бесплатно подготовят документы и отправят их в налоговую. Без госпошлины и походов в ФНС — а счёт откроется сразу.
          </p>
        </div>

        <ol className="relative z-10 mt-12 grid border-2 border-border bg-background sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="border-b-2 border-border p-6 last:border-b-0 sm:[&:nth-child(odd)]:border-r-2 lg:border-b-0 lg:border-r-2 lg:last:border-r-0">
              <span className="font-head text-[32px] font-black text-primary">{s.n}</span>
              <p className="mt-2 text-[18px] font-medium">{s.t}</p>
              <p className="mt-1 text-[14px] text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>

        <div className="relative z-10 mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {regOffers.map((o, i) => (
            <RegCard key={o.id} offer={o} index={i} />
          ))}
        </div>

        <p className="relative z-10 mt-8 text-[14px] text-muted-foreground">
          Регистрация бесплатна при подаче документов через банк. Перед оформлением уточняйте детали на сайте банка.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Registration;