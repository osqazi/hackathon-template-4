import { defineType, defineField } from "sanity";

export default defineType({
  name: "subscribers",
  title: "Subscribers",
  type: "document",
  fields: [
    
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "isSubscribed",
      title: "Subscribed",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "subscribedAt",
      title: "Subscribed At",
      type: "datetime",
      initialValue: new Date().toISOString(),
      readOnly: true,
    }),
  ],
});
