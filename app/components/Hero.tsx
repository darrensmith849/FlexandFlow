import Lotus from "./Lotus";
import Silhouette from "./Silhouette";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="watercolour-hero relative overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
            className="font-serif-heading leading-[1.02] text-[clamp(2.6rem,6.5vw,5.25rem)]"
          >
            <span className="block text-dusty-rose">Stretch.</span>
            <span className="block text-dusty-rose">Breathe.</span>
            <span className="block text-deep-rose">Release.</span>
            <span className="block text-deep-rose">Reset.</span>
          </h1>

          <p className="mt-7 text-rose font-serif-heading text-[1.35rem] md:text-[1.5rem] tracking-wide">
            Gentle movement. Deep release. Lasting change.
          </p>

          <p className="mt-5 max-w-xl text-[1.15rem] md:text-[1.2rem] leading-relaxed text-charcoal/85">
            Flex &amp; Flow is a mindful stretch and mobility class designed to
            help you feel lighter, move better, and reconnect with yourself.
          </p>

          <div className="mt-9">
            <a
              href="https://wa.me/27685660513"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book your class on WhatsApp"
              className="inline-flex items-center rounded-full bg-dusty-rose hover:bg-rose text-white px-8 py-3.5 text-[1.05rem] tracking-wide transition-all hover:-translate-y-px shadow-sm"
            >
              Book Your Class
            </a>
          </div>
        </Reveal>

        <div className="hidden lg:flex justify-center items-center relative">
          <div className="absolute inset-0 opacity-[0.12]" aria-hidden="true">
            <Silhouette className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
