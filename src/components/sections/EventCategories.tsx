import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { eventCategories } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { IconBubble } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EventCategories() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Event categories"
          title="Browse celebrations by mood, format, and planning needs."
          description="Each category can become a CMS-powered landing page with curated themes, vendor shortlists, planning tasks, and inspiration galleries."
          titleClassName="text-3xl sm:text-4xl"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {eventCategories.map((category, index) => (
            <Reveal key={category.slug} delay={index * 0.05}>
              <Link
                href={`/themes?category=${category.slug}`}
                className="group relative block min-h-[360px] overflow-hidden rounded-[2rem] bg-foreground shadow-[0_24px_70px_rgba(44,30,30,0.16)]"
              >
                <Image
                  src={category.image}
                  alt={`${category.title} event inspiration`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover opacity-75 transition duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-50 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-transparent" />
                <div className="relative z-10 flex min-h-[360px] flex-col justify-between p-6 text-white">
                  <div className="flex items-center justify-between">
                    <IconBubble name={category.icon} className="bg-white/20 text-white ring-white/20" />
                    <span className="rounded-full bg-white/16 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]">
                      {category.stat}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl font-semibold">{category.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/80">{category.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">
                      Explore category
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
