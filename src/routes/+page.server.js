import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export function load() {
  redirect(302, '/home');
}

export const prerender = true;
