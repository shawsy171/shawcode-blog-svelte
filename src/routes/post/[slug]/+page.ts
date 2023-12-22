import { error } from "@sveltejs/kit";
// import { z } from "zod";

interface Params {
	slug: string;
}

interface PostPage {
	params: Params;
}
import type { Post, MetaData } from "$lib/types";
  interface PostData {
    content: ConstructorOfATypedSvelteComponent;
    metadata: MetaData;
  }
  
export const load = async ({ params }: PostPage) => {
	console.log(params);
  
  try {
    const { slug } = params;
    const post = await import(`../../../posts/${slug}.md`);
    // const post = await import(`$posts/${slug}.md`);
    // many-to-many-database-design
    console.log(post);
  
    const postData: PostData = {
      content: post.default,
      metadata: post.metadata
    };

    return postData;
  } catch (e) {
    // throw new Error("error while loading post");
    throw error(404, `Post not found ${params.slug}`);
  }
};
