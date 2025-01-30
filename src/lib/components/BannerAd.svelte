<script>
  import { onMount } from 'svelte';

  let { banners } = $props();

  let bannerAd;

  onMount(() => {
    const banner = banners[Math.floor(Math.random() * banners.length)];
    const [bannerWidth, bannerHeight] = banner.filename
      .split('/')[5]
      .split('x');

    bannerAd.alt = banner.alt;
    bannerAd.src = banner.filename;
    bannerAd.height = bannerHeight;
    bannerAd.width = bannerWidth;
  });
</script>

<img bind:this={bannerAd} alt src height width />

<style>
  img {
    margin: auto;
  }
</style>
