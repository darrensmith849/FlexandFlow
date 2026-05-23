type Props = { className?: string };

const BODY_PATH =
  "M 152,500 C 142,440 138,378 156,326 C 174,286 180,256 180,232 C 178,208 178,178 198,158 C 218,146 232,158 234,184 C 234,210 226,226 220,242 C 232,272 250,322 257,382 C 262,442 258,478 257,500 Z";

const ARM_PATH =
  "M 220,206 C 213,184 218,150 246,118 C 270,90 293,84 297,108 C 298,128 282,138 256,142 C 235,148 220,168 215,188 Z";

const BODY_OUTLINE =
  "M 152,500 C 142,440 138,378 156,326 C 174,286 180,256 180,232 C 178,208 178,178 198,158 C 218,146 232,158 234,184";
const ARM_OUTLINE =
  "M 220,206 C 213,184 218,150 246,118 C 270,90 293,84 297,108";

export default function EditorialStretch({ className }: Props) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="es-fill" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#df8f91" stopOpacity="0" />
          <stop offset="22%" stopColor="#df8f91" stopOpacity="0.18" />
          <stop offset="55%" stopColor="#c86f73" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#8e3438" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="es-arm" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c86f73" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#df8f91" stopOpacity="0.08" />
        </linearGradient>
        <radialGradient id="es-head" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#c86f73" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#df8f91" stopOpacity="0.2" />
        </radialGradient>
        <linearGradient id="es-edge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#df8f91" />
          <stop offset="100%" stopColor="#8e3438" />
        </linearGradient>
        <radialGradient id="es-halo" cx="55%" cy="48%" r="62%">
          <stop offset="0%" stopColor="#fff1f1" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#f8dddd" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#efbfc0" stopOpacity="0" />
        </radialGradient>
        <filter
          id="es-blur"
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <filter id="es-soft" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="0.7" />
        </filter>
      </defs>

      {/* Soft halo */}
      <ellipse cx="220" cy="248" rx="185" ry="225" fill="url(#es-halo)" />

      {/* Drifting release ribbons (low opacity, slow drift) */}
      <g fill="none" stroke="url(#es-edge)" strokeLinecap="round">
        <path
          className="flow-line flow-line-1"
          d="M-60,160 C100,128 250,178 460,148"
          strokeWidth="0.9"
          opacity="0.42"
        />
        <path
          className="flow-line flow-line-2"
          d="M-50,332 C120,362 280,325 450,358"
          strokeWidth="0.65"
          opacity="0.28"
        />
        <path
          className="flow-line flow-line-3"
          d="M-30,455 C150,428 250,462 430,440"
          strokeWidth="0.5"
          opacity="0.2"
        />
      </g>

      {/* Ghost echo — heavily blurred silhouette suggesting movement */}
      <g
        opacity="0.38"
        filter="url(#es-blur)"
        transform="translate(-9 6)"
      >
        <path d={BODY_PATH} fill="url(#es-fill)" />
        <path d={ARM_PATH} fill="url(#es-arm)" />
        <ellipse cx="215" cy="148" rx="20" ry="24" fill="url(#es-head)" />
      </g>

      {/* Main editorial silhouette */}
      <g filter="url(#es-soft)">
        <path d={BODY_PATH} fill="url(#es-fill)" />
        <ellipse cx="215" cy="148" rx="20" ry="24" fill="url(#es-head)" />
        <path d={ARM_PATH} fill="url(#es-arm)" />

        {/* Refined tapered contour — outer edges only, very soft */}
        <path
          className="draw-in-once"
          d={BODY_OUTLINE}
          fill="none"
          stroke="#8e3438"
          strokeWidth="0.75"
          opacity="0.4"
          strokeLinecap="round"
        />
        <path
          d={ARM_OUTLINE}
          fill="none"
          stroke="#8e3438"
          strokeWidth="0.7"
          opacity="0.4"
          strokeLinecap="round"
        />
      </g>

      {/* Breath release arcs around the chest */}
      <g fill="none" stroke="url(#es-edge)" strokeWidth="1">
        <circle
          className="breath-arc breath-arc-1"
          cx="218"
          cy="248"
          r="58"
        />
        <circle
          className="breath-arc breath-arc-2"
          cx="218"
          cy="248"
          r="58"
        />
        <circle
          className="breath-arc breath-arc-3"
          cx="218"
          cy="248"
          r="58"
        />
      </g>
    </svg>
  );
}
