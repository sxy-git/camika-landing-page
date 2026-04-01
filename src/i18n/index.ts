import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ja from "./locales/ja.json";
import ko from "./locales/ko.json";
import zhTW from "./locales/zh-TW.json";
import { defaultLanguage, languages, type Language } from "./config";

const resources = {
  en: { translation: en },
  ja: { translation: ja },
  ko: { translation: ko },
  "zh-TW": { translation: zhTW },
};

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return defaultLanguage;

  const saved = localStorage.getItem("language");
  if (saved && languages.includes(saved as Language)) {
    return saved as Language;
  }

  const browserLang = navigator.language;
  if (languages.includes(browserLang as Language)) {
    return browserLang as Language;
  }

  if (browserLang.startsWith("zh")) {
    return "zh-TW";
  }

  const shortLang = browserLang.split("-")[0];
  const matched = languages.find((l) => l.startsWith(shortLang));
  return matched || defaultLanguage;
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
