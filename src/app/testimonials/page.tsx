import { Testimonials } from "@/components/sections/Testimonials";
import { PageHero } from "@/components/ui/PageHero";

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Social proof for calm, organized, premium planning."
        description="Testimonials can be CMS-powered and filtered by event type, plan, location, and customer segment."
      />
      <Testimonials />
    </>
  );
}
