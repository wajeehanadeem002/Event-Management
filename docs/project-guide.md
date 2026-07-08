# Eventure Project Guide

Eventure is a premium event planning SaaS concept, not a traditional event agency website. The product story is discovery, planning, vendor comparison, budget estimation, and booking inquiry management.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Sanity CMS
- React Hook Form + Zod
- Optional future layer: Prisma + Neon for accounts, saved boards, and bookings

## Folder Structure

```txt
src/
  app/
    api/
    about/
    blog/
    contact/
    faq/
    gallery/
    pricing/
    services/
    testimonials/
    themes/
    vendors/
  components/
    features/
    layout/
    sections/
    ui/
  lib/
  sanity/
    lib/
    schemas/
  types/
```

## Component Architecture

- `components/ui`: reusable primitives such as buttons, cards, containers, icons, headings, and reveal animation wrappers.
- `components/layout`: global navigation and footer.
- `components/sections`: homepage and marketing page sections.
- `components/features`: interactive SaaS surfaces such as the budget estimator, timeline planner, vendor directory, and booking form.

## Design System

Palette:

- Lavender `#BFA2DB`
- Royal Purple `#6D3FD1`
- Rose Pink `#F472B6`
- Peach `#FDBA9A`
- Soft Gold `#F4C95D`
- Mint `#A7F3D0`
- Ink `#21182F`
- Background `#FFFAFB`

Typography:

- Headings: Playfair Display
- Body: Plus Jakarta Sans

Spacing:

- Sections: `py-20 sm:py-28`
- Container: `max-w-7xl px-4 sm:px-6 lg:px-8`
- Cards: large radius for premium surfaces
- Inputs and buttons: at least 48px tall

## Sanity Schemas

- `eventCategory`
- `eventTheme`
- `galleryImage`
- `vendor`
- `testimonial`
- `blogPost`
- `faq`
- `pricingPlan`
- `siteSettings`

Run the CMS locally with:

```bash
npm run sanity
```

## Premium Features To Add Next

- Theme discovery quiz with saved result
- Authenticated saved inspiration boards
- Multi-event dashboard
- Vendor availability calendar
- Stripe checkout for plans
- Prisma + Neon booking records
- Email notifications for inquiries
- Sanity draft preview
- Gallery lightbox with filters
- AI-style event idea generator
