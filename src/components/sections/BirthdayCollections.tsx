import Image from "next/image";
import { Cake, PartyPopper } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const birthdayCollections = [
  {
    title: "Birthday Celebration",
    badge: "BIRTHDAY",
    image: "/birthday.jpg",
    description: "Colorful birthday inspiration with joyful decor, cake moments, and celebration styling.",
    accent: "from-rose-flame to-coral-blush",
  },
  {
    title: "Indoor Birthday",
    badge: "INDOOR",
    image: "/Indoor birthday.jpg",
    description: "Cozy indoor party setups with polished tables, balloons, and intimate guest flow.",
    accent: "from-coral-blush to-spiced-orange",
  },
  {
    title: "Theme Birthday",
    badge: "THEME PARTY",
    image: "/theme birthday.jpg",
    description: "Curated theme concepts with matching palettes, props, dessert tables, and photo corners.",
    accent: "from-spiced-orange to-rose-flame",
  },
  {
    title: "Car Theme Birthday",
    badge: "KIDS THEME",
    image: "/car theme birthday.jpg",
    description: "Playful car-themed birthday styling with bold details, activity zones, and fun displays.",
    accent: "from-foreground to-crimson",
  },
  {
    title: "Character Theme Birthday",
    badge: "CHARACTER",
    image: "/character theme birthday.jpg",
    description: "Character-led birthday ideas with immersive backdrops, themed decor, and picture moments.",
    accent: "from-olive-grove to-coral-blush",
  },
];

export function BirthdayCollections() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {birthdayCollections.map((collection, index) => (
            <Reveal key={collection.title} delay={index * 0.04}>
              <article className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(140,3,28,0.1)] ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(140,3,28,0.16)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-foreground">
                  <Image
                    src={collection.image}
                    alt={`${collection.title} event inspiration`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-foreground backdrop-blur">
                    <PartyPopper className="h-3.5 w-3.5 text-rose-flame" aria-hidden="true" />
                    {collection.badge}
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

        <div className="mt-5 rounded-[2rem] bg-white p-5 ring-1 ring-border md:col-span-2 xl:col-span-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-flame">Planning cue</p>
              <p className="mt-1 text-sm font-semibold text-muted">
                Mix a theme, venue style, guest count, and cake moment to build a complete birthday board.
              </p>
            </div>
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-flame/12 text-rose-flame">
              <Cake className="h-5 w-5" aria-hidden="true" />
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
