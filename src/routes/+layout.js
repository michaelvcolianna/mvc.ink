import Page from '$lib/storyblok/Page.svelte'
import RichText from '$lib/storyblok/RichText.svelte'
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
      page: Page,
      richText: RichText,
    },
  })

  let storyblokApi = await useStoryblokApi()

  return {
    storyblokApi: storyblokApi,
  }
}
