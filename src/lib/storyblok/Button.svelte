<script>
  import { makeClasses } from '$lib/index'

  export let blok

  const { label } = blok
  const { anchor } = blok.link

  const classes = makeClasses([
    'button',
    blok.style,
    blok.size,
    blok.fit ? 'fit' : '',
  ])
</script>

<li>
  <a href={`#${anchor}`} class={classes}>{label}</a>
</li>
