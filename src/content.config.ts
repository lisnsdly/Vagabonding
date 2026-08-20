import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    dateEnd: z.coerce.date().optional(),
    location: z.string(),
    coverImage: z.string(),
    region: z.enum([
      'east-asia',
      'southeast-asia',
      'europe',
      'middle-east',
      'africa',
    ]),
    excerpt: z.string().optional(),
    video: z.string().optional(),
    featuredOnHome: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
