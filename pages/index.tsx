import { PreviewSuspense } from '@sanity/preview-kit'
import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import { getAllPosts, getSettings } from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { groq } from 'next-sanity'
import { createClient } from 'next-sanity'
import Head from 'next/head'
import { lazy } from 'react'
import { BlogDisplay, Layout } from '~/components/common'
import { By2Offset, CTABranded, Hero, SideWithImages, TestimonialSimpleCentered } from '~/components/homepage'

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

export default function Home(props: PageProps) {
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
  return (
    <>
      <Head>
        <title>Kahyaoğlu Peyzaj | En İyi Bahçeler Sizin de Hakkınız </title>
        <meta
          name="description"
          content="Kahyaoglu Peyzaj olarak hem kaliteli hemde ekonomik çözümler üretiyoruz ve hayallerinize dokunuyoruz. İyi peyzajın insanların hayatlarını değiştirebileceğine inanıyoruz"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <SideWithImages />
      <By2Offset />
      <TestimonialSimpleCentered />
      <CTABranded />
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <div className="pt-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-base sm:text-4xl">
            Peyzaj ve Bahçe Dünyası
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Peyzaj ve bahçe dünyası ile ilgili tüm bilgileri burada
            bulabilirsiniz.
          </p>
        </div>
        <BlogDisplay posts={posts} blogMore={true} />
      </div>
    </>
  );
}



Home.Layout = Layout;








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


export const indexQuery = groq`
*[_type == "blog-post"] | order(date desc, _updatedAt desc) {
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
