import Image from "next/image";
import { CalendarDays, Heart, Search, Sparkles, Wallet } from "lucide-react";
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
    <section className="relative min-h-screen overflow-hidden bg-foreground pt-32 pb-20 text-white sm:pt-36 lg:pt-40">
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

      <Container className="relative z-10 grid min-h-[calc(100svh-9rem)] items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white shadow-sm ring-1 ring-white/25 backdrop-blur">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Premium event planning workspace
          </div>
          <h1 className="mt-7 max-w-4xl font-serif text-5xl font-semibold leading-[1.02] text-white [text-shadow:0_8px_36px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-7xl">
            Plan unforgettable events with themes, vendors, budgets, and timelines.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            Eventure is a colorful SaaS concept for discovering luxury event styles,
            organizing planning details, estimating budgets, and sending polished booking inquiries.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl bg-white/14 p-4 ring-1 ring-white/18 backdrop-blur">
                <p className="font-serif text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="relative mx-auto min-h-[360px] w-full max-w-lg sm:min-h-[420px] lg:min-h-[520px]">
            <div className="absolute left-0 top-3 rounded-3xl bg-white/90 p-4 shadow-2xl backdrop-blur sm:top-10">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-pink/15 text-pink">
                  <Heart className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">Lavender Garden Vows</p>
                  <p className="text-xs text-muted">Mood board ready</p>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-32 w-56 max-w-[78vw] rounded-3xl bg-white/90 p-4 shadow-2xl backdrop-blur sm:top-1/2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-foreground">Budget signal</p>
                <Wallet className="h-4 w-4 text-purple" aria-hidden="true" />
              </div>
              <div className="mt-4 h-2 rounded-full bg-purple/10">
                <div className="h-2 w-[68%] rounded-full bg-gradient-to-r from-crimson via-rose-flame to-spiced-orange" />
              </div>
              <p className="mt-3 text-xs text-muted">$18k estimated for 120 guests</p>
            </div>

            <div className="absolute bottom-3 left-0 right-0 rounded-[2rem] bg-foreground/92 p-5 text-white shadow-2xl ring-1 ring-white/10 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <Search className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white/80">Smart inquiry builder</p>
                  <p className="text-base font-bold">Venue, florist, catering, photo</p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs text-white/70">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                12-week planning timeline generated
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
