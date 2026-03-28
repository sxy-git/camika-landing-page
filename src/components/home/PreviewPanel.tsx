import type { ReactNode } from 'react';

interface PreviewPanelProps {
  image: string;
  alt: string;
  children?: ReactNode;
  aspectRatio?: 'oc' | 'drawing' | 'comics' | 'video';
}

export function PreviewPanel({ image, alt, children, aspectRatio = 'drawing' }: PreviewPanelProps) {
  const heightClass = aspectRatio === 'oc' ? 'h-[41.75rem]' : 'h-[41.75rem]';

  return (
    <div className="flex-1 flex flex-col">
      <h2 className="text-white font-bold text-[2rem] leading-[1.25em] mb-3">
        STORYBOARD PREVIEW
      </h2>
      <div className={`relative w-[74rem] ${heightClass} overflow-hidden bg-black/50`}>
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-all duration-300"
          loading="lazy"
        />
        {children}
      </div>
    </div>
  );
}
