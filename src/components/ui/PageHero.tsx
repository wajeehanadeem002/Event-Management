import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="premium-gradient border-b border-purple/10 pt-32 pb-20 sm:pt-36 sm:pb-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      </Container>
    </section>
  );
}
