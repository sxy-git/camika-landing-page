import { useState, useEffect, lazy, Suspense } from "react";
import { TabNav } from "../layouts/TabNav/TabNav";
import { PageFooter } from "../layouts/PageFooter";
import { useTabSwitch } from "../hooks/use-tab-switch";
import { FIGMA_IMAGES } from "../data/mockData";

const OCPanel = lazy(() =>
  import("../components/oc/OCPanel").then((m) => ({ default: m.OCPanel })),
);
const DrawingPreview = lazy(() =>
  import("../components/drawing/DrawingPreview").then((m) => ({
    default: m.DrawingPreview,
  })),
);
const ComicsPreview = lazy(() =>
  import("../components/Comics/ComicsPreview").then((m) => ({
    default: m.ComicsPreview,
  })),
);
const VideoPreview = lazy(() =>
  import("../components/video/VideoPreview").then((m) => ({
    default: m.VideoPreview,
  })),
);

const prefetchCache = new Set<string>();

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
    </div>
  );
}

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

  useEffect(() => {
    const prefetchTabs = () => {
      const otherTabs = ["DRAWING", "COMICS", "VIDEO"].filter(
        (tab) => tab !== activeTab,
      );
      otherTabs.forEach((tab) => {
        if (prefetchCache.has(tab)) {
          return;
        }
        prefetchCache.add(tab);
        switch (tab) {
          case "DRAWING":
            import("../components/drawing/DrawingPreview");
            break;
          case "COMICS":
            import("../components/Comics/ComicsPreview");
            break;
          case "VIDEO":
            import("../components/video/VideoPreview");
            break;
        }
      });
    };

    if ("requestIdleCallback" in window) {
      const idleId = requestIdleCallback(prefetchTabs, { timeout: 2000 });
      return () => cancelIdleCallback(idleId);
    } else {
      const timer = setTimeout(prefetchTabs, 1000);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  const renderActivePanel = () => {
    switch (displayTab) {
      case "OC":
        return (
          <Suspense fallback={<LoadingFallback />}>
            <OCPanel />
          </Suspense>
        );
      case "DRAWING":
        return (
          <Suspense fallback={<LoadingFallback />}>
            <DrawingPreview />
          </Suspense>
        );
      case "COMICS":
        return (
          <Suspense fallback={<LoadingFallback />}>
            <ComicsPreview />
          </Suspense>
        );
      case "VIDEO":
        return (
          <Suspense fallback={<LoadingFallback />}>
            <VideoPreview />
          </Suspense>
        );
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
