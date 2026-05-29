import { MessageCircle, Sparkles } from "lucide-react";
import Lotus from "./Lotus";
import HeroPhotoPanel from "./HeroPhotoPanel";
import Reveal from "./Reveal";

const WHATSAPP_URL = "https://wa.me/27685660513";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="watercolour-hero relative overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 pt-14 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-center">
        <Reveal>
          <div className="flex items-center gap-3 text-dusty-rose mb-6">
            <Lotus size={22} strokeWidth={1.5} />
            <span className="divider-thin" aria-hidden="true" />
            <span className="text-[0.85rem] tracking-[0.25em] uppercase font-body">
              Flex &amp; Flow
            </span>
          </div>

          <h1
            id="hero-heading"
            className="font-serif-heading leading-[1.02] text-[clamp(2.7rem,6.5vw,5.25rem)]"
          >
            <span className="block text-dusty-rose">Stretch.</span>
            <span className="block text-dusty-rose">Breathe.</span>
            <span className="block text-deep-rose">Release.</span>
            <span className="block text-deep-rose">Reset.</span>
          </h1>

          <p className="mt-7 text-rose font-serif-heading text-[1.4rem] md:text-[1.55rem] tracking-wide">
            Gentle movement. Deep release. Lasting change.
          </p>

          <p className="mt-5 max-w-xl text-[1.18rem] md:text-[1.22rem] leading-[1.7] text-charcoal/85">
            A mindful stretch and mobility class designed to help you feel
            lighter, move better, and reconnect with yourself.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book your class on WhatsApp"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-dusty-rose hover:bg-rose text-white px-9 py-4 text-[1.1rem] tracking-wide transition-all hover:-translate-y-0.5 shadow-[0_12px_30px_-12px_rgba(74,92,63,0.5)]"
            >
              <MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" />
              Book Your Class
            </a>
            <span className="text-charcoal/65 text-[0.95rem] flex items-start gap-2 leading-snug max-w-xs">
              <Sparkles
                size={16}
                strokeWidth={1.5}
                className="text-dusty-rose mt-0.5 flex-shrink-0"
                aria-hidden="true"
              />
              Beginner-friendly stretch &amp; mobility classes with Christina
              Ribeiro.
            </span>
          </div>
        </Reveal>

        {/* Replace with real class/movement photo later. */}
        <div className="hidden lg:block relative">
          <Reveal>
            <div
              className="relative aspect-square rounded-[32px] overflow-hidden border border-line/50 shadow-[0_30px_80px_-40px_rgba(74,92,63,0.32)] bg-gradient-to-br from-blush-50 via-soft-cream to-blush-100"
              aria-hidden="true"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 70% 25%, rgba(216,222,198,0.85) 0%, transparent 55%), radial-gradient(circle at 25% 80%, rgba(185,196,164,0.55) 0%, transparent 60%)",
                }}
              />
              <HeroPhotoPanel className="absolute inset-0 w-full h-full" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
