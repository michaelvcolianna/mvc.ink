<script context="module">
  let idCounter = 0
</script>

<script>
  import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte'
  import { makeClasses, orientations, textAlignments, imagePositions } from '$lib/index'
  import Image from '$lib/components/Image.svelte'

  export let blok

  const outerStyles = {
    split: 'md:grid md:grid-cols-2',
    circle: 'pt-11 md:pt-24 lg:flex lg:flex-row lg:p-24 lg:items-center lg:gap-16',
    portrait: 'pt-11',
    boxed: 'md:grid md:relative',
  }

  const innerContentStyles = {
    split: 'px-7 py-11 md:px-16 md:py-24',
    circle: 'px-7 py-11 md:px-16 md:py-24 lg:w-7/12 lg:p-0',
    portrait: 'px-7 py-11 md:px-16 md:py-24',
    boxed: 'px-7 py-11 md:px-16 md:py-24 z-10 md:bg-white md:w-1/2 md:my-12',
  }

  const innerImageStyles = {
    split: '',
    circle: 'max-w-3/4 md:max-w-3/5 mx-auto rounded-full lg:max-w-none lg:w-5/12 lg:mx-0',
    portrait: 'w-3/5 mx-auto',
    boxed: 'md:absolute md:inset-0',
  }

  const imageStyles = {
    split: 'md:h-full md:object-cover',
    circle: 'rounded-full',
    portrait: 'shadow-lg',
    boxed: 'md:h-full md:w-full md:object-cover',
  }

  const {
    anchorId,
    content,
    image,
    maxWidth,
    style,
    orientation,
    textAlignment,
    imagePosition,
  } = blok

  const id = anchorId || `section-${++idCounter}`+.00

  const outerClasses = makeClasses([
    style === 'boxed' ? 'boxed' : '',
    'bg-white flex flex-col-reverse',
    outerStyles[style],
    orientations[orientation],
    textAlignments[textAlignment],
  ])

  const innerContentClasses = makeClasses([
    'grid gap-6 items-center',
    innerContentStyles[style],
  ])

  const innerImageClasses = makeClasses([
    innerImageStyles[style],
  ])

  const imageClasses = makeClasses([
    imageStyles[style],
    imagePositions[imagePosition],
  ])
</script>

<section use:storyblokEditable={blok} {id} class={outerClasses}>
  <div class={innerContentClasses}>
    {#each content as blok}
      <StoryblokComponent {blok} />
    {/each}
  </div>

  <div class={innerImageClasses}>
    <Image {image} {maxWidth} classes={imageClasses} />
  </div>
</section>
