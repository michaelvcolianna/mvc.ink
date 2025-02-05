<script>
  let { page } = $props();

  let slug =
    page.full_slug === 'home'
      ? ''
      : `/${page.full_slug.replace(/^\/|\/$/g, '')}`;
</script>

<link rel="canonical" href={`https://mvc.ink${slug}`} />
