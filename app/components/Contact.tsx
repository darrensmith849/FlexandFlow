import { MessageCircle, Mail } from "lucide-react";
import Lotus from "./Lotus";
import Reveal from "./Reveal";

const WHATSAPP_URL = "https://wa.me/27685660513";
const EMAIL = "chrissydancer3089@gmail.com";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative">
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
              className="font-serif-heading text-deep-rose text-[clamp(2.2rem,4.5vw,3.4rem)] leading-tight"
            >
              Let&rsquo;s Connect
            </h2>
            <p className="mt-4 text-rose font-serif-heading text-[1.3rem]">
              We&rsquo;re here for you.
            </p>
            <p className="mt-4 text-charcoal/80 text-[1.1rem] max-w-2xl mx-auto leading-relaxed">
              Have a question, want to book a class or just say hello? Reach
              out and we&rsquo;ll get back to you as soon as possible.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6 md:gap-8">
            <article className="rounded-2xl border border-line/60 bg-ivory p-8 md:p-10 text-center shadow-[0_2px_30px_-12px_rgba(142,52,56,0.15)]">
              <span
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blush-50 text-deep-rose"
                aria-hidden="true"
              >
                <MessageCircle size={28} strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 font-serif-heading text-deep-rose text-[1.7rem]">
                WhatsApp
              </h3>
              <p className="mt-3 text-charcoal/80 text-[1.05rem] leading-relaxed">
                Chat with us on WhatsApp for quick replies about classes,
                bookings and more.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Flex and Flow on WhatsApp"
                className="mt-6 inline-flex items-center rounded-full bg-dusty-rose hover:bg-rose text-white px-6 py-3 text-[1rem] tracking-wide transition-all hover:-translate-y-px shadow-sm"
              >
                Chat with us on WhatsApp
              </a>
            </article>

            <article className="rounded-2xl border border-line/60 bg-ivory p-8 md:p-10 text-center shadow-[0_2px_30px_-12px_rgba(142,52,56,0.15)]">
              <span
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blush-50 text-deep-rose"
                aria-hidden="true"
              >
                <Mail size={28} strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 font-serif-heading text-deep-rose text-[1.7rem]">
                Email
              </h3>
              <p className="mt-3 text-charcoal/80 text-[1.05rem] leading-relaxed">
                Send us an email for questions, bookings, or anything
                you&rsquo;d like to know before joining.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                aria-label={`Email Christina at ${EMAIL}`}
                className="mt-6 inline-flex items-center rounded-full bg-dusty-rose hover:bg-rose text-white px-6 py-3 text-[0.98rem] tracking-wide transition-all hover:-translate-y-px shadow-sm break-all"
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
