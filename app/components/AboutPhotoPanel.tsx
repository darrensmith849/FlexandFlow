import Image from "next/image";

type Props = { className?: string };

export default function AboutPhotoPanel({ className }: Props) {
  return (
    <div className={`relative ${className ?? ""}`} aria-hidden="true">
      {/* Real photo — Christina, arms raised in pink */}
      <Image
        src="/photos/christina-portrait.jpg"
        alt=""
        fill
        sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
        className="object-cover object-[center_30%] brand-photo"
      />

      {/* Soft blush wash — multiplies into the grey stage background to pull it into the palette */}
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{
          background:
            "linear-gradient(180deg, rgba(248,221,221,0.32) 0%, rgba(239,191,192,0.42) 100%)",
        }}
      />

      {/* Radial edge fade — blends the photo edges into the panel background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 95% at 50% 45%, transparent 40%, rgba(253,245,242,0.7) 100%)",
        }}
      />

      {/* Soft corner vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 120% at center, transparent 55%, rgba(142,52,56,0.16) 100%)",
        }}
      />

      {/* Bottom gradient — supports the existing Christina credit caption above the panel edge */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/5"
        style={{
          background:
            "linear-gradient(0deg, rgba(255,250,247,0.92) 0%, rgba(255,250,247,0.45) 40%, transparent 100%)",
        }}
      />
    </div>
  );
}
