import Image from "next/image";
import { Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const heroStats = [
  { label: "Theme boards", value: "750+" },
  { label: "Vendor profiles", value: "120+" },
  { label: "Planning templates", value: "45" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-foreground pt-24 pb-6 text-white sm:pt-24 lg:pt-24">
      <Image
        src="/hero-event-artwork.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/35 to-foreground/80" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/45 to-foreground/15" aria-hidden="true" />

      <Container className="relative z-10">
        <Reveal className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold text-white shadow-sm ring-1 ring-white/25 backdrop-blur sm:text-sm">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Premium event planning workspace
          </div>
          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-2xl font-semibold leading-[1.05] text-white [text-shadow:0_8px_36px_rgba(0,0,0,0.35)] sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="block">Plan unforgettable events</span>
            <span className="block">with themes, vendors,</span>
            <span className="block">budgets, and timelines.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            Eventure is a colorful SaaS concept for discovering luxury event styles,
            organizing planning details, estimating budgets, and sending polished booking inquiries.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink
              href="/contact"
              size="lg"
              showArrow
              className="bg-rose-flame text-white shadow-[0_18px_45px_rgba(242,75,106,0.35)] hover:bg-crimson"
            >
              Start planning
            </ButtonLink>
            <ButtonLink
              href="/themes"
              variant="secondary"
              size="lg"
              className="bg-white/90 text-foreground ring-white/35 hover:bg-white"
            >
              Explore themes
            </ButtonLink>
          </div>

          <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 gap-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl bg-white/14 px-3 py-4 ring-1 ring-white/18 backdrop-blur sm:p-4">
                <p className="font-serif text-2xl font-semibold text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-xs sm:tracking-[0.16em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
