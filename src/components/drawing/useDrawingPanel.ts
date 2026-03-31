import { useState, useCallback } from "react";
import { FIGMA_IMAGES } from "../../data/mockData";
import type { Character, Scene } from "../../types/character";
export interface SceneData {
  id: string;
  name: string;
  image: string;
}
const DRAWING_CHARACTERS: Character[] = [
  {
    id: "drawing_char_1",
    name: "NANO",
    nameEn: "",
    age: "15",
    birthday: "MAY.10",
    zodiac: "TAURUS",
    image: FIGMA_IMAGES.characters.active,
    outfits: [],
  },
  {
    id: "drawing_char_2",
    name: "KAI",
    nameEn: "",
    age: "18",
    birthday: "AUG.22",
    zodiac: "LEO",
    image: FIGMA_IMAGES.characters.scarlett,
    outfits: [],
  },
];
export const DRAWING_SCENES: SceneData[] = [
  {
    id: "nano_edit",
    name: "nano_editing",
    image: "/icons/drawing_editing_1.svg",
  },
  {
    id: "position_swap",
    name: "position_transform",
    image: "/icons/drawing_editing_2.svg",
  },
  {
    id: "style_transfer",
    name: "style_transfer",
    image: "/icons/drawing_editing_3.svg",
  },
  { id: "grid_4", name: "4-panel_grid", image: "/icons/drawing_editing_4.svg" },
  { id: "grid_9", name: "9-panel_grid", image: "/icons/drawing_editing_5.svg" },
  {
    id: "video_5s",
    name: "5s_video",
    image: "/icons/drawing_editing_6.svg",
  },
];
export interface UseDrawingPanelReturn {
  characters: Character[];
  selectedCharacter: Character | null;
  handleCharacterSelect: (character: Character) => void;
  selectedScene: Scene | null;
}

export function useDrawingPanel(): UseDrawingPanelReturn {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    DRAWING_CHARACTERS[0],
  );
  const [selectedScene] = useState<Scene | null>(
    DRAWING_SCENES[0]
      ? { ...DRAWING_SCENES[0], image: DRAWING_SCENES[0].image }
      : null,
  );

  const handleCharacterSelect = useCallback((character: Character) => {
    setSelectedCharacter(character);
  }, []);

  return {
    characters: DRAWING_CHARACTERS,
    selectedCharacter,
    handleCharacterSelect,
    selectedScene,
  };
}
