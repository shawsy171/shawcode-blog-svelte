// import PageLoad from './$types'
import type { Post } from '$lib/types';

interface PageLoad {
  fetch: typeof fetch
}

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: PageLoad) {
  const res = await fetch('api/posts');
  const { posts }: { posts: Post[] } = await res.json();

  return { posts }
}
