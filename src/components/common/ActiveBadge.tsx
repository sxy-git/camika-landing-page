import { useEffect, useRef } from 'react';

export function ActiveBadge() {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pingBadge = () => {
      if (!badgeRef.current) return;
      badgeRef.current.style.transition =
        'opacity 0.12s ease, transform 0.18s cubic-bezier(0.34,1.56,0.64,1)';
      badgeRef.current.style.opacity = '0';
      badgeRef.current.style.transform = 'scale(0.7)';
      setTimeout(() => {
        if (!badgeRef.current) return;
        badgeRef.current.style.opacity = '1';
        badgeRef.current.style.transform = 'scale(1)';
        setTimeout(() => {
          if (badgeRef.current) badgeRef.current.style.transition = '';
        }, 220);
      }, 130);
    };

    const timer = setTimeout(pingBadge, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={badgeRef}
      className="absolute left-[80.5rem] top-[13.5rem] h-8 px-[0.625rem] bg-yellow flex items-center z-10 font-bold text-[1rem] leading-[1.5em] text-black whitespace-nowrap pointer-events-none"
      style={{ opacity: 1, transform: 'scale(1)' }}
    >
      ACTIVE
    </div>
  );
}
