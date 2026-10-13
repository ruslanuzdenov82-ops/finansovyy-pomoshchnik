import { useState } from "react";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Андрей",
    role: "ИП, автосервис, Казань",
    text: "Увидел сайт, удобно выстроены все банки, выбрал подходящий и оформил. Минут десять от силы.",
    bank: "Точка",
  },
  {
    name: "Марина",
    role: "Кондитерская на заказ",
    text: "Открывала ИП и вообще не понимала, куда идти. Тут сразу видно, где сколько стоит обслуживание и что с наличкой. Взяла с нулевым тарифом, пока хватает.",
    bank: "Сбербанк",
  },
  {
    name: "Денис К.",
    role: "ООО, грузоперевозки",
    text: "Раньше сидел с пятью вкладками и табличкой в экселе. Здесь всё на одной странице, честно сэкономил вечер.",
    bank: "Альфа-Банк",
  },
  {
    name: "Ольга",
    role: "Фотограф, самозанятая → ИП",
    text: "Понравилось, что без лишнего. Посмотрела комиссии за платежи, у меня их много — выбрала где без комиссии.",
    bank: "Т-Банк",
  },
  {
    name: "Тимур",
    role: "Интернет-магазин",
    text: "Друг скинул ссылку. Отфильтровал по 0 рублей в месяц, сравнил три карточки и оформил. Всё.",
    bank: "Модульбанк",
  },
  {
    name: "Светлана Игоревна",
    role: "Бухгалтер на аутсорсе",
    text: "Теперь кидаю эту страницу всем новым клиентам, когда спрашивают, где открыть счёт. Удобно, что условия свежие.",
    bank: "ВТБ",
  },
];

const Reviews = () => {
  const [i, setI] = useState(0);
  const r = reviews[i];
  const go = (d: number) => setI((v) => (v + d + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="scroll-mt-4 border-t-2 border-foreground px-5 py-16 md:px-[52px] md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-head text-[clamp(48px,8vw,120px)] font-black uppercase leading-[0.9] tracking-[-0.04em]">
          Что
          <br />
          говорят
        </h2>
        <div className="flex">
          <button
            onClick={() => go(-1)}
            aria-label="Предыдущий отзыв"
            className="flex h-14 w-14 items-center justify-center border-2 border-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Icon name="ArrowLeft" size={22} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Следующий отзыв"
            className="-ml-[2px] flex h-14 w-14 items-center justify-center border-2 border-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Icon name="ArrowRight" size={22} />
          </button>
        </div>
      </div>

      <div className="mt-12 grid border-2 border-foreground lg:grid-cols-[1.6fr_1fr]">
        <figure key={i} className="animate-fade-in p-6 md:p-12">
          <span className="font-head text-[96px] font-black leading-[0.6]">“</span>
          <blockquote className="mt-4 text-[clamp(22px,2.6vw,34px)] font-medium leading-[1.3] tracking-[-0.01em]">
            {r.text}
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center bg-primary font-head text-[22px] font-black text-primary-foreground">
              {r.name[0]}
            </div>
            <div>
              <p className="text-[18px] font-medium">{r.name}</p>
              <p className="text-[14px] text-muted-foreground">
                {r.role} · открыл(а) счёт в «{r.bank}»
              </p>
            </div>
          </figcaption>
        </figure>

        <ul className="border-t-2 border-foreground lg:border-l-2 lg:border-t-0">
          {reviews.map((rv, k) => (
            <li key={rv.name}>
              <button
                onClick={() => setI(k)}
                className={`flex w-full items-center justify-between gap-4 border-b-2 border-foreground px-6 py-4 text-left transition-colors last:border-b-0 ${
                  k === i ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                <span>
                  <span className="block text-[16px] font-medium">{rv.name}</span>
                  <span className={`block text-[13px] ${k === i ? "opacity-80" : "text-muted-foreground"}`}>
                    {rv.role}
                  </span>
                </span>
                <span className="font-head text-[18px] font-black">0{k + 1}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Reviews;
