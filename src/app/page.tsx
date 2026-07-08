import { CTASection } from "@/components/sections/CTASection";
import { EventCategories } from "@/components/sections/EventCategories";
import { FAQSection } from "@/components/sections/FAQSection";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { Hero } from "@/components/sections/Hero";
import { PlanningProcess } from "@/components/sections/PlanningProcess";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProductStudio } from "@/components/sections/ProductStudio";
import { Testimonials } from "@/components/sections/Testimonials";
import { ThemeShowcase } from "@/components/sections/ThemeShowcase";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { VendorShowcase } from "@/components/sections/VendorShowcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <EventCategories />
      <WhyChooseUs />
      <PlanningProcess />
      <ProductStudio />
      <ThemeShowcase />
      <VendorShowcase />
      <Testimonials />
      <GalleryPreview />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
