import { useState, useCallback } from "react";
import type { Character } from "../../types/character";
import { handleLoadImage } from "@/utils";

const COMICS_CHARACTERS: Character[] = [
  {
    id: "comics_char_1",
    name: "qing_lan_name",
    info: "qing_lan_info",
    image: handleLoadImage("oc_1_5.png"),
    previewImage: handleLoadImage("drawing_2_2.png", "big"),
    images: [
      handleLoadImage("comic_1_1.png"),
      handleLoadImage("comic_1_2.png"),
      handleLoadImage("comic_1_3.png"),
    ],
    scenes: [
      handleLoadImage("comic_scene_1_1.png"),
      handleLoadImage("comic_scene_1_2.png"),
      handleLoadImage("comic_scene_1_3.png"),
      handleLoadImage("comic_scene_1_4.png"),
    ],
  },
  {
    id: "comics_char_2",
    name: "cang_yue_name",
    info: "cang_yue_info",
    image: handleLoadImage("oc_3_5.png"),
    previewImage: handleLoadImage("drawing_1_2.png", "big"),
    images: [
      handleLoadImage("comic_2_1.png"),
      handleLoadImage("comic_2_2.png"),
      handleLoadImage("comic_2_3.png"),
    ],
    scenes: [
      handleLoadImage("comic_scene_1_1.png"),
      handleLoadImage("comic_scene_1_2.png"),
      handleLoadImage("comic_scene_1_3.png"),
      handleLoadImage("comic_scene_1_4.png"),
    ],
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
