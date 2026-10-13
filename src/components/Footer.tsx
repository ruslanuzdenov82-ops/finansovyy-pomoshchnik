const Footer = () => {
  return (
    <footer className="bg-foreground px-5 pb-8 pt-16 text-background md:px-[52px]">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-head text-[clamp(40px,7vw,96px)] font-black uppercase leading-[0.9] tracking-[-0.04em]">
            Счёт — за минуту
          </p>
          <a
            href="/#banks"
            className="mt-8 inline-block bg-primary px-[30px] py-4 text-[18px] font-medium text-primary-foreground transition-colors hover:bg-secondary"
          >
            Выбрать банк →
          </a>
        </div>
        <nav className="flex flex-wrap gap-x-10 gap-y-3 text-[18px] font-medium">
          <a href="/#top" className="hover:opacity-80">Наверх</a>
          <a href="/#banks" className="hover:opacity-80">Банки</a>
          <a href="/#reviews" className="hover:opacity-80">Отзывы</a>
          <a href="/registration" className="hover:opacity-80">Регистрация ИП/ООО</a>
        </nav>
      </div>
      <div className="mt-16 flex flex-col justify-between gap-2 border-t border-background/20 pt-6 text-[14px] md:flex-row">
        <span>© {new Date().getFullYear()} Твой помощник в финансах</span>
        <span className="opacity-80">Информация о тарифах носит справочный характер</span>
      </div>
    </footer>
  );
};

export default Footer;
