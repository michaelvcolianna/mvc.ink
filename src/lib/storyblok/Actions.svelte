<script>
  import { StoryblokComponent } from '@storyblok/svelte'
  import { makeClasses } from '$lib/index'

  export let blok

  const { layout, buttons } = blok

  const classes = makeClasses([
    'actions',
    'flex justify-center lg:justify-start',
    layout === 'horizontal' ? 'flex-row wrap' : 'flex-col',
  ])
</script>

<ul class={classes}>
  {#each buttons as blok}
    <StoryblokComponent {blok} />
  {/each}
</ul>
