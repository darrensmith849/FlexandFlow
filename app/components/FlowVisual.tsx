type Props = { className?: string };

export default function FlowVisual({ className }: Props) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="fv-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#df8f91" />
          <stop offset="100%" stopColor="#8e3438" />
        </linearGradient>
        <radialGradient id="fv-glow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#fff1f1" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#f8dddd" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#efbfc0" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="200" cy="260" rx="175" ry="190" fill="url(#fv-glow)" />

      <g fill="none" stroke="url(#fv-stroke)">
        <circle
          className="breathe-ring breathe-ring-1"
          cx="200"
          cy="260"
          r="180"
          strokeWidth="0.55"
        />
        <circle
          className="breathe-ring breathe-ring-2"
          cx="200"
          cy="260"
          r="140"
          strokeWidth="0.7"
        />
        <circle
          className="breathe-ring breathe-ring-3"
          cx="200"
          cy="260"
          r="100"
          strokeWidth="0.9"
        />
        <circle
          className="breathe-ring breathe-ring-4"
          cx="200"
          cy="260"
          r="60"
          strokeWidth="1.1"
        />
      </g>

      <path
        d="M-20,280 C80,160 220,240 280,200 S400,300 440,220"
        stroke="url(#fv-stroke)"
        strokeWidth="1.3"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />
      <path
        d="M-30,335 C60,285 180,365 250,320 S420,255 440,310"
        stroke="url(#fv-stroke)"
        strokeWidth="0.75"
        fill="none"
        opacity="0.35"
        strokeLinecap="round"
      />

      <path
        d="M200,95 Q170,180 200,260 Q230,340 200,420"
        stroke="#8e3438"
        strokeWidth="1"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />

      <circle cx="200" cy="95" r="4" fill="#8e3438" opacity="0.75" />
      <circle cx="200" cy="260" r="5.5" fill="#8e3438" opacity="0.95" />
      <circle cx="200" cy="420" r="3.5" fill="#8e3438" opacity="0.65" />

      <ellipse
        cx="118"
        cy="200"
        rx="22"
        ry="9"
        transform="rotate(-30 118 200)"
        fill="#df8f91"
        opacity="0.42"
      />
      <ellipse
        cx="282"
        cy="320"
        rx="22"
        ry="9"
        transform="rotate(-30 282 320)"
        fill="#df8f91"
        opacity="0.42"
      />
    </svg>
  );
}
