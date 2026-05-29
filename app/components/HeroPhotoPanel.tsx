import Image from "next/image";

type Props = { className?: string };

export default function HeroPhotoPanel({ className }: Props) {
  return (
    <div className={`relative ${className ?? ""}`} aria-hidden="true">
      {/* Editorial branded portrait — image carries its own typography
          ("Meet Christina / Founder & Instructor of Flex & Flow",
          and "FLEX & FLOW / Stretch. Breathe. Release. Reset." footer).
          We keep overlays minimal so the existing composition stays crisp. */}
      <Image
        src="/photos/meet-christina.jpg"
        alt=""
        fill
        sizes="(min-width: 1024px) 480px, 0"
        priority
        className="object-cover object-center"
      />

      {/* Very gentle radial edge fade — softly blends the photo edges into
          the panel's blush gradient background. Strong enough to integrate,
          subtle enough to leave the image readable. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 95% 100% at center, transparent 60%, rgba(253,245,242,0.5) 100%)",
        }}
      />
    </div>
  );
}
