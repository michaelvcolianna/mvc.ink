<script>
  import { storyblokEditable } from "@storyblok/svelte";
  import RichText from "$lib/components/RichText.svelte";

  export let blok;
</script>

<div use:storyblokEditable={blok}>
  <figure>
    <figcaption>
      <img
        alt={blok.image.alt}
        src="{blok.image.filename}/m/"
        width={blok.width || undefined}
      />

      <RichText content={blok.caption} />
    </figcaption>
  </figure>
</div>
