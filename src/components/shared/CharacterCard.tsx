import { useCallback } from "react";
import { ActiveBadge } from "../common/ActiveBadge";
import { useTranslation } from "react-i18next";

interface CharacterCardProps {
  id: string;
  name: string;
  image: string;
  isActive?: boolean;
  onClick?: (id: string) => void;
}

export function CharacterCard({
  id,
  name,
  image,
  isActive = false,
  onClick,
}: CharacterCardProps) {
  const { t } = useTranslation();

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(id);
    }
  }, [id, onClick]);

  const frameClass = `w-full h-full overflow-hidden border-3 transition-all duration-200 ${
    isActive
      ? "bg-[#684D0A] border-yellow shadow-[inset_0_0_1rem_0_rgba(254,230,29,0.6),0_0_1.5rem_0_rgba(254,230,29,0.4)]"
      : "bg-[#4A1B11] border-red/50 shadow-[inset_0_0_1rem_0_rgba(221,51,51,0.15)]"
  }`;

  const labelClass = `absolute bottom-1 w-[98%] left-[1%] h-16.25 flex items-center justify-center  border-t-3 transition-all duration-200 ${
    isActive
      ? "bg-[#2F3220] shadow-[-0_0.1875rem_0_0_#fee61d] border-yellow"
      : "bg-[#310E0E] shadow-[-0_0.1875rem_0_0_#d33] border-red"
  }`;

  const labelTextClass = `font-bold text-[1.5rem] leading-[1.286em] transition-all duration-200 ${
    isActive ? "text-yellow" : "text-red text-center"
  }`;

  const cardClass = `relative size-69 cursor-pointer transition-all duration-200  ${
    isActive ? "scale-[1.02]" : "hover:scale-[1.03]"
  }`;

  return (
    <div onClick={handleClick} className={cardClass} role="button" tabIndex={0}>
      <div className={frameClass}>
        {isActive && <ActiveBadge />}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-[center_5%]"
          loading="lazy"
        />
      </div>

      <div className={labelClass}>
        <span className={labelTextClass}>{t(name)}</span>
      </div>
    </div>
  );
}
