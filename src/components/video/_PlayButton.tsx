import { FIGMA_IMAGES } from "../../data/mockData";

interface PlayButtonProps {
  onClick?: () => void;
}

/**
 * @description 播放按钮组件，用于触发视频播放
 * @param onClick - 点击播放按钮的回调函数
 * @returns 播放按钮 React 组件
 */
export function PlayButton({ onClick }: PlayButtonProps) {
  return (
    <div
      onClick={onClick}
      className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-40 h-32 bg-black/50 shadow-[0_4px_8px_0_rgba(0,0,0,0.8)] flex justify-center items-center p-6 cursor-pointer transition-all duration-150 hover:scale-[1.08] active:duration-150"
      role="button"
      tabIndex={0}
    >
      <img
        src={FIGMA_IMAGES.playIcon}
        alt="Play"
        className="w-16.5 h-20 object-contain"
        loading="lazy"
      />
    </div>
  );
}
