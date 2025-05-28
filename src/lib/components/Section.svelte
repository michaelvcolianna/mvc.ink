<script module>
  let idCounter = 0;
</script>

<script>
  import Component from '$lib/Component.svelte';
  import { makeClasses, textAlignments } from '$lib/index';

  let { blok } = $props();

  // Pull the needed variables from the blok
  const { anchorId, content, style, textAlignment } = blok;

  // Use the supplied ID or create one via the counter
  const id = anchorId || `section-${++idCounter}`;

  // Styles for section wrapper
  const defaultOuterStyles = 'bg-white';
  const outerStyles = {
    split: defaultOuterStyles,
    circle: defaultOuterStyles,
    portrait: defaultOuterStyles,
    boxed: 'bg-gray-200 p-5 md:p-10 lg:p-16'
  };
  const outerClasses = makeClasses([
    outerStyles[style],
    textAlignments[textAlignment]
  ]);

  // Styles for the inner wrapper
  const defaultInnerStyles = 'px-7 py-11 md:px-12 md:py-16';
  const innerStyles = {
    split: defaultInnerStyles,
    circle: defaultInnerStyles,
    portrait: defaultInnerStyles,
    boxed: 'bg-white rounded-lg p-7 md:px-10 md:py-12'
  };
  const innerClasses = makeClasses([innerStyles[style]]);
</script>

<section {id} class={outerClasses} data-section="default">
  <div class={innerClasses}>
    {#each content as blok}
      <Component {blok} />
    {/each}
  </div>
</section>
