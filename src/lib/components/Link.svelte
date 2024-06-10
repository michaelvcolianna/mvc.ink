<script>
  import Blog from '$lib/components/icons/Blog.svelte'
  import Bluesky from '$lib/components/icons/Bluesky.svelte'
  import Email from '$lib/components/icons/Email.svelte'
  import Facebook from '$lib/components/icons/Facebook.svelte'
  import GitHub from '$lib/components/icons/GitHub.svelte'
  import LinkedIn from '$lib/components/icons/LinkedIn.svelte'
  import Twitter from '$lib/components/icons/Twitter.svelte'

  export let type
  export let href

  const Icon = {
    blog: Blog,
    bluesky: Bluesky,
    email: Email,
    facebook: Facebook,
    github: GitHub,
    linkedin: LinkedIn,
    twitter: Twitter,
  }[type]

  const isExternal = type !== 'blog' && type !== 'email'

  const target = isExternal ? '_blank' : undefined
  const rel = isExternal ? 'noopener noreferrer' : undefined
</script>

<li>
  <a href={href} class="icon brands style2" target={target} rel={rel}>
    <Icon />
    <span class="label"><slot /></span>
  </a>
</li>
