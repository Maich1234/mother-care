import type { Route } from "./+types/home";
import HomePage  from "~/components/home/homepage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mother-Care | Pregnancy & Baby Care System" },
    {
      name: "description",
      content:
        "Mother-Care helps mothers from the first day of pregnancy until the baby turns one year old. Track pregnancy progress, baby growth, health reminders, appointments, and maternal care in one platform.",
    },
    {
      name: "keywords",
      content:
        "Mother Care, pregnancy tracker, maternal health, baby care, antenatal care, motherhood app, baby milestones, Kenya maternal system",
    },
    { name: "theme-color", content: "#050816" },

    // Open Graph
    {
      property: "og:title",
      content: "Mother-Care | Pregnancy & Baby Care System",
    },
    {
      property: "og:description",
      content:
        "Supporting mothers from pregnancy to the baby's first birthday.",
    },
    { property: "og:type", content: "website" },

    // Twitter
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Mother-Care",
    },
    {
      name: "twitter:description",
      content:
        "A smart maternal and baby care system for mothers and caregivers.",
    },
  ];
}

export default function Home() {
  return <HomePage />;
}
