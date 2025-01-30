/**
 * Counter data retrieval.
 *
 * If this was in +layout.server.js it would only run at build time. So this
 * load function gets the data from +layout.server.js, retrieves the Neocities
 * views count from the custom server I built to get around their CORS, and adds
 * it to the passed-on data.
 */

/** @type {import('./$types').LayoutLoad} */
export async function load({ data, fetch }) {
  // Hit Argon for views data
  const response = await fetch('https://argon.hypa.net');
  const views = await response.json();

  // Patch the views onto existing data from the server
  data.views = views;

  return data;
}
