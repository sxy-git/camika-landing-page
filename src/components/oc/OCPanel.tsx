import { CharacterNameOverlay } from "./CharacterNameOverlay";
import { OutfitGrid } from "./OutfitGrid";
import { PreviewPanel } from "../common/PreviewPanel";
import { useOCPanel } from "./useOCPanel";
import { ActiveBadge } from "../common/ActiveBadge";
import { IMAGE_COMPRESS } from "@/utils";

export function OCPanel() {
  const {
    characters,
    selectedCharacter,
    handleCharacterSelect,
    selectedOutfit,
    handleOutfitSelect,
    t,
  } = useOCPanel();

  return (
    <div className="flex gap-11">
      <PreviewPanel
        image={(selectedOutfit?.image || "") + IMAGE_COMPRESS}
        titleKey="character_preview"
        alt="OC Storyboard"
      >
        <CharacterNameOverlay
          name={selectedCharacter.name}
          info={selectedCharacter.info}
        />
      </PreviewPanel>

      <div className="w-143 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-[2rem] leading-[1.25em]">
            {t("character_portraits")}
          </h3>

          <div className="relative w-143 h-65 gap-5 flex flex-wrap">
            {characters.map((char, index) => (
              <button
                key={char.id}
                onClick={() => handleCharacterSelect(index)}
                className={`h-30 w-69 cursor-pointer transition-all overflow-hidden border-3 relative ${
                  selectedCharacter.id === char.id
                    ? "bg-yellow/20  border-yellow"
                    : "bg-red/20 border-red"
                }`}
                aria-label={`Select ${char.name}`}
              >
                {selectedCharacter.id === char.id && <ActiveBadge />}
                <img
                  src={char.image}
                  alt="Character Portraits"
                  className="object-top"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-[2rem] leading-[1.25em]">
            {t("outfit_variations")}
          </h3>
          <OutfitGrid
            outfits={selectedCharacter.outfits}
            selectedOutfit={selectedOutfit}
            onOutfitSelect={handleOutfitSelect}
          />
        </div>
      </div>
    </div>
  );
}
