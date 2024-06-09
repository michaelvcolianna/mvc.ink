<script>
  import { StoryblokComponent } from '@storyblok/svelte'

  export let blok

  const classes = [
    'actions',
    blok.layout,
  ].join(' ')
</script>

<ul class={classes}>
  {#each blok.buttons as blok}
    <StoryblokComponent {blok} />
  {/each}
</ul>
