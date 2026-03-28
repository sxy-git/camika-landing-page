import { useState, useCallback } from 'react';
import type { Outfit } from '../../types/character';

interface OutfitGridProps {
  outfits: Outfit[];
  selectedOutfit: Outfit | null;
  onOutfitSelect: (outfit: Outfit) => void;
}

export function OutfitGrid({ outfits, selectedOutfit, onOutfitSelect }: OutfitGridProps) {
  const [, setFlash] = useState(false);

  const handleOutfitClick = useCallback((outfit: Outfit) => {
    setFlash(true);
    setTimeout(() => setFlash(false), 240);
    onOutfitSelect(outfit);
  }, [onOutfitSelect]);

  const firstRow = outfits.slice(0, 4);
  const secondRow = outfits.slice(4, 8);

  const renderOutfitThumb = (outfit: Outfit) => {
    const isSelected = selectedOutfit?.id === outfit.id;
    return (
      <div key={outfit.id} className="flex flex-col items-center gap-1.5">
        <button
          onClick={() => handleOutfitClick(outfit)}
          className={`w-[8rem] h-[7rem] overflow-hidden transition-all duration-200 hover:scale-[1.04] ${
            isSelected
              ? 'border-[0.1875rem] border-yellow shadow-[inset_0_0_1.0625rem_0_rgba(254,230,29,0.4)]'
              : 'border-[0.1875rem] border-transparent'
          }`}
        >
          <img
            src={outfit.thumbnail || outfit.image}
            alt={outfit.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </button>
        <span
          className={`font-normal text-[1.25rem] leading-[1.4em] text-center ${
            isSelected ? 'text-yellow' : 'text-white'
          }`}
        >
          {outfit.name}
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4 w-[35.75rem]">
      <div className="flex gap-5">
        {firstRow.map(renderOutfitThumb)}
      </div>
      {secondRow.length > 0 && (
        <div className="flex gap-5">
          {secondRow.map(renderOutfitThumb)}
        </div>
      )}
    </div>
  );
}
