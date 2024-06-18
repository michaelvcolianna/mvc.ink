<script>
  export let image
  export let maxWidth
  export let classes

  const { filename, alt } = image

  let [ width, height ] = filename.split('/')[5].split('x')

  const divisor = width / maxWidth

  height = Math.round(height / divisor)
  width = maxWidth
</script>

<img src={`${filename}/m/${width}x0`} alt={alt} height={height} width={width} class={classes} />
