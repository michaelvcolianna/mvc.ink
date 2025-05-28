<script>
  import { richTextResolver } from '@storyblok/richtext';

  let { blok } = $props();

  // Create the rich text renderer
  const { render } = richTextResolver();
</script>

<div class="content grid gap-6">
  {@html render(blok.content)}
</div>
