<script>
  import Badge from '$lib/components/Badge.svelte';
  import BannerAd from '$lib/components/BannerAd.svelte';
  import Counter from '$lib/components/Counter.svelte';
  import Markdown from '$lib/components/Markdown.svelte';
  import NavLink from '$lib/components/NavLink.svelte';
  import '../app.css';

  /** @type {import('./$types').LayoutProps} */
  let { data, children } = $props();

  // Retrieve the needed information for the layout & counter
  // @see https://svelte.dev/docs/svelte/$derived
  let layout = $derived(data.layout);
  let views = $derived(data.views);
</script>

<svelte:head>
  <link rel="icon" href={layout.favicon.filename} />
  <meta name="robots" content="noai, noimageai" />
</svelte:head>

<a href="#content">Skip to content</a>

<div class="wrap">
  <header>
    <img
      alt={layout.header.alt}
      src={`${layout.header.filename}/m/`}
      height="188"
      width="626"
    />

    <nav>
      {#each layout.navigation as link}
        <NavLink {link} />
      {/each}
    </nav>
  </header>

  <main id="content">
    {@render children()}

    <div id="badges" aria-label="Badges.">
      {#each layout.badges as badge}
        <Badge {badge} />
      {/each}
    </div>

    <Counter {views} />
  </main>

  <footer>
    <div class="copyright">
      <Markdown content={layout.footer} />
    </div>
  </footer>

  <div id="jokes">
    <span>Fake banner ad:</span>
    <BannerAd banners={layout.bannerAds} />
  </div>
</div>

<style>
  [href='#content'] {
    background-color: var(--color-black);
    color: var(--color-white);
    left: -9999px;
    opacity: 0;
    padding: var(--spacing);
    position: absolute;
    z-index: 999;
  }

  [href='#content']:focus {
    left: var(--spacing);
    opacity: 1;
    transform: translateX(var(--spacing));
  }

  .wrap {
    margin: auto;
    max-width: 626px;
  }

  header {
    display: grid;
    gap: var(--spacing);
  }

  nav {
    background-color: var(--color-black);
    border: 1px solid var(--color-white);
    box-shadow: 0 0 2px 2px var(--color-grey);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  #badges {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--spacing) * 0.5);
    margin-bottom: var(--spacing);
    margin-top: calc(var(--spacing) * 2);
  }

  footer {
    align-items: center;
    background-color: var(--color-black);
    border: 1px solid var(--color-white);
    box-shadow: 0 0 2px 2px var(--color-grey);
    display: flex;
    font-size: calc(var(--spacing) * 0.75);
    height: calc(var(--spacing) * 3);
    margin-bottom: calc(var(--spacing) * 2);
    padding: 0 var(--spacing);
  }

  #jokes {
    font-size: calc(var(--spacing) * 0.75);
    margin-bottom: var(--spacing);
    min-height: 75px;
    text-align: center;
  }

  #jokes span {
    display: block;
    margin-bottom: calc(var(--spacing) * 0.5);
  }
</style>
