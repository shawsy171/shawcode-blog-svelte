<script>
  import Header from "$common/components/header.svelte";
</script>

<Header />
<div class="main-container">
  <slot />
</div>

<style>
  .main-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 2rem;
  }
</style>