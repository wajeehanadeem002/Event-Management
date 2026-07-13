import Image from "next/image";
import { CheckCircle2, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { pricingPlans } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const planAccents = [
  "from-coral-blush to-rose-flame",
  "from-crimson to-spiced-orange",
  "from-olive-grove to-coral-blush",
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-foreground pt-32 pb-20 text-white sm:pt-36 sm:pb-24">
        <Image
          src="/hero-event-artwork.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/74 via-foreground/44 to-foreground/82" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/82 via-foreground/46 to-foreground/24" aria-hidden="true" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-white/80">
              Pricing
            </p>
            <h1 className="font-serif text-3xl font-semibold leading-tight text-white [text-shadow:0_8px_36px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-5xl">
              Simple plans for every planning stage.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              Start with inspiration, upgrade to active planning, or choose concierge support for high-touch events.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => {
              const accent = planAccents[index] ?? planAccents[0];

              return (
                <article
                  key={plan.name}
                  className={cn(
                    "relative overflow-hidden rounded-[1.75rem] bg-white p-6 shadow-[0_20px_70px_rgba(140,3,28,0.1)] ring-1 ring-[rgba(140,3,28,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(140,3,28,0.16)]",
                    plan.highlighted && "bg-foreground text-white ring-crimson/20",
                  )}
                >
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accent}`} />
                  <div
                    className={cn(
                      "absolute -right-12 -top-14 h-36 w-36 rounded-full blur-2xl",
                      plan.highlighted ? "bg-rose-flame/25" : "bg-rose-flame/10",
                    )}
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p
                        className={cn(
                          "text-xs font-bold uppercase tracking-[0.2em]",
                          plan.highlighted ? "text-white/65" : "text-rose-flame",
                        )}
                      >
                        {plan.highlighted ? "Most popular" : "Monthly plan"}
                      </p>
                      <h2
                        className={cn(
                          "mt-3 font-serif text-3xl font-semibold",
                          plan.highlighted ? "text-white" : "text-foreground",
                        )}
                      >
                        {plan.name}
                      </h2>
                    </div>
                    <span
                      className={cn(
                        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
                        plan.highlighted ? "bg-white/14 text-white ring-1 ring-white/18" : "bg-rose-flame/12 text-rose-flame",
                      )}
                    >
                      <Sparkles className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>

                  <p className={cn("relative mt-4 text-sm leading-7", plan.highlighted ? "text-white/70" : "text-muted")}>
                    {plan.description}
                  </p>

                  <div className="relative mt-7 flex items-end gap-2">
                    <span className={cn("font-serif text-5xl font-semibold", plan.highlighted ? "text-white" : "text-foreground")}>
                      {plan.price}
                    </span>
                    <span className={cn("pb-2 text-sm font-bold", plan.highlighted ? "text-white/55" : "text-muted")}>
                      /mo
                    </span>
                  </div>

                  <div className="relative mt-7 grid gap-3">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className={cn(
                          "flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-semibold",
                          plan.highlighted ? "bg-white/10 text-white/82" : "bg-background text-muted",
                        )}
                      >
                        <CheckCircle2
                          className={cn("h-4 w-4 shrink-0", plan.highlighted ? "text-coral-blush" : "text-olive-grove")}
                          aria-hidden="true"
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <ButtonLink
                    href="/contact"
                    className={cn("relative mt-8 w-full", plan.highlighted && "bg-rose-flame text-white hover:bg-coral-blush")}
                    variant={plan.highlighted ? "primary" : "secondary"}
                  >
                    Choose plan
                  </ButtonLink>
                </article>
              );
            })}
          </div>

          <div className="mt-6 rounded-[1.75rem] bg-white p-5 shadow-[0_18px_55px_rgba(140,3,28,0.08)] ring-1 ring-[rgba(140,3,28,0.1)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-flame">
                  Need custom support?
                </p>
                <p className="mt-2 text-sm font-semibold text-muted">
                  Send your event details and get a tailored planning workflow.
                </p>
              </div>
              <ButtonLink href="/contact" size="md" showArrow className="shrink-0 bg-crimson text-white hover:bg-rose-flame">
                Book demo
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
