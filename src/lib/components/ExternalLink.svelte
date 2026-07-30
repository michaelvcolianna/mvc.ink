<script>
  let { href, argonClick, children } = $props();

  const dataArgonClick = argonClick || href;
</script>

<a
  {href}
  data-argon-click={dataArgonClick}
  aria-describedby="label-external"
  rel="noopener noreferrer"
  class="font-bold underline">{@render children()}</a
>
