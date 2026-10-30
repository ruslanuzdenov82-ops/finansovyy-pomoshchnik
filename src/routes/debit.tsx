import { createFileRoute } from "@tanstack/react-router";
import Debit from "@/pages/Debit";

const TITLE = "Дебетовые карты с кешбэком — Твой помощник в финансах";

export const Route = createFileRoute("/debit")({
  head: () => ({
    meta: [{ title: TITLE }, { property: "og:title", content: TITLE }],
  }),
  component: Debit,
});
