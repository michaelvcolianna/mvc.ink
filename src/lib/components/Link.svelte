<script>
  export let isExternal
  export let href

  const target = isExternal ? '_blank' : undefined
  const rel = isExternal ? 'noopener noreferrer' : undefined
</script>

<a href={href} target={target} rel={rel} class="flex items-center justify-center border border-gray-300 rounded-full h-10 w-10 lg:h-12 lg:w-12 2xl:h-14 2xl:w-14"><slot /></a>
