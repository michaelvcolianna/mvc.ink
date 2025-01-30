<script>
  import BlogLink from '$lib/components/BlogLink.svelte';

  let { block, blogs } = $props();

  // @todo "Load more" functionality
</script>

<div class="blog-list">
  <ul aria-label="List of blog posts.">
    {#each blogs as blog, i}
      <BlogLink
        href={blog.full_slug}
        date={blog.first_published_at.split('T')[0]}
        isNew={i === 0}
      >
        {blog.name}
      </BlogLink>
    {/each}
  </ul>

  <div id="rss">
    <a href="/feed.xml">
      <img
        alt={block.description}
        src={block.rssIcon.filename}
        height="15"
        width="80"
      />
    </a>
  </div>
</div>
