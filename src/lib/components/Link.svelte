<script>
  let { isExternal, href, children } = $props();

  // Create the needed link attributes
  const ariaDescribedBy = isExternal ? 'label-external' : undefined;
  const rel = isExternal ? 'noopener noreferrer' : undefined;
</script>

<a
  {href}
  {rel}
  aria-describedby={ariaDescribedBy}
  class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 lg:h-12 lg:w-12 2xl:h-14 2xl:w-14"
  >{@render children()}</a
>
