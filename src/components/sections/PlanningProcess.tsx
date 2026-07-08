import { planningProcess } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { IconBubble } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PlanningProcess() {
  return (
    <section className="premium-gradient py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Planning process"
          title="A smooth flow from inspiration to inquiry."
          description="The core workflow is simple enough for visitors to understand quickly, but deep enough to feel like a product."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {planningProcess.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <div className="relative h-full rounded-[2rem] bg-white/78 p-6 ring-1 ring-purple/10 backdrop-blur">
                <div className="flex items-center justify-between">
                  <IconBubble name={step.icon} />
                  <span className="font-serif text-4xl font-semibold text-purple/20">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
