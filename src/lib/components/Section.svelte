<script context="module">
  let idCounter = 0
</script>

<script>
  import { StoryblokComponent } from '@storyblok/svelte'
  import { makeClasses } from '$lib/index'

  export let anchorId
  export let content
  export let image
  export let type
  export let style
  export let orientation
  export let alignment
  export let position

  const { filename, alt } = image

  const id = anchorId ?? `section-${++idCounter}`

  const classes = makeClasses([
    `type-${type}`,
    `style-${style}`,
    `orientation-${orientation}`,
    `alignment-${alignment}`,
    `position-${position}`,
  ])
</script>

<section {id} class={classes}>
  <div class="content">
    {#each content as blok}
      <StoryblokComponent {blok} />
    {/each}
  </div>

  {#if filename}
    <div class="image">
      <img src={filename} alt={alt} />
    </div>
  {/if}
</section>
