<script>
  import { MarkTypes, richTextResolver } from '@storyblok/richtext';

  let { blok } = $props();

  // Escape a value for use inside a double-quoted HTML attribute
  const escapeAttr = (value) =>
    String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

  // Create the rich text renderer
  const { render } = richTextResolver({
    resolvers: {
      [MarkTypes.LINK]: (node) => {
        const { attrs, text } = node;
        const { custom, href, target } = attrs;

        // Umami event name; accepts the legacy data-argon-click custom attribute
        const umamiEvent = custom?.['data-umami-event'] || custom?.['data-argon-click'];

        const targetAttr = target ? ` target="${escapeAttr(target)}"` : '';
        const umamiAttr = umamiEvent ? ` data-umami-event="${escapeAttr(umamiEvent)}"` : '';

        return `<a href="${href}"${targetAttr}${umamiAttr}>${text}</a>`;
      }
    }
  });
</script>

<div class="content grid gap-6">
  {@html render(blok.content)}
</div>
