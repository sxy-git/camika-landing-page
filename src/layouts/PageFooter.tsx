import { useTranslation } from "react-i18next";
import { RippleButton } from "../components/common/RippleButton";
import type { TabName } from "../data/mockData";
import { useState } from "react";

interface PageFooterProps {
  activeTab: TabName;
  onTryFreeClick?: () => void;
}

/**
 * @description 页面底部组件，根据当前 tab 动态展示功能特点和版权信息
 * @param activeTab - 当前激活的 Tab，用于切换底部功能描述
 * @param onTryFreeClick - 点击"免费试用"按钮的回调函数
 * @returns 页面底部 React 组件
 */
export function PageFooter({ activeTab, onTryFreeClick }: PageFooterProps) {
  const { t } = useTranslation();
  const [data] = useState({
    OC: [
      {
        id: "OC1",
        title: `create_your_oc`,
        description: `design_face,_outfit,_personality_freely.`,
        image: `/icons/OC_footer_1.svg`,
      },
      {
        id: "OC2",
        title: `customization`,
        description: `fine-tune_face,_hair,_body_freely.`,
        image: `/icons/OC_footer_2.svg`,
      },
      {
        id: "OC3",
        title: `permanent_asset`,
        description: `use_across_art,_comics,_and_video.`,
        image: `/icons/OC_footer_3.svg`,
      },
    ],
    DRAWING: [
      {
        id: "DRAWING1",
        title: `pro_anime_art`,
        description: `ai_creates_pro_illustrations.`,
        image: `/icons/Drawing_footer_1.svg`,
      },
      {
        id: "DRAWING2",
        title: `9_creative_modes`,
        description: `grids,_styles,_animation_&_more.`,
        image: `/icons/Drawing_footer_2.svg`,
      },
      {
        id: "DRAWING3",
        title: `precise_control`,
        description: `nano_editing_&_layout_tools.`,
        image: `/icons/Drawing_footer_3.svg`,
      },
    ],
    COMICS: [
      {
        id: "COMICS1",
        title: `create_manga`,
        description: `ai_does_layouts_&_panels.`,
        image: `/icons/Comics_footer_1.svg`,
      },
      {
        id: "COMICS2",
        title: `scene_library`,
        description: `rich_backgrounds_for_your_world.`,
        image: `/icons/Comics_footer_2.svg`,
      },
      {
        id: "COMICS3",
        title: `story_comes_alive`,
        description: `oc_×_scene_×_story_united.`,
        image: `/icons/Comics_footer_3.svg`,
      },
    ],
    VIDEO: [
      {
        id: "VIDEO1",
        title: `oc_in_90_seconds`,
        description: `pick_scenes,_get_anime.`,
        image: `/icons/video_footer_1.svg`,
      },
      {
        id: "VIDEO2",
        title: `auto_drama`,
        description: `ai_turns_6_scenes_into_animation.`,
        image: `/icons/video_footer_2.svg`,
      },
      {
        id: "VIDEO3",
        title: `still_to_animation`,
        description: `turn_images_into_animation_instantly.`,
        image: `/icons/video_footer_3.svg`,
      },
    ],
  });

  return (
    <footer className="w-full px-15 py-8 flex flex-col gap-6">
      <div className="flex items-center justify-between gap-16.25">
        <div className="flex gap-10 items-center">
          {data[activeTab].map((feature) => (
            <div key={feature.id} className="flex items-center gap-5">
              <img
                src={feature.image}
                alt={feature.title}
                className="size-23.5 shrink-0"
              />
              <div className="flex flex-col gap-1 w-73">
                <h4
                  className="text-white font-bold text-[2.25rem] leading-[1.111em] truncate"
                  title={t(feature.title)}
                >
                  {t(feature.title)}
                </h4>
                <p
                  className="text-white/80 font-normal text-[1.5rem] leading-[1em] line-clamp-2"
                  title={t(feature.description)}
                >
                  {t(feature.description)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <RippleButton
          variant="tryFree"
          onClick={onTryFreeClick}
          className="w-90 h-26 cursor-pointer"
        >
          {t("try_for_free")}
        </RippleButton>
      </div>

      <div className="text-white/80 font-normal text-[1.25rem] leading-[1.2em]">
        © 2026 Camika · {t("privacy_policy")} | {t("terms_of_service")} |{" "}
        {t("contact")}
      </div>
    </footer>
  );
}
