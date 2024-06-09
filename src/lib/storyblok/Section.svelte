<script context="module">
  let idCounter = 0
</script>

<script>
  import { StoryblokComponent } from '@storyblok/svelte'

  export let blok

  const anchorId = blok.anchorId || `section-${++idCounter}`
</script>

<section id={anchorId} class="wrapper style1">
  <div class="inner">
    {#each blok.content as blok}
      <StoryblokComponent {blok} />
    {/each}
  </div>
</section>
