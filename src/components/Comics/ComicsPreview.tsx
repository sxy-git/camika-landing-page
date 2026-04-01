import { useEffect, useState } from "react";
import { CharacterPanel } from "../shared/CharacterPanel";
import { SceneSelector } from "../shared/SceneSelector";
import { PreviewPanel } from "../common/PreviewPanel";
import { useComicsPanel } from "./useComicsPanel";
import { FIGMA_IMAGES } from "../../data/mockData";
import { useTranslation } from "react-i18next";

/**
 * @description 漫画预览组件，展示漫画故事板和角色选择
 * @returns 漫画预览面板 React 组件
 */
export function ComicsPreview() {
  const { t } = useTranslation();
  const { characters, selectedCharacter, handleCharacterSelect } =
    useComicsPanel();

  const comicsImages = selectedCharacter?.images || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? comicsImages.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === comicsImages.length - 1 ? 0 : prev + 1,
    );
  };
  useEffect(() => {
    if (selectedCharacter?.id) {
      setCurrentIndex(0);
    }
  }, [selectedCharacter?.id]);
  return (
    <div className="flex gap-11">
      <PreviewPanel
        titleKey="storyboard_preview"
        image={comicsImages[currentIndex]}
        alt={`Comics Storyboard ${currentIndex + 1}`}
      >
        <div className="absolute inset-0 flex items-center justify-between px-[2.63rem]">
          <button
            onClick={handlePrev}
            className="w-[3.7rem] h-22 cursor-pointer transition-all duration-300 active:scale-95 hover:scale-110"
            aria-label="previous"
            disabled={currentIndex === 0}
          >
            <img
              src={FIGMA_IMAGES.rightIcon}
              alt="prev"
              className={`size-full rotate-180 ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            />
          </button>
          <button
            onClick={handleNext}
            className="w-[3.7rem] h-22 cursor-pointer transition-all duration-300 active:scale-95 hover:scale-110"
            aria-label="next"
            disabled={currentIndex === comicsImages.length - 1}
          >
            <img
              src={FIGMA_IMAGES.rightIcon}
              alt="next"
              className={`size-full ${currentIndex === comicsImages.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            />
          </button>
        </div>
      </PreviewPanel>

      <div className="w-143 flex flex-col gap-10">
        <CharacterPanel
          characters={characters}
          selectedCharacter={selectedCharacter}
          onCharacterSelect={handleCharacterSelect}
        />

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-[2rem] leading-[1.25em]">
            {t("scene_selector")}
          </h3>
          <SceneSelector scenes={selectedCharacter?.scenes || []} />
        </div>
      </div>
    </div>
  );
}
