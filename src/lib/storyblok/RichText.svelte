<script context="module">
  let idCounter = 0
</script>

<script>
  import { storyblokEditable } from '@storyblok/svelte'
  import RichText from '$lib/components/RichText.svelte'

  export let blok

  const anchorId = blok.anchorId || `rich-text-${++idCounter}`
</script>

<div use:storyblokEditable={blok} id={anchorId}>
  <RichText content={blok.content} />
</div>
