import { createFileRoute } from "@tanstack/react-router";
import Contacts from "@/pages/Contacts";

const TITLE = "Контакты — Твой помощник в финансах";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [{ title: TITLE }, { property: "og:title", content: TITLE }],
  }),
  component: Contacts,
});
