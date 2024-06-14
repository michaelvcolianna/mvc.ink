<script context="module">
  let idCounter = 0
</script>

<script>
  import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte'

  export let blok

  const {
    anchorId,
    content,
    image,
  } = blok

  const { filename, alt } = image

  const id = anchorId || `section-${++idCounter}`
</script>

<section use:storyblokEditable={blok} {id} class="banner bg-white flex flex-col-reverse text-center gap-8 px-7 py-11 md:gap-12 md:px-16 md:py-24 lg:items-center lg:flex-row-reverse lg:gap-14 lg:text-left 2xl:gap-28">
  <div class="grid gap-6 md:gap-8 lg:w-3/4">
    {#each content as blok}
      <StoryblokComponent {blok} />
    {/each}
  </div>

  <div class="w-3/5 mx-auto lg:w-1/4 lg:mx-0">
    <img src={filename} alt={alt} class="shadow-lg" />
  </div>
</section>
