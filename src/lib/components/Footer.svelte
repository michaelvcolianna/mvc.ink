<script>
  import Link from '$lib/components/Link.svelte'

  const year = new Date().getFullYear()
</script>

<footer>
  <div class="inner">
    <ul class="icons">
      <!-- <Link href="/blog" type="blog">Blog</Link> -->
      <Link href="https://bsky.app/profile/mvc.ink" type="bluesky">Bluesky</Link>
      <Link href="https://github.com/michaelvcolianna" type="github">GitHub</Link>
      <Link href="https://www.linkedin.com/in/michaelvcolianna/" type="linkedin">LinkedIn</Link>
      <Link href="https://www.facebook.com/michaelcolianna" type="facebook">Facebook</Link>
      <Link href="https://twitter.com/michaelcolianna" type="twitter">Twitter</Link>
      <Link href="mailto:info@mvc.ink" type="email">Email</Link>
    </ul>

    <p>&copy; 1997-{year} Michael V. Colianna. <a href="https://github.com/michaelvcolianna/mvc.ink" target="_blank" rel="noopener noreferrer">Source Code</a>.</p>
  </div>
</footer>
