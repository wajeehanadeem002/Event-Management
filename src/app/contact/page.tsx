import { BookingInquiryForm } from "@/components/features/BookingInquiryForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="A conversion-ready booking inquiry flow."
        description="The form is validated with React Hook Form and Zod. A production version can send email, save leads, or create bookings."
      />
      <section className="bg-background py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-start">
          <SectionHeading
            align="left"
            eyebrow="Inquiry builder"
            title="Capture the details planners need."
            description="The UX asks for event type, date, guest count, budget, and notes. It is intentionally SaaS-like and ready for a Next.js API route."
          />
          <BookingInquiryForm />
        </Container>
      </section>
    </>
  );
}
