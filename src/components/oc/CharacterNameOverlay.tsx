interface CharacterNameOverlayProps {
  name: string; // 角色名称
  info: string; // 角色信息
}

/**
 * @description 角色名称叠加层组件，在预览图上显示角色信息
 * @param name - 角色名称
 * @param info - 角色信息
 * @returns 角色名称叠加层 React 组件
 */
export function CharacterNameOverlay({
  name,
  info,
}: CharacterNameOverlayProps) {
  return (
    <div className="absolute left-0 bottom-0 w-294.5 px-[2.38rem] py-7 bg-black/60 flex flex-col gap-1">
      <p className="text-white font-semibold text-[4.5rem] leading-[1.111em]">
        {name}
      </p>
      <p className="text-white/60 font-semibold text-[2rem] leading-[1.25em]">
        {info}
      </p>
    </div>
  );
}
