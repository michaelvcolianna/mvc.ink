<script>
  import { page } from '$app/state';

  let { link } = $props();

  const { name, full_slug } = link;

  const href = `/${full_slug === 'home' ? '' : full_slug.replace(/^\/|\/$/g, '')}`;
</script>

<a {href} aria-current={page.url.pathname === href ? 'page' : undefined}
  >{name}</a
>

<style>
  a {
    align-items: center;
    display: flex;
    height: calc(var(--spacing) * 3);
    justify-content: center;
    padding: 0 var(--spacing);
  }
</style>
