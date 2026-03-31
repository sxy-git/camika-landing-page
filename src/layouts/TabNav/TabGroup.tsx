import { useTranslation } from "react-i18next";
import { RippleButton } from "../../components/common/RippleButton";
import type { TabName } from "../../data/mockData";

interface TabGroupProps {
  tabs: readonly TabName[]; // Tab 选项列表
  activeTab: TabName; // 当前激活的 Tab
  onTabChange: (tab: TabName) => void; // Tab 切换回调函数
}

/**
 * @description Tab 组组件，展示多个 Tab 选项供用户切换
 * @param tabs - Tab 选项列表
 * @param activeTab - 当前激活的 Tab
 * @param onTabChange - Tab 切换回调函数
 * @returns Tab 组 React 组件
 */
export function TabGroup({ tabs, activeTab, onTabChange }: TabGroupProps) {
  const { t } = useTranslation();

  return (
    <div className="flex gap-6">
      {tabs.map((tab) => (
        <RippleButton
          key={tab}
          variant="nav"
          active={activeTab === tab}
          onClick={() => onTabChange(tab)}
          className={`w-60 h-17 flex items-center justify-center cursor-pointer  ${
            activeTab === tab
              ? "bg-yellow border-yellow text-black"
              : "bg-black border-red text-white"
          }`}
        >
          {t(tab.toLowerCase())}
        </RippleButton>
      ))}
    </div>
  );
}
