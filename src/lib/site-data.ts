import type {
  BlogPost,
  EventCategory,
  EventTheme,
  FAQItem,
  IconKey,
  PricingPlan,
  Testimonial,
  Vendor,
} from "@/types";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/themes", label: "Themes" },
  { href: "/gallery", label: "Gallery" },
  { href: "/vendors", label: "Vendors" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

export const trustedBy = [
  "Aurora Weddings",
  "Bloom & Co.",
  "Pearl Venues",
  "Nova Events",
  "LuxeTable",
];

export const eventCategories: EventCategory[] = [
  {
    title: "Weddings",
    slug: "weddings",
    description: "Ceremony concepts, reception layouts, vendors, budgets, and timelines in one elegant flow.",
    icon: "heart",
    gradient: "from-rose-400 via-pink-400 to-fuchsia-500",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    stat: "320+ plans",
  },
  {
    title: "Birthdays",
    slug: "birthdays",
    description: "From intimate dinners to milestone parties with decor, entertainment, and guest moments.",
    icon: "cake",
    gradient: "from-amber-300 via-orange-300 to-rose-400",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    stat: "180+ ideas",
  },
  {
    title: "Engagements",
    slug: "engagements",
    description: "Romantic setup boards, floral concepts, dining details, and proposal celebration routes.",
    icon: "gift",
    gradient: "from-violet-400 via-purple-400 to-pink-400",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80",
    stat: "95+ themes",
  },
  {
    title: "Baby Showers",
    slug: "baby-showers",
    description: "Soft, joyful concepts with playful stations, dessert tables, games, and family-friendly flow.",
    icon: "baby",
    gradient: "from-sky-300 via-mint-300 to-emerald-300",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
    stat: "70+ boards",
  },
  {
    title: "Anniversaries",
    slug: "anniversaries",
    description: "Meaningful celebrations with memory walls, dinner experiences, renewals, and luxe details.",
    icon: "sparkles",
    gradient: "from-yellow-300 via-amber-300 to-pink-300",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    stat: "60+ routes",
  },
  {
    title: "Corporate",
    slug: "corporate",
    description: "Launches, retreats, awards nights, and client dinners planned with hospitality-grade polish.",
    icon: "building",
    gradient: "from-indigo-400 via-purple-400 to-cyan-400",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    stat: "140+ formats",
  },
];

export const planningProcess: {
  title: string;
  description: string;
  icon: IconKey;
}[] = [
  {
    title: "Discover",
    description: "Choose an event type, mood, guest count, budget band, and style direction.",
    icon: "wand",
  },
  {
    title: "Design",
    description: "Build a theme board with palettes, imagery, decor notes, vendors, and must-have moments.",
    icon: "palette",
  },
  {
    title: "Organize",
    description: "Turn ideas into a timeline, checklist, budget estimate, and booking inquiry.",
    icon: "calendar",
  },
  {
    title: "Book",
    description: "Shortlist vendors, send polished inquiries, and keep every decision visible.",
    icon: "message",
  },
];

export const eventThemes: EventTheme[] = [
  {
    title: "Lavender Garden Vows",
    slug: "lavender-garden-vows",
    category: "Wedding",
    mood: "Romantic, airy, botanical",
    palette: ["#BFA2DB", "#F7C8E0", "#F4C95D", "#FFFFFF"],
    budget: "From $18k",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    title: "Peach Brunch Jubilee",
    slug: "peach-brunch-jubilee",
    category: "Birthday",
    mood: "Warm, playful, sunlit",
    palette: ["#FDBA9A", "#F472B6", "#A7F3D0", "#FFF7FB"],
    budget: "From $4k",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    title: "Black Tie Bloom Gala",
    slug: "black-tie-bloom-gala",
    category: "Corporate",
    mood: "Dramatic, polished, editorial",
    palette: ["#1F1A2E", "#6D3FD1", "#F4C95D", "#FFFFFF"],
    budget: "From $32k",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    title: "Cloud Nine Baby Soiree",
    slug: "cloud-nine-baby-soiree",
    category: "Baby Shower",
    mood: "Soft, fresh, whimsical",
    palette: ["#BAE6FD", "#FBCFE8", "#A7F3D0", "#FFFFFF"],
    budget: "From $3k",
    image: "https://images.unsplash.com/photo-1549451371-64aa98a6f660?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Golden Hour Anniversary",
    slug: "golden-hour-anniversary",
    category: "Anniversary",
    mood: "Intimate, glowing, nostalgic",
    palette: ["#F4C95D", "#FDBA9A", "#7C2D12", "#FFF7ED"],
    budget: "From $6k",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Velvet Ring Reveal",
    slug: "velvet-ring-reveal",
    category: "Engagement",
    mood: "Moody, lush, cinematic",
    palette: ["#6D3FD1", "#BE185D", "#F4C95D", "#111827"],
    budget: "From $7k",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80",
  },
];

export const vendors: Vendor[] = [
  {
    name: "Maison Florale",
    category: "Florals",
    location: "Los Angeles",
    rating: 4.9,
    priceRange: "$$$",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80",
    specialty: "Sculptural ceremony flowers and tablescape installations.",
  },
  {
    name: "Golden Plate Studio",
    category: "Catering",
    location: "New York",
    rating: 4.8,
    priceRange: "$$$$",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80",
    specialty: "Seasonal plated menus, dessert bars, and late-night bites.",
  },
  {
    name: "Velvet Lens",
    category: "Photography",
    location: "Chicago",
    rating: 5,
    priceRange: "$$$",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80",
    specialty: "Editorial photo coverage and warm documentary portraits.",
  },
  {
    name: "Auraluxe Collective",
    category: "Music",
    location: "Austin",
    rating: 4.7,
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=80",
    specialty: "Hybrid DJ, strings, and live vocal sets for modern receptions.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Maya & Julian",
    role: "Wedding clients",
    eventType: "Garden wedding",
    quote:
      "The theme board, budget estimate, and vendor shortlists made planning feel calm instead of chaotic.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
    rating: 5,
  },
  {
    name: "Nora Park",
    role: "People Ops Lead",
    eventType: "Company gala",
    quote:
      "It felt like a premium workspace for decisions. Leadership could review the plan without digging through docs.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    rating: 5,
  },
  {
    name: "Ari Khan",
    role: "Birthday host",
    eventType: "Milestone birthday",
    quote:
      "I found a color story, compared vendors, and sent an inquiry in one sitting. The UX is beautiful.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    rating: 5,
  },
];

export const galleryImages = [
  {
    title: "Garden ceremony aisle",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Candlelit dinner layout",
    category: "Anniversary",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Corporate cocktail hour",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Peach birthday table",
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Soft floral detail",
    category: "Theme",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Celebration stage glow",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Inspiration",
    price: "$19",
    description: "For hosts who want premium ideas, mood boards, and budget guidance.",
    features: ["Theme discovery", "Saved inspiration board", "Budget range estimate", "Gallery access"],
  },
  {
    name: "Planner",
    price: "$49",
    description: "For users actively planning an event and comparing vendors.",
    features: ["Timeline planner", "Vendor shortlist", "Booking inquiry builder", "Priority theme collections"],
    highlighted: true,
  },
  {
    name: "Concierge",
    price: "$149",
    description: "For high-touch planning workflows and white-glove event support.",
    features: ["Multi-event workspace", "Custom planning checklist", "Vendor coordination", "VIP support"],
  },
];

export const faqs: FAQItem[] = [
  {
    question: "Is this an event agency website or a SaaS product?",
    answer:
      "The concept is a SaaS platform. Users discover event themes, estimate budgets, organize timelines, compare vendors, and send inquiries from one workspace.",
  },
  {
    question: "Can the CMS power themes, blogs, galleries, and testimonials?",
    answer:
      "Yes. Sanity schemas are included for event categories, themes, gallery assets, vendors, testimonials, pricing plans, FAQs, blog posts, and site settings.",
  },
  {
    question: "Can user accounts and bookings be added later?",
    answer:
      "Yes. The structure leaves room for Prisma and Neon to support saved boards, event workspaces, vendor bookings, and authenticated dashboards.",
  },
  {
    question: "What makes this portfolio project feel premium?",
    answer:
      "The product has real SaaS workflows: theme discovery, budget estimation, vendor comparison, timeline planning, CMS content, and conversion-focused booking forms.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "How to Design an Event Theme That Feels Expensive",
    slug: "design-expensive-event-theme",
    excerpt: "A practical guide to palettes, focal moments, lighting, and restraint for luxury event styling.",
    category: "Design",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Budgeting for Weddings Without Killing the Magic",
    slug: "wedding-budget-without-killing-magic",
    excerpt: "Where to splurge, where to simplify, and how to keep guest experience at the center.",
    category: "Planning",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Vendor Shortlists: What Hosts Actually Need",
    slug: "vendor-shortlists-hosts-need",
    excerpt: "Turn vendor browsing into a decision system with pricing, fit, availability, and proof.",
    category: "Vendors",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80",
  },
];

export const premiumFeatures = [
  "Theme discovery quiz",
  "Saved inspiration boards",
  "Guest-count budget estimator",
  "Vendor marketplace filters",
  "Booking inquiry builder",
  "Event timeline checklist",
  "Sanity-powered editorial gallery",
  "Future Prisma + Neon user workspace",
];
