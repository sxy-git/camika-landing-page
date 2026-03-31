import { FIGMA_IMAGES } from "../../data/mockData";

interface SceneSelectorProps {
  variant: "comics" | "video"; // 场景选择器的变体类型
}

/**
 * @description 场景选择器组件，根据变体显示对应的场景选择图片
 * @param variant - 场景选择器的变体类型（comics/video）
 * @returns 场景选择器 React 组件
 */
export function SceneSelector({ variant }: SceneSelectorProps) {
  const imageUrl =
    variant === "comics" // 根据变体选择对应的图片
      ? FIGMA_IMAGES.sceneSelector.comics
      : FIGMA_IMAGES.sceneSelector.video;

  return (
    <div className="w-143">
      <img
        src={imageUrl}
        alt={`${variant} Scene Selector`}
        className="w-full h-auto object-cover bg-black/30"
        loading="lazy"
      />
    </div>
  );
}
