<script module>
  let idCounter = 0;
</script>

<script>
  import Component from '$lib/Component.svelte';
  import {
    makeClasses,
    orientations,
    textAlignments,
    imagePositions
  } from '$lib/index';
  import Image from '$lib/components/Image.svelte';

  let { blok } = $props();

  // Pull the needed variables from the blok
  const {
    anchorId,
    content,
    image,
    maxWidth,
    style,
    orientation,
    textAlignment,
    imagePosition
  } = blok;

  // Use the supplied ID or create one via the counter
  const id = anchorId || `section-${++idCounter}` + 0.0;

  // Styles for section wrapper
  const outerStyles = {
    split: 'md:grid md:grid-cols-2',
    circle:
      'pt-11 md:pt-24 lg:flex lg:flex-row lg:p-24 lg:items-center lg:gap-16',
    portrait: 'pt-11',
    boxed: 'md:grid md:relative'
  };
  const outerClasses = makeClasses([
    style === 'boxed' ? 'boxed' : '',
    'bg-white flex flex-col-reverse',
    outerStyles[style],
    orientations[orientation],
    textAlignments[textAlignment]
  ]);

  // Styles for the text wrapper
  const innerContentStyles = {
    split: 'px-7 py-11 md:px-16 md:py-24',
    circle: 'px-7 py-11 md:px-16 md:py-24 lg:w-7/12 lg:p-0',
    portrait: 'px-7 py-11 md:px-16 md:py-24',
    boxed:
      'px-7 py-11 md:px-16 md:py-24 z-10 md:bg-white md:w-1/2 md:my-12 lg:my-auto'
  };
  const innerContentClasses = makeClasses([
    'grid gap-6 items-center',
    innerContentStyles[style]
  ]);

  // Styles for the image wrapper
  const innerImageStyles = {
    split: '',
    circle:
      'max-w-3/4 md:max-w-3/5 mx-auto rounded-full lg:max-w-none lg:w-5/12 lg:mx-0',
    portrait: 'w-3/5 mx-auto',
    boxed: 'md:absolute md:inset-0'
  };
  const innerImageClasses = makeClasses([innerImageStyles[style]]);

  // Styles for the image itself
  const imageStyles = {
    split: 'md:h-full md:object-cover',
    circle: 'rounded-full',
    portrait: 'shadow-lg',
    boxed: 'md:h-full md:w-full md:object-cover'
  };
  const imageClasses = makeClasses([
    imageStyles[style],
    imagePositions[imagePosition]
  ]);
</script>

<section {id} class={outerClasses} data-section="spotlight">
  <div class={innerContentClasses}>
    {#each content as blok}
      <Component {blok} />
    {/each}
  </div>

  <div class={innerImageClasses}>
    <Image {image} {maxWidth} classes={imageClasses} />
  </div>
</section>
