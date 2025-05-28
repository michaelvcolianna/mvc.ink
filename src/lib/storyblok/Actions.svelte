<script>
  import Component from '$lib/Component.svelte';
  import { makeClasses } from '$lib/index';

  let { blok } = $props();

  // Pull the needed variables from the blok
  const { layout, buttons } = blok;

  // Styles for the unordered list
  const classes = makeClasses([
    'actions',
    'flex gap-4 justify-center lg:justify-start',
    layout === 'horizontal' ? 'flex-row wrap' : 'flex-col'
  ]);
</script>

<ul class={classes}>
  {#each buttons as blok}
    <Component {blok} />
  {/each}
</ul>
