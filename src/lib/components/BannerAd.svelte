<script>
  import { onMount } from 'svelte';
  import { onNavigate } from '$app/navigation';

  let { banners } = $props();

  let bannerAd;

  /**
   * Assigns a random banner ad.
   */
  function randomBannerAd() {
    // Pick a random banner
    const banner = banners[Math.floor(Math.random() * banners.length)];

    // Extract the banner's height and width from the URL
    const [bannerWidth, bannerHeight] = banner.filename
      .split('/')[5]
      .split('x');

    // Update the IMG element
    bannerAd.alt = banner.alt;
    bannerAd.src = banner.filename;
    bannerAd.height = bannerHeight;
    bannerAd.width = bannerWidth;
  }

  // Run random ad when the component mounts
  onMount(() => {
    randomBannerAd();
  });

  // Update random ad when changing pages
  onNavigate(randomBannerAd);
</script>

<img bind:this={bannerAd} alt src height width />

<style>
  img {
    margin: auto;
  }
</style>
