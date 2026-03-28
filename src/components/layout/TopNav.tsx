import { TabGroup } from "../ui/TabGroup";
import { RippleButton } from "../ui/RippleButton";
import { FIGMA_IMAGES, TABS } from "../../data/mockData";
import type { TabName } from "../../data/mockData";

interface TopNavProps {
  activeTab: TabName;
  onTabChange: (tab: TabName) => void;
  onLoginClick?: () => void;
}

export function TopNav({ activeTab, onTabChange, onLoginClick }: TopNavProps) {
  return (
    <header className="w-full h-[7.5rem] bg-[#111] shadow-[0_0.375rem_0_0_rgba(68,27,28,1)] flex items-center px-10 gap-10">
      <div className="w-[15rem] h-[3.5rem] flex-shrink-0 flex items-center">
        <img
          src={FIGMA_IMAGES.logo}
          alt="Camika"
          className="w-full h-full object-contain brightness-0 invert"
        />
      </div>

      <nav className="absolute left-[26.75rem] top-[1.875rem]">
        <TabGroup tabs={TABS} activeTab={activeTab} onTabChange={onTabChange} />
      </nav>

      <div className="ml-auto">
        <RippleButton
          variant="login"
          onClick={onLoginClick}
          className="w-[15rem] h-[4.25rem] px-6"
        >
          LOGIN
        </RippleButton>
      </div>
    </header>
  );
}
