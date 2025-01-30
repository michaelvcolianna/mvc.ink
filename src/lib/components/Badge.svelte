<script>
  let { badge } = $props();

  // Extract the image height and width from the URL
  const [width, height] = badge.filename.split('/')[5].split('x');
</script>

<img alt={badge.alt} src={badge.filename} {height} {width} />

<style>
  img {
    height: 31px;
    width: auto;
  }
</style>
