import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Do I need to be flexible to join Flex and Flow?",
    a: "Not at all and this is probably the most important thing to know! Flex and Flow is designed for every body, at every level. If you feel stiff, tight, or like you've never stretched properly in your life, you are exactly who this class is for. We start where you are, not where you think you should be.",
  },
  {
    q: "What can I expect in a Flex and Flow class?",
    a: "Each session is a guided stretch experience led by Christina. You'll move through gentle, intentional stretches that target common areas of tension — think hips, shoulders, spine, and chest. Classes are calm, unhurried, and rooted in breathwork. You'll leave feeling released, grounded, and genuinely lighter.",
  },
  {
    q: "What should I wear and bring?",
    a: "Wear something comfortable that allows you to move freely — think leggings, joggers, a soft top. You'll want to be barefoot or in socks. Bring a yoga mat to the sessions if you have one, and a small towel or blanket for comfort. Water is always a good idea too.",
  },
  {
    q: "Is this a yoga class?",
    a: "Flex and Flow is inspired by movement and mindful stretching, but it isn't a traditional yoga class. Think of it as a dedicated stretch session focused purely on releasing tension, improving mobility, and helping your body feel good. No yoga experience required.",
  },
  {
    q: "How often should I attend?",
    a: "Even once a week can make a meaningful difference in how your body feels. For best results, attending two to three times a week helps your body build flexibility and reduces chronic tension over time. But there's no pressure — come as often as feels right for you.",
  },
  {
    q: "Is Flex and Flow suitable if I have an injury or chronic pain?",
    a: "Please let Christina know before class if you have any injuries, chronic pain, or specific areas of concern. Modifications are always available, and your safety and comfort come first. If you're unsure whether the class is right for you, feel free to reach out before booking — Christina is always happy to chat.",
  },
  {
    q: "How do I book a class?",
    a: "Booking is simple. Reach out directly through the contact section below or contact Christina directly and she will assist you with the process. She will make sure you have everything you need before your first session.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative bg-soft-cream">
      <div className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <p className="text-[0.85rem] tracking-[0.25em] uppercase text-dusty-rose">
              Frequently asked questions
            </p>
            <h2
              id="faq-heading"
              className="mt-4 font-serif-heading text-deep-rose text-[clamp(2rem,4.2vw,3rem)] leading-tight"
            >
              Everything you need to know before you arrive.
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <ul className="mt-14 divide-y divide-line/50 border-y border-line/50">
            {FAQS.map((item) => (
              <li key={item.q}>
                <details className="group py-6">
                  <summary className="flex items-start justify-between gap-6 list-none">
                    <span className="font-serif-heading text-[1.2rem] md:text-[1.35rem] text-charcoal group-open:text-deep-rose transition-colors leading-snug">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={22}
                      strokeWidth={1.6}
                      className="faq-chevron text-dusty-rose flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="mt-4 pr-6 md:pr-12 text-charcoal/85 text-[1.05rem] md:text-[1.1rem] leading-[1.75]">
                    {item.a}
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
