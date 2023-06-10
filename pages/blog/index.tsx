// import { BlogDisplay, Layout, SEO } from "~/components/common"
import { BlogDisplay } from 'components/common'
import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import { getSettings } from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetServerSideProps, GetStaticProps } from 'next'
import { groq } from 'next-sanity'
import { createClient } from 'next-sanity'
import { lazy } from 'react'



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


export default function Blog(props: PageProps) {
  const { blogPost, settings, preview, token } = props

  return (
    <div className="relative bg-gray-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
      {/* <SEO title="Blog - Bodrum Peyzajına Dair Her Şey" description='Ekibimiz tarafından özenle hazırlanan blog sayfalarımız ile Bodrum bahçelerine nasıl bakabileceğinizi, onlara uygulan olan bitkilieri ve daha bir çok bilgiliyi öğrenebilirsiniz.' /> */}

      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Peyzaj ve Bahçe Dünyası
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Peyzaj ve bahçe dünyası ile ilgili tüm bilgileri burada
            bulabilirsiniz.
          </p>
        </div>

        {/* <code>{JSON.stringify(blogPost, null, 2)}</code> */}
        <BlogDisplay posts={blogPost} blogMore={false} />
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

export const getStaticProps: GetStaticProps =
  // <
  //     PageProps,
  //     Query,
  //     PreviewData
  // >
  async (ctx) => {
    const { preview = false, params = {} } = ctx



    const [settings, blogPost] = await Promise.all([
      getSettings(),
      getAllBlogPosts(),
    ])

    // if (!post) {
    //     return {
    //         notFound: true,
    //     }
    // }

    return {
      props: {
        blogPost,
        settings,
        preview,

      },
    }
  }
