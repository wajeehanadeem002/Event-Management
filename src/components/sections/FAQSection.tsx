import { faqs } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.75fr_1fr]">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title="Clear answers for the product concept."
          description="These questions help frame the project as a modern SaaS platform and explain where the architecture can go next."
        />
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.5rem] border border-purple/10 bg-background p-5"
            >
              <summary className="cursor-pointer list-none text-base font-bold text-foreground">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-purple ring-1 ring-purple/10 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
