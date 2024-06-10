<script>
  import { makeClasses } from '$lib/index'

  export let label
  export let style
  export let size
  export let link

  const { anchor } = link

  const classes = makeClasses([
    'button',
    `style-${style}`,
    `size-${size}`,
  ])
</script>

<li>
  <a href={`#${anchor}`} class={classes}>{label}</a>
</li>
