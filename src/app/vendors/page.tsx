import { VendorDirectory } from "@/components/features/VendorDirectory";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export default function VendorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Vendors"
        title="Curated vendors with filters, ratings, cities, and specialties."
        description="This directory-style page helps the portfolio project feel like a marketplace-ready SaaS."
      />
      <section className="bg-background py-20 sm:py-28">
        <Container>
          <VendorDirectory />
        </Container>
      </section>
    </>
  );
}
