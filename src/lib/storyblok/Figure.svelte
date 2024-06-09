<script context="module">
  let idCounter = 0
</script>

<script>
  import { storyblokEditable } from '@storyblok/svelte'
  import RichText from '$lib/components/RichText.svelte'

  export let blok

  const anchorId = blok.anchorId || `figure-${++idCounter}`
</script>

<div use:storyblokEditable={blok} id={anchorId}>
  <figure>
    <figcaption>
      <img
        alt={blok.image.alt}
        src="{blok.image.filename}/m/"
        width={blok.width || undefined}
      />

      <RichText content={blok.caption} />
    </figcaption>
  </figure>
</div>
