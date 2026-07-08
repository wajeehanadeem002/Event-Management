import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { galleryImages } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GalleryPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Gallery preview"
            title="Inspiration that feels editorial and usable."
            description="The gallery can be filtered by event type, theme, palette, and vendor tags from Sanity."
            className="max-w-2xl"
          />
          <Link href="/gallery" className="inline-flex items-center gap-2 font-bold text-purple">
            Open gallery <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-4">
          {galleryImages.slice(0, 5).map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.04}
              className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}
            >
              <div className="group relative h-full overflow-hidden rounded-[2rem] bg-foreground">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover opacity-90 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl font-semibold text-white">{item.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
