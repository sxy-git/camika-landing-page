import { useState, useCallback } from "react";
import type { Character, Scene } from "../../types/character";
import { handleLoadImage } from "@/utils";
import drawingEditing1 from "@/assets/icons/drawing_editing_1.svg";
import drawingEditing2 from "@/assets/icons/drawing_editing_2.svg";
import drawingEditing3 from "@/assets/icons/drawing_editing_3.svg";
import drawingEditing4 from "@/assets/icons/drawing_editing_4.svg";
import drawingEditing5 from "@/assets/icons/drawing_editing_5.svg";
import drawingEditing6 from "@/assets/icons/drawing_editing_6.svg";
export interface SceneData {
  id: string;
  name: string;
  image: string;
}
const DRAWING_CHARACTERS: Character[] = [
  {
    id: "drawing_char_1",
    name: "shuang_yue_name",
    info: "shuang_yue_info",
    image: handleLoadImage("oc_1_5.png"),
    previewImage: handleLoadImage("drawing_2_2.png", "big"),
  },
  {
    id: "drawing_char_2",
    name: "red_ye_name",
    info: "red_ye_info",
    image: handleLoadImage("oc_3_5.png"),
    previewImage: handleLoadImage("drawing_1_2.png", "big"),
  },
];
export const DRAWING_SCENES: SceneData[] = [
  {
    id: "nano_edit",
    name: "nano_editing",
    image: drawingEditing1,
  },
  {
    id: "position_swap",
    name: "position_transform",
    image: drawingEditing2,
  },
  {
    id: "style_transfer",
    name: "style_transfer",
    image: drawingEditing3,
  },
  { id: "grid_4", name: "4-panel_grid", image: drawingEditing4 },
  { id: "grid_9", name: "9-panel_grid", image: drawingEditing5 },
  {
    id: "video_5s",
    name: "5s_video",
    image: drawingEditing6,
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
