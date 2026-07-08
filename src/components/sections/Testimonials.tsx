import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="premium-gradient py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Designed around the relief of having everything organized."
          description="Social proof shows the SaaS value proposition: better decisions, calmer planning, and a more polished event experience."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.06}>
              <div className="h-full rounded-[2rem] bg-white/78 p-6 ring-1 ring-purple/10 backdrop-blur">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-gold" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-6 text-lg leading-8 text-foreground">“{testimonial.quote}”</p>
                <div className="mt-8 flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted">
                      {testimonial.role} · {testimonial.eventType}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
