import { json } from "@sveltejs/kit";
import type { Post, MetaData } from '$lib/types';

const byLatestDate = (a: Post, b: Post) => {
  const aDate = new Date(a.date).getTime();
  const bDate = new Date(b.date).getTime();

  return bDate - aDate;
}

const getPosts = async () => {
  let posts: Post[] = [];

  const paths = import.meta.glob('/src/posts/*.md', { eager: true });

  for (const path in paths) {
    const { metadata } = paths[path] as { metadata: MetaData };

    try {
      const fileName = path.split('/').at(-1);
      if(fileName === undefined) {
        throw new Error('No file name');
      } 
        
      const slug: string = fileName.replace('.md', '') ?? '';
      posts.push({ ...metadata, slug });

    } catch (error) {
      if(error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error('error while parsing file name');
    }
  }

  // sort by latest date
  posts = posts.sort(byLatestDate);

  // console.log(paths);
  return posts;
}

export async function GET () {
  const posts = await getPosts();

  return json({ posts });
}