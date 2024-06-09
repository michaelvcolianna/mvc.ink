<script context="module">
  let idCounter = 0
</script>

<script>
  import { StoryblokComponent } from '@storyblok/svelte'
  import { makeClasses } from '$lib/index'

  export let blok

  const { component, style, orientation, contentAlignment, imagePosition } = blok
  const { alt, filename } = blok.image

  const anchorId = blok.anchorId || `${component}-${++idCounter}`

  const classes = makeClasses([
    component,
    `style${style}`,
    `orient-${orientation}`,
    `content-align-${contentAlignment}`,
    `image-position-${imagePosition}`,
    blok.fullScreen ? 'fullscreen' : '',
  ])
</script>

<section id={anchorId} class={classes}>
  <div class="content">
    {#each blok.content as blok}
      <StoryblokComponent {blok} />
    {/each}
  </div>

  <div class="image">
    <img src={filename} alt={alt} />
  </div>
</section>
