import Lotus from "./Lotus";

const QUICK_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Class Schedule" },
  { href: "#faq", label: "FAQ's" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative watercolour-footer bg-blush-50/60 border-t border-line/60">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-10">
          <div>
            <div className="flex items-center gap-3 text-deep-rose">
              <Lotus size={44} strokeWidth={1.3} />
              <span className="font-serif-heading text-[1.7rem]">
                Flex &amp; Flow
              </span>
            </div>
            <p className="mt-4 text-rose font-serif-heading text-[1.2rem] tracking-wide">
              Stretch. Breathe. Release. Reset
            </p>
          </div>

          <div>
            <h3 className="font-serif-heading text-deep-rose text-[1.25rem]">
              Quick Links
            </h3>
            <span className="mt-3 inline-block divider-thin" aria-hidden="true" />
            <ul className="mt-4 space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-charcoal/85 hover:text-deep-rose transition-colors text-[1.05rem]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif-heading text-deep-rose text-[1.25rem]">
              Connect
            </h3>
            <span className="mt-3 inline-block divider-thin" aria-hidden="true" />
            <ul className="mt-4 space-y-2 text-[1.05rem]">
              <li className="text-charcoal/85">WhatsApp</li>
              <li>
                <a
                  href="https://wa.me/27685660513"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal/85 hover:text-deep-rose transition-colors"
                >
                  0685660513
                </a>
              </li>
              <li>
                <a
                  href="mailto:chrissydancer3089@gmail.com"
                  className="text-charcoal/85 hover:text-deep-rose transition-colors break-all"
                >
                  chrissydancer3089@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-line/40 text-center text-charcoal/70 text-[0.95rem]">
          © 2026 Flex &amp; Flow. All rights reserved
        </div>
      </div>
    </footer>
  );
}
