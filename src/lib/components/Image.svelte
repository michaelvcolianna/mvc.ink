<script>
  let { image, maxWidth, classes } = $props();

  // Pull the needed variables from the image
  const { filename, alt } = image;

  // Extract the width and height from the image URL
  const [urlWidth, urlHeight] = filename.split('/')[5].split('x');

  // Determine image ratio
  const divisor = urlWidth / maxWidth;

  // Create the height and width
  const height = Math.round(urlHeight / divisor);
  const width = maxWidth;

  // CDN mask
  const cdnFilename = filename.replace(
    '//a-us.storyblok.com',
    '//assets.mvc.ink'
  );

  // Make the optimized image URL
  const src = `${cdnFilename}/m/${width}x0`;
</script>

<img {src} {alt} {height} {width} class={classes} />
