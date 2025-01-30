<script>
  let { views } = $props();

  // Split the digits into an array for:
  // - Setting the CSS variable
  // - Using the CSS to calculate sprite background-position-x
  const digits = views.toString().split('').map(Number);
</script>

<div id="counter">
  <span id="label">Visits: {views}.</span>
  <div id="digits" aria-hidden="true">
    {#each digits as digit}
      <span class="digit" style={`--digit: ${digit}`}></span>
    {/each}
  </div>
</div>

<style>
  #counter {
    display: flex;
    justify-content: center;
    margin-bottom: var(--spacing);
  }

  #label {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  #digits {
    border-left: 1px solid black;
    border-right: 1px solid black;
    display: flex;
    height: 21px;
  }

  .digit {
    background-image: url('$lib/assets/counter.gif');
    background-position-x: calc((var(--digit) * 16px) * -1);
    height: 21px;
    width: 16px;
  }
</style>
