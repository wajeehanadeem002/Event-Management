import { ThemeShowcase } from "@/components/sections/ThemeShowcase";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { eventThemes } from "@/lib/site-data";

export default function ThemesPage() {
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
