<script lang="ts">
  import { ChevronLeft } from 'lucide-svelte';
  export let href = '/';
</script>

<a class="back-link" href={href}>
  <ChevronLeft />
  <span>Back</span>
</a>

<style>
  .back-link {
    display: flex;
    align-items: center;
  }
</style>