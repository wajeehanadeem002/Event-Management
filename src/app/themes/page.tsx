import Image from "next/image";
import { BabyShowerCollections } from "@/components/sections/BabyShowerCollections";
import { BirthdayCollections } from "@/components/sections/BirthdayCollections";
import { CorporateCollections } from "@/components/sections/CorporateCollections";
import { ThemeShowcase } from "@/components/sections/ThemeShowcase";
import { WeddingCollections } from "@/components/sections/WeddingCollections";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { eventThemes } from "@/lib/site-data";

type ThemesPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export default async function ThemesPage({ searchParams }: ThemesPageProps) {
  const category = (await searchParams).category;
  const selectedCategory = Array.isArray(category) ? category[0] : category;
  const isWeddingCategory = selectedCategory === "weddings" || selectedCategory === "wedding";
  const isBirthdayCategory = selectedCategory === "birthdays" || selectedCategory === "birthday";
  const isBabyShowerCategory =
    selectedCategory === "baby-showers" ||
    selectedCategory === "baby-shower" ||
    selectedCategory === "babyshower";
  const isCorporateCategory = selectedCategory === "corporate" || selectedCategory === "corporate-events";

  if (isWeddingCategory) {
    return (
      <>
        <section className="relative overflow-hidden bg-foreground pt-32 pb-20 text-white sm:pt-36 sm:pb-24">
          <Image
            src="/wedding-hero-section.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/45 to-foreground/80" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/35 to-foreground/50" aria-hidden="true" />
          <Container className="relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-white/80">
                Wedding collections
              </p>
              <h1 className="font-serif text-4xl font-semibold leading-tight text-white [text-shadow:0_8px_36px_rgba(0,0,0,0.35)] sm:text-5xl">
                Explore wedding moments from dholki to walima.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                Browse visual inspiration for each wedding event with dedicated imagery from the celebration flow.
              </p>
            </div>
          </Container>
        </section>
        <WeddingCollections />
      </>
    );
  }

  if (isBirthdayCategory) {
    return (
      <>
        <section className="relative overflow-hidden bg-foreground pt-32 pb-20 text-white sm:pt-36 sm:pb-24">
          <Image
            src="/birthday-hero-section.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/42 to-foreground/78" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/72 via-foreground/30 to-foreground/48" aria-hidden="true" />
          <Container className="relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-white/80">
                Birthday collections
              </p>
              <h1 className="font-serif text-3xl font-semibold leading-tight text-white [text-shadow:0_8px_36px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-5xl">
                Explore birthday ideas by theme, setting, and celebration style.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                Browse birthday inspiration from indoor setups to character and car theme party concepts.
              </p>
            </div>
          </Container>
        </section>
        <BirthdayCollections />
      </>
    );
  }

  if (isBabyShowerCategory) {
    return (
      <>
        <section className="relative overflow-hidden bg-foreground pt-32 pb-20 text-white sm:pt-36 sm:pb-24">
          <Image
            src="/babyshower-hero-section.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/68 via-foreground/40 to-foreground/78" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/28 to-foreground/48" aria-hidden="true" />
          <Container className="relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-white/80">
                Baby shower collections
              </p>
              <h1 className="font-serif text-3xl font-semibold leading-tight text-white [text-shadow:0_8px_36px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-5xl">
                Explore baby shower ideas by palette, setting, and guest moments.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                Browse baby shower inspiration with soft decor, brunch setups, welcome signs, and family-friendly celebration details.
              </p>
            </div>
          </Container>
        </section>
        <BabyShowerCollections />
      </>
    );
  }

  if (isCorporateCategory) {
    return (
      <>
        <section className="relative overflow-hidden bg-foreground pt-32 pb-20 text-white sm:pt-36 sm:pb-24">
          <Image
            src="/corporate-hero-section.PNG"
            alt=""
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/72 via-foreground/42 to-foreground/80" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/76 via-foreground/34 to-foreground/50" aria-hidden="true" />
          <Container className="relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-white/80">
                Corporate collections
              </p>
              <h1 className="font-serif text-3xl font-semibold leading-tight text-white [text-shadow:0_8px_36px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-5xl">
                Explore corporate events for launches, galas, and team moments.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                Browse corporate inspiration with premium staging, networking flow, branded details, and polished guest experiences.
              </p>
            </div>
          </Container>
        </section>
        <CorporateCollections />
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Event themes"
        title="Collections with mood, palette, budget, and event context."
        description="Themes are modeled for CMS editing, filtering, and detail pages. They are the visual discovery layer of the SaaS."
      />
      <ThemeShowcase limit={eventThemes.length} />
      <section className="bg-background py-16">
        <Container>
          <div className="grid gap-4 rounded-[2rem] bg-white p-6 ring-1 ring-purple/10 md:grid-cols-4">
            {["Mood filters", "Palette swatches", "Budget bands", "Saved boards"].map((item) => (
              <div key={item} className="rounded-2xl bg-background p-4 text-center text-sm font-bold text-foreground">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
