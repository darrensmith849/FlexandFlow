import Lotus from "./Lotus";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-soft-cream"
    >
      <div className="relative mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="flex items-center gap-3 text-dusty-rose mb-6">
            <Lotus size={22} strokeWidth={1.5} />
            <span className="divider-thin" aria-hidden="true" />
            <span className="text-[0.85rem] tracking-[0.25em] uppercase font-body">
              About
            </span>
          </div>

          <h2
            id="about-heading"
            className="font-serif-heading text-dusty-rose leading-[1.1] text-[clamp(2rem,4.5vw,3.4rem)] max-w-3xl"
          >
            Movement has been my mother tongue since I was four years old.
          </h2>

          <div className="mt-10 space-y-6 text-[1.15rem] md:text-[1.2rem] leading-[1.75] text-charcoal/90 max-w-3xl">
            <p>
              Before I could really articulate how I felt, I could already move
              through it. Dance found me when I was four years old, and from
              that very first moment, my body knew something my words
              couldn&rsquo;t yet say...{" "}
              <span className="text-deep-rose italic">
                movement is medicine.
              </span>
            </p>
            <p>
              Thirty-one years later, that truth hasn&rsquo;t changed. It&rsquo;s
              only grown deeper. Through every season of life, the joy, the
              grief, the everyday weight of just being human, the one thing
              that has always given me release is the quiet, intentional act of
              stretching. Of letting my body breathe. Of feeling the tension
              melt away, one slow breath at a time.
            </p>
            <p>
              <span className="text-deep-rose italic">
                Flex and Flow was born from that very feeling.
              </span>{" "}
              I created this space because I know how much stress we carry in
              our bodies without even realising it. In our shoulders, our hips,
              our chest. We hold so much. And sometimes, we just need someone
              to guide us back to ourselves.
            </p>
            <p>
              I&rsquo;m Christina Ribeiro. I&rsquo;m not here to push you past
              your limits, I&rsquo;m here to help you find ease within them.
              Whether you&rsquo;ve never stretched a day in your life or
              movement is already a part of your world, this class is for you.
              My only goal is to leave you feeling lighter than when you
              arrived.
            </p>
            <p>
              <span className="text-deep-rose italic">
                Because that feeling, that exhale of release, is something
                everyone deserves.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
