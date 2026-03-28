

interface CharacterNameOverlayProps {
  name: string;
  nameEn: string;
  age: string;
  zodiac: string;
  birthday: string;
}

export function CharacterNameOverlay({
  name,
  nameEn,
  age,
  zodiac,
  birthday,
}: CharacterNameOverlayProps) {
  return (
    <div className="absolute left-[0.3125rem] bottom-[3.0625rem] w-[73.625rem] p-7 pr-[32.3125rem] bg-black/60 flex flex-col gap-1">
      <p className="text-white font-semibold text-[4.5rem] leading-[1.111em]">
        {name} {nameEn}
      </p>
      <p className="text-white/60 font-semibold text-[2rem] leading-[1.25em]">
        {age} / 1 {zodiac} / {birthday}
      </p>
    </div>
  );
}
