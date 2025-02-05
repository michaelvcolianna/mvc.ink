<script>
  import BackLink from '$lib/components/BackLink.svelte';
  import BlogDate from '$lib/components/BlogDate.svelte';
  import BlogList from '$lib/components/BlogList.svelte';
  import CanonicalLink from '$lib/components/CanonicalLink.svelte';
  import Graphic from '$lib/components/Graphic.svelte';
  import GraphicAndText from '$lib/components/GraphicAndText.svelte';
  import Paragraph from '$lib/components/Paragraph.svelte';

  /** @type {import('./$types').PageProps}*/
  let { data } = $props();

  // Retrieve the needed information for the layout & page
  // @see https://svelte.dev/docs/svelte/$derived
  let layout = $derived(data.layout);
  let page = $derived(data.page);

  // Map for Storyblok->Svelte component
  const components = {
    graphic: Graphic,
    graphicAndText: GraphicAndText,
    paragraph: Paragraph
  };
</script>

<svelte:head>
  {#if page.slug === 'home'}
    <title>Author Michael V. Colianna's site</title>
  {:else}
    <title>{page.name} | Author Michael V. Colianna</title>
  {/if}

  <CanonicalLink {page} />

  <meta
    name="description"
    content={page.content.description || layout.description}
  />

  <meta
    property="og:description"
    content={page.content.description || layout.description}
  />

  <meta
    property="og:image"
    content={page.content.poster?.filename || layout.poster.filename}
  />
</svelte:head>

{#if page.full_slug !== 'blog/' && page.full_slug.startsWith('blog/')}
  <BackLink />

  <BlogDate date={page.first_published_at.split('T')[0]} />
{/if}

{#each page.content.body as block}
  {#if block.component === 'blogList'}
    <BlogList {block} blogs={page.blogs} />
  {:else}
    {@const Component = components[block.component]}

    <Component {block} />
  {/if}
{/each}
