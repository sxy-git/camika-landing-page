import { useState, useCallback } from "react";
import { FIGMA_IMAGES } from "../../data/mockData";
import type { Character } from "../../types/character";

const COMICS_CHARACTERS: Character[] = [
  {
    id: "comics_char_1",
    name: "HERO STAR",
    nameEn: "",
    age: "20",
    birthday: "JUN.15",
    zodiac: "GEMINI",
    image: FIGMA_IMAGES.characters.active,
    outfits: [],
  },
  {
    id: "comics_char_2",
    name: "SHADOW",
    nameEn: "",
    age: "22",
    birthday: "DEC.01",
    zodiac: "SAGITTARIUS",
    image: FIGMA_IMAGES.characters.scarlett,
    outfits: [],
  },
];

export interface UseComicsPanelReturn {
  characters: Character[];
  selectedCharacter: Character | null;
  handleCharacterSelect: (character: Character) => void;
}

export function useComicsPanel(): UseComicsPanelReturn {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    COMICS_CHARACTERS[0],
  );

  const handleCharacterSelect = useCallback((character: Character) => {
    setSelectedCharacter(character);
  }, []);

  return {
    characters: COMICS_CHARACTERS,
    selectedCharacter,
    handleCharacterSelect,
  };
}
