<script>
  import { StoryblokComponent } from '@storyblok/svelte'
  import { makeClasses } from '$lib/index'
  import SocialLink from '$lib/components/SocialLink.svelte'

  export let blok

  const classes = makeClasses([
    blok.showDividers ? 'divided' : '',
  ])
</script>

<div id="wrapper" class={classes}>
  {#each blok.body as blok}
    <StoryblokComponent {blok} />
  {/each}

  <footer class="wrapper style1 align-center">
    <div class="inner">
      <ul class="icons">
        <SocialLink href="https://bsky.app/profile/mvc.ink" type="bluesky">Bluesky</SocialLink>
        <SocialLink href="https://github.com/michaelvcolianna" type="github">GitHub</SocialLink>
        <SocialLink href="https://www.linkedin.com/in/michaelvcolianna/" type="linkedin">LinkedIn</SocialLink>
        <SocialLink href="https://www.facebook.com/michaelcolianna" type="facebook">Facebook</SocialLink>
        <SocialLink href="https://twitter.com/michaelcolianna" type="twitter">Twitter</SocialLink>
        <SocialLink href="mailto:info@mvc.ink" type="email">Email</SocialLink>
      </ul>

      <p>&copy; 1997-{new Date().getFullYear()} Michael V. Colianna. <a href="https://github.com/michaelvcolianna/mvc.ink" target="_blank" rel="noopener noreferrer">Source Code</a>.</p>
    </div>
  </footer>
</div>
