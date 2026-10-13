const Footer = () => {
  return (
    <footer className="border-t-2 border-foreground bg-primary px-5 pb-8 pt-16 text-primary-foreground md:px-[52px]">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-head text-[clamp(40px,7vw,96px)] font-black uppercase leading-[0.9] tracking-[-0.04em]">
            Счёт — за минуту
          </p>
          <a
            href="#banks"
            className="mt-8 inline-block bg-primary-foreground px-[30px] py-4 text-[18px] font-medium text-primary transition-opacity hover:opacity-90"
          >
            Выбрать банк →
          </a>
        </div>
        <nav className="flex gap-10 text-[18px] font-medium">
          <a href="#top" className="hover:opacity-80">Наверх</a>
          <a href="#banks" className="hover:opacity-80">Банки</a>
          <a href="#reviews" className="hover:opacity-80">Отзывы</a>
        </nav>
      </div>
      <div className="mt-16 flex flex-col justify-between gap-2 border-t-2 border-primary-foreground pt-6 text-[14px] md:flex-row">
        <span>© {new Date().getFullYear()} Твой помощник в финансах</span>
        <span className="opacity-80">Информация о тарифах носит справочный характер</span>
      </div>
    </footer>
  );
};

export default Footer;
