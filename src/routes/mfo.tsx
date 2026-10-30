import { createFileRoute } from "@tanstack/react-router";
import Mfo from "@/pages/Mfo";

const TITLE = "Займы в МФО онлайн — Твой помощник в финансах";

export const Route = createFileRoute("/mfo")({
  head: () => ({
    meta: [{ title: TITLE }, { property: "og:title", content: TITLE }],
  }),
  component: Mfo,
});
