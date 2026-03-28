import { CharacterPanel } from "../shared/CharacterPanel";
import { SceneGrid } from "./SceneGrid";
import { PreviewPanel } from "../common/PreviewPanel";
import { FIGMA_IMAGES, DRAWING_SCENES } from "../../data/mockData";
import type { Character, Scene } from "../../types/character";

interface DrawingPreviewProps {
  characters: Character[];
  selectedCharacter: Character | null;
  onCharacterSelect: (character: Character) => void;
  selectedScene: Scene | null;
  onSceneSelect: (scene: Scene) => void;
}

export function DrawingPreview({
  characters,
  selectedCharacter,
  onCharacterSelect,
  selectedScene,
  onSceneSelect,
}: DrawingPreviewProps) {
  return (
    <div className="flex gap-[2.75rem]">
      <PreviewPanel
        image={FIGMA_IMAGES.storyboard.drawing}
        alt="Drawing Storyboard"
        aspectRatio="drawing"
      />

      <div className="w-[35.75rem] flex flex-col gap-10">
        <CharacterPanel
          characters={characters}
          selectedCharacter={selectedCharacter}
          onCharacterSelect={onCharacterSelect}
        />

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-[2rem] leading-[1.25em]">
            EDITING FUNCTIONS
          </h3>
          <SceneGrid
            scenes={DRAWING_SCENES.map((s) => ({ ...s, thumbnail: s.thumb }))}
            selectedScene={selectedScene}
            onSceneSelect={onSceneSelect}
          />
        </div>
      </div>
    </div>
  );
}
