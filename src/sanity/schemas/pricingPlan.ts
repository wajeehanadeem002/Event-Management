import { defineField, defineType } from "sanity";

export const pricingPlan = defineType({
  name: "pricingPlan",
  title: "Pricing Plan",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "price", title: "Price", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "features", title: "Features", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "highlighted", title: "Highlighted", type: "boolean", initialValue: false }),
  ],
});
