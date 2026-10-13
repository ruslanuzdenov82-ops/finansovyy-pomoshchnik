import { useMemo, useState } from "react";
import Icon from "@/components/ui/icon";
import BankCard from "@/components/BankCard";
import Rocket from "@/components/Rocket";
import { banks } from "@/data/banks";

const filters = [
  { id: "all", label: "Все" },
  { id: "free", label: "0 ₽ в месяц" },
  { id: "trial", label: "С бесплатным периодом" },
] as const;

const sorts = [
  { id: "default", label: "По популярности" },
  { id: "price", label: "Сначала дешёвые" },
] as const;

type FilterId = (typeof filters)[number]["id"];
type SortId = (typeof sorts)[number]["id"];

const Banks = () => {
  const [filter, setFilter] = useState<FilterId>("all");
  const [sort, setSort] = useState<SortId>("default");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    let res = banks.filter((b) => b.name.toLowerCase().includes(query.trim().toLowerCase()));
    if (filter === "free") res = res.filter((b) => b.price === 0);
    if (filter === "trial") res = res.filter((b) => b.price > 0 && b.freeMonths > 0);
    if (sort === "price") res = [...res].sort((a, b) => a.price - b.price);
    return res;
  }, [filter, sort, query]);

  return (
    <section id="banks" className="scroll-mt-4 border-t-2 border-border">
      <div className="overflow-hidden bg-foreground py-3 text-background">
        <div className="marquee flex w-max whitespace-nowrap font-head text-[22px] font-black uppercase tracking-[-0.01em]">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex">
              {banks.map((b) => (
                <span key={b.id} className="px-6">
                  {b.name} <span className="pl-6">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden px-5 py-16 md:px-[52px] md:py-24">
        <Rocket className="top-[110px] md:top-[200px]" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="font-head text-[clamp(48px,8vw,120px)] font-black uppercase leading-[0.9] tracking-[-0.04em]">
            Выбери
            <br />
            свой банк
          </h2>
          <p className="max-w-[420px] border-l-2 border-border pl-6 text-[18px] leading-[1.45]">
            Все карточки РКО в одном месте. Сравни стоимость, бесплатный период и комиссии — и оформи счёт там, где выгоднее именно тебе.
          </p>
        </div>

        <div className="relative z-10 mt-12 flex flex-col gap-4 bg-background border-y-2 border-border py-4 lg:flex-row lg:items-center">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`border-2 border-border px-4 py-2 text-[15px] font-medium transition-colors ${
                  filter === f.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-2 sm:flex-row lg:justify-end">
            <label className="flex items-center gap-2 border-2 border-border px-3">
              <Icon name="Search" size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Найти банк"
                className="h-10 w-full bg-transparent text-[15px] outline-none placeholder:text-muted-foreground sm:w-48"
              />
            </label>
            <div className="flex">
              {sorts.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSort(s.id)}
                  className={`border-2 border-border px-4 py-2 text-[15px] font-medium transition-colors [&+&]:-ml-[2px] ${
                    sort === s.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {list.length > 0 ? (
          <div className="relative z-10 mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {list.map((b, i) => (
              <BankCard key={b.id + filter + sort} bank={b} index={i} />
            ))}
          </div>
        ) : (
          <div className="mt-10 border-2 border-dashed border-border p-12 text-center">
            <p className="font-head text-[28px] font-black uppercase">Ничего не нашли</p>
            <button
              onClick={() => {
                setQuery("");
                setFilter("all");
              }}
              className="mt-4 bg-primary px-6 py-3 text-primary-foreground"
            >
              Сбросить фильтры
            </button>
          </div>
        )}

        <p className="mt-8 text-[14px] text-muted-foreground">
          Условия тарифов указаны для новых клиентов. Перед оформлением уточняйте детали на сайте банка.
        </p>
      </div>
    </section>
  );
};

export default Banks;