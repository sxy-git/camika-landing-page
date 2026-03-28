import { useState, useCallback } from "react";
import { TopNav } from "../components/layout/TopNav";
import { PageFooter } from "../components/layout/PageFooter";
import { ActiveBadge } from "../components/ui/ActiveBadge";
import { PreviewPanel } from "../components/home/PreviewPanel";
import { CharacterPanel } from "../components/home/CharacterPanel";
import { CharacterNameOverlay } from "../components/oc/CharacterNameOverlay";
import { OutfitGrid } from "../components/oc/OutfitGrid";
import { SceneGrid } from "../components/drawing/SceneGrid";
import { SceneSelector } from "../components/home/SceneSelector";
import { PlayButton } from "../components/video/PlayButton";
import {
  FIGMA_IMAGES,
  OC_CHARACTER,
  DRAWING_SCENES,
  OUTFITS,
} from "../data/mockData";
import type { TabName } from "../data/mockData";
import type { Character, Scene, Outfit } from "../types/character";

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
  const [activeTab, setActiveTab] = useState<TabName>("DRAWING");
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

  const handleTabChange = useCallback((tab: TabName) => {
    setActiveTab(tab);
  }, []);

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

  const renderOCPanel = () => (
    <div className="flex gap-[2.75rem]">
      <PreviewPanel
        image={FIGMA_IMAGES.storyboard.oc}
        alt="OC Storyboard"
        aspectRatio="oc"
      >
        <CharacterNameOverlay
          name={OC_CHARACTER.name}
          nameEn={OC_CHARACTER.nameEn}
          age={OC_CHARACTER.age}
          zodiac={OC_CHARACTER.zodiac}
          birthday={OC_CHARACTER.birthday}
        />
      </PreviewPanel>

      <div className="w-[35.75rem] flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-[2rem] leading-[1.25em]">
            CHARACTER PORTRAITS
          </h3>
          <div className="relative w-[35.75rem]">
            <img
              src={FIGMA_IMAGES.ocComposite}
              alt="Character Portraits"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-[2rem] leading-[1.25em]">
            OUTFIT VARIATIONS
          </h3>
          <OutfitGrid
            outfits={OUTFITS.map((o) => ({ ...o, thumbnail: o.image }))}
            selectedOutfit={selectedOutfit}
            onOutfitSelect={handleOutfitSelect}
          />
        </div>
      </div>
    </div>
  );

  const renderDrawingPanel = () => (
    <div className="flex gap-[2.75rem]">
      <PreviewPanel
        image={FIGMA_IMAGES.storyboard.drawing}
        alt="Drawing Storyboard"
        aspectRatio="drawing"
      />

      <div className="w-[35.75rem] flex flex-col gap-10">
        <CharacterPanel
          characters={mockCharacters}
          selectedCharacter={selectedCharacter}
          onCharacterSelect={handleCharacterSelect}
        />

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-[2rem] leading-[1.25em]">
            EDITING FUNCTIONS
          </h3>
          <SceneGrid
            scenes={DRAWING_SCENES.map((s) => ({ ...s, thumbnail: s.thumb }))}
            selectedScene={selectedScene}
            onSceneSelect={handleSceneSelect}
          />
        </div>
      </div>
    </div>
  );

  const renderComicsPanel = () => (
    <div className="flex gap-[2.75rem]">
      <PreviewPanel
        image={FIGMA_IMAGES.storyboard.comics}
        alt="Comics Storyboard"
        aspectRatio="comics"
      />

      <div className="w-[35.75rem] flex flex-col gap-10">
        <CharacterPanel
          characters={mockCharacters}
          selectedCharacter={selectedCharacter}
          onCharacterSelect={handleCharacterSelect}
        />

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-[2rem] leading-[1.25em]">
            SCENE SELECTOR
          </h3>
          <SceneSelector variant="comics" />
        </div>
      </div>
    </div>
  );

  const renderVideoPanel = () => (
    <div className="flex gap-[2.75rem]">
      <PreviewPanel
        image={FIGMA_IMAGES.storyboard.video}
        alt="Video Storyboard"
        aspectRatio="video"
      >
        <PlayButton />
      </PreviewPanel>

      <div className="w-[35.75rem] flex flex-col gap-10">
        <CharacterPanel
          characters={mockCharacters}
          selectedCharacter={selectedCharacter}
          onCharacterSelect={handleCharacterSelect}
        />

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-[2rem] leading-[1.25em]">
            SCENE SELECTOR
          </h3>
          <SceneSelector variant="video" />
        </div>
      </div>
    </div>
  );

  const renderActivePanel = () => {
    switch (activeTab) {
      case "OC":
        return renderOCPanel();
      case "DRAWING":
        return renderDrawingPanel();
      case "COMICS":
        return renderComicsPanel();
      case "VIDEO":
        return renderVideoPanel();
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
      <TopNav activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="flex-1 px-[3.75rem] py-4">{renderActivePanel()}</main>

      <ActiveBadge />

      <PageFooter />
    </div>
  );
}
