import { useEffect } from "react";

/**
 * Hook to dynamically adjust root HTML font size based on viewport dimensions
 * Base font size is 16px for 1440/800 aspect ratio
 */
export function useScreenAndFontSizeAdjust() {
  useEffect(() => {
    const recalc = () => {
      if (!document) return;
      const root = document.getElementById("root");
      const clientWidth = document.documentElement.clientWidth;
      const clientHeight = document.documentElement.clientHeight;

      const needH = (clientWidth * 9) / 16;
      const needW = (clientHeight * 16) / 9;

      let useW = 0;
      let useH = 0;
      if (needH >= clientHeight) {
        useW = needW;
        useH = clientHeight;
      }
      if (needW >= clientWidth) {
        useW = clientWidth;
        useH = needH;
      }

      if (useW > 300) {
        const remsize = (useW / 1920) * 16;
        document.documentElement.style.fontSize = `${remsize > 26 ? 26 : remsize}px`;
      } else {
        document.documentElement.style.fontSize = "13px";
      }
      if (root) {
        root.style.height = `${useH}px`;
        root.style.width = `${useW}px`;
      }
      document.body.style.display = "flex";
      document.body.style.flexDirection = "column";
      document.body.style.alignItems = "center";
      document.body.style.justifyContent = "center";
      document.body.style.overflow = "hidden";
    };

    // Set initial screen size and font size
    recalc();

    // Add event listener for window resize
    window.addEventListener("resize", recalc);

    // Clean up
    return () => {
      window.removeEventListener("resize", recalc);
    };
  }, []);
}
