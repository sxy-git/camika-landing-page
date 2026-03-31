import { useTranslation } from "react-i18next";
import { RippleButton } from "../../components/common/RippleButton";
import { FIGMA_IMAGES } from "../../data/mockData";
import type { TabName } from "../../data/mockData";
import {
  defaultLanguage,
  languageNames,
  languages,
  type Language,
} from "../../i18n/config";
import { TabGroup } from "./TabGroup";

interface TabNavProps {
  activeTab: TabName; // 当前激活的 Tab
  onTabChange: (tab: TabName) => void; // Tab 切换回调函数
  onLoginClick?: () => void; // 登录按钮点击回调函数
}

/**
 * @description 顶部导航栏组件，包含 Logo、Tab 导航和登录按钮
 * @param activeTab - 当前激活的 Tab
 * @param onTabChange - Tab 切换回调函数
 * @param onLoginClick - 登录按钮点击回调函数
 * @returns 顶部导航栏 React 组件
 */
export function TabNav({ activeTab, onTabChange, onLoginClick }: TabNavProps) {
  const { i18n, t } = useTranslation();
  const currentLang = languages.includes(i18n.language as Language)
    ? (i18n.language as Language)
    : defaultLanguage;

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lng = e.target.value as Language;
    if (!languages.includes(lng)) return;
    void i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <header className="w-full h-30 bg-[#111] shadow-[0_0.375rem_0_0_rgba(68,27,28,1)] flex items-center justify-between px-10 gap-10">
      <div className="w-60 h-14 shrink-0 flex items-center">
        <img
          src={FIGMA_IMAGES.logo}
          alt="Camika"
          className="w-full h-full object-contain brightness-0 invert"
        />
      </div>

      <TabGroup
        tabs={["OC", "DRAWING", "COMICS", "VIDEO"]}
        activeTab={activeTab}
        onTabChange={onTabChange}
      />

      <div className="flex shrink-0 items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-neutral-400">
          <span className="whitespace-nowrap">调试</span>
          <select
            aria-label="多语言调试"
            value={currentLang}
            onChange={handleLanguageChange}
            className="h-11 min-w-38 cursor-pointer rounded-md border border-neutral-600 bg-[#1a1a1a] px-2.5 text-sm text-white outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
          >
            {languages.map((code) => (
              <option key={code} value={code}>
                {languageNames[code]}
              </option>
            ))}
          </select>
        </label>
        <RippleButton
          variant="login"
          onClick={onLoginClick}
          className="w-60 h-17 truncate cursor-pointer"
        >
          {t("login")}
        </RippleButton>
      </div>
    </header>
  );
}
