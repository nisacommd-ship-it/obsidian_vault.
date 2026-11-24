import { getCollection, type CollectionEntry } from 'astro:content';
import { LOCALES, pathFor, type Locale } from '@/i18n/routes';

export type Post = CollectionEntry<'blog'>;

export async function getPosts(lang?: Locale): Promise<Post[]> {
  const all = await getCollection('blog', (p) => !p.data.draft && (!lang || p.data.lang === lang));
  return all.sort((a, b) => b.data.date.localeCompare(a.data.date));
}

export const postPath = (p: Post) => pathFor('blog', p.data.lang, p.data.slug);

/** Alternates only for languages where a translation exists. */
export async function postAlternates(p: Post): Promise<Partial<Record<Locale, string>>> {
  const all = await getPosts();
  const out: Partial<Record<Locale, string>> = {};
  for (const l of LOCALES) {
    const t = all.find((x) => x.data.translationKey === p.data.translationKey && x.data.lang === l);
    if (t) out[l] = postPath(t);
  }
  return out;
}

export function readingMinutes(body: string) {
  return Math.max(2, Math.round(body.split(/\s+/).length / 200));
}
