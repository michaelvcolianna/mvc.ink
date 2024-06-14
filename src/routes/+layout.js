import Actions from '$lib/storyblok/Actions.svelte'
import Button from '$lib/storyblok/Button.svelte'
import Page from '$lib/storyblok/Page.svelte'
import Section from '$lib/storyblok/Section.svelte'
import Text from '$lib/storyblok/Text.svelte'
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte'
import { dev } from '$app/environment'

/** @type {import('./$types').LayoutLoad} */
export async function load() {
  const env = import.meta.env

  storyblokInit({
    accessToken: dev ? env.VITE_PREVIEW_KEY : env.VITE_PUBLIC_KEY,
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
