interface CharacterNameOverlayProps {
  name: string; // 角色名称
  nameEn: string; // 角色英文名称
  age: string; // 角色年龄
  zodiac: string; // 角色星座
  birthday: string; // 角色生日
}

/**
 * @description 角色名称叠加层组件，在预览图上显示角色信息
 * @param name - 角色名称
 * @param nameEn - 角色英文名称
 * @param age - 角色年龄
 * @param zodiac - 角色星座
 * @param birthday - 角色生日
 * @returns 角色名称叠加层 React 组件
 */
export function CharacterNameOverlay({
  name,
  nameEn,
  age,
  zodiac,
  birthday,
}: CharacterNameOverlayProps) {
  return (
    <div className="absolute left-0 bottom-0 w-294.5 px-[2.38rem] py-[1.75rem] bg-black/60 flex flex-col gap-1">
      <p className="text-white font-semibold text-[4.5rem] leading-[1.111em]">
        {name} {nameEn}
      </p>
      <p className="text-white/60 font-semibold text-[2rem] leading-[1.25em]">
        {age} / 1 {zodiac} / {birthday}
      </p>
    </div>
  );
}
