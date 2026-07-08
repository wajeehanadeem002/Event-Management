import { CheckCircle2 } from "lucide-react";
import { pricingPlans } from "@/lib/site-data";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Flexible plans for inspiration, planning, and concierge support."
          description="Portfolio pricing helps the concept feel commercially complete and gives visitors a clear conversion path."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.05}>
              <div
                className={cn(
                  "h-full rounded-[2rem] bg-white p-7 ring-1 ring-purple/10 transition",
                  plan.highlighted
                    ? "relative -mt-3 shadow-[0_28px_90px_rgba(109,63,209,0.18)] ring-purple/25"
                    : "shadow-[0_18px_60px_rgba(109,63,209,0.08)]",
                )}
              >
                {plan.highlighted ? (
                  <span className="mb-5 inline-flex rounded-full bg-purple px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white">
                    Most popular
                  </span>
                ) : null}
                <h3 className="font-serif text-3xl font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{plan.description}</p>
                <div className="mt-7 flex items-end gap-2">
                  <span className="font-serif text-5xl font-semibold text-foreground">{plan.price}</span>
                  <span className="pb-2 text-sm font-bold text-muted">/mo</span>
                </div>
                <div className="mt-7 grid gap-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-semibold text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-purple" aria-hidden="true" />
                      {feature}
                    </div>
                  ))}
                </div>
                <ButtonLink
                  href="/contact"
                  className="mt-8 w-full"
                  variant={plan.highlighted ? "primary" : "secondary"}
                >
                  Choose plan
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
