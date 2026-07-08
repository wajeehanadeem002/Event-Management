import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { galleryImages } from "@/lib/site-data";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A CMS-ready inspiration gallery for premium events."
        description="Use this page to show editorial imagery, event categories, theme tags, and future lightbox interactions."
      />
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid auto-rows-[260px] gap-5 md:grid-cols-3">
            {galleryImages.map((item, index) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-[2rem] bg-foreground ${
                  index === 0 || index === 5 ? "md:row-span-2" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-90 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                    {item.category}
                  </p>
                  <h2 className="mt-1 font-serif text-2xl font-semibold">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
