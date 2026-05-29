import { Check, Sparkles, MessageCircle } from "lucide-react";
import Lotus from "./Lotus";
import Reveal from "./Reveal";

const WHATSAPP_URL = "https://wa.me/27685660513";

type Plan = {
  name: string;
  price: string;
  billing: string;
  subPrice?: string;
  support: string;
  features: string[];
  launchNote?: string;
  cta: string;
  badge?: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Drop-In Class",
    price: "R50",
    billing: "per 45-minute session",
    support:
      "Perfect if you want to try a class or join when your schedule allows.",
    features: [
      "1 guided 45-minute session",
      "Beginner friendly",
      "Gentle stretch and mobility",
      "Book via WhatsApp",
    ],
    cta: "Book a Drop-In Class",
  },
  {
    name: "Gentle Reset",
    price: "R200",
    billing: "per month",
    subPrice: "4 sessions monthly",
    support:
      "A simple weekly reset to release tension and stay connected to your body.",
    features: [
      "4 guided sessions per month",
      "Works out to R50 per session",
      "WhatsApp class reminders",
      "Ideal for once-a-week consistency",
    ],
    launchNote: "First month: R160 with launch discount",
    cta: "Choose Gentle Reset",
  },
  {
    name: "Steady Flow",
    price: "R400",
    billing: "per month",
    subPrice: "8 sessions monthly",
    support:
      "The full twice-weekly rhythm for deeper release, better mobility, and lasting change.",
    features: [
      "8 guided sessions per month",
      "Works out to R50 per session",
      "WhatsApp class reminders",
      "Best for consistent progress",
    ],
    launchNote: "First month: R320 with launch discount",
    cta: "Choose Steady Flow",
    badge: "Best Value",
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative bg-soft-cream"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 text-dusty-rose mb-5">
              <span className="divider-thin" aria-hidden="true" />
              <Lotus size={22} strokeWidth={1.5} />
              <span className="divider-thin" aria-hidden="true" />
            </div>
            <p className="text-[0.85rem] tracking-[0.25em] uppercase text-dusty-rose">
              Pricing
            </p>
            <h2
              id="pricing-heading"
              className="mt-4 font-serif-heading text-deep-rose text-[clamp(2.2rem,4.5vw,3.4rem)] leading-tight"
            >
              Choose the flow that fits your rhythm
            </h2>
            <p className="mt-5 text-charcoal/80 text-[1.15rem] leading-relaxed">
              Each Flex &amp; Flow session is 45 minutes of guided stretch,
              mobility, and release. Choose a once-off class or commit to a
              monthly rhythm that helps your body feel lighter, calmer, and
              more open.
            </p>
            <div className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-ivory border border-line/55 px-5 py-2.5 text-deep-rose text-[0.95rem] shadow-[0_2px_18px_-10px_rgba(74,92,63,0.3)]">
              <Sparkles
                size={16}
                strokeWidth={1.7}
                className="text-dusty-rose"
                aria-hidden="true"
              />
              <span>
                <span className="font-serif-heading italic">
                  Launch offer:
                </span>{" "}
                Save 20% on your first month when joining a monthly package.
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-7 items-stretch">
            {PLANS.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border p-8 md:p-9 ${
                  plan.featured
                    ? "border-dusty-rose/70 bg-gradient-to-br from-blush-50 via-ivory to-soft-cream shadow-[0_24px_60px_-25px_rgba(74,92,63,0.4)]"
                    : "border-line/55 bg-ivory shadow-[0_2px_30px_-18px_rgba(74,92,63,0.22)]"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-dusty-rose text-white px-4 py-1.5 text-[0.74rem] tracking-[0.2em] uppercase shadow-[0_8px_20px_-8px_rgba(74,92,63,0.5)]">
                    <Sparkles size={12} strokeWidth={2} aria-hidden="true" />
                    {plan.badge}
                  </span>
                )}

                <h3 className="font-serif-heading text-deep-rose text-[1.6rem] md:text-[1.75rem] leading-tight">
                  {plan.name}
                </h3>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-serif-heading text-deep-rose text-[2.6rem] md:text-[3rem] leading-none">
                    {plan.price}
                  </span>
                  <span className="text-charcoal/70 text-[0.95rem]">
                    {plan.billing}
                  </span>
                </div>
                {plan.subPrice && (
                  <p className="mt-1 text-dusty-rose text-[0.95rem] tracking-wide">
                    {plan.subPrice}
                  </p>
                )}

                <p className="mt-5 text-charcoal/80 text-[1.05rem] leading-relaxed">
                  {plan.support}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-charcoal/85 text-[1.02rem] leading-relaxed"
                    >
                      <Check
                        size={18}
                        strokeWidth={2}
                        className="text-dusty-rose mt-1 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.launchNote && (
                  <p className="mt-6 rounded-xl bg-blush-50 border border-line/40 px-4 py-2.5 text-deep-rose text-[0.92rem] leading-snug">
                    <span className="font-serif-heading italic">
                      First month only —
                    </span>{" "}
                    {plan.launchNote.replace("First month: ", "")}
                  </p>
                )}

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${plan.cta} on WhatsApp`}
                  className={`mt-7 md:mt-auto md:pt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[1rem] tracking-wide transition-all hover:-translate-y-0.5 ${
                    plan.featured
                      ? "bg-dusty-rose hover:bg-rose text-white shadow-[0_12px_30px_-12px_rgba(74,92,63,0.5)]"
                      : "border border-dusty-rose text-deep-rose hover:bg-dusty-rose hover:text-white bg-ivory"
                  }`}
                >
                  <MessageCircle
                    size={16}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <article className="mt-10 md:mt-12 rounded-3xl border border-line/45 bg-ivory p-8 md:p-10 grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 md:items-center shadow-[0_2px_30px_-18px_rgba(74,92,63,0.2)]">
            <div>
              <p className="text-[0.8rem] tracking-[0.3em] uppercase text-dusty-rose">
                Private Sessions
              </p>
              <h3 className="mt-2 font-serif-heading text-deep-rose text-[1.7rem] md:text-[1.9rem] leading-tight">
                Private Flow Session
              </h3>
              <div className="mt-3 flex items-baseline gap-2 flex-wrap">
                <span className="font-serif-heading text-deep-rose text-[2rem] md:text-[2.3rem] leading-none">
                  R250
                </span>
                <span className="text-charcoal/70 text-[0.95rem]">
                  per private 45-minute session
                </span>
              </div>
              <p className="mt-4 text-charcoal/80 text-[1.08rem] leading-relaxed max-w-xl">
                For personalised stretch guidance, individual support, or
                focused recovery work.
              </p>
            </div>
            <div className="md:justify-self-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask about Private Flow Sessions on WhatsApp"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-dusty-rose text-deep-rose hover:bg-dusty-rose hover:text-white px-7 py-3.5 text-[1rem] tracking-wide transition-all"
              >
                <MessageCircle
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                Ask About Private Sessions
              </a>
            </div>
          </article>
        </Reveal>

        <Reveal>
          <p className="mt-10 text-center text-charcoal/65 text-[0.98rem] italic max-w-2xl mx-auto">
            Monthly spaces may be limited to keep classes calm, personal, and
            supportive.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
