import Icon from "@/components/ui/icon";
import type { DebitCard } from "@/data/debit";

type Props = { card: DebitCard; index: number };

const DebitCardItem = ({ card, index }: Props) => {
  const btnClass =
    "mt-auto flex h-[52px] items-center justify-between bg-primary px-5 text-[17px] font-medium text-primary-foreground transition-all hover:bg-secondary active:translate-y-[2px]";

  return (
    <article
      className="group relative flex animate-fade-in flex-col border-2 border-border bg-card p-6 transition-colors hover:bg-muted"
      style={{ animationDelay: `${(index % 6) * 60}ms` }}
    >
      {card.badge && (
        <span className="absolute right-6 top-6 bg-foreground px-3 py-1 text-[12px] font-medium uppercase tracking-[0.04em] text-background">
          {card.badge}
        </span>
      )}

      <div className="flex items-center gap-4">
        <img
          src={card.logo}
          alt={card.bank}
          loading="lazy"
          className="h-14 w-14 shrink-0 rounded-xl border border-border bg-white object-contain p-1"
        />
        <div className="min-w-0 pr-24">
          <p className="text-[14px] text-muted-foreground">{card.bank}</p>
          <h3 className="font-head text-[22px] font-black uppercase leading-none tracking-[-0.02em]">{card.title}</h3>
        </div>
      </div>

      <ul className="mb-6 mt-6 space-y-3">
        {card.benefits.map((b) => (
          <li key={b} className="flex items-start gap-2 text-[15px] leading-[1.4]">
            <Icon name="Gift" size={16} className="mt-[3px] shrink-0 text-primary" />
            {b}
          </li>
        ))}
      </ul>

      {card.href ? (
        <a href={card.href} target="_blank" rel="noopener noreferrer sponsored" className={btnClass}>
          Оформить
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      ) : (
        <button type="button" className={btnClass}>
          Оформить
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      )}
    </article>
  );
};

export default DebitCardItem;
