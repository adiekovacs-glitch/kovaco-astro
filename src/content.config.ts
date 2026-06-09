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

export const collections = { playbook, articles };
