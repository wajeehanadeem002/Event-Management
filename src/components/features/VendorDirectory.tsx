"use client";

import Image from "next/image";
import { ArrowRight, MapPin, Search, SlidersHorizontal, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { vendors } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(vendors.map((vendor) => vendor.category)))];

export function VendorDirectory() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredVendors = useMemo(() => {
    return vendors.filter((vendor) => {
      const matchesCategory = category === "All" || vendor.category === category;
      const matchesQuery = `${vendor.name} ${vendor.location} ${vendor.specialty}`
        .toLowerCase()
        .includes(query.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="grid gap-8">
      <div className="rounded-[1.75rem] bg-white p-4 shadow-[0_20px_70px_rgba(140,3,28,0.1)] ring-1 ring-[rgba(140,3,28,0.1)]">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search vendors, cities, or specialties"
              className="h-12 w-full rounded-full border border-border bg-background pl-12 pr-4 text-sm font-semibold outline-none ring-rose-flame/20 transition focus:ring-4"
            />
          </label>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-flame/12 text-rose-flame">
              <SlidersHorizontal className="h-5 w-5" aria-hidden="true" />
            </span>
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  "h-11 shrink-0 rounded-full px-4 text-sm font-bold transition",
                  category === item
                    ? "bg-crimson text-white shadow-[0_12px_35px_rgba(140,3,28,0.18)]"
                    : "bg-background text-muted ring-1 ring-border hover:bg-rose-flame/10 hover:text-foreground",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {filteredVendors.map((vendor) => (
          <article
            key={vendor.name}
            className="group overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_70px_rgba(140,3,28,0.1)] ring-1 ring-[rgba(140,3,28,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(140,3,28,0.16)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-foreground">
              <Image
                src={vendor.image}
                alt={vendor.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-foreground backdrop-blur">
                {vendor.category}
              </div>
              <span className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-white/92 px-3 py-1.5 text-xs font-bold text-foreground backdrop-blur">
                <Star className="h-3.5 w-3.5 fill-spiced-orange text-spiced-orange" aria-hidden="true" />
                {vendor.rating}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-2xl font-semibold text-foreground">{vendor.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{vendor.specialty}</p>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4 text-xs font-bold text-muted">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {vendor.location}
                </span>
                <span className="rounded-full bg-background px-3 py-1 text-foreground ring-1 ring-border">
                  {vendor.priceRange}
                </span>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-rose-flame">
                View profile
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
