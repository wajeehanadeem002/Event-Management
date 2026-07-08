import { PricingSection } from "@/components/sections/PricingSection";
import { PageHero } from "@/components/ui/PageHero";

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Plans that make the SaaS concept commercially believable."
        description="The pricing page can later connect to Stripe, authenticated workspaces, and saved planning boards."
      />
      <PricingSection />
    </>
  );
}
