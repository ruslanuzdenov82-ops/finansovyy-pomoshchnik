import { toast } from "sonner";

type Props = {
  href?: string;
  label?: string;
  className?: string;
};

const base =
  "flex h-[52px] items-center justify-between bg-primary px-5 text-[17px] font-medium text-primary-foreground transition-all hover:bg-secondary active:translate-y-[2px]";

const OfferButton = ({ href, label = "Оформить", className = "" }: Props) => {
  const content = (
    <>
      {label}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer sponsored" className={`${base} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => toast("Временно недоступно", { description: "Оформление скоро появится. Загляните позже." })}
      className={`${base} ${className}`}
    >
      {content}
    </button>
  );
};

export default OfferButton;
