import { Quote, ChevronDown } from "lucide-react";
import Lotus from "./Lotus";
import BreathingOrb from "./BreathingOrb";
import Reveal from "./Reveal";

const HIGHLIGHTS = [
  {
    quote: "Movement is medicine.",
    caption: "The truth I&rsquo;ve carried for thirty-one years.",
  },
  {
    quote: "Flex and Flow was born from that very feeling.",
    caption: "That deep exhale of release we all deserve.",
  },
  {
    quote:
      "I&rsquo;m not here to push you past your limits — I&rsquo;m here to help you find ease within them.",
    caption: "Whatever level you&rsquo;re at, this class is for you.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-soft-cream"
    >
      <div className="relative mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 text-dusty-rose mb-6">
                <Lotus size={22} strokeWidth={1.5} />
                <span className="divider-thin" aria-hidden="true" />
                <span className="text-[0.85rem] tracking-[0.25em] uppercase font-body">
                  About
                </span>
              </div>

              <h2
                id="about-heading"
                className="font-serif-heading text-dusty-rose leading-[1.08] text-[clamp(2rem,4.4vw,3.2rem)]"
              >
                Hi, I&rsquo;m Christina.
              </h2>

              <p className="mt-6 text-[1.2rem] md:text-[1.25rem] leading-[1.7] text-charcoal/90 max-w-xl">
                Movement found me at four years old — and thirty-one years
                later, it&rsquo;s still how I find ease in my body and
                stillness in my mind.
              </p>

              <p className="mt-5 text-[1.15rem] leading-[1.7] text-charcoal/85 max-w-xl">
                Flex &amp; Flow is the calm, intentional stretch space I wish
                I&rsquo;d had years ago. No pressure. No performance. Just
                slow, mindful movement that meets you exactly where you are.
              </p>
            </div>

            {/* Replace with real photo of Christina later. */}
            <div
              className="relative aspect-[5/6] rounded-[28px] overflow-hidden border border-line/45 shadow-[0_30px_80px_-40px_rgba(142,52,56,0.28)] bg-gradient-to-tl from-blush-100 via-soft-cream to-ivory"
              aria-hidden="true"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(248,221,221,0.7) 0%, transparent 55%), radial-gradient(circle at 75% 85%, rgba(239,191,192,0.5) 0%, transparent 55%)",
                }}
              />
              <BreathingOrb className="absolute inset-0 w-full h-full" />

              <div className="absolute bottom-8 left-8 right-8 text-deep-rose">
                <p className="text-[0.72rem] tracking-[0.3em] uppercase opacity-75">
                  Christina Ribeiro
                </p>
                <p className="mt-3 font-serif-heading italic text-[1.35rem] leading-snug">
                  Dancer, teacher, and your guide back to ease.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <ul className="mt-16 md:mt-20 grid md:grid-cols-3 gap-5 md:gap-6">
            {HIGHLIGHTS.map((h) => (
              <li
                key={h.quote}
                className="relative rounded-2xl border border-line/45 bg-ivory p-7 md:p-8 shadow-[0_2px_30px_-18px_rgba(142,52,56,0.25)]"
              >
                <Quote
                  size={26}
                  strokeWidth={1.4}
                  className="text-dusty-rose/70 mb-4"
                  aria-hidden="true"
                />
                <p
                  className="font-serif-heading italic text-deep-rose text-[1.2rem] md:text-[1.25rem] leading-snug"
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${h.quote}&rdquo;` }}
                />
                <p
                  className="mt-4 text-charcoal/75 text-[0.98rem] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: h.caption }}
                />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <p className="mt-14 md:mt-16 text-center max-w-2xl mx-auto font-serif-heading italic text-deep-rose text-[1.35rem] md:text-[1.5rem] leading-snug">
            &ldquo;My only goal is to leave you feeling lighter than when you
            arrived.&rdquo;
          </p>
        </Reveal>

        <Reveal>
          <details className="group mt-14 md:mt-16 max-w-3xl mx-auto rounded-2xl border border-line/40 bg-ivory/60 backdrop-blur-sm">
            <summary className="flex items-center justify-between gap-4 px-6 md:px-8 py-5 cursor-pointer list-none">
              <span className="font-serif-heading text-deep-rose text-[1.15rem] md:text-[1.2rem]">
                Read Christina&rsquo;s full story
              </span>
              <ChevronDown
                size={22}
                strokeWidth={1.6}
                className="faq-chevron text-dusty-rose flex-shrink-0"
                aria-hidden="true"
              />
            </summary>
            <div className="px-6 md:px-8 pb-8 pt-2 space-y-5 text-[1.1rem] leading-[1.75] text-charcoal/85">
              <p>
                Before I could really articulate how I felt, I could already
                move through it. Dance found me when I was four years old, and
                from that very first moment, my body knew something my words
                couldn&rsquo;t yet say...{" "}
                <span className="text-deep-rose italic">
                  movement is medicine.
                </span>
              </p>
              <p>
                Thirty-one years later, that truth hasn&rsquo;t changed.
                It&rsquo;s only grown deeper. Through every season of life,
                the joy, the grief, the everyday weight of just being human,
                the one thing that has always given me release is the quiet,
                intentional act of stretching. Of letting my body breathe. Of
                feeling the tension melt away, one slow breath at a time.
              </p>
              <p>
                <span className="text-deep-rose italic">
                  Flex and Flow was born from that very feeling.
                </span>{" "}
                I created this space because I know how much stress we carry
                in our bodies without even realising it. In our shoulders, our
                hips, our chest. We hold so much. And sometimes, we just need
                someone to guide us back to ourselves.
              </p>
              <p>
                I&rsquo;m not here to push you past your limits, I&rsquo;m
                here to help you find ease within them. Whether you&rsquo;ve
                never stretched a day in your life or movement is already a
                part of your world, this class is for you. My only goal is to
                leave you feeling lighter than when you arrived.
              </p>
              <p>
                <span className="text-deep-rose italic">
                  Because that feeling, that exhale of release, is something
                  everyone deserves.
                </span>
              </p>
            </div>
          </details>
        </Reveal>
      </div>
    </section>
  );
}
