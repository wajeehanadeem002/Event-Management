import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <div className="cta-gradient relative overflow-hidden rounded-[2.5rem] px-6 py-14 text-center text-white shadow-[0_30px_90px_rgba(31,24,46,0.2)] sm:px-12">
          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Ready to build</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Turn inspiration into a polished event planning workflow.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              This setup gives you a premium homepage, reusable components, Sanity schemas,
              and realistic SaaS features to expand into dashboards, accounts, and bookings.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="secondary" size="lg" showArrow>
                Send inquiry
              </ButtonLink>
              <ButtonLink href="/pricing" variant="ghost" size="lg" className="text-white hover:bg-white/10">
                View pricing
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
