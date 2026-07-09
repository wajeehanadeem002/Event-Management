import { Building2, CalendarCheck2, HeartHandshake, Sparkles, Utensils } from "lucide-react";
import { trustedBy } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";

const partnerVisuals = [
  {
    name: trustedBy[0],
    label: "Wedding studios",
    icon: HeartHandshake,
    accent: "from-rose-flame to-coral-blush",
  },
  {
    name: trustedBy[1],
    label: "Floral teams",
    icon: Sparkles,
    accent: "from-coral-blush to-spiced-orange",
  },
  {
    name: trustedBy[2],
    label: "Venue partners",
    icon: Building2,
    accent: "from-crimson to-rose-flame",
  },
  {
    name: trustedBy[3],
    label: "Event planners",
    icon: CalendarCheck2,
    accent: "from-olive-grove to-coral-blush",
  },
  {
    name: trustedBy[4],
    label: "Catering hosts",
    icon: Utensils,
    accent: "from-spiced-orange to-crimson",
  },
];

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-background py-12">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.4fr] lg:items-center">
          <div className="rounded-[2rem] bg-foreground p-6 text-white shadow-[0_24px_70px_rgba(44,30,30,0.2)]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/65">
              Trusted by couples and teams
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight">
              Loved by modern hosts, planners, and venues.
            </h2>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <p className="font-serif text-3xl font-semibold">98%</p>
                <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/55">Happy hosts</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold">42k</p>
                <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/55">Guests planned</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold">5.0</p>
                <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/55">Avg rating</p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {partnerVisuals.map((partner) => {
              const Icon = partner.icon;

              return (
                <div
                  key={partner.name}
                  className="group relative overflow-hidden rounded-3xl bg-white p-4 shadow-[0_18px_55px_rgba(140,3,28,0.08)] ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(140,3,28,0.14)]"
                >
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${partner.accent}`} aria-hidden="true" />
                  <div className="flex items-start justify-between gap-3">
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${partner.accent} text-white shadow-lg`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-background px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-muted ring-1 ring-border">
                      Partner
                    </span>
                  </div>
                  <p className="mt-5 text-base font-extrabold text-foreground">{partner.name}</p>
                  <p className="mt-1 text-xs font-semibold text-muted">{partner.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
