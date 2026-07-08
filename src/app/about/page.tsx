import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { premiumFeatures } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A portfolio SaaS concept for modern event planning."
        description="Eventure is designed as a premium planning platform where users discover event inspiration, organize decisions, compare vendors, and move from ideas to action."
      />
      <section className="bg-white py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
            <Image
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80"
              alt="Premium event dinner tablescape"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Product thinking"
              title="The goal is not an agency brochure. It is a planning operating system."
              description="The project is structured to show product design, CMS modeling, responsive UI, stateful features, content strategy, and future-ready architecture."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {premiumFeatures.map((feature) => (
                <div key={feature} className="rounded-2xl bg-background p-4 text-sm font-bold text-foreground">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
