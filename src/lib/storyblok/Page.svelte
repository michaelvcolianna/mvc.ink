<script>
  import Page from '$lib/components/Page.svelte'

  export let blok

  const { sections } = blok
</script>

<Page {sections} />
