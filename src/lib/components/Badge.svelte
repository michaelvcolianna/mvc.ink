<script>
  import Asset from '$lib/components/Asset.svelte';

  let { badge } = $props();

  // Extract the image height and width from the URL
  const [width, height] = badge.filename.split('/')[5].split('x');
</script>

<div>
  <Asset alt={badge.alt} filename={badge.filename} {height} {width} />
</div>

<style>
  div :global(img) {
    height: 31px;
    width: auto;
  }
</style>
