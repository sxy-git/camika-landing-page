import { useTranslation } from "react-i18next";

/**
 * @description 活跃状态徽章组件，显示 "ACTIVE" 文字并带有脉冲动画效果
 * @returns 活跃徽章 React 组件
 */
export function ActiveBadge() {
  const { t } = useTranslation();
  return (
    <div className="absolute left-0 top-1 h-8 px-2.5 bg-yellow flex items-center z-10 font-bold text-[1rem] leading-[1.5em] text-black whitespace-nowrap pointer-events-none">
      {t("active")}
    </div>
  );
}
