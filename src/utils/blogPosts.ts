import type { CollectionEntry } from 'astro:content';

/** Sort by when the post was published to the site (not trip date, not filesystem birthtime). */
export function sortByLatestCreated(posts: CollectionEntry<'blog'>[]) {
  return [...posts].sort((a, b) => {
    const aTime = (a.data.published ?? a.data.date).valueOf();
    const bTime = (b.data.published ?? b.data.date).valueOf();
    return bTime - aTime;
  });
}
