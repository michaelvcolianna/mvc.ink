<script>
  import Component from '$lib/Component.svelte';
  import { dev } from '$app/environment';
  import ExternalLink from '$lib/components/ExternalLink.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import Link from '$lib/components/Link.svelte';
  import Section from '$lib/components/Section.svelte';
  import SourceSans3Normal from '$lib/assets/fonts/SourceSans3-Normal.woff2';
  import SourceSans3Italic from '$lib/assets/fonts/SourceSans3-Italic.woff2';
  import '../app.css';

  /** @type {import('./$types').PageProps} */
  let { data } = $props();

  // Make the needed variables for the page
  const url = `https://${dev ? 'localhost:5173' : 'mvc.ink'}`;
  const year = new Date().getFullYear();
</script>

<svelte:head>
  <title>mvc.ink – Author Michael V. Colianna's web site</title>
  <link
    rel="preload"
    href={SourceSans3Normal}
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    href={SourceSans3Italic}
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
  <link rel="canonical" href="https://mvc.ink" />
  <link rel="icon" href="{url}/favicon.ico" />
  <link
    rel="apple-touch-icon"
    sizes="57x57"
    href="{url}/apple-icon-57x57.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="60x60"
    href="{url}/apple-icon-60x60.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="72x72"
    href="{url}/apple-icon-72x72.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="76x76"
    href="{url}/apple-icon-76x76.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="114x114"
    href="{url}/apple-icon-114x114.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="120x120"
    href="{url}/apple-icon-120x120.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="144x144"
    href="{url}/apple-icon-144x144.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="152x152"
    href="{url}/apple-icon-152x152.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="{url}/apple-icon-180x180.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="192x192"
    href="{url}/android-icon-192x192.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="{url}/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="96x96"
    href="{url}/favicon-96x96.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="{url}/favicon-16x16.png"
  />
  <link rel="manifest" href="{url}/manifest.json" />
  <meta name="msapplication-TileColor" content="#ffffff" />
  <meta name="msapplication-TileImage" content="{url}/ms-icon-144x144.png" />
  <meta name="theme-color" content="#ffffff" />
  <meta
    property="og:title"
    content="mvc.ink - Author Michael V. Colianna's web site"
  />
  <meta
    name="twitter:title"
    content="mvc.ink - Author Michael V. Colianna's web site"
  />
  <meta property="og:url" content="https://mvc.ink" />
  <meta name="twitter:url" content="https://mvc.ink" />
  <meta name="description" content="Michael V. Colianna’s author web site." />
  <meta
    property="og:description"
    content="Michael V. Colianna’s author web site."
  />
  <meta
    name="twitter:description"
    content="Michael V. Colianna’s author web site."
  />
  <meta name="image" content="{url}/mvcink-card.jpg" />
  <meta property="og:image" content="{url}/mvcink-card.jpg" />
  <meta name="twitter:image" content="{url}/mvcink-card.jpg" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="robots" content="noai, noimageai" />
  <link rel="sitemap" type="application/xml" href="{url}/sitemap.xml" />
</svelte:head>

<div
  class="mx-auto grid max-w-screen-2xl gap-[1px] border-gray-200 bg-gray-200 font-sans text-sm font-light sm:text-base md:text-lg lg:text-xl 2xl:border-r 2xl:border-l"
>
  {#each data.page.sections as blok}
    <Component {blok} />
  {/each}

  <footer class="bg-white">
    <div
      class="grid gap-6 px-7 py-11 text-center md:px-16 md:py-24 xl:gap-12 xl:py-32"
    >
      <ul class="flex flex-wrap justify-center gap-4 lg:gap-8">
        {#each data.settings.footerLinks as { kind, href, isExternal }}
          <li>
            <Link {href} {isExternal}><Icon {kind} /></Link>
          </li>
        {/each}
      </ul>

      <p>
        &copy; 1997-{year} Michael V. Colianna. <ExternalLink
          href="https://github.com/michaelvcolianna/mvc.ink"
          >Source Code</ExternalLink
        >.
      </p>

      <hr />

      <div class="grid gap-4">
        <div>
          Cover artwork for <em>Fractured Children of Earth</em> by <ExternalLink
            href="https://www.artofashesamuels.com/">Ashe Samuels</ExternalLink
          >.
        </div>

        <div>
          "Planets" painting by <ExternalLink href="http://jonas.lesser.se/"
            >Jonas Lesser</ExternalLink
          >.
        </div>

        <div>
          Artwork of rebels by <ExternalLink
            href="https://www.this-is-cool.co.uk/the-glorious-sci-fi-art-of-jaroslaw-marcinek/"
            >Jaroslaw Marcinek</ExternalLink
          >.
        </div>

        <div>
          Artwork of soldier by <ExternalLink
            href="https://fluorescentwolf.tumblr.com/tagged/my+art/"
            >FluorescentWolf</ExternalLink
          >.
        </div>
      </div>
    </div>
  </footer>
</div>

<div hidden>
  <span id="label-external">Opens an external site</span>
</div>
