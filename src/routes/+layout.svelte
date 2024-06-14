<script>
  import Footer from '$lib/components/Footer.svelte'
  import '../app.postcss'
</script>

<div class="bg-gray-200 grid gap-thin text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-screen-2xl mx-auto 2xl:border-l 2xl:border-r">
  <slot />

  <Footer />
</div>
