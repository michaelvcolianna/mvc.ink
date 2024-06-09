<script>
  import { renderRichText } from '@storyblok/svelte'

  export let content

  $: resolvedRichText = renderRichText(content)
</script>

{@html resolvedRichText}
