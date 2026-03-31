export const languages = ["en", "ja", "ko", "zh-TW"] as const;
export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "en";

export const languageNames: Record<Language, string> = {
  en: "English",
  ja: "日本語",
  ko: "한국어",
  "zh-TW": "繁體中文",
};
