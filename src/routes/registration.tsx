import { createFileRoute } from "@tanstack/react-router";
import Registration from "@/pages/Registration";

const TITLE = "Регистрация ИП и ООО бесплатно — Твой помощник в финансах";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [{ title: TITLE }, { property: "og:title", content: TITLE }],
  }),
  component: Registration,
});
