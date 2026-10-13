import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";
import { reviews } from "@/data/reviews";

const INTERVAL = 6000;

const Reviews = () => {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const r = reviews[i];
  const go = (d: number) => setI((v) => (v + d + reviews.length) % reviews.length);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), INTERVAL);
    return () => clearTimeout(t);
  }, [i, paused]);

  useEffect(() => {
    const list = listRef.current;
    const item = list?.children[i] as HTMLElement | undefined;
    if (!list || !item) return;
    list.scrollTo({ top: item.offsetTop - list.clientHeight / 2 + item.clientHeight / 2, behavior: "smooth" });
  }, [i]);

  return (
    <section id="reviews" className="scroll-mt-4 border-t-2 border-foreground px-5 py-16 md:px-[52px] md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-head text-[clamp(48px,8vw,120px)] font-black uppercase leading-[0.9] tracking-[-0.04em]">
          Что
          <br />
          говорят
        </h2>
        <div className="flex items-center gap-4">
          <span className="font-head text-[20px] font-black">
            {String(i + 1).padStart(2, "0")} / {reviews.length}
          </span>
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
      </div>

      <div
        className="mt-12 grid border-2 border-foreground lg:grid-cols-[1.6fr_1fr]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex flex-col">
          <div className="h-[4px] w-full bg-muted">
            <div
              key={`${i}-${paused}`}
              className="h-full bg-primary"
              style={{
                animation: paused ? "none" : `review-progress ${INTERVAL}ms linear forwards`,
                width: paused ? "0%" : undefined,
              }}
            />
          </div>
          <figure key={i} className="animate-fade-in flex-1 p-6 md:p-12">
            <span className="font-head text-[96px] font-black leading-[0.6]">“</span>
            <blockquote className="mt-4 text-[clamp(22px,2.6vw,34px)] font-medium leading-[1.3] tracking-[-0.01em]">
              {r.text}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-primary font-head text-[22px] font-black text-primary-foreground">
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
        </div>

        <ul
          ref={listRef}
          className="relative max-h-[260px] overflow-y-auto border-t-2 border-foreground lg:max-h-[520px] lg:border-l-2 lg:border-t-0"
        >
          {reviews.map((rv, k) => (
            <li key={k}>
              <button
                onClick={() => setI(k)}
                className={`flex w-full items-center justify-between gap-4 border-b-2 border-foreground px-6 py-4 text-left transition-colors ${
                  k === i ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                <span>
                  <span className="block text-[16px] font-medium">{rv.name}</span>
                  <span className={`block text-[13px] ${k === i ? "opacity-80" : "text-muted-foreground"}`}>
                    {rv.role}
                  </span>
                </span>
                <span className="font-head text-[18px] font-black">{String(k + 1).padStart(2, "0")}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <style>{`@keyframes review-progress { from { width: 0% } to { width: 100% } }`}</style>
    </section>
  );
};

export default Reviews;
