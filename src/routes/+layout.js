import Actions from '$lib/storyblok/Actions.svelte'
import Button from '$lib/storyblok/Button.svelte'
import Page from '$lib/storyblok/Page.svelte'
import Section from '$lib/storyblok/Section.svelte'
import Text from '$lib/storyblok/Text.svelte'
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
      actions: Actions,
      button: Button,
      page: Page,
      section: Section,
      text: Text,
    },
  })

  const storyblokApi = await useStoryblokApi()

  return {
    storyblokApi: storyblokApi,
  }
}
