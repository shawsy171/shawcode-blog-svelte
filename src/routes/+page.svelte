<script>
  export let data;
  import Date from '$common/components/date.svelte';

</script>

<svelte:head>
  <title>ShawCode Blog</title>
</svelte:head>

<ul class="posts">
  {#each data.posts as post}
    {#if post.published}
    <li class="post">
      
      <h2>{post.title}</h2>
      
      <Date date={post.date} />

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
