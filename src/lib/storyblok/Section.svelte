<script context="module">
  let idCounter = 0
</script>

<script>
  import { StoryblokComponent } from '@storyblok/svelte'
  import { makeClasses } from '$lib/index'

  export let blok

  const anchorId = blok.anchorId || `section-${++idCounter}`

  const classes = makeClasses([
    'wrapper',
    `style${blok.style}`,
    blok.reduceVerticalSpace ? 'reduced' : '',
  ])
</script>

<section id={anchorId} class={classes}>
  <div class="inner">
    {#each blok.content as blok}
      <StoryblokComponent {blok} />
    {/each}
  </div>
</section>
