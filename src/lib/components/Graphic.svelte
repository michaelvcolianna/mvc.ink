<script>
  import Asset from '$lib/components/Asset.svelte';

  let { block } = $props();
</script>

<div class={`graphic align-${block.alignment} style-${block.style}`}>
  {#each Array.from({ length: block.repeat }) as _, i}
    <Asset
      alt={i === 0 ? block.description || '' : ''}
      filename={block.image.filename}
      height={block.height}
      width={block.width}
    />
  {/each}
</div>
