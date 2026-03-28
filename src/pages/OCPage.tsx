import { useState, useCallback } from "react";
import { TabNav } from "../components/TabNav/TabNav";
import { PageFooter } from "../layouts/PageFooter";
import { ActiveBadge } from "../components/common/ActiveBadge";
import { OCPanel } from "../components/oc/OCPanel";
import { DrawingPreview } from "../components/drawing/DrawingPreview";
import { ComicsPreview } from "../components/Comics/ComicsPreview";
import { VideoPreview } from "../components/video/VideoPreview";
import { useTabSwitch } from "../hooks/use-tab-switch";
import { FIGMA_IMAGES, DRAWING_SCENES, OUTFITS } from "../data/mockData";
import type { Character, Outfit, Scene } from "../types/character";

const mockCharacters: Character[] = [
  {
    id: "active",
    name: "ACTIVE",
    nameEn: "",
    age: "",
    birthday: "",
    zodiac: "",
    thumbnail: FIGMA_IMAGES.characters.active,
    image: FIGMA_IMAGES.characters.active,
    outfits: [],
  },
  {
    id: "scarlett_blaze",
    name: "SCARLETT BLAZE",
    nameEn: "",
    age: "",
    birthday: "",
    zodiac: "",
    thumbnail: FIGMA_IMAGES.characters.scarlett,
    image: FIGMA_IMAGES.characters.scarlett,
    outfits: [],
  },
];

export function OCPage() {
  const { activeTab, handleTabChange } = useTabSwitch({
    defaultTab: "DRAWING",
  });

  const [selectedCharacter, setSelectedCharacter] = useState<Character>(
    mockCharacters[0],
  );
  const [selectedOutfit, setSelectedOutfit] = useState<Outfit | null>(
    OUTFITS[0] ? { ...OUTFITS[0], thumbnail: OUTFITS[0].image } : null,
  );
  const [selectedScene, setSelectedScene] = useState<Scene | null>(
    DRAWING_SCENES[0]
      ? { ...DRAWING_SCENES[0], thumbnail: DRAWING_SCENES[0].thumb }
      : null,
  );

  const handleCharacterSelect = useCallback((character: Character) => {
    setSelectedCharacter(character);
    const firstOutfit = OUTFITS[0];
    if (firstOutfit) {
      setSelectedOutfit({ ...firstOutfit, thumbnail: firstOutfit.image });
    }
  }, []);

  const handleOutfitSelect = useCallback((outfit: Outfit) => {
    setSelectedOutfit(outfit);
  }, []);

  const handleSceneSelect = useCallback((scene: Scene) => {
    setSelectedScene(scene);
  }, []);

  const renderActivePanel = () => {
    switch (activeTab) {
      case "OC":
        return (
          <OCPanel
            selectedOutfit={selectedOutfit}
            onOutfitSelect={handleOutfitSelect}
          />
        );
      case "DRAWING":
        return (
          <DrawingPreview
            characters={mockCharacters}
            selectedCharacter={selectedCharacter}
            onCharacterSelect={handleCharacterSelect}
            selectedScene={selectedScene}
            onSceneSelect={handleSceneSelect}
          />
        );
      case "COMICS":
        return (
          <ComicsPreview
            characters={mockCharacters}
            selectedCharacter={selectedCharacter}
            onCharacterSelect={handleCharacterSelect}
          />
        );
      case "VIDEO":
        return (
          <VideoPreview
            characters={mockCharacters}
            selectedCharacter={selectedCharacter}
            onCharacterSelect={handleCharacterSelect}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="h-full flex flex-col"
      style={{
        backgroundImage: `url(${FIGMA_IMAGES.bgHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <TabNav activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="flex-1 px-[3.75rem] py-4">{renderActivePanel()}</main>

      <ActiveBadge />

      <PageFooter />
    </div>
  );
}
