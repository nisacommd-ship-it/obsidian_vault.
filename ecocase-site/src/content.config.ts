import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog articles: src/content/blog/<lang>/<slug>.md
// translationKey links the RO/RU/EN versions of one article (hreflang).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(70).max(165),
    h1: z.string().optional(),
    lang: z.enum(['ro', 'ru', 'en']),
    slug: z.string(),
    translationKey: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    author: z.string().default('Serghei Scutelniciuc'),
    category: z.string(),
    hub: z.enum(['price', 'technology', 'turnkey', 'projects', 'about', 'contact']),
    image: z.string().default('casa-exterior'),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    sources: z.array(z.object({ name: z.string(), url: z.string().url() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
