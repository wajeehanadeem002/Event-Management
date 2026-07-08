import { Container } from "@/components/ui/Container";
import { IconBubble } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "A real planning workspace",
    description:
      "The product direction includes budgets, timelines, inquiry flows, and vendor decisions instead of only marketing copy.",
    icon: "calendar" as const,
  },
  {
    title: "CMS-first content model",
    description:
      "Themes, gallery assets, blog posts, vendors, testimonials, pricing plans, and FAQs are ready for Sanity.",
    icon: "palette" as const,
  },
  {
    title: "Portfolio-level UI depth",
    description:
      "Premium imagery, glass panels, soft color, responsive grids, and motion create a more memorable visual system.",
    icon: "sparkles" as const,
  },
  {
    title: "Expandable SaaS architecture",
    description:
      "The structure leaves room for user accounts, saved boards, bookings, and dashboards with Prisma and Neon.",
    icon: "shield" as const,
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <SectionHeading
            align="left"
            eyebrow="Why Eventure"
            title="Built to feel like premium software, not a generic event site."
            description="The UX is designed around discovery, decisions, and conversion, which makes the project stronger as a portfolio case study."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 0.05}>
                <div className="mesh-card h-full rounded-[2rem] border border-purple/10 p-6">
                  <IconBubble name={reason.icon} />
                  <h3 className="mt-6 text-xl font-bold text-foreground">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{reason.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
