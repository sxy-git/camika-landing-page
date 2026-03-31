import { useState, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FIGMA_IMAGES } from "../../data/mockData";
import type { Character, Outfit } from "../../types/character";

export interface OCCharacter extends Character {
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
  nameEn: string;
  age: string;
  birthday: string;
  zodiac: string;
  image: string;
}> = [
  {
    id: "active",
    name: "ACTIVE",
    nameEn: "",
    age: "17",
    birthday: "JAN.01",
    zodiac: "zodiac.capricorn",
    image: FIGMA_IMAGES.characters.active,
  },
  {
    id: "silver_hawk",
    name: "SILVER HAWK",
    nameEn: "zodiac.silver_hawk",
    age: "18",
    birthday: "FEB.14",
    zodiac: "zodiac.aquarius",
    image: FIGMA_IMAGES.characters.scarlett,
  },
  {
    id: "blue_wolf",
    name: "BLUE WOLF",
    nameEn: "zodiac.blue_wolf",
    age: "19",
    birthday: "MAR.15",
    zodiac: "zodiac.pisces",
    image: FIGMA_IMAGES.storyboard.oc,
  },
  {
    id: "night_rose",
    name: "NIGHT ROSE",
    nameEn: "zodiac.night_rose",
    age: "16",
    birthday: "APR.20",
    zodiac: "zodiac.aries",
    image: FIGMA_IMAGES.characters.scarlett,
  },
];
export const OUTFITS: OutfitData[] = FIGMA_IMAGES.outfits.map((img, i) => ({
  id: `outfit_${String(i + 1).padStart(2, "0")}`,
  name: "",
  image: img,
}));
export function useOCPanel(): UseOCPanelReturn {
  const { t, i18n } = useTranslation();

  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(0);

  const [selectedOutfit, setSelectedOutfit] = useState<Outfit | null>(
    OUTFITS[0] ? { ...OUTFITS[0] } : null,
  );

  const characters = useMemo<OCCharacter[]>(() => {
    return MOCK_CHARACTERS_RAW.map((char) => ({
      ...char,
      zodiac: t(`oc.zodiac.${char.zodiac.replace("zodiac.", "")}`),
      nameEn: char.nameEn.startsWith("zodiac.")
        ? t(`oc.name.${char.nameEn.replace("zodiac.", "")}`)
        : char.nameEn,
      outfits: OUTFITS.map((o, i) => ({
        id: `outfit_${String(i + 1).padStart(2, "0")}`,
        name: t(`outfit_${String(i + 1).padStart(2, "0")}`),
        image: o.image,
      })),
    }));
  }, [t, i18n.language]);

  const handleCharacterSelect = useCallback((index: number) => {
    setSelectedCharacterIndex(index);
    if (OUTFITS.length > 0) {
      setSelectedOutfit({
        id: `outfit_01`,
        name: OUTFITS[0]?.name || "",
        image: OUTFITS[0]?.image || "",
      });
    }
  }, []);

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
