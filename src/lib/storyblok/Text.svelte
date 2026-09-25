<script>
  import { MarkTypes, richTextResolver } from '@storyblok/richtext';

  let { blok } = $props();

  // Create the rich text renderer
  const { render } = richTextResolver({
    resolvers: {
      [MarkTypes.LINK]: (node) => {
        const { attrs, text } = node;
        const { custom, href, target } = attrs;
        
        const targetAttr = target ? `target="${target}"` : '';

        return `<a href="${href}"${targetAttr}>${text}</a>`;
      }
    }
  });
</script>

<div class="content grid gap-6">
  {@html render(blok.content)}
</div>
