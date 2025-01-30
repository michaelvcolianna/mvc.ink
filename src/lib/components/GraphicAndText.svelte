<script>
  import Graphic from '$lib/components/Graphic.svelte';
  import Paragraph from '$lib/components/Paragraph.svelte';

  let { block } = $props();
</script>

<div
  class={`graphic-and-text align-${block.alignment} position-${block.positioning}`}
>
  <Graphic block={block.graphic[0]} />

  <Paragraph block={block.paragraph[0]} />
</div>
