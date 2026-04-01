import { CharacterCard } from "./CharacterCard";
import type { Character } from "../../types/character";
import { useTranslation } from "react-i18next";

interface CharacterPanelProps {
  characters: Character[];
  selectedCharacter: Character | null;
  onCharacterSelect: (character: Character) => void;
}

/**
 * @description 角色面板组件，展示可选角色
 * @param characters - 角色列表
 * @param selectedCharacter - 当前选中的角色
 * @param onCharacterSelect - 角色选择回调函数
 * @returns 角色面板 React 组件
 */
export function CharacterPanel({
  characters,
  selectedCharacter,
  onCharacterSelect,
}: CharacterPanelProps) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-white font-bold text-[2rem] leading-[1.25em]">
        {t("character_portraits")}
      </h3>
      <div className="flex gap-5">
        {characters.map((char) => (
          <CharacterCard
            key={char.id}
            id={char.id}
            name={char.name}
            image={char.image || ""}
            isActive={selectedCharacter?.id === char.id}
            onClick={() => onCharacterSelect(char)}
          />
        ))}
      </div>
    </div>
  );
}
