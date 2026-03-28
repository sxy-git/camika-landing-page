import { FIGMA_IMAGES } from '../../data/mockData';

interface SceneSelectorProps {
  variant: 'comics' | 'video';
}

export function SceneSelector({ variant }: SceneSelectorProps) {
  const imageUrl = variant === 'comics'
    ? FIGMA_IMAGES.sceneSelector.comics
    : FIGMA_IMAGES.sceneSelector.video;

  return (
    <div className="w-[35.75rem]">
      <img
        src={imageUrl}
        alt={`${variant} Scene Selector`}
        className="w-full h-auto object-cover bg-black/30"
        loading="lazy"
      />
    </div>
  );
}
