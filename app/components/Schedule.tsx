import { Clock, User, Calendar, MessageCircle, Leaf } from "lucide-react";
import Lotus from "./Lotus";
import Reveal from "./Reveal";

const CLASSES = [
  {
    day: "Tuesday",
    title: "Mobility & Posture Reset",
    time: "18:00 – 18:40",
    body: "Improve posture, increase flexibility and move with comfort.",
  },
  {
    day: "Saturday",
    title: "Deep Release & Recovery",
    time: "09:00 – 09:40",
    body: "Unwind, release tensions and restore your body and mind.",
  },
];

const DETAILS = [
  {
    icon: Clock,
    title: "40 Minutes",
    body: "Focused, effective sessions.",
  },
  {
    icon: User,
    title: "Beginner Friendly",
    body: "All levels welcome. Move at your pace.",
  },
  {
    icon: Calendar,
    title: "Tuesdays and Saturdays",
    body: "Two classes each week to support your routine.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Groups",
    body: "Information and reminders shared via WhatsApp groups.",
  },
];

export default function Schedule() {
  return (
    <section
      id="schedule"
      aria-labelledby="schedule-heading"
      className="relative"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 text-dusty-rose mb-5">
              <span className="divider-thin" aria-hidden="true" />
              <Lotus size={22} strokeWidth={1.5} />
              <span className="divider-thin" aria-hidden="true" />
            </div>
            <h2
              id="schedule-heading"
              className="font-serif-heading text-deep-rose text-[clamp(2.2rem,4.5vw,3.4rem)] leading-tight"
            >
              Class Schedule
            </h2>
            <p className="mt-4 text-charcoal/75 text-[1.1rem] max-w-xl mx-auto">
              Join Christina twice a week for guided stretch sessions designed
              to leave you lighter.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6 md:gap-8">
            {CLASSES.map((c) => (
              <article
                key={c.day}
                className="relative rounded-2xl border border-line/60 bg-ivory p-8 md:p-10 shadow-[0_2px_30px_-12px_rgba(142,52,56,0.18)]"
              >
                <Leaf
                  size={28}
                  strokeWidth={1.3}
                  className="absolute top-5 right-5 text-blush-200"
                  aria-hidden="true"
                />
                <p className="text-[0.85rem] tracking-[0.25em] uppercase text-dusty-rose">
                  {c.day}
                </p>
                <h3 className="mt-3 font-serif-heading text-deep-rose text-[1.85rem] md:text-[2.1rem] leading-tight">
                  {c.title}
                </h3>
                <div className="mt-5 flex items-center gap-2 text-charcoal/85">
                  <Clock size={18} strokeWidth={1.5} className="text-rose" />
                  <span className="text-[1.05rem]">{c.time}</span>
                </div>
                <p className="mt-4 text-charcoal/80 text-[1.05rem] leading-relaxed">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </Reveal>

        <div className="mt-20 md:mt-24">
          <Reveal>
            <div className="text-center">
              <h3 className="font-serif-heading text-deep-rose text-[clamp(1.8rem,3.5vw,2.6rem)]">
                Class Details
              </h3>
              <div className="mt-3 inline-block divider-thin" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal>
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {DETAILS.map((d) => {
                const Icon = d.icon;
                return (
                  <li
                    key={d.title}
                    className="flex flex-col items-center text-center gap-3"
                  >
                    <span
                      className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blush-50 text-deep-rose"
                      aria-hidden="true"
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </span>
                    <h4 className="font-serif-heading text-[1.25rem] text-deep-rose">
                      {d.title}
                    </h4>
                    <p className="text-charcoal/80 text-[1rem] leading-relaxed max-w-[16rem]">
                      {d.body}
                    </p>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-20 rounded-2xl bg-blush-50 border border-line/40 px-8 py-10 md:px-12 md:py-12 text-center">
            <h3 className="font-serif-heading text-deep-rose text-[clamp(1.7rem,3vw,2.4rem)] leading-tight">
              Ready to feel your best?
            </h3>
            <p className="mt-3 text-charcoal/80 text-[1.1rem]">
              Join us and give your body the care it deserves.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center rounded-full bg-dusty-rose hover:bg-rose text-white px-8 py-3.5 text-[1.05rem] tracking-wide transition-all hover:-translate-y-px shadow-sm"
            >
              Book Your Class
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
