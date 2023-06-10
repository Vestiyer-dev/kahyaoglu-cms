// import { BlogDisplay, Layout, SEO } from "~/components/common"

import { Layout, MoreStories, PostBody, SectionSeparator, SEO } from 'components/common'
import * as demo from 'lib/demo.data'
import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import { getSettings } from 'lib/sanity.client'
import { urlForImage } from 'lib/sanity.image'
import { Post, Settings } from 'lib/sanity.queries'
import { GetServerSideProps, GetStaticProps } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { groq } from 'next-sanity'
import { createClient } from 'next-sanity'
import { lazy } from 'react'

interface OgImage {
  url?: string
  width?: string
  height?: string
  alt?: string
}

interface PageProps {
  post: Post
  blogPost: Post[]
  settings?: Settings
  preview: boolean
  token: string | null
}
interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function Slug(props) {
  const { settings, post, blogPost, preview, token } = props

  const BlogImage = urlForImage(post.coverImage.asset._ref)
    .width(1200)
    .height(627)
    .fit('crop')
    .url()

  const ogImage: OgImage = {
    url: BlogImage,
    width: String(1000),
    height: String(2000),
    alt: "Bodrum'un Doğal Güzelliklerini Vurgulayan Peyzaj Tasarımı",
  }

  return (
    <div className="relative overflow-hidden bg-white py-16">
      <SEO
        title={post.title}
        openGraph={ogImage}
        description={post.description}
      />

      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
        <div
          className="relative mx-auto h-full max-w-prose text-lg"
          aria-hidden="true"
        >
          <svg
            className="absolute left-full top-12 translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute right-full top-1/2 -translate-x-32 -translate-y-1/2 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <Image
          src={BlogImage}
          alt={post.title}
          width={2000}
          height={1000}
          className="mb-10 rounded-lg object-cover object-center shadow-lg"
          priority
        />
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              {post.titlePartOne}
            </span>
            <span className="text-primary block pt-4 text-center text-lg font-semibold">
              {post.titlePartTwo}
            </span>
          </h1>
        </div>
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
          {preview && !post ? (
            <h2>Loading…</h2>
          ) : (
            <>
              <article>
                <PostBody content={post.content} />
              </article>

            </>
          )}
        </div>
        <SectionSeparator />
        {blogPost?.length > 0 && <MoreStories posts={blogPost} />}
      </div>
    </div>
  )
}

// Blog.Layout = Layout

const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

const postFields = groq`
    _id,
    title,
    titlePartOne,
    titlePartTwo,
    date,
    description,
    excerpt,
    coverImage,
    "slug": slug.current,
    "author": author->{name, picture},
     content,
     readTime,
     displayImage,
 `

export const blogPostQuery = groq`
*[_type == "blog-post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const postSlugsQuery = groq`
*[_type == "blog-post" && defined(slug.current)][].slug.current
`

export async function getAllBlogPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getAllBlogPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(blogPostQuery)) || []
  }
  return []
}

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "blog-post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "blogPost": *[_type == "blog-post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export async function getPostAndMoreStories(
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
    return await client.fetch(postAndMoreStoriesQuery, { slug })
  }
  return { post: null, blogPost: [] }
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx

  const token = previewData.token

  const [settings, { post, blogPost }] = await Promise.all([
    getSettings(),
    getPostAndMoreStories(params.slug, token),
  ])

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
      blogPost,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllBlogPostsSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/blog/${slug}`) || [],
    fallback: 'blocking',
  }
}

Slug.Layout = Layout