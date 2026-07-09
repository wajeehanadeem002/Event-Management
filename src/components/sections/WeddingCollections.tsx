import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const weddingCollections = [
  {
    title: "Dholki",
    image: "/dholki.jpg",
    description: "Warm music-night inspiration with colorful seating, lights, and family moments.",
    accent: "from-spiced-orange to-coral-blush",
  },
  {
    title: "Mayoon",
    image: "/mayoon.jpg",
    description: "Soft yellow celebration styling with intimate decor and pre-wedding rituals.",
    accent: "from-spiced-orange to-olive-grove",
  },
  {
    title: "Mehndi",
    image: "/mehndi.jpg",
    description: "Vibrant mehndi boards with floral details, festive stages, and playful palettes.",
    accent: "from-olive-grove to-rose-flame",
  },
  {
    title: "Nikkah",
    image: "/nikkah.jpg",
    description: "Elegant ceremony inspiration with graceful details and refined romantic styling.",
    accent: "from-crimson to-rose-flame",
  },
  {
    title: "Barat",
    image: "/barat.jpg",
    description: "Grand entrance and reception concepts with dramatic color, decor, and lighting.",
    accent: "from-rose-flame to-spiced-orange",
  },
  {
    title: "Walima",
    image: "/walima.jpg",
    description: "Polished walima layouts with luxe tables, soft florals, and evening ambience.",
    accent: "from-coral-blush to-crimson",
  },
];

export function WeddingCollections() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {weddingCollections.map((collection, index) => (
            <Reveal key={collection.title} delay={index * 0.04}>
              <article className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(140,3,28,0.1)] ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(140,3,28,0.16)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-foreground">
                  <Image
                    src={collection.image}
                    alt={`${collection.title} wedding event inspiration`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-foreground backdrop-blur">
                    <Sparkles className="h-3.5 w-3.5 text-rose-flame" aria-hidden="true" />
                    Wedding
                  </div>
                  <h2 className="absolute bottom-4 left-4 right-4 font-serif text-4xl font-semibold text-white">
                    {collection.title}
                  </h2>
                </div>
                <div className="p-5">
                  <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${collection.accent}`} />
                  <p className="mt-4 text-sm leading-7 text-muted">{collection.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
