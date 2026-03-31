import { useCallback, useRef } from "react";

interface RippleButtonProps {
  children: React.ReactNode; // 按钮内容
  onClick?: (e: React.MouseEvent) => void; // 点击事件回调
  className?: string; // 自定义样式类
  variant?: "nav" | "login" | "tryFree"; // 按钮变体
  disabled?: boolean; // 是否禁用
  active?: boolean; // 是否处于激活状态
}

/**
 * @description 涟漪效果按钮组件，支持多种变体和点击动画
 * @param children - 按钮显示的内容
 * @param onClick - 点击事件回调函数
 * @param className - 自定义样式类名
 * @param variant - 按钮样式变体（nav/login/tryFree）
 * @param disabled - 是否禁用按钮
 * @param active - 是否处于激活状态
 * @returns 涟漪按钮 React 组件
 */
export function RippleButton({
  children,
  onClick,
  className = "",
  variant = "nav",
  disabled = false,
  active = false,
}: RippleButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null); // 按钮元素的引用

  /**
   * @description 生成涟漪动画效果
   * @param e - 鼠标点击事件对象
   */
  const spawnRipple = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current || disabled) return;

      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();
      const scaleV = 1;

      const x = e.clientX / scaleV - rect.left / scaleV - rect.width / 2;
      const y = e.clientY / scaleV - rect.top / scaleV - rect.height / 2;
      const size = Math.max(rect.width, rect.height);

      const ripple = document.createElement("span");
      ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      top: ${y}px;
      left: ${x}px;
      background: rgba(254, 230, 29, 0.28);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-expand 0.45s ease-out forwards;
      pointer-events: none;
    `;

      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);
    },
    [disabled],
  );

  /**
   * @description 处理按钮点击事件
   * @param e - 鼠标点击事件对象
   */
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      spawnRipple(e);
      onClick?.(e);
    },
    [onClick, spawnRipple],
  );

  const baseClasses = "relative overflow-hidden transition-all duration-200"; // 基础样式类

  const variantClasses = {
    // 不同变体对应的样式
    nav: `bg-black border-4 border-red truncate font-bold text-[1.875rem] hover:-translate-y-0.5 active:scale-95 ${
      !active && "hover:bg-yellow/10"
    }`,
    login:
      "bg-transparent border-2 border-yellow text-yellow font-bold text-[2.25rem] hover:bg-yellow hover:text-black active:scale-95",
    tryFree:
      "bg-yellow text-black font-bold text-[2.5rem] hover:scale-105 hover:shadow-[0_4px_28px_rgba(254,230,29,0.45)] active:scale-[0.97]",
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
