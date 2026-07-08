import { FAQSection } from "@/components/sections/FAQSection";
import { PageHero } from "@/components/ui/PageHero";

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers that position Eventure as a real SaaS platform."
        description="Use this page to explain the concept, CMS model, future auth, and portfolio architecture."
      />
      <FAQSection />
    </>
  );
}
