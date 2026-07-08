import { defineField, defineType } from "sanity";

export const eventCategory = defineType({
  name: "eventCategory",
  title: "Event Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: ["heart", "cake", "gift", "baby", "sparkles", "building"],
      },
    }),
    defineField({
      name: "colorTheme",
      title: "Color Theme",
      type: "string",
      description: "Example: crimson, rose flame, olive grove, spiced orange, coral blush",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
