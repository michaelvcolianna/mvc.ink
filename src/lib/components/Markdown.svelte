<script>
  import markdownit from 'markdown-it';
  import markdownitExternalLink from 'markdown-it-external-link';

  let { content } = $props();

  // Create the parser
  const md = markdownit({
    html: true
  });

  // Add the plugin for external links and turn off new tab/window
  // @see https://www.w3.org/WAI/WCAG21/Techniques/general/G200
  md.use(markdownitExternalLink, {
    hosts: ['https://localhost:5173', 'https://mvc.ink'],
    rel: 'noopener noreferrer',
    target: '_top'
  });
</script>

{@html md.render(content)}
