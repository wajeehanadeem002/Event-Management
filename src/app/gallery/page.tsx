import Image from "next/image";
import { Container } from "@/components/ui/Container";

const galleryItems = [
  {
    title: "Wedding Celebration",
    category: "Wedding",
    image: "/dholki.jpg",
  },
  {
    title: "Birthday Setup",
    category: "Birthday",
    image: "/birthday.jpg",
  },
  {
    title: "Engagement Moment",
    category: "Engagement",
    image: "/engagement.jpg",
  },
  {
    title: "Baby Shower Decor",
    category: "Baby Shower",
    image: "/baby1.jpg",
  },
  {
    title: "Anniversary Dinner",
    category: "Anniversary",
    image: "/anniversary1.jpg",
  },
  {
    title: "Corporate Event",
    category: "Corporate",
    image: "/corporate1.jpg",
  },
];

export default function GalleryPage() {
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
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/44 to-foreground/24" aria-hidden="true" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-white/80">
              Gallery
            </p>
            <h1 className="font-serif text-3xl font-semibold leading-tight text-white [text-shadow:0_8px_36px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-5xl">
              Simple event inspiration gallery.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              Clean visuals for weddings, birthdays, engagements, baby showers, anniversaries, and corporate events.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_70px_rgba(140,3,28,0.1)] ring-1 ring-[rgba(140,3,28,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(140,3,28,0.16)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-foreground">
                  <Image
                    src={item.image}
                    alt={`${item.title} inspiration`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-flame">
                    {item.category}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl font-semibold text-foreground">
                    {item.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
