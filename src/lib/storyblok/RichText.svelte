<script>
  import { storyblokEditable } from '@storyblok/svelte'
  import RichText from '$lib/components/RichText.svelte'

  export let blok
</script>

<div use:storyblokEditable={blok}>
  <RichText content={blok.content} />
</div>
