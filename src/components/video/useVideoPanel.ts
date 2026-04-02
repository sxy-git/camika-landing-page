import { useState, useCallback } from "react";
import type { Character } from "../../types/character";
import { handleLoadImage } from "@/utils";

const VIDEO_CHARACTERS: Character[] = [
  {
    id: "video_char_1",
    name: "shuang_yue_name",
    info: "shuang_yue_info",
    image: handleLoadImage("oc_1_5.png"),
    video: "https://www.youtube.com/embed/29SQ3GTJNPM?si=k1rCf4CE9XEcJHT2",
    scenes: [
      handleLoadImage("comic_scene_1_1.png"),
      handleLoadImage("comic_scene_1_2.png"),
      handleLoadImage("comic_scene_1_3.png"),
      handleLoadImage("comic_scene_1_4.png"),
    ],
  },
  {
    id: "video_char_2",
    name: "red_ye_name",
    info: "red_ye_info",
    image: handleLoadImage("oc_3_5.png"),
    video: "https://www.youtube.com/embed/o8Yz7SOiPTI?si=r354LJyAhWkQfvO_",
    scenes: [
      handleLoadImage("comic_scene_1_1.png"),
      handleLoadImage("comic_scene_1_2.png"),
      handleLoadImage("comic_scene_1_3.png"),
      handleLoadImage("comic_scene_1_4.png"),
    ],
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
