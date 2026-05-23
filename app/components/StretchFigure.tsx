type Props = { className?: string };

export default function StretchFigure({ className }: Props) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="sf-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#df8f91" />
          <stop offset="100%" stopColor="#8e3438" />
        </linearGradient>
        <radialGradient id="sf-glow" cx="55%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#fff1f1" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#f8dddd" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#efbfc0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft halo behind the figure */}
      <ellipse cx="215" cy="210" rx="170" ry="210" fill="url(#sf-glow)" />

      {/* Drifting flow lines — exhale / release */}
      <g fill="none" stroke="url(#sf-stroke)" strokeLinecap="round">
        <path
          className="flow-line flow-line-1"
          d="M-60,150 Q200,130 460,160"
          strokeWidth="0.75"
          opacity="0.4"
        />
        <path
          className="flow-line flow-line-2"
          d="M-40,310 Q200,335 440,308"
          strokeWidth="0.6"
          opacity="0.28"
        />
        <path
          className="flow-line flow-line-3"
          d="M-30,445 Q200,425 440,450"
          strokeWidth="0.5"
          opacity="0.2"
        />
      </g>

      {/* Breath release arcs expanding from the torso */}
      <g fill="none" stroke="url(#sf-stroke)" strokeWidth="1.1">
        <circle
          className="breath-arc breath-arc-1"
          cx="215"
          cy="175"
          r="50"
        />
        <circle
          className="breath-arc breath-arc-2"
          cx="215"
          cy="175"
          r="50"
        />
        <circle
          className="breath-arc breath-arc-3"
          cx="215"
          cy="175"
          r="50"
        />
      </g>

      {/* Ghost echo behind — slow movement through the stretch */}
      <g
        fill="none"
        stroke="url(#sf-stroke)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.18"
        transform="translate(-9 6)"
      >
        <ellipse cx="215" cy="85" rx="16" ry="20" />
        <path d="M 215,107 Q 240,180 200,260" />
        <path d="M 197,122 C 195,65 220,50 285,75" />
        <path d="M 228,132 Q 270,185 235,260" />
        <path d="M 210,265 L 200,418" />
        <path d="M 240,265 L 250,418" />
      </g>

      {/* Ghost echo ahead */}
      <g
        fill="none"
        stroke="url(#sf-stroke)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.11"
        transform="translate(8 -4)"
      >
        <ellipse cx="215" cy="85" rx="16" ry="20" />
        <path d="M 215,107 Q 240,180 200,260" />
        <path d="M 197,122 C 195,65 220,50 285,75" />
        <path d="M 228,132 Q 270,185 235,260" />
        <path d="M 210,265 L 200,418" />
        <path d="M 240,265 L 250,418" />
      </g>

      {/* Main side-stretch figure — gently floats */}
      <g
        className="figure-float"
        fill="none"
        stroke="url(#sf-stroke)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Head */}
        <ellipse cx="215" cy="85" rx="16" ry="20" />
        {/* Spine — gentle C-curve into the side bend */}
        <path d="M 215,107 Q 240,180 200,260" />
        {/* Raised arm reaching up & curving over (traces in on load) */}
        <path
          className="draw-in-once"
          d="M 197,122 C 195,65 220,50 285,75"
        />
        {/* Down arm — relaxed at side */}
        <path d="M 228,132 Q 270,185 235,260" />
        {/* Hip line */}
        <path d="M 195,265 L 245,267" opacity="0.55" />
        {/* Left leg */}
        <path d="M 210,265 L 200,418" />
        {/* Right leg */}
        <path d="M 240,265 L 250,418" />
        {/* Feet */}
        <path d="M 190,420 L 215,420" opacity="0.6" />
        <path d="M 242,420 L 265,420" opacity="0.6" />
      </g>
    </svg>
  );
}
