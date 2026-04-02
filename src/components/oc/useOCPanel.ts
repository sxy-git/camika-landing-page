import { useState, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { Outfit } from "../../types/character";
import { handleLoadImage, IMAGE_PLACEHOLDER } from "@/utils";

export interface OCCharacter {
  id: string;
  name: string;
  info: string;
  image: string;
  outfits: Array<{
    id: string;
    name: string;
    image: string;
  }>;
}

export interface UseOCPanelReturn {
  characters: OCCharacter[];
  selectedCharacter: OCCharacter;
  handleCharacterSelect: (index: number) => void;
  selectedOutfit: Outfit | null;
  handleOutfitSelect: (outfit: Outfit) => void;
  t: (key: string) => string;
}
export interface OutfitData {
  id: string;
  name: string;
  image: string;
}
const MOCK_CHARACTERS_RAW: Array<{
  id: string;
  name: string;
  info: string;
  image: string;
}> = [
  {
    id: "shuang_yue",
    name: "shuang_yue_name",
    info: "shuang_yue_info",
    image: handleLoadImage("oc_1_1.png"),
  },
  {
    id: "qing_lan",
    name: "qing_lan_name",
    info: "qing_lan_info",
    image: handleLoadImage("oc_2_1.png"),
  },
  {
    id: "cang_yue",
    name: "red_ye_name",
    info: "red_ye_info",
    image: handleLoadImage("oc_3_1.png"),
  },
  {
    id: "red_ye",
    name: "cang_yue_name",
    info: "cang_yue_info",
    image: handleLoadImage("oc_4_1.png"),
  },
];

export function useOCPanel(): UseOCPanelReturn {
  const { t, i18n } = useTranslation();

  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(0);

  const [selectedOutfit, setSelectedOutfit] = useState<Outfit | null>({
    id: "outfit_01",
    name: t("outfit_01"),
    image: IMAGE_PLACEHOLDER + "oc_1_1.png",
  });

  const characters = useMemo<OCCharacter[]>(() => {
    return MOCK_CHARACTERS_RAW.map((char, index) => ({
      id: char.id,
      name: t(`${char.name}`),
      info: t(`${char.info}`),
      image: char.image,
      outfits: new Array(8).fill(0).map((_, i) => ({
        id: `outfit_${String(i + 1).padStart(2, "0")}`,
        name: t(`outfit_${String(i + 1).padStart(2, "0")}`),
        image: IMAGE_PLACEHOLDER + "oc_" + (index + 1) + "_" + (i + 1) + ".png",
      })),
    }));
  }, [t, i18n.language]);

  const handleCharacterSelect = useCallback(
    (index: number) => {
      setSelectedCharacterIndex(index);
      setSelectedOutfit({
        id: `outfit_01`,
        name: characters[index].outfits[0]?.name || "",
        image: characters[index].outfits[0]?.image || "",
      });
    },
    [characters],
  );

  const handleOutfitSelect = useCallback((outfit: Outfit) => {
    setSelectedOutfit(outfit);
  }, []);

  return {
    characters,
    selectedCharacter: characters[selectedCharacterIndex],
    handleCharacterSelect,
    selectedOutfit,
    handleOutfitSelect,
    t,
  };
}
