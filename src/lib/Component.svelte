<script>
  import Actions from '$lib/storyblok/Actions.svelte';
  import Button from '$lib/storyblok/Button.svelte';
  import Section from '$lib/storyblok/Section.svelte';
  import Text from '$lib/storyblok/Text.svelte';

  let { blok } = $props();

  // Handler for the actual component
  const Component = {
    actions: Actions,
    button: Button,
    section: Section,
    text: Text
  }[blok.component];
</script>

<Component {blok} />
