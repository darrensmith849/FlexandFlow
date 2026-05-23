import Image from "next/image";

type Props = { className?: string };

export default function HeroPhotoPanel({ className }: Props) {
  return (
    <div className={`relative ${className ?? ""}`} aria-hidden="true">
      {/* Real photo — Christina mid-stretch, leg extension */}
      <Image
        src="/photos/christina-stretch.jpg"
        alt=""
        fill
        sizes="(min-width: 1024px) 480px, 0"
        priority
        className="object-cover object-center brand-photo"
      />

      {/* Soft blush colour wash — multiplies into the photo's whites to bring them into the brand palette */}
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{
          background:
            "linear-gradient(180deg, rgba(248,221,221,0.22) 0%, rgba(239,191,192,0.32) 100%)",
        }}
      />

      {/* Radial edge fade — blends the photo edges into the panel background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 90% at center, transparent 35%, rgba(253,245,242,0.85) 100%)",
        }}
      />

      {/* Vignette deeper at the very corners */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 110% 110% at center, transparent 60%, rgba(142,52,56,0.18) 100%)",
        }}
      />

      {/* Bottom gradient — supports the caption legibility without darkening too much */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/5"
        style={{
          background:
            "linear-gradient(0deg, rgba(255,250,247,0.92) 0%, rgba(255,250,247,0.55) 35%, transparent 100%)",
        }}
      />

      {/* Editorial sequence label, top-right */}
      <div className="absolute top-7 right-8 flex items-center gap-3 text-deep-rose/65">
        <span className="hidden sm:inline-block w-14 h-px bg-current opacity-50" />
        <span className="text-[0.65rem] tracking-[0.3em] uppercase font-body">
          01 — Stretch Sequence
        </span>
      </div>

      {/* Breath release arcs around the chest area — subtle pulse */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hpp-arc" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#df8f91" />
            <stop offset="100%" stopColor="#8e3438" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#hpp-arc)" strokeWidth="0.9">
          <circle
            className="breath-arc breath-arc-1"
            cx="200"
            cy="230"
            r="60"
            opacity="0.45"
          />
          <circle
            className="breath-arc breath-arc-2"
            cx="200"
            cy="230"
            r="60"
            opacity="0.45"
          />
          <circle
            className="breath-arc breath-arc-3"
            cx="200"
            cy="230"
            r="60"
            opacity="0.45"
          />
        </g>
        {/* Drifting release ribbons */}
        <g fill="none" stroke="url(#hpp-arc)" strokeLinecap="round">
          <path
            className="flow-line flow-line-1"
            d="M-60,140 C100,108 250,160 460,128"
            strokeWidth="0.7"
            opacity="0.3"
          />
          <path
            className="flow-line flow-line-2"
            d="M-50,420 C120,452 280,410 450,445"
            strokeWidth="0.55"
            opacity="0.22"
          />
        </g>
      </svg>
    </div>
  );
}
