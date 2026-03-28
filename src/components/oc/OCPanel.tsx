import { CharacterNameOverlay } from './CharacterNameOverlay';
import { OutfitGrid } from './OutfitGrid';
import { PreviewPanel } from '../common/PreviewPanel';
import { FIGMA_IMAGES, OC_CHARACTER, OUTFITS } from '../../data/mockData';
import type { Outfit } from '../../types/character';

interface OCPanelProps {
  selectedOutfit: Outfit | null;
  onOutfitSelect: (outfit: Outfit) => void;
}

export function OCPanel({ selectedOutfit, onOutfitSelect }: OCPanelProps) {
  return (
    <div className="flex gap-[2.75rem]">
      <PreviewPanel
        image={FIGMA_IMAGES.storyboard.oc}
        alt="OC Storyboard"
        aspectRatio="oc"
      >
        <CharacterNameOverlay
          name={OC_CHARACTER.name}
          nameEn={OC_CHARACTER.nameEn}
          age={OC_CHARACTER.age}
          zodiac={OC_CHARACTER.zodiac}
          birthday={OC_CHARACTER.birthday}
        />
      </PreviewPanel>

      <div className="w-[35.75rem] flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-[2rem] leading-[1.25em]">
            CHARACTER PORTRAITS
          </h3>
          <div className="relative w-[35.75rem]">
            <img
              src={FIGMA_IMAGES.ocComposite}
              alt="Character Portraits"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-[2rem] leading-[1.25em]">
            OUTFIT VARIATIONS
          </h3>
          <OutfitGrid
            outfits={OUTFITS.map((o) => ({ ...o, thumbnail: o.image }))}
            selectedOutfit={selectedOutfit}
            onOutfitSelect={onOutfitSelect}
          />
        </div>
      </div>
    </div>
  );
}
