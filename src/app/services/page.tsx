import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

const services = [
  {
    title: "Event theme planning",
    points: ["Mood boards", "Color palettes", "Decor direction"],
  },
  {
    title: "Vendor shortlisting",
    points: ["Venue options", "Catering teams", "Photo and decor vendors"],
  },
  {
    title: "Budget planning",
    points: ["Guest count estimate", "Decor and food range", "Add-on costs"],
  },
  {
    title: "Timeline planning",
    points: ["Planning checklist", "Event milestones", "Vendor deadlines"],
  },
  {
    title: "Gallery inspiration",
    points: ["Event references", "Category visuals", "Theme collections"],
  },
  {
    title: "Booking inquiry",
    points: ["Contact details", "Event requirements", "Inquiry summary"],
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
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[2rem] bg-white p-6 shadow-[0_18px_55px_rgba(140,3,28,0.08)] ring-1 ring-border"
              >
                <h2 className="font-serif text-2xl font-semibold text-foreground">{service.title}</h2>
                <ul className="mt-5 grid gap-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-semibold text-muted">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-olive-grove" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
