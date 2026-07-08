import { trustedBy } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";

export function TrustedBy() {
  return (
    <section className="border-y border-purple/10 bg-white/75 py-8">
      <Container>
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-muted">
            Trusted by couples and teams
          </p>
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="shrink-0 rounded-full bg-purple/10 px-5 py-2 text-sm font-bold text-foreground ring-1 ring-purple/10"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
