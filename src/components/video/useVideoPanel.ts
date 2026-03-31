import { useState, useCallback } from "react";
import type { Character } from "../../types/character";

const VIDEO_CHARACTERS: Character[] = [
  {
    id: "video_char_1",
    name: "WAVE",
    nameEn: "",
    age: "16",
    birthday: "MAR.20",
    zodiac: "PISCES",
    image: "",
    outfits: [],
    video: "https://www.youtube.com/embed/29SQ3GTJNPM?si=k1rCf4CE9XEcJHT2",
  },
  {
    id: "video_char_2",
    name: "STORM",
    nameEn: "",
    age: "19",
    birthday: "NOV.11",
    zodiac: "SCORPIO",
    image: "",
    outfits: [],
    video: "https://www.youtube.com/embed/o8Yz7SOiPTI?si=r354LJyAhWkQfvO_",
  },
];

export interface UseVideoPanelReturn {
  characters: Character[];
  selectedCharacter: Character | null;
  handleCharacterSelect: (character: Character) => void;
}

export function useVideoPanel(): UseVideoPanelReturn {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    VIDEO_CHARACTERS[0],
  );

  const handleCharacterSelect = useCallback((character: Character) => {
    setSelectedCharacter(character);
  }, []);

  return {
    characters: VIDEO_CHARACTERS,
    selectedCharacter,
    handleCharacterSelect,
  };
}
