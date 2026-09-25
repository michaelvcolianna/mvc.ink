<script>
  let { href, children } = $props();
</script>

<a
  {href}
  aria-describedby="label-external"
  rel="noopener noreferrer"
  class="font-bold underline">{@render children()}</a
>
