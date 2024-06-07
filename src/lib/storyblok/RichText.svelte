<script>
  import { storyblokEditable, renderRichText } from '@storyblok/svelte'

  export let blok

  $: resolvedRichText = renderRichText(blok.content)
</script>

<div use:storyblokEditable={blok}>{@html resolvedRichText}</div>
