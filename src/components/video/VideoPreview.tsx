import { useEffect, useState } from "react";
import { CharacterPanel } from "../shared/CharacterPanel";
import { SceneSelector } from "../shared/SceneSelector";
import { useVideoPanel } from "./useVideoPanel";
import { useTranslation } from "react-i18next";

/**
 * @description 视频预览组件，展示视频故事板、角色选择和场景选择器
 * @returns 视频预览面板 React 组件
 */
export function VideoPreview() {
  const { t } = useTranslation();
  const { characters, selectedCharacter, handleCharacterSelect } =
    useVideoPanel();
  const [isShowVideo, setIsShowVideo] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  useEffect(() => {
    if (selectedCharacter?.video) {
      setIsShowVideo(false);
      setIsVideoLoaded(false);
      setTimeout(() => {
        setIsShowVideo(true);
      }, 10);
    }
  }, [selectedCharacter?.video]);
  return (
    <div className="flex gap-11">
      <div className="flex-1 flex flex-col">
        <h2 className="text-white font-bold text-[2rem] leading-[1.25em] mb-3">
          {t("storyboard_preview")}
        </h2>
        <div className="relative w-296 h-167 overflow-hidden bg-black/50 border-5 border-red">
          {!isVideoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}
          {selectedCharacter?.video && isShowVideo && (
            <iframe
              className="w-full h-full"
              allowFullScreen
              src={selectedCharacter?.video}
              onLoad={() => setIsVideoLoaded(true)}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          )}
        </div>
      </div>

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
