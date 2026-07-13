import Image from "next/image";
import {
  CalendarCheck2,
  Camera,
  CheckCircle2,
  Palette,
  Send,
  Store,
  WalletCards,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const services = [
  {
    title: "Event theme planning",
    points: ["Mood boards", "Color palettes", "Decor direction"],
    icon: Palette,
    accent: "from-rose-flame to-coral-blush",
  },
  {
    title: "Vendor shortlisting",
    points: ["Venue options", "Catering teams", "Photo and decor vendors"],
    icon: Store,
    accent: "from-crimson to-rose-flame",
  },
  {
    title: "Budget planning",
    points: ["Guest count estimate", "Decor and food range", "Add-on costs"],
    icon: WalletCards,
    accent: "from-spiced-orange to-coral-blush",
  },
  {
    title: "Timeline planning",
    points: ["Planning checklist", "Event milestones", "Vendor deadlines"],
    icon: CalendarCheck2,
    accent: "from-olive-grove to-coral-blush",
  },
  {
    title: "Gallery inspiration",
    points: ["Event references", "Category visuals", "Theme collections"],
    icon: Camera,
    accent: "from-rose-flame to-spiced-orange",
  },
  {
    title: "Booking inquiry",
    points: ["Contact details", "Event requirements", "Inquiry summary"],
    icon: Send,
    accent: "from-crimson to-spiced-orange",
  },
];

export default function ServicesPage() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/74 via-foreground/46 to-foreground/82" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/78 via-foreground/42 to-foreground/30" aria-hidden="true" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-white/80">
              Services
            </p>
            <h1 className="font-serif text-3xl font-semibold leading-tight text-white [text-shadow:0_8px_36px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-5xl">
              Simple planning support for every event.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              Clear services for themes, vendors, budgets, timelines, inspiration, and booking inquiries.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-[1.75rem] bg-white p-5 shadow-[0_20px_70px_rgba(140,3,28,0.1)] ring-1 ring-[rgba(140,3,28,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(140,3,28,0.16)]"
                >
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${service.accent}`} />
                  <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-rose-flame/10 blur-2xl transition duration-300 group-hover:bg-coral-blush/20" />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-[0_14px_35px_rgba(140,3,28,0.18)]`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-background px-3 py-1 text-xs font-bold text-muted ring-1 ring-[rgba(140,3,28,0.08)]">
                      0{index + 1}
                    </span>
                  </div>

                  <h2 className="relative mt-5 font-serif text-2xl font-semibold text-foreground">
                    {service.title}
                  </h2>
                  <ul className="relative mt-5 grid gap-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 rounded-2xl bg-background/75 px-3 py-2 text-sm font-semibold text-muted">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-olive-grove" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
