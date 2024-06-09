/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
  const { storyblokApi } = await parent()

  const { slug } = params

  const dataStory = await storyblokApi.get(`cdn/stories/${slug || 'home'}`, {
    version: 'draft',
  })

  return {
    story: dataStory.data.story,
  }
}
