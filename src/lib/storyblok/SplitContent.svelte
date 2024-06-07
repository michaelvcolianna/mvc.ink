<script>
  import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte'

  export let blok
</script>

<div use:storyblokEditable={blok}>
  <div>
    {#each blok.leftColumn as blok}
      <StoryblokComponent {blok} />
    {/each}
  </div>

  <div>
    {#each blok.rightColumn as blok}
      <StoryblokComponent {blok} />
    {/each}
  </div>
</div>
