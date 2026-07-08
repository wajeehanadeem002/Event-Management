import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { eventThemes } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ThemeShowcase({ limit = 3 }: { limit?: number }) {
  const themes = eventThemes.slice(0, limit);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Theme showcase"
            title="Curated event directions with mood, palette, and budget context."
            description="Theme collections can be powered by Sanity and become the visual heart of the product."
            className="max-w-2xl"
          />
          <Link href="/themes" className="inline-flex items-center gap-2 font-bold text-purple">
            View all themes <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {themes.map((theme, index) => (
            <Reveal key={theme.slug} delay={index * 0.06}>
              <Link
                href={`/themes/${theme.slug}`}
                className="group block overflow-hidden rounded-[2rem] bg-background ring-1 ring-purple/10 transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(140,3,28,0.14)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={theme.image}
                    alt={theme.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-foreground backdrop-blur">
                    {theme.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-foreground">{theme.title}</h3>
                      <p className="mt-2 text-sm text-muted">{theme.mood}</p>
                    </div>
                    <p className="shrink-0 rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-foreground">
                      {theme.budget}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {theme.palette.map((color) => (
                        <span
                          key={color}
                          className="h-8 w-8 rounded-full ring-2 ring-white"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-purple">
                      Details <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
