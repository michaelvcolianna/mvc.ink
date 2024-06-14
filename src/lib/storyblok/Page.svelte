<script>
  import { StoryblokComponent } from '@storyblok/svelte'

  export let blok
</script>

{#each blok.sections as section}
  <StoryblokComponent blok={section} />
{/each}
