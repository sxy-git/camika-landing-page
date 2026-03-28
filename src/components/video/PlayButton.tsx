import { useCallback, useRef } from "react";
import { FIGMA_IMAGES } from "../../data/mockData";

interface PlayButtonProps {
  onClick?: () => void;
}

export function PlayButton({ onClick }: PlayButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    button.style.transition = "background 0.15s ease, transform 0.15s ease";
    button.style.background = "rgba(254,230,29,0.45)";
    button.style.transform = "scale(1.12)";

    setTimeout(() => {
      button.style.background = "";
      button.style.transform = "";
    }, 280);

    onClick?.();
  }, [onClick]);

  return (
    <div
      ref={buttonRef}
      onClick={handleClick}
      className="absolute left-[35.875rem] top-[30.75rem] w-[10rem] h-[8rem] bg-black/50 shadow-[0_4px_8px_0_rgba(0,0,0,0.8)] flex justify-end items-center p-6 cursor-pointer transition-all duration-200 hover:bg-yellow/25 hover:scale-[1.08] active:scale-[0.95]"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      <img
        src={FIGMA_IMAGES.playIcon}
        alt="Play"
        className="w-[4.125rem] h-[5rem] object-contain"
        loading="lazy"
      />
    </div>
  );
}
