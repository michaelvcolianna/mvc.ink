<script>
  import Bluesky from '$lib/components/icons/Bluesky.svelte'
  import Email from '$lib/components/icons/Email.svelte'
  import Facebook from '$lib/components/icons/Facebook.svelte'
  import GitHub from '$lib/components/icons/GitHub.svelte'
  import LinkedIn from '$lib/components/icons/LinkedIn.svelte'
  import Twitter from '$lib/components/icons/Twitter.svelte'

  export let type
  export let href

  const icons = {
    bluesky: Bluesky,
    email: Email,
    facebook: Facebook,
    github: GitHub,
    linkedin: LinkedIn,
    twitter: Twitter,
  }
  const Icon = icons[type]

  const target = type === 'email' ? undefined : '_blank'
  const rel = type === 'email' ? undefined : 'noopener noreferrer'
</script>

<li>
  <a href={href} class="icon brands style2" target={target} rel={rel}>
    <Icon />
    <span class="label"><slot /></span>
  </a>
</li>
