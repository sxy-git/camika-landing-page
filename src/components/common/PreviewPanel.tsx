import { useTranslation } from "react-i18next";
import { useEffect, useState, type ReactNode } from "react";

interface PreviewPanelProps {
  image: string; // 预览图片的 URL
  alt: string; // 图片的替代文本
  children?: ReactNode; // 可选的子元素（如叠加层）
  titleKey: string; // 标题的 i18n 键
}

/**
 * @description 预览面板组件，用于展示故事板预览图片
 * @param image - 预览图片的 URL
 * @param alt - 图片的替代文本
 * @param children - 可选的子元素（如叠加层）
 * @param titleKey - 标题的 i18n 键
 * @returns 预览面板 React 组件
 */
export function PreviewPanel({
  image,
  alt,
  children,
  titleKey,
}: PreviewPanelProps) {
  const { t } = useTranslation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  useEffect(() => {
    if (image) {
      setIsVideoLoaded(false);
      const timer = setTimeout(() => {
        setIsVideoLoaded(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [image]);
  return (
    <div className="flex-1 flex flex-col">
      <h2 className="text-white font-bold text-[2rem] leading-[1.25em] mb-3">
        {t(titleKey)}
      </h2>
      <div
        className={`relative w-296 h-167 overflow-hidden bg-black/50 border-5 border-red`}
      >
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
            <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
        <img
          src={image}
          alt={alt}
          className="size-full object-contain transition-all duration-300"
          loading="lazy"
          onLoad={() => setIsVideoLoaded(true)}
          onError={() => setIsVideoLoaded(true)}
        />
        {children}
      </div>
    </div>
  );
}
