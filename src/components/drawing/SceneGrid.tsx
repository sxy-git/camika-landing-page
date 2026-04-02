import { useTranslation } from "react-i18next";
import type { Scene } from "../../types/character";

interface SceneGridProps {
  scenes: Scene[]; // 场景列表
  selectedScene: Scene | null; // 当前选中的场景
}

/**
 * @description 场景网格组件，以网格形式展示可选场景
 * @param scenes - 场景列表
 * @param selectedScene - 当前选中的场景
 * @returns 场景网格 React 组件
 */
export function SceneGrid({ scenes }: SceneGridProps) {
  const { t } = useTranslation();
  const firstRow = scenes.slice(0, 3); // 第一行场景（最多3个）
  const secondRow = scenes.slice(3, 6); // 第二行场景（最多3个）

  /**
   * @description 渲染单个场景缩略图
   * @param scene - 场景对象
   * @returns 场景缩略图 React 元素
   */
  const renderSceneThumb = (scene: Scene) => {
    return (
      <div
        key={scene.id}
        className="scene-thumb flex flex-col items-center gap-1.5 cursor-pointer"
      >
        <div
          className={`w-44.25 h-27  bg-black flex items-center justify-center border-3 border-red`}
        >
          <img
            src={scene.image}
            alt={t(scene.name)}
            className={`size-17.5 object-contain`}
            loading="lazy"
          />
        </div>

        <span
          className={`font-normal truncate text-[1.25rem] leading-[1.4em] text-center text-white`}
          title={t(scene.name)}
        >
          {t(scene.name)}
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4 w-143">
      <div className="flex gap-5">{firstRow.map(renderSceneThumb)}</div>
      <div className="flex gap-5">{secondRow.map(renderSceneThumb)}</div>
    </div>
  );
}
