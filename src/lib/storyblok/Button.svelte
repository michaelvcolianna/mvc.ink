<script>
  import { makeClasses } from '$lib/index';

  let { blok } = $props();

  // Pull the needed variables from the blok
  const { label, style, size, link } = blok;

  // Create the needed link attributes
  const { anchor } = link;
  const href = anchor ? `#${anchor}` : link.cached_url;
  const ariaDescribedBy = anchor ? undefined : 'label-external';
  const rel = anchor ? undefined : 'noopener noreferrer';

  // Styles for the link
  const styles = {
    knockout: 'border-gray-300 ',
    filled: 'border-black bg-black text-white'
  };
  const sizes = {
    medium: 'h-9 sm:h-10 md:h-11 xl:h-12',
    small: 'h-6 sm:h-7 md:h-8 xl:h-9',
    large: 'h-10 sm:h-11 md:h-12 xl:h-14'
  };
  const classes = makeClasses([
    'flex items-center justify-center px-8 border rounded-full font-normal uppercase',
    styles[style],
    sizes[size]
  ]);
</script>

<li class="text-sm">
  <a {href} {rel} aria-describedby={ariaDescribedBy} class={classes}>{label}</a>
</li>
