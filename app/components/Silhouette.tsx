type Props = { className?: string };

export default function Silhouette({ className }: Props) {
  return (
    <svg
      viewBox="0 0 320 520"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="silh" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#efbfc0" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#df8f91" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <g fill="url(#silh)">
        <circle cx="170" cy="62" r="22" />
        <path d="M170 86c-14 0-22 8-24 22l-8 60c-2 14 4 22 14 26l-12 80c-2 14 0 22 8 28l-22 100c-3 14 4 22 18 22 10 0 16-6 18-18l16-92 10 92c2 12 8 18 18 18 14 0 21-8 18-22l-22-100c8-6 10-14 8-28l-12-80c10-4 16-12 14-26l-8-60c-2-14-10-22-24-22Z" />
        <path d="M138 138c-10 4-18 14-24 30l-22 60c-4 10 0 18 10 20s16-4 20-14l16-44 4-10c2-6 0-12-4-18Z" />
        <path d="M202 138c10 4 18 14 24 30l22 60c4 10 0 18-10 20s-16-4-20-14l-16-44-4-10c-2-6 0-12 4-18Z" />
      </g>
    </svg>
  );
}
