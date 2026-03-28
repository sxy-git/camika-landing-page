import type { ReactNode } from 'react';

interface TabPanelProps {
  children: (props: { isActive: boolean }) => ReactNode;
}

interface TabPanelContainerProps {
  activeTab: string;
  tabPanels: Record<string, ReactNode>;
}

export function TabPanel({ children }: TabPanelProps) {
  return <>{children({ isActive: true })}</>;
}

export function TabPanelContainer({
  activeTab,
  tabPanels,
}: TabPanelContainerProps) {
  const panel = tabPanels[activeTab];
  return <>{panel}</>;
}
