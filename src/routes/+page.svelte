<script>
  // import { Skull } from "lucide-svelte";
  export let data;
  import { formatDate } from '$lib/dates';

  // console.log(data);
</script>

<svelte:head>
  <title>ShawCode Blog</title>
</svelte:head>

<!-- <Skull size="64" /> -->

<ul class="posts">
  {#each data.posts as post}
    {#if post.published}
    <li class="post">
      
      <h2>{post.title}</h2>
      
      <p class="date">{formatDate(post.date)}</p>

      <div class="categories">
        {#each post.categories as category}
          <span class="pill">{category}</span>
        {/each}
      </div>
      <p>{post.description}</p>

      <a href={`post/${post.slug}`}>
        Read More ...
      </a>
    </li>
    {/if}
  {/each}
</ul>
