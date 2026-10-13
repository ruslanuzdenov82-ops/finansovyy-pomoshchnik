import { useState } from "react";
import Icon from "@/components/ui/icon";
import type { Bank } from "@/data/banks";

type Props = { bank: Bank; index: number };

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-baseline justify-between gap-4 border-t-2 border-foreground py-3">
    <dt className="text-[14px] text-muted-foreground">{label}</dt>
    <dd className="text-right text-[15px] font-medium">{value}</dd>
  </div>
);

const BankCard = ({ bank, index }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <article
      className="group flex animate-fade-in flex-col border-2 border-foreground bg-background p-6 transition-colors hover:bg-muted"
      style={{ animationDelay: `${(index % 6) * 60}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-primary font-head text-[20px] font-black text-primary-foreground">
            {bank.short}
          </div>
          <div>
            <h3 className="font-head text-[24px] font-black uppercase leading-none tracking-[-0.02em]">
              {bank.name}
            </h3>
            <p className="mt-1 text-[14px] text-muted-foreground">Тариф «{bank.tariff}»</p>
          </div>
        </div>
        {bank.tag && (
          <span className="shrink-0 border-2 border-foreground px-2 py-1 text-[12px] font-medium uppercase">
            {bank.tag}
          </span>
        )}
      </div>

      <div className="mt-6 flex items-end gap-2">
        <span className="font-head text-[56px] font-black leading-none tracking-[-0.04em]">
          {bank.price === 0 ? "0 ₽" : `${bank.price} ₽`}
        </span>
        <span className="mb-2 text-[14px] text-muted-foreground">/ мес</span>
      </div>

      <dl className="mt-5">
        <Row label="Бесплатно" value={bank.freePeriod} />
        <Row label="Платежи" value={bank.payments} />
        <Row label="Снятие наличных" value={bank.cash} />
      </dl>

      {open && (
        <ul className="animate-fade-in border-t-2 border-foreground pt-3">
          {bank.details.map((d) => (
            <li key={d} className="flex items-center gap-2 py-1 text-[15px]">
              <Icon name="Check" size={16} />
              {d}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto grid grid-cols-[auto_1fr] gap-2 pt-6">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex h-[52px] w-[52px] items-center justify-center border-2 border-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label="Подробнее"
        >
          <Icon name={open ? "Minus" : "Plus"} size={20} />
        </button>
        <a
          href={bank.href || undefined}
          role="button"
          tabIndex={0}
          target={bank.href ? "_blank" : undefined}
          rel="noreferrer"
          className="flex h-[52px] cursor-pointer items-center justify-between bg-primary px-5 text-[17px] font-medium text-primary-foreground transition-all hover:bg-secondary active:translate-y-[2px]"
        >
          Оформить
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </article>
  );
};

export default BankCard;
