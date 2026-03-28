import { useCallback, useState } from 'react';
import type { Scene } from '../../types/character';

interface SceneGridProps {
  scenes: Scene[];
  selectedScene: Scene | null;
  onSceneSelect: (scene: Scene) => void;
}

export function SceneGrid({ scenes, selectedScene, onSceneSelect }: SceneGridProps) {
  const [, setFlash] = useState(false);

  const handleSceneClick = useCallback((scene: Scene) => {
    setFlash(true);
    setTimeout(() => setFlash(false), 240);
    onSceneSelect(scene);
  }, [onSceneSelect]);

  const firstRow = scenes.slice(0, 3);
  const secondRow = scenes.slice(3, 6);

  const renderSceneThumb = (scene: Scene) => {
    const isSelected = selectedScene?.id === scene.id;
    return (
      <div
        key={scene.id}
        onClick={() => handleSceneClick(scene)}
        className="scene-thumb flex flex-col items-center gap-1.5 cursor-pointer"
      >
        <img
          src={scene.thumbnail}
          alt={scene.name}
          className={`w-[11.0625rem] h-[6.75rem] object-cover bg-black transition-all duration-200 ${
            isSelected
              ? 'border-[0.203125rem] border-yellow shadow-[inset_0_0_1.0625rem_0_rgba(254,230,29,0.4)] scale-[1.04]'
              : 'border-[0.203125rem] border-red hover:border-yellow'
          }`}
          loading="lazy"
        />
        <span
          className={`font-normal text-[1.25rem] leading-[1.4em] text-center ${
            isSelected ? 'text-yellow' : 'text-white'
          }`}
        >
          {scene.name}
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4 w-[35.75rem]">
      <div className="flex gap-5">
        {firstRow.map(renderSceneThumb)}
      </div>
      <div className="flex gap-5">
        {secondRow.map(renderSceneThumb)}
      </div>
    </div>
  );
}
