// import { BlogDisplay, Layout, SEO } from "~/components/common"
import { BlogDisplay, Layout, SEO } from 'components/common'
import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import { getAllBlogPosts, getSettings } from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'

import { createClient } from 'next-sanity'


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
    <div className="relative bg-background-primary px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
      <SEO title="Blog - Bodrum Peyzajına Dair Her Şey" description='Ekibimiz tarafından özenle hazırlanan blog sayfalarımız ile Bodrum bahçelerine nasıl bakabileceğinizi, onlara uygulan olan bitkilieri ve daha bir çok bilgiliyi öğrenebilirsiniz.' />

      <div className="absolute inset-0">
        <div className="h-1/3 bg-background-primary sm:h-2/3" />
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

Blog.Layout = Layout