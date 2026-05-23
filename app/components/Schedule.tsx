import { Clock, User, Calendar, MessageCircle, Leaf } from "lucide-react";
import Lotus from "./Lotus";
import Reveal from "./Reveal";

const WHATSAPP_URL = "https://wa.me/27685660513";

const CLASSES = [
  {
    day: "Tuesday",
    title: "Mobility & Posture Reset",
    time: "18:00 – 18:40",
    outcome: "Improve posture and move with comfort.",
  },
  {
    day: "Saturday",
    title: "Deep Release & Recovery",
    time: "09:00 – 09:40",
    outcome: "Unwind, restore, and reset your body and mind.",
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
    title: "Tuesdays & Saturdays",
    body: "Two classes each week.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Groups",
    body: "Reminders shared via WhatsApp.",
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
            <p className="mt-4 text-charcoal/75 text-[1.1rem] max-w-xl mx-auto leading-relaxed">
              Two calm sessions each week — designed to leave you lighter.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6 md:gap-8">
            {CLASSES.map((c) => (
              <article
                key={c.day}
                className="relative rounded-2xl border border-line/55 bg-ivory p-8 md:p-10 shadow-[0_2px_30px_-12px_rgba(142,52,56,0.2)] flex flex-col"
              >
                <Leaf
                  size={32}
                  strokeWidth={1.3}
                  className="absolute top-5 right-5 text-blush-200"
                  aria-hidden="true"
                />
                <p className="text-[0.85rem] tracking-[0.3em] uppercase text-dusty-rose">
                  {c.day}
                </p>
                <h3 className="mt-3 font-serif-heading text-deep-rose text-[1.9rem] md:text-[2.15rem] leading-tight">
                  {c.title}
                </h3>
                <div className="mt-5 flex items-center gap-2.5 text-charcoal/85">
                  <Clock
                    size={18}
                    strokeWidth={1.5}
                    className="text-rose"
                    aria-hidden="true"
                  />
                  <span className="text-[1.1rem]">{c.time}</span>
                </div>
                <p className="mt-4 text-charcoal/80 text-[1.08rem] leading-relaxed">
                  {c.outcome}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Book ${c.title} on WhatsApp`}
                  className="mt-7 inline-flex items-center gap-2 self-start text-dusty-rose hover:text-deep-rose transition-colors text-[1rem] tracking-wide border-b border-dusty-rose/40 hover:border-deep-rose pb-0.5"
                >
                  <MessageCircle
                    size={16}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                  Book this class
                </a>
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
              <div
                className="mt-3 inline-block divider-thin"
                aria-hidden="true"
              />
            </div>
          </Reveal>

          <Reveal>
            <ul className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {DETAILS.map((d) => {
                const Icon = d.icon;
                return (
                  <li
                    key={d.title}
                    className="flex flex-col items-center text-center gap-3"
                  >
                    <span
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blush-50 text-deep-rose ring-1 ring-line/40"
                      aria-hidden="true"
                    >
                      <Icon size={26} strokeWidth={1.5} />
                    </span>
                    <h4 className="font-serif-heading text-[1.3rem] text-deep-rose leading-tight">
                      {d.title}
                    </h4>
                    <p className="text-charcoal/80 text-[1rem] leading-relaxed max-w-[15rem]">
                      {d.body}
                    </p>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-20 rounded-2xl bg-blush-50 border border-line/40 px-8 py-10 md:px-12 md:py-14 text-center">
            <h3 className="font-serif-heading text-deep-rose text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">
              Ready to feel your best?
            </h3>
            <p className="mt-3 text-charcoal/80 text-[1.12rem]">
              Join us and give your body the care it deserves.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book your class on WhatsApp"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-dusty-rose hover:bg-rose text-white px-9 py-4 text-[1.1rem] tracking-wide transition-all hover:-translate-y-0.5 shadow-[0_12px_30px_-12px_rgba(142,52,56,0.5)]"
            >
              <MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" />
              Book Your Class
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
