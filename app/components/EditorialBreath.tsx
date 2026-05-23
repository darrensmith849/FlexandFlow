type Props = { className?: string };

const BREATH_BODY =
  "M 165,500 C 158,448 152,398 167,358 C 180,318 188,288 188,258 C 188,232 184,210 192,188 C 196,166 204,148 210,140 C 222,138 230,158 230,180 C 230,210 226,234 230,260 C 236,290 246,322 254,360 C 264,400 256,460 252,500 Z";

const BREATH_OUTLINE =
  "M 165,500 C 158,448 152,398 167,358 C 180,318 188,288 188,258 C 188,232 184,210 192,188 C 196,166 204,148 210,140";

export default function EditorialBreath({ className }: Props) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="eb-fill" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#df8f91" stopOpacity="0" />
          <stop offset="22%" stopColor="#df8f91" stopOpacity="0.2" />
          <stop offset="55%" stopColor="#c86f73" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#8e3438" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="eb-head" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#c86f73" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#df8f91" stopOpacity="0.2" />
        </radialGradient>
        <linearGradient id="eb-edge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#df8f91" />
          <stop offset="100%" stopColor="#8e3438" />
        </linearGradient>
        <radialGradient id="eb-halo" cx="50%" cy="48%" r="60%">
          <stop offset="0%" stopColor="#fff1f1" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#efbfc0" stopOpacity="0" />
        </radialGradient>
        <filter
          id="eb-blur"
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <filter id="eb-soft" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="0.7" />
        </filter>
      </defs>

      {/* Soft halo */}
      <circle cx="200" cy="240" r="200" fill="url(#eb-halo)" />

      {/* Faint static concentric breath rings */}
      <g fill="none" stroke="url(#eb-edge)" opacity="0.4">
        <circle cx="200" cy="225" r="165" strokeWidth="0.5" />
        <circle cx="200" cy="225" r="128" strokeWidth="0.55" />
        <circle cx="200" cy="225" r="90" strokeWidth="0.6" />
      </g>

      {/* Animated breath release arcs */}
      <g fill="none" stroke="url(#eb-edge)" strokeWidth="1">
        <circle
          className="breath-arc breath-arc-1"
          cx="200"
          cy="225"
          r="70"
        />
        <circle
          className="breath-arc breath-arc-2"
          cx="200"
          cy="225"
          r="70"
        />
        <circle
          className="breath-arc breath-arc-3"
          cx="200"
          cy="225"
          r="70"
        />
      </g>

      {/* Ghost echo of the seated body */}
      <g
        opacity="0.32"
        filter="url(#eb-blur)"
        transform="translate(0 6)"
      >
        <path d={BREATH_BODY} fill="url(#eb-fill)" />
        <ellipse cx="207" cy="132" rx="20" ry="24" fill="url(#eb-head)" />
      </g>

      {/* Main upright body silhouette — seated breath */}
      <g filter="url(#eb-soft)">
        <path d={BREATH_BODY} fill="url(#eb-fill)" />
        <ellipse cx="207" cy="132" rx="20" ry="24" fill="url(#eb-head)" />
        <path
          className="draw-in-once"
          d={BREATH_OUTLINE}
          fill="none"
          stroke="#8e3438"
          strokeWidth="0.75"
          opacity="0.4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
