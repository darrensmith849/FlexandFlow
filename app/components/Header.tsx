"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Lotus from "./Lotus";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Class Schedule" },
  { href: "#faq", label: "FAQ's" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-ivory/85 backdrop-blur-md border-b border-line/40">
      <div className="mx-auto max-w-6xl px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a
          href="#home"
          className="flex items-center gap-2.5 text-deep-rose"
          aria-label="Flex and Flow — home"
        >
          <Lotus size={28} strokeWidth={1.4} className="text-deep-rose" />
          <span className="font-serif-heading text-xl md:text-[1.4rem] tracking-wide">
            Flex &amp; Flow
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-charcoal/85 hover:text-deep-rose transition-colors text-[1.02rem] tracking-wide relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-dusty-rose after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#schedule"
            className="hidden sm:inline-flex items-center rounded-full bg-dusty-rose hover:bg-rose text-white px-5 md:px-6 py-2.5 text-[0.98rem] tracking-wide transition-all hover:-translate-y-px shadow-sm"
          >
            Book Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-deep-rose hover:bg-blush-50 transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden absolute left-0 right-0 top-full bg-ivory border-b border-line/40 shadow-sm"
        >
          <nav className="px-6 py-6 flex flex-col gap-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-charcoal text-lg py-2 border-b border-line/30 last:border-0 hover:text-deep-rose transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#schedule"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-dusty-rose text-white px-6 py-3 tracking-wide"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
