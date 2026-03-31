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
        title: t(`create_your_oc`),
        description: t(`design_face,_outfit,_personality_freely.`),
      },
      {
        id: "OC2",
        title: t(`customization`),
        description: t(`fine-tune_face,_hair,_body_freely.`),
      },
      {
        id: "OC3",
        title: t(`permanent_asset`),
        description: t(`use_across_art,_comics,_and_video.`),
      },
    ],
    DRAWING: [
      {
        id: "DRAWING1",
        title: t("pro_anime_art"),
        description: t("ai_creates_pro_illustrations."),
      },
      {
        id: "DRAWING2",
        title: t("9_creative_modes"),
        description: t("grids,_styles,_animation_&_more."),
      },
      {
        id: "DRAWING3",
        title: t("precise_control"),
        description: t("nano_editing_&_layout_tools."),
      },
    ],
    COMICS: [
      {
        id: "COMICS1",
        title: t("create_manga"),
        description: t("ai_does_layouts_&_panels."),
      },
      {
        id: "COMICS2",
        title: t("scene_library"),
        description: t("rich_backgrounds_for_your_world."),
      },
      {
        id: "COMICS3",
        title: t("story_comes_alive"),
        description: t("oc_×_scene_×_story_united."),
      },
    ],
    VIDEO: [
      {
        id: "VIDEO1",
        title: t("oc_in_90_seconds"),
        description: t("pick_scenes,_get_anime."),
      },
      {
        id: "VIDEO2",
        title: t("auto_drama"),
        description: t("ai_turns_6_scenes_into_animation."),
      },
      {
        id: "VIDEO3",
        title: t("still_to_animation"),
        description: t("turn_images_into_animation_instantly."),
      },
    ],
  });

  return (
    <footer className="w-full px-15 py-8 flex flex-col gap-6">
      <div className="flex items-center justify-between gap-16.25">
        <div className="flex gap-10 items-center">
          {data[activeTab].map((feature) => (
            <div key={feature.id} className="flex items-center gap-5">
              <div className="size-23.5 bg-[#D9D9D9] shrink-0" />
              <div className="flex flex-col gap-1 w-73">
                <h4
                  className="text-white font-bold text-[2.25rem] leading-[1.111em] truncate"
                  title={feature.title}
                >
                  {feature.title}
                </h4>
                <p
                  className="text-white/80 font-normal text-[1.5rem] leading-[1em] line-clamp-2"
                  title={feature.description}
                >
                  {feature.description}
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
