/** @type {import('./$types').LayoutLoad} */
export async function load({ data, fetch }) {
  const response = await fetch('https://argon.hypa.net');
  const views = await response.json();

  data.views = views;

  return data;
}
