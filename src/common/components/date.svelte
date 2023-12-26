<script lang="ts">  
  import { formatDate } from '$lib/dates';
  import { CalendarDays } from "lucide-svelte";
  export let date: string;
</script>


<p class="date">
  <CalendarDays />
  <span>
    {formatDate(date)}
  </span>
</p>

<style>
  .date {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    /* color: #585858; */
    color: var(--grey-700);
  }
  
  .date span {
    margin-top: 2px;
    margin-left: 0.5rem;
  }

</style>