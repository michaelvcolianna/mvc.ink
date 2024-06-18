<script>
  import { dev } from '$app/environment'
  import Footer from '$lib/components/Footer.svelte'
  import SourceSans3Normal from '$lib/assets/fonts/SourceSans3-Normal.woff2'
  import SourceSans3Italic from '$lib/assets/fonts/SourceSans3-Italic.woff2'
  import '../app.postcss'

  const url = `https://${dev ? 'localhost:5173' : 'mvc.ink'}`
</script>

<svelte:head>
  <link rel="preload" href={SourceSans3Normal} as="font" type="font/woff2" crossorigin="anonymous" />
  <link rel="preload" href={SourceSans3Italic} as="font" type="font/woff2" crossorigin="anonymous" />
  <link rel="canonical" href="https://mvc.ink" />
  <link rel="icon" href="{url}/favicon.ico" />
  <link rel="apple-touch-icon" sizes="57x57" href="{url}/apple-icon-57x57.png" />
  <link rel="apple-touch-icon" sizes="60x60" href="{url}/apple-icon-60x60.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="{url}/apple-icon-72x72.png" />
  <link rel="apple-touch-icon" sizes="76x76" href="{url}/apple-icon-76x76.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="{url}/apple-icon-114x114.png" />
  <link rel="apple-touch-icon" sizes="120x120" href="{url}/apple-icon-120x120.png" />
  <link rel="apple-touch-icon" sizes="144x144" href="{url}/apple-icon-144x144.png" />
  <link rel="apple-touch-icon" sizes="152x152" href="{url}/apple-icon-152x152.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="{url}/apple-icon-180x180.png" />
  <link rel="icon" type="image/png" sizes="192x192"  href="{url}/android-icon-192x192.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="{url}/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="{url}/favicon-96x96.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="{url}/favicon-16x16.png" />
  <link rel="manifest" href="{url}/manifest.json" />
  <meta name="msapplication-TileColor" content="#ffffff" />
  <meta name="msapplication-TileImage" content="{url}/ms-icon-144x144.png" />
  <meta name="theme-color" content="#ffffff" />
  <meta property="og:title" content="mvc.ink - Author Michael V. Colianna's web site" />
  <meta name="twitter:title" content="mvc.ink - Author Michael V. Colianna's web site" />
  <meta property="og:url" content="https://mvc.ink" />
  <meta name="twitter:url" content="https://mvc.ink" />
  <meta name="description" content="Michael V. Colianna’s author web site." />
  <meta property="og:description" content="Michael V. Colianna’s author web site." />
  <meta name="twitter:description" content="Michael V. Colianna’s author web site." />
  <meta name="image" content="{url}/mvcink-card.jpg" />
  <meta property="og:image" content="{url}/mvcink-card.jpg" />
  <meta name="twitter:image" content="{url}/mvcink-card.jpg" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="sitemap" type="application/xml" href="{url}/sitemap.xml" />
</svelte:head>

<div class="font-sans bg-gray-200 grid gap-thin text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-screen-2xl mx-auto 2xl:border-l 2xl:border-r">
  <slot />

  <Footer />
</div>
