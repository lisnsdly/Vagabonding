import fs from 'node:fs';
import path from 'node:path';
import type { CollectionEntry } from 'astro:content';

const blogDir = path.join(process.cwd(), 'src/content/blog');

function getPostFilePath(id: string): string | undefined {
  const match = fs
    .readdirSync(blogDir)
    .find((file) => file.replace(/\.(md|mdx)$/i, '').toLowerCase() === id.toLowerCase());

  return match ? path.join(blogDir, match) : undefined;
}

export function getPostCreatedAt(post: CollectionEntry<'blog'>): number {
  const filePath = getPostFilePath(post.id);
  if (!filePath) return post.data.date.valueOf();

  const { birthtimeMs, ctimeMs } = fs.statSync(filePath);
  return birthtimeMs > 0 ? birthtimeMs : ctimeMs;
}

export function sortByLatestCreated(posts: CollectionEntry<'blog'>[]) {
  return [...posts].sort((a, b) => getPostCreatedAt(b) - getPostCreatedAt(a));
}
