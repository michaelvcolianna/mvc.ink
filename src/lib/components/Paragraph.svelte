<script>
  import Markdown from '$lib/components/Markdown.svelte';

  let { block } = $props();
</script>

<div class={`paragraph align-${block.alignment}`}>
  <Markdown content={block.content} />
</div>
