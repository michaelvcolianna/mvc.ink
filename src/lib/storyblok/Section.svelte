<script>
  import Banner from '$lib/components/Banner.svelte'
  import Section from '$lib/components/Section.svelte'
  import Spotlight from '$lib/components/Spotlight.svelte'

  export let blok

  const Component = {
    banner: Banner,
    section: Section,
    spotlight: Spotlight,
  }[blok.kind]
</script>

<Component {blok} />
