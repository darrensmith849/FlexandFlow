type Props = { className?: string };

export default function AboutStudioPanel({ className }: Props) {
  return (
    <svg
      viewBox="0 0 400 600"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Warm wall gradient — morning light from above */}
        <linearGradient id="asp-wall" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#fff1f1" stopOpacity="1" />
          <stop offset="50%" stopColor="#fdf5f2" stopOpacity="1" />
          <stop offset="100%" stopColor="#f8dddd" stopOpacity="1" />
        </linearGradient>
        {/* Floor gradient — slightly deeper warm tone */}
        <linearGradient id="asp-floor" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#f8dddd" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#efbfc0" stopOpacity="0.5" />
        </linearGradient>
        {/* Diagonal sunlight beam */}
        <linearGradient id="asp-light" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff8f6" stopOpacity="0.7" />
          <stop offset="60%" stopColor="#fff8f6" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#fff8f6" stopOpacity="0" />
        </linearGradient>
        {/* Object gradients */}
        <linearGradient id="asp-pot" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c86f73" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#8e3438" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="asp-leaf" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#8e3438" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#c86f73" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="asp-mat" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#df8f91" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#c86f73" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="asp-mat-end" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#8e3438" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#c86f73" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="asp-bottle" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#fdf5f2" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#f8dddd" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="asp-towel" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#fdf5f2" stopOpacity="1" />
          <stop offset="100%" stopColor="#f8dddd" stopOpacity="1" />
        </linearGradient>
        <radialGradient id="asp-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8e3438" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#8e3438" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Wall (background) */}
      <rect x="0" y="0" width="400" height="440" fill="url(#asp-wall)" />

      {/* Floor */}
      <rect x="0" y="440" width="400" height="160" fill="url(#asp-floor)" />

      {/* Subtle wall/floor horizon line */}
      <line
        x1="0"
        y1="440"
        x2="400"
        y2="440"
        stroke="#c86f73"
        strokeOpacity="0.18"
        strokeWidth="0.5"
      />

      {/* Diagonal sunlight beam from upper-right */}
      <polygon
        className="studio-light"
        points="400,0 200,0 50,600 250,600"
        fill="url(#asp-light)"
      />

      {/* Editorial label top-left */}
      <g>
        <text
          x="28"
          y="42"
          fontFamily="serif"
          fontSize="10"
          letterSpacing="3"
          fill="#8e3438"
          opacity="0.55"
        >
          THE STUDIO
        </text>
        <line
          x1="28"
          y1="50"
          x2="120"
          y2="50"
          stroke="#8e3438"
          strokeWidth="0.5"
          opacity="0.35"
        />
      </g>

      {/* Plant: pot + snake-plant leaves */}
      <g className="studio-object studio-object-1">
        {/* Soft shadow under pot */}
        <ellipse cx="78" cy="478" rx="48" ry="6" fill="url(#asp-shadow)" />
        {/* Snake plant leaves — tall slender almond shapes */}
        <path
          d="M 50,475 C 48,420 44,360 52,290 C 56,260 60,250 62,290 C 60,360 56,420 58,475 Z"
          fill="url(#asp-leaf)"
        />
        <path
          d="M 65,475 C 64,420 65,340 75,255 C 80,225 84,222 82,260 C 76,340 72,420 73,475 Z"
          fill="url(#asp-leaf)"
        />
        <path
          d="M 82,475 C 84,410 92,310 96,225 C 100,200 103,210 100,235 C 96,320 90,410 90,475 Z"
          fill="url(#asp-leaf)"
        />
        <path
          d="M 98,475 C 100,415 108,340 114,275 C 118,250 120,250 117,285 C 112,355 108,420 106,475 Z"
          fill="url(#asp-leaf)"
        />
        {/* Pot — tapered trapezoid */}
        <path
          d="M 42,475 L 114,475 L 108,408 L 48,408 Z"
          fill="url(#asp-pot)"
        />
        {/* Soil rim */}
        <ellipse
          cx="78"
          cy="408"
          rx="30"
          ry="3"
          fill="#8e3438"
          opacity="0.5"
        />
        {/* Pot highlight */}
        <line
          x1="52"
          y1="415"
          x2="55"
          y2="468"
          stroke="#fff1f1"
          strokeOpacity="0.4"
          strokeWidth="1"
        />
      </g>

      {/* Folded towel — small rectangle near the mat */}
      <g className="studio-object studio-object-2">
        <ellipse cx="170" cy="528" rx="40" ry="4" fill="url(#asp-shadow)" />
        <g transform="rotate(-3 170 510)">
          <rect
            x="135"
            y="492"
            width="72"
            height="32"
            rx="2"
            fill="url(#asp-towel)"
            stroke="#c86f73"
            strokeOpacity="0.3"
            strokeWidth="0.5"
          />
          <line
            x1="138"
            y1="502"
            x2="204"
            y2="502"
            stroke="#c86f73"
            strokeOpacity="0.35"
            strokeWidth="0.5"
          />
          <line
            x1="138"
            y1="513"
            x2="204"
            y2="513"
            stroke="#c86f73"
            strokeOpacity="0.25"
            strokeWidth="0.5"
          />
        </g>
      </g>

      {/* Rolled yoga mat — central foreground */}
      <g className="studio-object studio-object-3">
        {/* Floor shadow */}
        <ellipse cx="240" cy="565" rx="120" ry="9" fill="url(#asp-shadow)" />
        {/* Mat body — long horizontal cylinder, side view */}
        <rect
          x="155"
          y="528"
          width="170"
          height="32"
          rx="3"
          fill="url(#asp-mat)"
        />
        {/* Left circular end face */}
        <ellipse
          cx="155"
          cy="544"
          rx="6"
          ry="16"
          fill="url(#asp-mat-end)"
        />
        {/* Right circular end face */}
        <ellipse
          cx="325"
          cy="544"
          rx="6"
          ry="16"
          fill="url(#asp-mat-end)"
        />
        {/* Subtle roll seam */}
        <line
          x1="155"
          y1="544"
          x2="325"
          y2="544"
          stroke="#8e3438"
          strokeOpacity="0.18"
          strokeWidth="0.5"
        />
        {/* Strap detail */}
        <rect
          x="220"
          y="525"
          width="14"
          height="38"
          fill="#8e3438"
          opacity="0.25"
          rx="1"
        />
      </g>

      {/* Water bottle — standing right of mat */}
      <g className="studio-object studio-object-4">
        <ellipse cx="345" cy="528" rx="22" ry="3.5" fill="url(#asp-shadow)" />
        {/* Bottle body */}
        <rect
          x="328"
          y="410"
          width="36"
          height="115"
          rx="6"
          fill="url(#asp-bottle)"
          stroke="#c86f73"
          strokeOpacity="0.35"
          strokeWidth="0.5"
        />
        {/* Cap */}
        <rect
          x="334"
          y="392"
          width="24"
          height="20"
          rx="2"
          fill="#c86f73"
          opacity="0.85"
        />
        <rect
          x="336"
          y="386"
          width="20"
          height="6"
          rx="1"
          fill="#8e3438"
          opacity="0.6"
        />
        {/* Water line */}
        <line
          x1="332"
          y1="460"
          x2="360"
          y2="460"
          stroke="#c86f73"
          strokeOpacity="0.35"
          strokeWidth="0.6"
        />
        {/* Bottle highlight */}
        <line
          x1="334"
          y1="425"
          x2="334"
          y2="510"
          stroke="#fff1f1"
          strokeOpacity="0.55"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}
