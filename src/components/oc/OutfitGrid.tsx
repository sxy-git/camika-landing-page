import { useState, useCallback } from "react";
import type { Outfit } from "../../types/character";

interface OutfitGridProps {
  outfits: Outfit[]; // 服装列表
  selectedOutfit: Outfit | null; // 当前选中的服装
  onOutfitSelect: (outfit: Outfit) => void; // 服装选择回调函数
}

/**
 * @description 服装网格组件，以网格形式展示可选服装
 * @param outfits - 服装列表
 * @param selectedOutfit - 当前选中的服装
 * @param onOutfitSelect - 服装选择回调函数
 * @returns 服装网格 React 组件
 */
export function OutfitGrid({
  outfits,
  selectedOutfit,
  onOutfitSelect,
}: OutfitGridProps) {
  const [, setFlash] = useState(false); // 控制闪烁效果的状态

  /**
   * @description 处理服装点击事件
   * @param outfit - 被点击的服装对象
   */
  const handleOutfitClick = useCallback(
    (outfit: Outfit) => {
      setFlash(true);
      setTimeout(() => setFlash(false), 240);
      onOutfitSelect(outfit);
    },
    [onOutfitSelect],
  );

  const firstRow = outfits.slice(0, 4); // 第一行服装（最多4个）
  const secondRow = outfits.slice(4, 8); // 第二行服装（最多4个）

  /**
   * @description 渲染单个服装缩略图
   * @param outfit - 服装对象
   * @returns 服装缩略图 React 元素
   */
  const renderOutfitThumb = (outfit: Outfit) => {
    const isSelected = selectedOutfit?.id === outfit.id; // 判断是否被选中
    return (
      <div
        key={outfit.id}
        className="flex flex-col cursor-pointer items-center gap-1.5"
      >
        <button
          onClick={() => handleOutfitClick(outfit)}
          className={`w-32 h-28 cursor-pointer overflow-hidden transition-all duration-200 hover:scale-[1.04] ${
            isSelected
              ? "border-[0.1875rem] border-yellow bg-yellow/20 shadow-[inset_0_0_1.0625rem_0_rgba(254,230,29,0.4)]"
              : "border-[0.1875rem] border-red bg-red/20"
          }`}
        >
          <img
            src={outfit.image}
            alt={outfit.name}
            className="object-cover size-full scale-125"
            loading="lazy"
          />
        </button>
        <span
          className={`font-normal truncate text-[1.25rem] leading-[1.4em] text-center ${
            isSelected ? "text-yellow" : "text-white"
          }`}
          title={outfit.name}
        >
          {outfit.name}
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4 w-143">
      <div className="flex gap-5">{firstRow.map(renderOutfitThumb)}</div>
      {secondRow.length > 0 && (
        <div className="flex gap-5">{secondRow.map(renderOutfitThumb)}</div>
      )}
    </div>
  );
}
