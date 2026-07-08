import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { blogPosts } from "@/lib/site-data";

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Editorial content for planning strategy and event inspiration."
        description="Sanity can power useful SEO content around themes, budgets, vendor decisions, and planning timelines."
      />
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="overflow-hidden rounded-[2rem] bg-background ring-1 ring-purple/10">
                <div className="relative aspect-[4/3]">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple">
                    {post.category} · {post.readTime}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-semibold text-foreground">{post.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{post.excerpt}</p>
                  <Link href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-purple">
                    Read article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
