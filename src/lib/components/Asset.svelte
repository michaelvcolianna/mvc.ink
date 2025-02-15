<script>
  let { alt, filename, height, width } = $props();

  const asset = (filename || '').replace(
    '//a-us.storyblok.com',
    '//assets.mvc.ink'
  );
  const src = `${asset}/m/`;
</script>

<img {alt} {src} {height} {width} />
