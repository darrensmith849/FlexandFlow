type Props = { className?: string };

export default function BreathingOrb({ className }: Props) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="bo-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#df8f91" />
          <stop offset="100%" stopColor="#8e3438" />
        </linearGradient>
        <radialGradient id="bo-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff1f1" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#efbfc0" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="250" r="185" fill="url(#bo-glow)" />

      <g fill="none" stroke="url(#bo-stroke)">
        <circle
          className="breathe-ring breathe-ring-1"
          cx="200"
          cy="250"
          r="170"
          strokeWidth="0.45"
        />
        <circle
          className="breathe-ring breathe-ring-2"
          cx="200"
          cy="250"
          r="130"
          strokeWidth="0.65"
        />
        <circle
          className="breathe-ring breathe-ring-3"
          cx="200"
          cy="250"
          r="90"
          strokeWidth="0.85"
        />
        <circle
          className="breathe-ring breathe-ring-4"
          cx="200"
          cy="250"
          r="50"
          strokeWidth="1.05"
        />
      </g>

      <path
        d="M50,395 Q200,100 350,395"
        stroke="url(#bo-stroke)"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M80,420 Q200,180 320,420"
        stroke="url(#bo-stroke)"
        strokeWidth="0.55"
        fill="none"
        opacity="0.3"
        strokeLinecap="round"
      />

      <g fill="#8e3438" opacity="0.6">
        <circle cx="200" cy="65" r="3.2" />
        <circle cx="335" cy="148" r="2.5" />
        <circle cx="380" cy="296" r="2.5" />
        <circle cx="290" cy="425" r="2.5" />
        <circle cx="110" cy="425" r="2.5" />
        <circle cx="20" cy="296" r="2.5" />
        <circle cx="65" cy="148" r="2.5" />
      </g>

      <circle cx="200" cy="250" r="5.5" fill="#8e3438" />

      <ellipse
        cx="105"
        cy="250"
        rx="24"
        ry="10"
        transform="rotate(15 105 250)"
        fill="#df8f91"
        opacity="0.38"
      />
      <ellipse
        cx="295"
        cy="250"
        rx="24"
        ry="10"
        transform="rotate(-15 295 250)"
        fill="#df8f91"
        opacity="0.38"
      />
    </svg>
  );
}
