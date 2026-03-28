import { useCallback, useRef } from "react";

interface CharacterCardProps {
  id: string;
  name: string;
  image: string;
  variant: "golden" | "red";
  isActive?: boolean;
  onClick?: (id: string) => void;
}

export function CharacterCard({
  id,
  name,
  image,
  variant,
  isActive = false,
  onClick,
}: CharacterCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    if (!cardRef.current || !onClick) return;

    const card = cardRef.current;
    card.style.transition = "transform 0.18s cubic-bezier(0.34,1.56,0.64,1)";
    card.style.transform = "scale(1.08)";

    setTimeout(() => {
      card.style.transform = "scale(1)";
      setTimeout(() => {
        card.style.transition = "";
      }, 220);
    }, 180);

    onClick(id);
  }, [id, onClick]);

  const frameClass =
    variant === "golden"
      ? "bg-[#684D0A] border-[0.1875rem] border-yellow shadow-[inset_0_0_1rem_0_rgba(254,230,29,0.4)]"
      : "bg-[#4A1B11] border-[0.1875rem] border-red shadow-[inset_0_0_1rem_0_rgba(221,51,51,0.15)]";

  const labelClass =
    variant === "golden"
      ? "bg-[#2F3220] shadow-[-0_0.1875rem_0_0_#fee61d]"
      : "bg-[#310E0E] shadow-[-0_0.1875rem_0_0_#d33]";

  const labelTextClass =
    variant === "golden" ? "text-yellow" : "text-red uppercase text-center";

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className={`relative w-[17.25rem] h-[17.25rem] cursor-pointer transition-transform duration-200 hover:scale-[1.03] ${isActive ? "ring-4 ring-yellow" : ""}`}
      role="button"
      tabIndex={0}
    >
      <div className={`w-full h-full overflow-hidden ${frameClass}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-[center_15%]"
          loading="lazy"
        />
      </div>

      <div
        className={`absolute bottom-0 left-0 w-full h-[4.0625rem] flex items-center justify-center p-3 ${labelClass}`}
      >
        <span
          className={`font-bold text-[1.75rem] leading-[1.286em] ${labelTextClass}`}
        >
          {name}
        </span>
      </div>
    </div>
  );
}
