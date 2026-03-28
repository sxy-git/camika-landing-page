
import { RippleButton } from '../ui/RippleButton';
import { BOTTOM_FEATURES } from '../../data/mockData';

interface BottomFeaturesProps {
  onTryFreeClick?: () => void;
}

export function BottomFeatures({ onTryFreeClick }: BottomFeaturesProps) {
  return (
    <div className="w-full flex items-center justify-between gap-[4.0625rem]">
      <div className="flex gap-10 items-center">
        {BOTTOM_FEATURES.map((feature) => (
          <div key={feature.id} className="flex items-center gap-5">
            <div className="w-[5.875rem] h-[5.875rem] bg-[#D9D9D9] opacity-40 flex-shrink-0" />
            <div className="flex flex-col gap-1 w-[18.25rem]">
              <h4 className="text-white font-bold text-[2.25rem] leading-[1.111em]">
                {feature.title}
              </h4>
              <p className="text-white/80 font-normal text-[1.5rem] leading-[1em]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <RippleButton
        variant="tryFree"
        onClick={onTryFreeClick}
        className="w-[22.5rem] p-8"
      >
        TRY FOR FREE
      </RippleButton>
    </div>
  );
}
