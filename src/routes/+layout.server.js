import {
  APP_MODE,
  STORYBLOK_TOKEN
} from '$env/static/private';
import { readFileSync } from 'fs';
import StoryblokClient from 'storyblok-js-client';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch }) {
  let layout;

  if (APP_MODE === 'dev') {
    const Storyblok = new StoryblokClient({
      accessToken: STORYBLOK_TOKEN,
      region: 'us'
    });

    const { data: { story } } = await Storyblok.get('cdn/stories/__layout', {
      resolve_relations: 'layout.navigation',
      version: 'draft'
    });

    layout = story.content.body[0];
  } else {
    const file = JSON.parse(readFileSync('.data/__layout.json', 'utf8'));
    layout = file.content.body[0];
  }

  return {
    layout
  };
}
