<script>
  import { renderRichText } from '@storyblok/svelte'

  export let blok

  $: resolvedRichText = renderRichText(blok.content)
</script>

<div class="content grid gap-6">
  {@html resolvedRichText}
</div>
