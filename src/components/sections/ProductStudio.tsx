import { BudgetEstimator } from "@/components/features/BudgetEstimator";
import { TimelinePlanner } from "@/components/features/TimelinePlanner";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProductStudio() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="SaaS features"
          title="Interactive planning tools make the concept feel real."
          description="These product surfaces show how the platform can move beyond inspiration into useful planning workflows."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <BudgetEstimator />
          </Reveal>
          <Reveal delay={0.1}>
            <TimelinePlanner />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
