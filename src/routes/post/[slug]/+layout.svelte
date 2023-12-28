<script lang="ts">
  import BackLink from "$common/components/back-link.svelte";
</script>

<div class="post-container">
  <BackLink href="/" />
  <slot />
</div>

<style>
  .post-container {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>