import { useTranslation } from "react-i18next";
import { RippleButton } from "../../components/common/RippleButton";
import { FIGMA_IMAGES } from "../../data/mockData";
import type { TabName } from "../../data/mockData";

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
  const { t } = useTranslation();

  return (
    <header className="w-full shrink-0 h-30 bg-[#111] shadow-[0_0.375rem_0_0_rgba(68,27,28,1)] flex items-center justify-between px-10 gap-10">
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
