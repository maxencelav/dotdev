import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string(),
  }),
});

export const collections = { writing };
