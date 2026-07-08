import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { vendors } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function VendorShowcase({ limit = 4 }: { limit?: number }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Featured vendors"
            title="A polished marketplace layer for curated partners."
            description="Vendor cards give the project commercial depth and make future booking workflows easier to imagine."
            className="max-w-2xl"
          />
          <Link href="/vendors" className="inline-flex items-center gap-2 font-bold text-purple">
            Browse vendors <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {vendors.slice(0, limit).map((vendor, index) => (
            <Reveal key={vendor.name} delay={index * 0.05}>
              <div className="h-full overflow-hidden rounded-[2rem] bg-background ring-1 ring-purple/10">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={vendor.image}
                    alt={vendor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple">
                        {vendor.category}
                      </p>
                      <h3 className="mt-2 text-lg font-bold text-foreground">{vendor.name}</h3>
                    </div>
                    <span className="flex items-center gap-1 rounded-full bg-gold/20 px-2.5 py-1 text-xs font-bold">
                      <Star className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden="true" />
                      {vendor.rating}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">{vendor.specialty}</p>
                  <div className="mt-4 flex items-center justify-between text-xs font-bold text-muted">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {vendor.location}
                    </span>
                    <span>{vendor.priceRange}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
