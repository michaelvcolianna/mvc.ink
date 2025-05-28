import { dev } from '$app/environment';
import StoryblokClient from 'storyblok-js-client';
import { STORYBLOK_PREVIEW_TOKEN } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  // The version of the content to use
  const version = dev ? 'draft' : 'published';

  // Create the Storyblok client
  const Storyblok = new StoryblokClient({
    accessToken: STORYBLOK_PREVIEW_TOKEN,
    region: 'us'
  });

  // Get the neeeded data from Storyblok
  const page = await Storyblok.get('cdn/stories/home', { version });
  const settings = await Storyblok.get('cdn/stories/settings', { version });

  return {
    page: page.data.story.content,
    settings: settings.data.story.content
  };
}

export const prerender = true;
