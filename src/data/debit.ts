export type DebitCard = {
  id: string;
  bank: string;
  title: string;
  logo: string;
  badge?: string;
  benefits: string[];
  href: string;
};

export const debitCards: DebitCard[] = [
  {
    id: "alfa",
    bank: "Альфа-Банк",
    title: "Альфа-Карта",
    logo: "/logos/alfa.png",
    badge: "Без условий",
    benefits: [
      "Бесплатная карта без условий и мелкого шрифта",
      "До 7% кешбэка в Пятёрочке и Перекрёстке",
      "Бесплатные переводы по номеру телефона",
    ],
    href: "",
  },
  {
    id: "tbank",
    bank: "Т-Банк",
    title: "Black МИР",
    logo: "/logos/tbank.png",
    badge: "Кешбэк до 30%",
    benefits: [
      "Кешбэк рублями до 30% по спецпредложениям партнёров",
      "4 любимые категории каждый месяц с кешбэком до 15%",
      "Круглосуточная поддержка",
    ],
    href: "https://go.leadgid.ru/aff_c?aff_id=155564&offer_id=4001&p=adnetwork",
  },
  {
    id: "vtb",
    bank: "ВТБ",
    title: "Дебетовая карта МИР",
    logo: "/logos/vtb.png",
    benefits: [
      "Кешбэк рублями за покупки до 3 000 ₽",
      "Ставка по накопительному счёту до 13,5%",
      "Выпуск и обслуживание бесплатно",
    ],
    href: "https://go.leadgid.ru/aff_c?aff_id=155564&offer_id=5006&p=adnetwork",
  },
  {
    id: "vtb-sticker",
    bank: "ВТБ",
    title: "Платёжный стикер",
    logo: "/logos/vtb.png",
    badge: "Новинка",
    benefits: [
      "Оплата покупок в одно касание — без карты и телефона",
      "Кешбэк рублями как по обычной карте",
      "Выпуск и обслуживание бесплатно",
    ],
    href: "https://go.leadgid.ru/aff_c?aff_id=155564&offer_id=6773&p=adnetwork",
  },
  {
    id: "psb",
    bank: "ПСБ",
    title: "Дебетовая карта",
    logo: "/logos/psb.png",
    badge: "25% кешбэк",
    benefits: [
      "Приветственный кешбэк 25% на все покупки",
      "Бесплатное обслуживание навсегда и без условий",
      "Возврат кешбэка до 3 000 ₽ в месяц",
    ],
    href: "",
  },
  {
    id: "otp",
    bank: "ОТП Банк",
    title: "Дебетовая карта",
    logo: "/logos/otp.png",
    benefits: [
      "До 10% кешбэка в топовых категориях",
      "Ежедневный доход с накопительным счётом",
      "Бесплатные выпуск и обслуживание карты",
    ],
    href: "https://go.leadgid.ru/aff_c?aff_id=155564&offer_id=6626&p=adnetwork",
  },
  {
    id: "ozon",
    bank: "Озон Банк",
    title: "Ozon Карта",
    logo: "/logos/ozon.png",
    badge: "Скидки на Ozon",
    benefits: [
      "Скидки и повышенные баллы на покупки в Ozon",
      "Бесплатный выпуск и обслуживание",
      "Процент на остаток по счёту",
    ],
    href: "https://go.leadgid.ru/aff_c?aff_id=155564&offer_id=7260&p=adnetwork",
  },
  {
    id: "mts",
    bank: "МТС Деньги",
    title: "МТС Деньги",
    logo: "/logos/mts.png",
    benefits: [
      "Кешбэк до 5% в выбранных категориях",
      "Бонусы и скидки у партнёров экосистемы МТС",
      "Бесплатное обслуживание карты",
    ],
    href: "https://go.leadgid.ru/aff_c?aff_id=155564&offer_id=6766&p=adnetwork",
  },
  {
    id: "ubrr",
    bank: "УБРиР",
    title: "Дебетовая карта",
    logo: "/logos/ubrr.png",
    benefits: [
      "Кешбэк рублями за покупки",
      "Бесплатное обслуживание карты",
      "Процент на остаток с накопительным счётом",
    ],
    href: "https://go.leadgid.ru/aff_c?aff_id=155564&offer_id=7481&p=adnetwork",
  },
  {
    id: "renessans",
    bank: "Ренессанс Банк",
    title: "Дебетовая карта",
    logo: "/logos/renessans.png",
    benefits: [
      "Кешбэк в популярных категориях",
      "Доход на остаток по накопительному счёту",
      "Бесплатный выпуск карты",
    ],
    href: "https://go.leadgid.ru/aff_c?aff_id=155564&offer_id=7486&p=adnetwork",
  },
  {
    id: "akbars",
    bank: "Ак Барс Банк",
    title: "Дебетовая карта",
    logo: "/logos/akbars.png",
    benefits: [
      "Кешбэк и бонусы у партнёров банка",
      "Бесплатное обслуживание карты",
      "Переводы по СБП без комиссии",
    ],
    href: "https://go.leadgid.ru/aff_c?aff_id=155564&offer_id=6335&p=adnetwork",
  },
  {
    id: "fora",
    bank: "Фора-Банк",
    title: "Дебетовая карта",
    logo: "/logos/fora.png",
    benefits: [
      "Процент на остаток по карте",
      "Кешбэк за покупки",
      "Бесплатные переводы по СБП",
    ],
    href: "https://go.leadgid.ru/aff_c?aff_id=155564&offer_id=6236&p=adnetwork",
  },
];
