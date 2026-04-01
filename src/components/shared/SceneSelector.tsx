interface SceneSelectorProps {
  scenes: string[]; // 场景图片列表
}

/**
 * @description 场景选择器组件，根据变体显示对应的场景选择图片
 * @param scenes - 场景图片列表
 * @returns 场景选择器 React 组件
 */
export function SceneSelector({ scenes }: SceneSelectorProps) {
  return (
    <div className="w-143 flex flex-wrap gap-5">
      {scenes.map((scene, index) => (
        <div
          key={index}
          className={`border-3 w-69 h-33.25  bg-black/30 ${index === 0 ? "border-yellow" : "border-red"}`}
        >
          <img
            src={scene}
            alt={`Scene Selector`}
            className="size-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
