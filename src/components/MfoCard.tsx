import { useState } from "react";
import Icon from "@/components/ui/icon";
import OfferButton from "@/components/OfferButton";
import type { MfoOffer } from "@/data/mfo";

type Props = { offer: MfoOffer; index: number };

const MfoCard = ({ offer, index }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <article
      className="group flex animate-fade-in flex-col border-2 border-border bg-card p-6 transition-colors hover:bg-muted"
      style={{ animationDelay: `${(index % 6) * 60}ms` }}
    >
      <div className="flex h-[88px] items-center justify-center border border-border bg-white p-3">
        <img src={offer.logo} alt={offer.name} loading="lazy" className="max-h-full max-w-full object-contain" />
      </div>

      <h3 className="mt-5 font-head text-[24px] font-black uppercase leading-none tracking-[-0.02em]">{offer.name}</h3>

      <ul className="mt-4 space-y-2">
        {offer.benefits.map((b) => (
          <li key={b} className="flex items-start gap-2 text-[15px]">
            <Icon name="Check" size={16} className="mt-[3px] shrink-0 text-primary" />
            {b}
          </li>
        ))}
      </ul>

      {open && (
        <div className="mt-4 animate-fade-in border-t-2 border-border pt-3 text-[13px] leading-[1.5] text-muted-foreground">
          <p className="font-medium text-foreground">{offer.legalName}</p>
          {offer.ogrn && <p>ОГРН {offer.ogrn}</p>}
          {offer.inn && <p>ИНН {offer.inn}</p>}
          {offer.address && <p>{offer.address}</p>}
        </div>
      )}

      <div className="mt-auto grid grid-cols-[auto_1fr] gap-2 pt-6">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Информация о компании"
          className="flex h-[52px] w-[52px] items-center justify-center border-2 border-border transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <Icon name={open ? "Minus" : "Info"} size={20} />
        </button>
        <OfferButton href={offer.href} />
      </div>
    </article>
  );
};

export default MfoCard;