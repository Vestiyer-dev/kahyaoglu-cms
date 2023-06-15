import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  indexQuery,
  type Post,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  type Settings,
  settingsQuery,
  blogSlugsQuery,
  blogPostQuery,
  blogAndMoreStoriesQuery,
  referanslarQuery,
  tagsQuery,
  categoryQuery,
  Referanslar,
  Tags,
  Category,
  kvkkQuery,
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */

const revalitateSeconds = 43200 // 12 hours
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (
      (await client.fetch(settingsQuery, {
        next: { revalidate: revalitateSeconds },
      })) || {}
    )
  }
  return {}
}

export async function getAllPosts(): Promise<Post[]> {
  if (client) {
    return (
      (await client.fetch(indexQuery, {
        next: { revalidate: revalitateSeconds },
      })) || []
    )
  }
  return []
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs =
      (await client.fetch<string[]>(postSlugsQuery, {
        next: { revalidate: revalitateSeconds },
      })) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (
      (await client.fetch(postBySlugQuery, {
        slug,
        next: { revalidate: revalitateSeconds },
      })) || ({} as any)
    )
  }
  return {} as any
}

export async function getAllBlogPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs =
      (await client.fetch<string[]>(blogSlugsQuery, {
        next: { revalidate: revalitateSeconds },
      })) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getAllBlogPosts(): Promise<Post[]> {
  if (client) {
    return (
      (await client.fetch(blogPostQuery, {
        next: { revalidate: revalitateSeconds },
      })) || []
    )
  }
  return []
}

export async function getBlogAndMoreStories(
  slug: string,
  token?: string | null
): Promise<{ post: Post; blogPost: Post[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(blogAndMoreStoriesQuery, {
      slug,
      next: { revalidate: revalitateSeconds },
    })
  }
  return { post: null, blogPost: [] }
}

export async function getPostAndMoreStories(
  slug: string,
  token?: string | null
): Promise<{ post: Post | null; morePosts: Post[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(postAndMoreStoriesQuery, {
      slug,
      next: { revalidate: revalitateSeconds },
    })
  }
  return { post: null, morePosts: [] }
}

export async function getAllReferanslar(): Promise<Referanslar[]> {
  if (client) {
    return (
      (await client.fetch(referanslarQuery, {
        next: { revalidate: revalitateSeconds },
      })) || []
    )
  }
  return []
}

export async function getAllTags(): Promise<Tags[]> {
  if (client) {
    return (
      (await client.fetch(tagsQuery, {
        next: { revalidate: revalitateSeconds },
      })) || []
    )
  }
  return []
}

export async function getKvkkMetni(): Promise<Tags[]> {
  if (client) {
    return (
      (await client.fetch(kvkkQuery, {
        next: { revalidate: revalitateSeconds },
      })) || []
    )
  }
  return []
}

export async function getAllCategories(): Promise<Category[]> {
  if (client) {
    return (
      (await client.fetch(categoryQuery, {
        next: { revalidate: revalitateSeconds },
      })) || []
    )
  }
  return []
}
