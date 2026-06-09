import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sharedSchema = z.object({
  title:       z.string(),
  description: z.string(),
  pubDate:     z.coerce.date(),
});

const playbook = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/playbook' }),
  schema: sharedSchema,
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: sharedSchema,
});

const success = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/success' }),
  schema: z.object({
    author:  z.string(),
    title:   z.string(),
    company: z.string(),
    snippet: z.string(),
  }),
});

export const collections = { playbook, articles, success };
