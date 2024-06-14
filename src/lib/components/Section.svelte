<script context="module">
  let idCounter = 0
</script>

<script>
  import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte'
  import { makeClasses, textAlignments } from '$lib/index'

  export let blok

  const defaultOuterStyles = 'bg-white'
  const outerStyles = {
    split: defaultOuterStyles,
    circle: defaultOuterStyles,
    portrait: defaultOuterStyles,
    boxed: 'bg-gray-200 p-5 md:p-10 lg:p-16',
  }

  const defaultInnerStyles = 'px-7 py-11 md:px-12 md:py-16'
  const innerStyles = {
    split: defaultInnerStyles,
    circle: defaultInnerStyles,
    portrait: defaultInnerStyles,
    boxed: 'bg-white rounded-lg p-7 md:px-10 md:py-12',
  }

  const {
    anchorId,
    content,
    style,
    textAlignment,
  } = blok

  const id = anchorId || `section-${++idCounter}`

  const outerClasses = makeClasses([
    outerStyles[style],
    textAlignments[textAlignment],
  ])

  const innerClasses = makeClasses([
    innerStyles[style],
  ])
</script>

<section use:storyblokEditable={blok} {id} class={outerClasses}>
  <div class={innerClasses}>
    {#each content as blok}
      <StoryblokComponent {blok} />
    {/each}
  </div>
</section>
