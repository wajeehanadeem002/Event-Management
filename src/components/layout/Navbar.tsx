"use client";

import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#D99B20] bg-[#F1B12B] shadow-[0_10px_35px_rgba(44,30,30,0.12)]">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Eventure home">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-white shadow-lg">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block font-serif text-2xl font-semibold leading-none text-foreground">
              Eventure
            </span>
            <span className="block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-muted">
              Planning SaaS
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-muted transition hover:bg-purple/10 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/contact" variant="secondary">
            Book demo
          </ButtonLink>
          <ButtonLink href="/themes" showArrow>
            Explore themes
          </ButtonLink>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-foreground ring-1 ring-purple/15 lg:hidden"
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={cn(
          "grid border-t border-[#D99B20] bg-[#F1B12B] transition-all duration-300 lg:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <Container className="flex flex-col gap-2 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-foreground hover:bg-purple/10"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/contact" className="mt-3 w-full" showArrow>
              Start planning
            </ButtonLink>
          </Container>
        </div>
      </div>
    </header>
  );
}
