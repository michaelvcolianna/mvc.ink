<script context="module">
  let idCounter = 0
</script>

<script>
  import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte'

  export let blok

  const anchorId = blok.anchorId || `split-content-${++idCounter}`
</script>

<div use:storyblokEditable={blok} id={anchorId}>
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
