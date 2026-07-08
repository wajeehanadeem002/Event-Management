import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { eventThemes } from "@/lib/site-data";

export function generateStaticParams() {
  return eventThemes.map((theme) => ({ slug: theme.slug }));
}

export default async function ThemeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const theme = eventThemes.find((item) => item.slug === slug);

  if (!theme) {
    notFound();
  }

  return (
    <section className="premium-gradient pt-32 pb-20 sm:pt-36 sm:pb-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-purple">{theme.category}</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
            {theme.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{theme.mood}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {theme.palette.map((color) => (
              <span
                key={color}
                className="h-12 w-12 rounded-full ring-4 ring-white"
                style={{ backgroundColor: color }}
                aria-label={`Palette color ${color}`}
              />
            ))}
          </div>
          <p className="mt-8 text-xl font-bold text-foreground">{theme.budget}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" showArrow>
              Start with this theme
            </ButtonLink>
            <ButtonLink href="/themes" variant="secondary">
              Back to themes
            </ButtonLink>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_30px_90px_rgba(109,63,209,0.2)]">
          <Image
            src={theme.image}
            alt={theme.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
