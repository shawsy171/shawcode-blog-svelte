<script lang="ts">
  import { formatDate } from '$lib/dates';
  import Header from '../../../common/components/header.svelte';

  export let data;

  console.log(data);
</script>

<svelte:head>
  <title>{data.metadata.title}</title>
  <meta property="og:title" content={data.metadata.title} />
  <meta property="og:description" content={data.metadata.description} />
  <!-- <meta property="og:image" content={data.metadata.image} /> -->
  <!-- <meta property="og:url" content={data.metadata.url} /> -->
  <meta property="og:type" content="article" />
</svelte:head>
<hgroup>
  <p class="date">{formatDate(data.metadata.date)}</p>
  <h1>{data.metadata.title}</h1>

  <div class="categories">
    {#each data.metadata.categories as category}
      <span class="pill">{category}</span>
    {/each}
  </div>
</hgroup>

<div class="markdown-content">
  <svelte:component this={data.content} />
</div>

<a href="/">Back</a>

<style>
  hgroup {
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--grey-900);
  }

  h1 {
    font-size: 3rem;
    margin: 10px 0;
  }
</style>
