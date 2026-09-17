import React, { useRef, useState, useCallback } from 'react';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  key?: React.Key;
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt angle in degrees
  scale?: number;
  glareEffect?: boolean;
}

export function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  scale = 1.02,
  glareEffect = true,
  ...rest
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;

      // If hovering over an interactive control (link, button), damp tilt movement to guarantee reliable click event delivery
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, input, textarea')) {
        return;
      }

      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Mouse position relative to center of card (-0.5 to +0.5)
      const mouseX = (e.clientX - rect.left) / width - 0.5;
      const mouseY = (e.clientY - rect.top) / height - 0.5;

      // RotateX corresponds to mouseY (tilt up/down)
      // RotateY corresponds to mouseX (tilt left/right)
      const rotateX = -mouseY * maxTilt * 2;
      const rotateY = mouseX * maxTilt * 2;

      setTilt({ x: rotateX, y: rotateY });

      if (glareEffect) {
        setGlare({
          x: ((e.clientX - rect.left) / width) * 100,
          y: ((e.clientY - rect.top) / height) * 100,
          opacity: 0.25,
        });
      }
    },
    [maxTilt, glareEffect]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1200px',
      }}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
      {...rest}
    >
      <div
        style={{
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${scale}, ${scale}, ${scale})`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out',
        }}
        className="relative w-full h-full rounded-2xl"
      >
        {children}

        {/* Dynamic 3D Glare effect overlay */}
        {glareEffect && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 overflow-hidden"
            style={{
              opacity: glare.opacity,
              background: `radial-gradient(circle 280px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.45), transparent 70%)`,
              mixBlendMode: 'overlay',
            }}
          />
        )}
      </div>
    </div>
  );
}
