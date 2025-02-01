<script>
  let { block } = $props();
</script>

<div class={`graphic align-${block.alignment} style-${block.style}`}>
  {#each Array.from({ length: block.repeat }) as _, i}
    <img
      alt={i === 0 ? block.description || '' : ''}
      src={`${block.image.filename}/m/`}
      height={block.height}
      width={block.width}
    />
  {/each}
</div>
