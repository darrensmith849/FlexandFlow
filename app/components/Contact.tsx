import { MessageCircle, Mail } from "lucide-react";
import Lotus from "./Lotus";
import Reveal from "./Reveal";

const WHATSAPP_URL = "https://wa.me/27685660513";
const EMAIL = "chrissydancer3089@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 text-dusty-rose mb-5">
              <span className="divider-thin" aria-hidden="true" />
              <Lotus size={22} strokeWidth={1.5} />
              <span className="divider-thin" aria-hidden="true" />
            </div>
            <h2
              id="contact-heading"
              className="font-serif-heading text-deep-rose text-[clamp(2.4rem,4.8vw,3.6rem)] leading-tight"
            >
              Come stretch with us.
            </h2>
            <p className="mt-5 text-rose font-serif-heading text-[1.35rem] md:text-[1.5rem] italic">
              We&rsquo;d love to meet you.
            </p>
            <p className="mt-5 text-charcoal/80 text-[1.15rem] max-w-2xl mx-auto leading-relaxed">
              Have a question, want to book a class, or just want to say
              hello? Reach out — we&rsquo;ll get back to you as soon as we
              can.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-14 grid md:grid-cols-[1.15fr_1fr] gap-6 md:gap-8">
            <article className="relative rounded-3xl border border-line/55 bg-gradient-to-br from-blush-50 via-ivory to-soft-cream p-8 md:p-10 shadow-[0_10px_40px_-18px_rgba(74,92,63,0.28)] flex flex-col">
              <span
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dusty-rose text-white"
                aria-hidden="true"
              >
                <MessageCircle size={28} strokeWidth={1.6} />
              </span>
              <p className="mt-5 text-[0.8rem] tracking-[0.3em] uppercase text-dusty-rose">
                Primary
              </p>
              <h3 className="mt-2 font-serif-heading text-deep-rose text-[1.9rem] md:text-[2.1rem] leading-tight">
                Chat on WhatsApp
              </h3>
              <p className="mt-4 text-charcoal/80 text-[1.1rem] leading-relaxed">
                Quickest way to reach Christina — bookings, questions, or
                just a friendly hello.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Christina on WhatsApp"
                className="mt-7 inline-flex items-center justify-center gap-2.5 self-start rounded-full bg-dusty-rose hover:bg-rose text-white px-8 py-3.5 text-[1.05rem] tracking-wide transition-all hover:-translate-y-0.5 shadow-[0_12px_30px_-12px_rgba(74,92,63,0.5)]"
              >
                <MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" />
                Message us on WhatsApp
              </a>
              <p className="mt-4 text-charcoal/55 text-[0.9rem] tracking-wide">
                +27 68 566 0513
              </p>
            </article>

            <article className="relative rounded-3xl border border-line/45 bg-ivory p-8 md:p-10 flex flex-col">
              <span
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blush-50 text-deep-rose ring-1 ring-line/40"
                aria-hidden="true"
              >
                <Mail size={24} strokeWidth={1.5} />
              </span>
              <p className="mt-5 text-[0.78rem] tracking-[0.3em] uppercase text-dusty-rose/80">
                Email
              </p>
              <h3 className="mt-2 font-serif-heading text-deep-rose text-[1.6rem] md:text-[1.75rem] leading-tight">
                Prefer email?
              </h3>
              <p className="mt-3 text-charcoal/80 text-[1.05rem] leading-relaxed">
                Send us an email for questions, bookings, or anything
                you&rsquo;d like to know before joining.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                aria-label={`Email Christina at ${EMAIL}`}
                className="mt-6 inline-flex items-center self-start rounded-full border border-dusty-rose text-deep-rose hover:bg-dusty-rose hover:text-white px-6 py-3 text-[0.98rem] tracking-wide transition-all break-all"
              >
                {EMAIL}
              </a>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
