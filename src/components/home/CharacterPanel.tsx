
import { CharacterCard } from '../oc/CharacterCard';
import type { Character } from '../../types/character';

interface CharacterPanelProps {
  characters: Character[];
  selectedCharacter: Character | null;
  onCharacterSelect: (character: Character) => void;
}

export function CharacterPanel({
  characters,
  selectedCharacter,
  onCharacterSelect,
}: CharacterPanelProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-white font-bold text-[2rem] leading-[1.25em]">
        CHARACTER PORTRAITS
      </h3>
      <div className="flex gap-5">
        {characters.map((char) => {
          const variant = char.id === 'active' ? 'golden' : 'red';
          return (
            <CharacterCard
              key={char.id}
              id={char.id}
              name={char.name}
              image={char.thumbnail || char.image}
              variant={variant}
              isActive={selectedCharacter?.id === char.id}
              onClick={() => onCharacterSelect(char)}
            />
          );
        })}
      </div>
    </div>
  );
}
