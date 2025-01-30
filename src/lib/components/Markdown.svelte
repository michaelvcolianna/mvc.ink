<script>
  import markdownit from 'markdown-it';
  import markdownitExternalLink from 'markdown-it-external-link';

  let { content } = $props();

  const md = markdownit();
  md.use(markdownitExternalLink, {
    hosts: [
      'https://localhost:5173',
      'https://mvc.ink'
    ],
    rel: 'noopener noreferrer',
    target: '_top'
  });
</script>

{@html md.render(content)}
