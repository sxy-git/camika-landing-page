
import { RippleButton } from './RippleButton';
import type { TabName } from '../../data/mockData';

interface TabGroupProps {
  tabs: readonly TabName[];
  activeTab: TabName;
  onTabChange: (tab: TabName) => void;
}

export function TabGroup({ tabs, activeTab, onTabChange }: TabGroupProps) {
  return (
    <div className="flex gap-6">
      {tabs.map((tab) => (
        <RippleButton
          key={tab}
          variant="nav"
          onClick={() => onTabChange(tab)}
          className={`w-[15rem] h-[4.25rem] flex items-center justify-center px-6 ${
            activeTab === tab
              ? 'bg-yellow border-yellow text-black'
              : 'bg-black border-red text-white'
          }`}
        >
          {tab}
        </RippleButton>
      ))}
    </div>
  );
}
