<script>
  import { StoryblokComponent } from '@storyblok/svelte'

  export let sections
</script>

{#each sections as blok}
  <StoryblokComponent {blok} />
{/each}
