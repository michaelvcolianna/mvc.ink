import dotenv from 'dotenv';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import StoryblokClient from 'storyblok-js-client';

/**
 * build.js
 *
 * This script runs before Vite/SvelteKit to pre-cache the Storyblok data and
 * create files for the RSS feed and sitemap.
 *
 * When Vite/SvelteKit run in build mode, they will get the JSON files created
 * by this script instead of hitting Storyblok during the crawl.
 */

// Retrieve the secret keys
dotenv.config({
  path: '.env.production'
});

// Variables needed up front
const DATA_DIR = '.data';
const RSS_FILE = 'static/feed.xml';
const SITEMAP_FILE = 'static/sitemap.xml';
const rss = [];
const sitemap = [];

// Create the Storyblok client
const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_TOKEN,
  region: 'us'
});

// If a cache directory exists, remove it; create the cache directory
if (existsSync(DATA_DIR)) {
  rmSync(DATA_DIR, { force: true, recursive: true });
}
mkdirSync(DATA_DIR, { recursive: true });

console.log(' * Retrieving all stories from Storyblok');
const stories = await Storyblok.getAll('cdn/stories', {
  resolve_relations: 'layout.navigation',
  version: 'published'
});

stories.forEach((story) => {
  // Get the necessary variables for this story:
  // - Path to file
  // - Full file path
  // - URL for feed/sitemap
  // - If this is a blog post
  const dirs = story.full_slug.split('/').filter((x) => x && x !== 'home');
  const path = `${DATA_DIR}/${dirs.length > 1 ? `${dirs[0]}/` : ''}`;
  const file = `${path}${dirs.at(-1) || 'index'}.json`;
  const url = `https://mvc.ink/${dirs.length > 1 ? `${dirs[0]}/` : ''}${dirs.at(-1)}`;
  const isBlogEntry = dirs.length > 1 && dirs[0] === 'blog';

  // Create the path to the file if it doesn't exist
  if (!existsSync(path)) {
    mkdirSync(path, { recursive: true });
  }

  // Write the JSON file
  writeFileSync(file, JSON.stringify(story, null, 2));

  // Add to feed if needed
  if (isBlogEntry) {
    rss.push({
      title: story.name,
      description: story.content.description,
      url,
      pubDate: story.first_published_at
    });
  }

  // Add to the sitemap
  if (dirs[0] !== '__layout') {
    sitemap.push({
      loc: url,
      lastmod: isBlogEntry ? story.first_published_at : story.published_at
    });
  }
});

// Current date for feed purposes
const now = new Date().toISOString();

// Write the RSS feed file
let rssData = `<?xml version="1.0" encoding="UTF-8"?><rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
    <channel>
        <title><![CDATA[MVC.INK]]></title>
        <description><![CDATA[The official website of author Michael V. Colianna.]]></description>
        <link>https://mvc.ink/</link>
        <generator>MVC</generator>
        <lastBuildDate>${now}</lastBuildDate>
        <atom:link href="https://mvc.ink/feed.xml" rel="self" type="application/rss+xml"/>
        <pubDate>${now}</pubDate>
        <language><![CDATA[en-us]]></language>
`;
rss.forEach(
  (item) =>
    (rssData =
      rssData +
      `        <item>
            <title><![CDATA[${item.title}]]></title>
            <description><![CDATA[${item.description}]]></description>
            <link>${item.url}</link>
            <guid isPermaLink="false">${item.url}</guid>
            <pubDate>${item.pubDate}</pubDate>
        </item>
`)
);
rssData =
  rssData +
  `    </channel>
</rss>`;
writeFileSync(RSS_FILE, rssData);
console.log(' * Wrote RSS file');

// Write the sitemap XML file
let sitemapData = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;
sitemap.forEach(
  (url) =>
    (sitemapData =
      sitemapData +
      `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
  </url>
`)
);
sitemapData = sitemapData + `</urlset>`;
writeFileSync(SITEMAP_FILE, sitemapData);
console.log(' * Wrote sitemap file');
