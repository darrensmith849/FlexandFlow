import { Leaf, Activity, Flower } from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
  {
    icon: Leaf,
    title: "Release Tension",
    body: "Let go of tightness and stress held in your body.",
  },
  {
    icon: Activity,
    title: "Improve Mobility",
    body: "Move with ease and build strength where it matters.",
  },
  {
    icon: Flower,
    title: "Reset Your Mind",
    body: "Calm your mind and leave feeling refreshed.",
  },
];

export default function Benefits() {
  return (
    <section aria-label="Benefits" className="relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10 pb-20 md:pb-28">
        <Reveal>
          <ul className="grid md:grid-cols-3 md:divide-x md:divide-line/55">
            {ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className={`px-4 md:px-10 py-10 text-center md:text-left flex flex-col items-center md:items-start gap-5 ${
                    i !== 0 ? "border-t md:border-t-0 border-line/35" : ""
                  }`}
                >
                  <span
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blush-50 text-deep-rose ring-1 ring-line/40"
                    aria-hidden="true"
                  >
                    <Icon size={28} strokeWidth={1.5} />
                  </span>
                  <h3 className="font-serif-heading text-[1.7rem] md:text-[1.85rem] text-deep-rose leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/80 text-[1.1rem] leading-[1.65] max-w-xs">
                    {item.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
