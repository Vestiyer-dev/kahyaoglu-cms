import { PreviewSuspense } from '@sanity/preview-kit'
import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import { getAllPosts, getSettings } from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { groq } from 'next-sanity'
import { createClient } from 'next-sanity'
import { lazy } from 'react'

// const PreviewIndexPage = lazy(() => import('components/PreviewIndexPage'))

interface PageProps {
  posts: Post[]
  settings: Settings
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function Page(props: PageProps) {
  const { posts, settings, preview, token } = props

  // if (preview) {
  //   return (
  //     <PreviewSuspense
  //       fallback={
  //         <IndexPage loading preview posts={posts} settings={settings} />
  //       }
  //     >
  //       <PreviewIndexPage token={token} />
  //     </PreviewSuspense>
  //   )
  // }

  // return <IndexPage posts={posts} settings={settings} />
  return <div>hello</div>
}

const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export async function getAllBlogPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(indexQuery)) || []
  }
  return []
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const [settings, posts = []] = await Promise.all([
    getSettings(),
    getAllBlogPosts(),
  ])

  return {
    props: {
      posts,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  }
}
