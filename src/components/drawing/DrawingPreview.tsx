import { useTranslation } from "react-i18next";
import { CharacterPanel } from "../shared/CharacterPanel";
import { SceneGrid } from "./SceneGrid";
import { PreviewPanel } from "../common/PreviewPanel";
import { DRAWING_SCENES, useDrawingPanel } from "./useDrawingPanel";
import { FIGMA_IMAGES } from "../../data/mockData";

/**
 * @description 绘图预览组件，展示绘图故事板、角色选择和场景网格
 * @returns 绘图预览面板 React 组件
 */
export function DrawingPreview() {
  const { t } = useTranslation();
  const {
    characters,
    selectedCharacter,
    handleCharacterSelect,
    selectedScene,
  } = useDrawingPanel();
  return (
    <div className="flex gap-11">
      <PreviewPanel
        image={
          selectedCharacter?.image || FIGMA_IMAGES.storyboard.drawing || ""
        }
        titleKey="storyboard_preview"
        alt="Drawing Storyboard"
      />

      <div className="w-143 flex flex-col gap-10">
        <CharacterPanel
          characters={characters}
          selectedCharacter={selectedCharacter}
          onCharacterSelect={handleCharacterSelect}
        />

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-[2rem] leading-[1.25em]">
            {t("editing_functions")}
          </h3>
          <SceneGrid scenes={DRAWING_SCENES} selectedScene={selectedScene} />
        </div>
      </div>
    </div>
  );
}
