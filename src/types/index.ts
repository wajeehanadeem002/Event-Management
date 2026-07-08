export type IconKey =
  | "sparkles"
  | "heart"
  | "cake"
  | "gift"
  | "building"
  | "baby"
  | "calendar"
  | "wallet"
  | "map"
  | "star"
  | "users"
  | "palette"
  | "camera"
  | "check"
  | "message"
  | "wand"
  | "timer"
  | "shield";

export type EventCategory = {
  title: string;
  slug: string;
  description: string;
  icon: IconKey;
  gradient: string;
  image: string;
  stat: string;
};

export type EventTheme = {
  title: string;
  slug: string;
  category: string;
  mood: string;
  palette: string[];
  budget: string;
  image: string;
  featured?: boolean;
};

export type Vendor = {
  name: string;
  category: string;
  location: string;
  rating: number;
  priceRange: string;
  image: string;
  specialty: string;
};

export type Testimonial = {
  name: string;
  role: string;
  eventType: string;
  quote: string;
  image: string;
  rating: number;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
};
