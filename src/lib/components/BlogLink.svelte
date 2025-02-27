<script>
  import New from '$lib/assets/new.gif';

  let { date, href, isNew, children } = $props();

  const isoDate = new Date(date).toISOString();
</script>

<li>
  <div>
    {#if isNew}
      <img alt="New." src={New} height="21" width="32" />
    {/if}

    <span>
      <time datetime={isoDate}>{date}</time>:

      <a href={`/${href}`} target="_top">
        {@render children()}
      </a>
    </span>
  </div>
</li>

<style>
  li {
    clear: both;
    margin: var(--spacing) 0;
  }

  div img {
    float: left;
    margin-right: calc(var(--spacing) * 0.5);
  }
</style>
