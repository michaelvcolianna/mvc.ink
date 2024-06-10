<script>
  import { StoryblokComponent } from '@storyblok/svelte'
  import { makeClasses } from '$lib/index'

  export let layout
  export let buttons

  const classes = makeClasses([
    'actions',
    `layout-${layout}`,
  ])
</script>

<ul class={classes}>
  {#each buttons as blok}
    <StoryblokComponent {blok} />
  {/each}
</ul>
