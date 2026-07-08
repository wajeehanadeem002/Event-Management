import { BudgetEstimator } from "@/components/features/BudgetEstimator";
import { TimelinePlanner } from "@/components/features/TimelinePlanner";
import { Container } from "@/components/ui/Container";
import { IconBubble } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Theme discovery",
    description: "Guide users from event type and mood to curated themes, palettes, and inspiration boards.",
    icon: "wand" as const,
  },
  {
    title: "Vendor planning",
    description: "Showcase vendors by category, location, rating, price range, and planning fit.",
    icon: "map" as const,
  },
  {
    title: "Budget estimates",
    description: "Turn guest count, decor level, food, and add-ons into a clear planning range.",
    icon: "wallet" as const,
  },
  {
    title: "Timeline organization",
    description: "Keep planning phases, due dates, vendor decisions, and host tasks visible.",
    icon: "timer" as const,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Product features for every stage of event planning."
        description="These services are framed as SaaS workflows: discover, compare, organize, estimate, and inquire."
      />
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="mesh-card rounded-[2rem] border border-purple/10 p-6">
                <IconBubble name={service.icon} />
                <h3 className="mt-6 text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-background py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Planning tools"
            title="Estimator and timeline surfaces are ready to expand."
            description="These are intentionally interactive so the project demonstrates real frontend behavior."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
            <BudgetEstimator />
            <TimelinePlanner />
          </div>
        </Container>
      </section>
    </>
  );
}
