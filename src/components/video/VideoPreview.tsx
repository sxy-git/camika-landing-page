import { CharacterPanel } from "../shared/CharacterPanel";
import { SceneSelector } from "../shared/SceneSelector";
import { PreviewPanel } from "../common/PreviewPanel";
import { FIGMA_IMAGES } from "../../data/mockData";
import type { Character } from "../../types/character";
import { PlayButton } from "./PlayButton";

interface VideoPreviewProps {
  characters: Character[];
  selectedCharacter: Character | null;
  onCharacterSelect: (character: Character) => void;
}

export function VideoPreview({
  characters,
  selectedCharacter,
  onCharacterSelect,
}: VideoPreviewProps) {
  return (
    <div className="flex gap-[2.75rem]">
      <PreviewPanel
        image={FIGMA_IMAGES.storyboard.video}
        alt="Video Storyboard"
        aspectRatio="video"
      >
        <PlayButton />
      </PreviewPanel>

      <div className="w-[35.75rem] flex flex-col gap-10">
        <CharacterPanel
          characters={characters}
          selectedCharacter={selectedCharacter}
          onCharacterSelect={onCharacterSelect}
        />

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-[2rem] leading-[1.25em]">
            SCENE SELECTOR
          </h3>
          <SceneSelector variant="video" />
        </div>
      </div>
    </div>
  );
}
