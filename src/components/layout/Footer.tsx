import Link from "next/link";
import { Camera, MessageCircle, Sparkles, Users } from "lucide-react";
import { navLinks, premiumFeatures } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-purple/10 bg-foreground text-white">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-purple">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-serif text-2xl font-semibold">Eventure</p>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">
                  Premium planning SaaS
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
              A portfolio-grade SaaS concept for discovering themes, organizing planning timelines,
              estimating budgets, and sending polished booking inquiries.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/50">Pages</p>
            <div className="mt-5 grid gap-3">
              {navLinks.slice(0, 6).map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-white/75 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/50">Product</p>
            <div className="mt-5 grid gap-3">
              {premiumFeatures.slice(0, 6).map((feature) => (
                <span key={feature} className="text-sm text-white/75">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/50">Social</p>
            <div className="mt-5 flex gap-3">
              {[Camera, MessageCircle, Users].map((SocialIcon, index) => (
                <a
                  key={index}
                  href="#"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-foreground"
                  aria-label="Social profile"
                >
                  <SocialIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-white/60">
              Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Sanity.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Eventure. Portfolio SaaS concept.</p>
          <div className="flex gap-5">
            <Link href="/faq" className="hover:text-white">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
