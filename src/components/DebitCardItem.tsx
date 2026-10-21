import Icon from "@/components/ui/icon";
import OfferButton from "@/components/OfferButton";
import type { DebitCard } from "@/data/debit";

type Props = { card: DebitCard; index: number };

const DebitCardItem = ({ card, index }: Props) => {
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

      <OfferButton href={card.href} className="mt-auto" />
    </article>
  );
};

export default DebitCardItem;