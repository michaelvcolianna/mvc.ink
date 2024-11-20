<script>
  import ExternalLink from '$lib/components/ExternalLink.svelte'
  import Icon from '$lib/components/Icon.svelte'
  import Link from '$lib/components/Link.svelte'

  const year = new Date().getFullYear()

  const links = [
    // {
    //   type: 'blog',
    //   href: '/blog',
    //   isExternal: false,
    //   label: 'Blog',
    // },
    {
      type: 'bluesky',
      href: 'https://bsky.app/profile/mvc.ink',
      isExternal: true,
      label: 'Bluesky',
    },
    {
      type: 'linkedin',
      href: 'https://www.linkedin.com/in/michaelvcolianna',
      isExternal: true,
      label: 'LinkedIn',
    },
    {
      type: 'github',
      href: 'https://github.com/michaelvcolianna',
      isExternal: true,
      label: 'GitHub',
    },
    {
      type: 'email',
      href: 'mailto:info@mvc.ink',
      isExternal: false,
      label: 'Email',
    },
  ]
</script>

<footer class="bg-white">
  <div class="px-7 py-11 grid gap-6 text-center md:px-16 md:py-24 xl:gap-12 xl:py-32">
    <ul class="flex flex-wrap justify-center gap-4 lg:gap-8">
      {#each links as { type, href, isExternal, label }}
        <li>
          <Link {href}><Icon {type} {isExternal} {label} /></Link>
        </li>
      {/each}
    </ul>

    <p>&copy; 1997-{year} Michael V. Colianna. <ExternalLink href="https://github.com/michaelvcolianna/mvc.ink">Source Code</ExternalLink>.</p>

    <hr />

    <div class="grid gap-4">
      <div>Cover artwork for <em>Fractured Children of Earth</em> by <ExternalLink href="https://www.artofashesamuels.com/">Ashe Samuels</ExternalLink>.</div>
      <div>"Planets" painting by <ExternalLink href="http://jonas.lesser.se/">Jonas Lesser</ExternalLink>.</div>
      <div>Artwork of soldier by <ExternalLink href="https://fluorescentwolf.tumblr.com/tagged/my+art/">FluorescentWolf</ExternalLink>.</div>
    </div>
  </div>
</footer>
