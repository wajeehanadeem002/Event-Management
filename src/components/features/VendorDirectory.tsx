"use client";

import Image from "next/image";
import { MapPin, Search, SlidersHorizontal, Star } from "lucide-react";
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
      <div className="rounded-[2rem] bg-white p-4 shadow-[0_18px_60px_rgba(109,63,209,0.08)] ring-1 ring-purple/10">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search vendors, cities, or specialties"
              className="h-12 w-full rounded-full border border-purple/10 bg-background pl-12 pr-4 text-sm font-semibold outline-none ring-purple/20 focus:ring-4"
            />
          </label>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple/10 text-purple">
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
                    ? "bg-foreground text-white"
                    : "bg-background text-muted hover:bg-purple/10 hover:text-foreground",
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
          <div key={vendor.name} className="overflow-hidden rounded-[2rem] bg-white ring-1 ring-purple/10">
            <div className="relative aspect-[4/3]">
              <Image src={vendor.image} alt={vendor.name} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
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
        ))}
      </div>
    </div>
  );
}
