import { useState, useCallback } from 'react';
import type { TabName } from '../data/mockData';

interface UseTabSwitchOptions {
  defaultTab?: TabName;
  onTabChange?: (tab: TabName) => void;
}

interface UseTabSwitchReturn {
  activeTab: TabName;
  handleTabChange: (tab: TabName) => void;
  isTransitioning: boolean;
}

export function useTabSwitch({
  defaultTab = 'DRAWING',
  onTabChange,
}: UseTabSwitchOptions = {}): UseTabSwitchReturn {
  const [activeTab, setActiveTab] = useState<TabName>(defaultTab);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = useCallback(
    (tab: TabName) => {
      if (isTransitioning || tab === activeTab) return;

      setIsTransitioning(true);
      setActiveTab(tab);
      onTabChange?.(tab);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 320);
    },
    [activeTab, isTransitioning, onTabChange],
  );

  return {
    activeTab,
    handleTabChange,
    isTransitioning,
  };
}
