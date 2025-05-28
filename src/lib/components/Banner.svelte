<script module>
  let idCounter = 0;
</script>

<script>
  import Component from '$lib/Component.svelte';
  import Image from '$lib/components/Image.svelte';

  let { blok } = $props();

  // Pull the needed variables from the blok
  const { anchorId, content, image, maxWidth } = blok;

  // Use the supplied ID or create one via the counter
  const id = anchorId || `section-${++idCounter}`;
</script>

<section
  {id}
  class="banner flex flex-col-reverse gap-8 bg-white px-7 py-11 text-center md:gap-12 md:px-16 md:py-24 lg:flex-row-reverse lg:items-center lg:gap-14 lg:text-left 2xl:gap-28"
  data-section="banner"
>
  <div class="grid gap-6 md:gap-8 lg:w-3/4">
    {#each content as blok}
      <Component {blok} />
    {/each}
  </div>

  <div class="mx-auto w-3/5 lg:mx-0 lg:w-1/4">
    <Image {image} {maxWidth} classes="shadow-lg" />
  </div>
</section>
