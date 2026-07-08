import { groq } from "next-sanity";

export const featuredThemesQuery = groq`
  *[_type == "eventTheme" && featured == true] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    mood,
    startingBudget,
    palette,
    coverImage,
    category->{title, "slug": slug.current}
  }
`;

export const galleryPreviewQuery = groq`
  *[_type == "galleryImage"] | order(_createdAt desc)[0...8] {
    _id,
    title,
    image,
    tags,
    category->{title, "slug": slug.current}
  }
`;

export const vendorDirectoryQuery = groq`
  *[_type == "vendor"] | order(featured desc, name asc) {
    _id,
    name,
    "slug": slug.current,
    category,
    location,
    rating,
    priceRange,
    images,
    description,
    featured
  }
`;

export const blogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    category,
    publishedAt
  }
`;
