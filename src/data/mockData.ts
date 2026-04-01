import { IMAGE_PLACEHOLDER } from "@/utils";

export const FIGMA_IMAGES = {
  bgHero: IMAGE_PLACEHOLDER + "bg.webp",
  logo: "/icons/logo.svg",
  rightIcon: "/icons/right.svg",
} as const;

export const TABS = ["OC", "DRAWING", "COMICS", "VIDEO"] as const;

export type TabName = (typeof TABS)[number];
