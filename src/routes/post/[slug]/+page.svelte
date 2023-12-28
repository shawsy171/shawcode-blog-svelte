<script lang="ts">
  import Header from '../../../common/components/header.svelte';
  import Date from '$common/components/date.svelte';
  import BackLink from '$common/components/back-link.svelte';
  
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
  <h1>{data.metadata.title}</h1>
  
  <div class="categories">
    {#each data.metadata.categories as category}
    <span class="pill">{category}</span>
    {/each}
  </div>

  <Date date={data.metadata.date} />
</hgroup>

<div class="markdown-content">
  <svelte:component this={data.content} />
</div>

<BackLink href="/" />

<style>
  hgroup {
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--grey-900);
  }

  h1 {
    font-size: 3rem;
    margin: 10px 0;
  }
</style>
