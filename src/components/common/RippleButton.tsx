import { useCallback, useRef } from 'react';

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  variant?: 'nav' | 'login' | 'tryFree';
  disabled?: boolean;
}

export function RippleButton({
  children,
  onClick,
  className = '',
  variant = 'nav',
  disabled = false,
}: RippleButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const spawnRipple = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || disabled) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const scaleV = 1;

    const x = e.clientX / scaleV - rect.left / scaleV - rect.width / 2;
    const y = e.clientY / scaleV - rect.top / scaleV - rect.height / 2;
    const size = Math.max(rect.width, rect.height);

    const ripple = document.createElement('span');
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
  }, [disabled]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      spawnRipple(e);
      onClick?.(e);
    },
    [onClick, spawnRipple],
  );

  const baseClasses = 'relative overflow-hidden transition-all duration-200';

  const variantClasses = {
    nav: 'bg-black border-4 border-red text-white font-bold text-[1.875rem] hover:bg-yellow/10 hover:-translate-y-0.5 active:scale-95',
    login: 'bg-transparent border-2 border-yellow text-yellow font-bold text-[2.25rem] hover:bg-yellow hover:text-black active:scale-95',
    tryFree: 'bg-yellow text-black font-bold text-[2.5rem] hover:scale-105 hover:shadow-[0_4px_28px_rgba(254,230,29,0.45)] active:scale-[0.97]',
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
