<script>
  let { href, umamiEvent, children } = $props();

  const dataUmamiEvent = umamiEvent || href;
</script>

<a
  {href}
  data-umami-event={dataUmamiEvent}
  aria-describedby="label-external"
  rel="noopener noreferrer"
  class="font-bold underline">{@render children()}</a
>
