import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnniversaryCollections } from "@/components/sections/AnniversaryCollections";
import { BabyShowerCollections } from "@/components/sections/BabyShowerCollections";
import { BirthdayCollections } from "@/components/sections/BirthdayCollections";
import { CorporateCollections } from "@/components/sections/CorporateCollections";
import { EngagementCollections } from "@/components/sections/EngagementCollections";
import { WeddingCollections } from "@/components/sections/WeddingCollections";
import { Container } from "@/components/ui/Container";

const themeCategories = [
  {
    title: "Weddings",
    href: "/themes?category=weddings",
    image: "/wedding-hero-section.png",
    description: "Dholki, mayoon, mehndi, nikkah, barat, and walima inspiration.",
    accent: "from-crimson to-rose-flame",
  },
  {
    title: "Birthdays",
    href: "/themes?category=birthdays",
    image: "/birthday-hero-section.png",
    description: "Indoor parties, themed decor, character setups, and cake moments.",
    accent: "from-rose-flame to-spiced-orange",
  },
  {
    title: "Engagements",
    href: "/themes?category=engagements",
    image: "/engagement-hero-section.png",
    description: "Proposal styling, ring moments, family details, and floral soirees.",
    accent: "from-crimson to-coral-blush",
  },
  {
    title: "Baby Showers",
    href: "/themes?category=baby-showers",
    image: "/babyshower-hero-section.png",
    description: "Soft decor, brunch setups, welcome signs, and family-friendly details.",
    accent: "from-olive-grove to-coral-blush",
  },
  {
    title: "Anniversaries",
    href: "/themes?category=anniversaries",
    image: "/anniversary-hero-section.png",
    description: "Romantic dinners, milestone moments, memory walls, and golden evenings.",
    accent: "from-spiced-orange to-crimson",
  },
  {
    title: "Corporate",
    href: "/themes?category=corporate",
    image: "/corporate-hero-section.PNG",
    description: "Launches, galas, team events, branded staging, and networking flow.",
    accent: "from-foreground to-rose-flame",
  },
];

type ThemesPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export default async function ThemesPage({ searchParams }: ThemesPageProps) {
  const category = (await searchParams).category;
  const selectedCategory = Array.isArray(category) ? category[0] : category;
  const isWeddingCategory = selectedCategory === "weddings" || selectedCategory === "wedding";
  const isBirthdayCategory = selectedCategory === "birthdays" || selectedCategory === "birthday";
  const isEngagementCategory = selectedCategory === "engagements" || selectedCategory === "engagement";
  const isBabyShowerCategory =
    selectedCategory === "baby-showers" ||
    selectedCategory === "baby-shower" ||
    selectedCategory === "babyshower";
  const isAnniversaryCategory = selectedCategory === "anniversaries" || selectedCategory === "anniversary";
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

  if (isEngagementCategory) {
    return (
      <>
        <section className="relative overflow-hidden bg-foreground pt-32 pb-20 text-white sm:pt-36 sm:pb-24">
          <Image
            src="/engagement-hero-section.png"
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
                Engagement collections
              </p>
              <h1 className="font-serif text-3xl font-semibold leading-tight text-white [text-shadow:0_8px_36px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-5xl">
                Explore engagement ideas for proposals, ring moments, and floral soirees.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                Browse engagement inspiration with romantic styling, family moments, refined decor, and photo-ready celebration details.
              </p>
            </div>
          </Container>
        </section>
        <EngagementCollections />
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

  if (isAnniversaryCategory) {
    return (
      <>
        <section className="relative overflow-hidden bg-foreground pt-32 pb-20 text-white sm:pt-36 sm:pb-24">
          <Image
            src="/anniversary-hero-section.png"
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
                Anniversary collections
              </p>
              <h1 className="font-serif text-3xl font-semibold leading-tight text-white [text-shadow:0_8px_36px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-5xl">
                Explore anniversary ideas for romantic dinners, milestones, and golden evenings.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                Browse anniversary inspiration with meaningful details, warm ambience, elegant decor, and memory-led celebration moments.
              </p>
            </div>
          </Container>
        </section>
        <AnniversaryCollections />
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
      <section className="relative overflow-hidden bg-foreground pt-32 pb-20 text-white sm:pt-36 sm:pb-24">
        <Image
          src="/hero-event-artwork.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/74 via-foreground/44 to-foreground/82" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/82 via-foreground/46 to-foreground/24" aria-hidden="true" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-white/80">
              Event themes
            </p>
            <h1 className="font-serif text-3xl font-semibold leading-tight text-white [text-shadow:0_8px_36px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-5xl">
              Pick a celebration style and explore the full theme board.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              Browse local theme collections for weddings, birthdays, engagements, baby showers, anniversaries, and corporate events.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {themeCategories.map((theme) => (
              <Link
                key={theme.title}
                href={theme.href}
                className="group relative block min-h-[360px] overflow-hidden rounded-[1.75rem] bg-foreground shadow-[0_24px_70px_rgba(140,3,28,0.12)] ring-1 ring-[rgba(140,3,28,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(140,3,28,0.18)]"
              >
                <Image
                  src={theme.image}
                  alt={`${theme.title} theme inspiration`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover opacity-90 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${theme.accent}`} />

                <div className="relative z-10 flex min-h-[360px] flex-col justify-between p-5 text-white">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-foreground backdrop-blur">
                      Theme
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/16 ring-1 ring-white/20 backdrop-blur">
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>

                  <div>
                    <h2 className="font-serif text-3xl font-semibold">{theme.title}</h2>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-white/82">{theme.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">
                      View collection
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
