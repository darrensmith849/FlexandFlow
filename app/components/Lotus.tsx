type Props = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export default function Lotus({ size = 28, className, strokeWidth = 1.4 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M32 52c-10 0-17-6-17-13 0-3 1-6 3-8" />
      <path d="M32 52c10 0 17-6 17-13 0-3-1-6-3-8" />
      <path d="M32 52c-7 0-11-6-11-13 0-6 4-13 11-21 7 8 11 15 11 21 0 7-4 13-11 13Z" />
      <path d="M18 31c-3 1-5 3-5 6 0 4 4 7 9 8" />
      <path d="M46 31c3 1 5 3 5 6 0 4-4 7-9 8" />
    </svg>
  );
}
