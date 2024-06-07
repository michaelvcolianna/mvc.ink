import Figure from '$lib/storyblok/Figure.svelte'
import Page from '$lib/storyblok/Page.svelte'
import RichText from '$lib/storyblok/RichText.svelte'
import SplitContent from '$lib/storyblok/SplitContent.svelte'
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte'

/** @type {import('./$types').LayoutLoad} */
export async function load() {
  storyblokInit({
    accessToken: 'GAUFyfNty9lX5I3nhtrQCQtt',
    use: [apiPlugin],
    apiOptions: {
      https: true,
      region: 'us',
    },
    components: {
      figure: Figure,
      page: Page,
      richText: RichText,
      splitContent: SplitContent,
    },
  })

  let storyblokApi = await useStoryblokApi()

  return {
    storyblokApi: storyblokApi,
  }
}
