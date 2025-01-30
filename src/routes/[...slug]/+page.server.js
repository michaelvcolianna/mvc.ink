import { APP_MODE, STORYBLOK_TOKEN } from '$env/static/private';
import { error } from '@sveltejs/kit';
import { existsSync, readFileSync } from 'fs';
import { globSync } from 'glob';
import StoryblokClient from 'storyblok-js-client';

const byDate = (a, b) =>
  parseFloat(new Date(b.first_published_at).getTime()) -
  parseFloat(new Date(a.first_published_at).getTime());

const unSlash = (url) => url.replace(/^\/|\/$/g, '');

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const { slug } = params;

  let page = {};

  if (APP_MODE === 'dev') {
    const Storyblok = new StoryblokClient({
      accessToken: STORYBLOK_TOKEN,
      region: 'us'
    });

    const response = await Storyblok.get(`cdn/stories/${slug || 'home'}`, {
      version: 'draft'
    }).catch((error) => ({ data: { story: undefined } }));

    page = response.data.story;

    if (slug === 'blog') {
      const blogs = await Storyblok.getAll('cdn/stories', {
        excluding_slugs: 'blog/',
        starts_with: 'blog/',
        version: 'draft'
      });

      page.blogs = blogs.sort(
        (a, b) =>
          parseFloat(new Date(b.first_published_at).getTime()) -
          parseFloat(new Date(a.first_published_at).getTime())
      );
    }
  } else {
    const file = `.data/${slug || 'index'}.json`;

    if (existsSync(file)) {
      page = JSON.parse(readFileSync(file, 'utf8'));

      if (slug === 'blog') {
        const blogs = globSync('.data/blog/*.json').map((file) =>
          JSON.parse(readFileSync(file, 'utf8'))
        );

        page.blogs = blogs.sort(byDate);
      }
    }
  }

  if (!page || slug === '__layout' || slug === 'home') {
    error(404);
  }

  return {
    page
  };
}

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
  if (APP_MODE === 'prod') {
    const stories = globSync('.data/**/*.json').map((file) =>
      JSON.parse(readFileSync(file, 'utf8'))
    );

    return stories
      .filter((story) => story.slug !== 'home' && story.slug !== '__layout')
      .map((story) => ({ slug: unSlash(story.full_slug) }));
  }

  return [];
}

export const prerender = true;
