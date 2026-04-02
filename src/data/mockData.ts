import { IMAGE_PLACEHOLDER } from "@/utils";
import logo from "@/assets/icons/logo.svg";
import rightIcon from "@/assets/icons/right.svg";

export const FIGMA_IMAGES = {
  bgHero: IMAGE_PLACEHOLDER + "bg.webp",
  logo,
  rightIcon,
} as const;

export const TABS = ["OC", "DRAWING", "COMICS", "VIDEO"] as const;

export type TabName = (typeof TABS)[number];
