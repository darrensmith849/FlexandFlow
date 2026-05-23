type Props = { className?: string };

// Three-phase pose progression ribbons.
// Each is a tapering gesture-form representing a stretch reach phase.
// Read as: standing tall → starting to lean → full side stretch.
const PHASE_A =
  "M 175,505 C 168,420 165,330 175,245 C 184,170 192,110 200,80 C 208,68 217,72 218,90 C 217,130 215,200 213,250 C 215,335 218,420 212,505 Z";

const PHASE_B =
  "M 175,505 C 168,420 168,335 188,250 C 208,180 230,120 252,88 C 263,72 273,78 268,95 C 252,135 232,200 222,260 C 218,345 218,425 212,505 Z";

const PHASE_C =
  "M 175,505 C 168,420 172,335 200,250 C 230,180 262,118 296,80 C 311,65 320,75 308,98 C 280,140 250,200 232,265 C 222,348 220,425 212,505 Z";

export default function HeroStretchPanel({ className }: Props) {
  return (
    <svg
      viewBox="0 0 400 520"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="hsp-trail" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#8e3438" stopOpacity="0.6" />
          <stop offset="55%" stopColor="#c86f73" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#df8f91" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="hsp-edge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#df8f91" />
          <stop offset="100%" stopColor="#8e3438" />
        </linearGradient>
        <radialGradient id="hsp-halo" cx="50%" cy="42%" r="65%">
          <stop offset="0%" stopColor="#fff1f1" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#f8dddd" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#efbfc0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hsp-floor" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#efbfc0" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#efbfc0" stopOpacity="0" />
        </radialGradient>
        <filter
          id="hsp-blur"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <filter id="hsp-soft" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
      </defs>

      {/* Layered tonal background washes */}
      <ellipse cx="200" cy="220" rx="200" ry="240" fill="url(#hsp-halo)" />
      <ellipse cx="200" cy="510" rx="220" ry="80" fill="url(#hsp-floor)" />

      {/* Drifting release ribbons */}
      <g fill="none" stroke="url(#hsp-edge)" strokeLinecap="round">
        <path
          className="flow-line flow-line-1"
          d="M-60,140 C100,108 250,160 460,128"
          strokeWidth="0.9"
          opacity="0.4"
        />
        <path
          className="flow-line flow-line-2"
          d="M-50,308 C120,340 280,300 450,335"
          strokeWidth="0.6"
          opacity="0.26"
        />
        <path
          className="flow-line flow-line-3"
          d="M-30,440 C150,415 250,452 430,425"
          strokeWidth="0.5"
          opacity="0.2"
        />
      </g>

      {/* Phase A — standing tall (faintest ghost, heavily blurred) */}
      <g
        className="trail-phase trail-phase-a"
        opacity="0.16"
        filter="url(#hsp-blur)"
      >
        <path d={PHASE_A} fill="url(#hsp-trail)" />
      </g>

      {/* Phase B — leaning into the stretch (mid ghost) */}
      <g
        className="trail-phase trail-phase-b"
        opacity="0.28"
        filter="url(#hsp-blur)"
      >
        <path d={PHASE_B} fill="url(#hsp-trail)" />
      </g>

      {/* Phase C — full side stretch (the moment) */}
      <g
        className="trail-phase trail-phase-c"
        filter="url(#hsp-soft)"
      >
        <path d={PHASE_C} fill="url(#hsp-trail)" opacity="0.6" />
        <path
          className="draw-in-once"
          d="M 175,505 C 168,420 172,335 200,250 C 230,180 262,118 296,80"
          fill="none"
          stroke="#8e3438"
          strokeWidth="0.85"
          opacity="0.45"
          strokeLinecap="round"
        />
      </g>

      {/* Motion-trail tip markers — fingertip positions through the stretch */}
      <g>
        <circle
          className="trail-tip trail-tip-a"
          cx="209"
          cy="80"
          r="3.5"
          fill="#8e3438"
          opacity="0.25"
        />
        <circle
          className="trail-tip trail-tip-b"
          cx="265"
          cy="88"
          r="4"
          fill="#8e3438"
          opacity="0.4"
        />
        <circle
          className="trail-tip trail-tip-c"
          cx="307"
          cy="80"
          r="5"
          fill="#8e3438"
          opacity="0.7"
        />
      </g>

      {/* Breath release arcs centred on the chest of the active phase */}
      <g fill="none" stroke="url(#hsp-edge)" strokeWidth="1">
        <circle
          className="breath-arc breath-arc-1"
          cx="225"
          cy="220"
          r="56"
        />
        <circle
          className="breath-arc breath-arc-2"
          cx="225"
          cy="220"
          r="56"
        />
        <circle
          className="breath-arc breath-arc-3"
          cx="225"
          cy="220"
          r="56"
        />
      </g>

      {/* Editorial sequence label (top-right) */}
      <g className="trail-label">
        <text
          x="368"
          y="42"
          textAnchor="end"
          fontFamily="serif"
          fontSize="10"
          letterSpacing="3"
          fill="#8e3438"
          opacity="0.55"
        >
          01 — STRETCH SEQUENCE
        </text>
        <line
          x1="252"
          y1="48"
          x2="368"
          y2="48"
          stroke="#8e3438"
          strokeWidth="0.5"
          opacity="0.35"
        />
      </g>
    </svg>
  );
}
