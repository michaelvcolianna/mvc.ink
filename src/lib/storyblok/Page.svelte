<script>
  import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte'

  export let blok
</script>

{#key blok}
  <div use:storyblokEditable={blok}>
    {#if blok.showBanner}
      {#each blok.banner as blok}
        <StoryblokComponent {blok} />
      {/each}
    {/if}

    {#each blok.body as blok}
      <StoryblokComponent {blok} />
    {/each}
  </div>
{/key}
