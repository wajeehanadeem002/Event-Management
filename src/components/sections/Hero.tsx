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
    <section className="hero-gradient-dark relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-40">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white shadow-sm ring-1 ring-white/25 backdrop-blur">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Premium event planning workspace
          </div>
          <h1 className="mt-7 max-w-4xl font-serif text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Plan unforgettable events with themes, vendors, budgets, and timelines.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Eventure is a colorful SaaS concept for discovering luxury event styles,
            organizing planning details, estimating budgets, and sending polished booking inquiries.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" size="lg" showArrow>
              Start planning
            </ButtonLink>
            <ButtonLink href="/themes" variant="secondary" size="lg">
              Explore themes
            </ButtonLink>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl bg-white/15 p-4 ring-1 ring-white/20 backdrop-blur">
                <p className="font-serif text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-lg">
            <Image
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80"
              alt="Elegant outdoor event tablescape"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="rounded-[2.5rem] object-cover shadow-[0_30px_90px_rgba(140,3,28,0.2)]"
            />
            <div className="absolute -left-4 top-10 rounded-3xl bg-white/90 p-4 shadow-2xl backdrop-blur sm:-left-8">
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

            <div className="absolute -right-2 top-1/2 w-56 rounded-3xl bg-white/90 p-4 shadow-2xl backdrop-blur sm:-right-10">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-foreground">Budget signal</p>
                <Wallet className="h-4 w-4 text-purple" aria-hidden="true" />
              </div>
              <div className="mt-4 h-2 rounded-full bg-purple/10">
                <div className="h-2 w-[68%] rounded-full bg-gradient-to-r from-crimson via-rose-flame to-spiced-orange" />
              </div>
              <p className="mt-3 text-xs text-muted">$18k estimated for 120 guests</p>
            </div>

            <div className="absolute -bottom-5 left-5 right-5 rounded-[2rem] bg-foreground p-5 text-white shadow-2xl">
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
