import { APP_MODE, STORYBLOK_TOKEN } from '$env/static/private';
import { error } from '@sveltejs/kit';
import { existsSync, readFileSync } from 'fs';
import { globSync } from 'glob';
import StoryblokClient from 'storyblok-js-client';

/**
 * Sorts by date, descending.
 *
 * @param {string} a
 * @param {string} b
 * @returns number
 */
const byDate = (a, b) =>
  parseFloat(new Date(b.first_published_at).getTime()) -
  parseFloat(new Date(a.first_published_at).getTime());

/**
 * Reads a JSON file and parses it.
 *
 * @param {string} file
 * @returns object
 */
const loadJson = (file) => JSON.parse(readFileSync(file, 'utf8'));

/**
 * Removes preceding and trailing slashes.
 *
 * @param {string} url
 * @returns string
 */
const unSlash = (url) => url.replace(/^\/|\/$/g, '');

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  // Deconstruct the slug
  const { slug } = params;

  // Variables needed up front
  let page = {};
  let blogs;

  if (APP_MODE === 'dev') {
    // Reach out to Storyblok for the page data
    const Storyblok = new StoryblokClient({
      accessToken: STORYBLOK_TOKEN,
      region: 'us'
    });

    // Provides a fallback object if the requested page doesn't exist
    const response = await Storyblok.get(`cdn/stories/${slug}`, {
      version: 'draft'
    }).catch((error) => ({ data: { story: undefined } }));

    // Assign the page
    page = response.data.story;

    // Retrieve the blog entries if needed
    if (slug === 'blog') {
      blogs = await Storyblok.getAll('cdn/stories', {
        excluding_slugs: 'blog/',
        starts_with: 'blog/',
        version: 'draft'
      });
    }
  } else {
    // Full path to the file
    const file = `.data/${slug || 'index'}.json`;

    if (existsSync(file)) {
      // Get the page data from cache
      page = loadJson(file);

      // Retrieve the blog entries from cache if needed
      if (slug === 'blog') {
        blogs = globSync('.data/blog/*.json').map((file) => loadJson(file));
      }
    }
  }

  // Patch sorted blog entries to the page data if needed
  page.blogs = slug === 'blog' ? blogs.sort(byDate) : undefined;

  // Don't allow viewing the layout page
  if (!page || slug === '__layout') {
    error(404);
  }

  return {
    page
  };
}

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
  if (APP_MODE === 'prod') {
    // Get all cached files
    const stories = globSync('.data/**/*.json').map((file) => loadJson(file));

    // Filter out unwanted slugs and map accordingly
    return stories
      .filter((story) => story.slug !== '__layout')
      .map((story) => ({ slug: unSlash(story.full_slug) }));
  }

  return [];
}

export const prerender = true;
