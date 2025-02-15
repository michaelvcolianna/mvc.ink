<script>
  let { banners } = $props();

  // Pick a random banner
  const banner = banners[Math.floor(Math.random() * banners.length)];

  // Extract the banner's height and width from the URL
  const [bannerWidth, bannerHeight] = banner.filename
    .split('/')[5]
    .split('x');

  // IMG element attributes
  const alt = banner.alt;
  const src = `${banner.filename}/m/`;
  const height = bannerHeight;
  const width = bannerWidth;
</script>

<img {alt} {src} {height} {width} />

<style>
  img {
    margin: auto;
  }
</style>
