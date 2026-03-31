import { useState, useEffect } from "react";
import { TabNav } from "../layouts/TabNav/TabNav";
import { PageFooter } from "../layouts/PageFooter";
import { OCPanel } from "../components/oc/OCPanel";
import { DrawingPreview } from "../components/drawing/DrawingPreview";
import { ComicsPreview } from "../components/Comics/ComicsPreview";
import { VideoPreview } from "../components/video/VideoPreview";
import { useTabSwitch } from "../hooks/use-tab-switch";
import { FIGMA_IMAGES } from "../data/mockData";

export function HomePage() {
  const { activeTab, handleTabChange } = useTabSwitch({
    defaultTab: "OC",
  });

  const [isVisible, setIsVisible] = useState(true);
  const [displayTab, setDisplayTab] = useState(activeTab);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    if (activeTab !== displayTab) {
      const slideDistance = 10;
      setTranslateX(-slideDistance);
      setIsVisible(false);
      const timer = setTimeout(() => {
        setDisplayTab(activeTab);
        const animTimer = setTimeout(() => {
          setTranslateX(slideDistance);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setIsVisible(true);
              setTranslateX(0);
            });
          });
        }, 10);
        return () => clearTimeout(animTimer);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [activeTab, displayTab]);

  const renderActivePanel = () => {
    switch (displayTab) {
      case "OC":
        return <OCPanel />;
      case "DRAWING":
        return <DrawingPreview />;
      case "COMICS":
        return <ComicsPreview />;
      case "VIDEO":
        return <VideoPreview />;
      default:
        return null;
    }
  };

  return (
    <div
      className="h-full flex flex-col"
      style={{
        backgroundImage: `url(${FIGMA_IMAGES.bgHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <TabNav activeTab={activeTab} onTabChange={handleTabChange} />

      <main
        className="flex-1 px-15 pt-9 transition-all duration-200"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translateX(${translateX}px)`,
        }}
      >
        {renderActivePanel()}
      </main>

      <PageFooter activeTab={activeTab} />
    </div>
  );
}
