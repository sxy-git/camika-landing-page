import { CharacterPanel } from '../shared/CharacterPanel';
import { SceneSelector } from '../shared/SceneSelector';
import { PreviewPanel } from '../common/PreviewPanel';
import { FIGMA_IMAGES } from '../../data/mockData';
import type { Character } from '../../types/character';

interface ComicsPreviewProps {
  characters: Character[];
  selectedCharacter: Character | null;
  onCharacterSelect: (character: Character) => void;
}

export function ComicsPreview({
  characters,
  selectedCharacter,
  onCharacterSelect,
}: ComicsPreviewProps) {
  return (
    <div className="flex gap-[2.75rem]">
      <PreviewPanel
        image={FIGMA_IMAGES.storyboard.comics}
        alt="Comics Storyboard"
        aspectRatio="comics"
      />

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
          <SceneSelector variant="comics" />
        </div>
      </div>
    </div>
  );
}
