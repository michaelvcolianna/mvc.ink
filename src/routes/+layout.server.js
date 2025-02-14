import { APP_MODE, STORYBLOK_TOKEN } from '$env/static/private';
import { readFileSync } from 'fs';
import StoryblokClient from 'storyblok-js-client';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch }) {
  // Initial variables
  let story;
  let layout;

  if (APP_MODE === 'dev') {
    // Reach out to Storyblok to get the layout data
    const Storyblok = new StoryblokClient({
      accessToken: STORYBLOK_TOKEN,
      region: 'us'
    });

    const { data } = await Storyblok.get('cdn/stories/__layout', {
      resolve_relations: 'layout.navigation',
      version: 'draft'
    });

    story = data.story;
  } else {
    // Get the layout data from the cache
    story = JSON.parse(readFileSync('.data/__layout.json', 'utf8'));
  }

  return {
    layout: story.content.body[0]
  };
}

export const trailingSlash = 'never';
