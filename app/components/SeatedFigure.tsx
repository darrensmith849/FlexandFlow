type Props = { className?: string };

export default function SeatedFigure({ className }: Props) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="seat-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#df8f91" />
          <stop offset="100%" stopColor="#8e3438" />
        </linearGradient>
        <radialGradient id="seat-glow" cx="50%" cy="48%" r="58%">
          <stop offset="0%" stopColor="#fff1f1" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#efbfc0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft halo */}
      <circle cx="200" cy="240" r="180" fill="url(#seat-glow)" />

      {/* Faint static breath rings */}
      <g fill="none" stroke="url(#seat-stroke)" opacity="0.45">
        <circle cx="200" cy="220" r="155" strokeWidth="0.5" />
        <circle cx="200" cy="220" r="120" strokeWidth="0.55" />
        <circle cx="200" cy="220" r="85" strokeWidth="0.6" />
      </g>

      {/* Animated breath release arcs */}
      <g fill="none" stroke="url(#seat-stroke)" strokeWidth="1">
        <circle className="breath-arc breath-arc-1" cx="200" cy="220" r="70" />
        <circle className="breath-arc breath-arc-2" cx="200" cy="220" r="70" />
        <circle className="breath-arc breath-arc-3" cx="200" cy="220" r="70" />
      </g>

      {/* Seated breath figure — cross-legged, arms resting */}
      <g
        className="figure-float"
        fill="none"
        stroke="url(#seat-stroke)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Head */}
        <ellipse cx="200" cy="135" rx="18" ry="22" />
        {/* Spine — tall and quiet */}
        <path d="M 200,159 L 200,260" />
        {/* Shoulder line */}
        <path d="M 178,180 L 222,180" opacity="0.5" />
        {/* Left arm to knee */}
        <path
          className="draw-in-once"
          d="M 178,180 Q 156,250 138,310"
        />
        {/* Right arm to knee */}
        <path d="M 222,180 Q 244,250 262,310" />
        {/* Crossed leg — left */}
        <path d="M 200,260 C 175,280 145,308 130,335" />
        {/* Crossed leg — right */}
        <path d="M 200,260 C 225,280 255,308 270,335" />
        {/* Sit-bone / mat line */}
        <path d="M 128,340 L 272,340" opacity="0.45" />
        {/* Hands resting on knees */}
        <ellipse cx="138" cy="318" rx="6.5" ry="4" opacity="0.6" />
        <ellipse cx="262" cy="318" rx="6.5" ry="4" opacity="0.6" />
      </g>
    </svg>
  );
}
