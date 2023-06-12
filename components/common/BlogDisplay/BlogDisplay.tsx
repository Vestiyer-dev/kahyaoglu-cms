import { urlForImage } from 'lib/sanity.image'
import { Post } from 'lib/sanity.queries'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BlogDisplay({
  posts,
  blogMore,
}: {
  posts: Post[]
  blogMore: Boolean
}) {
  return (
    <>
      <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => {
          const formattedDate = new Date(post.date + '').toLocaleDateString(
            'en-US',
            {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            }
          )

          return (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative flex-shrink-0 w-full h-48">
                <Image
                  className=" w-full object-cover"
                  src={urlForImage(post.displayImage.asset._ref)
                    .url()}
                  fill
                  alt={post.title}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-background-secondary p-6">
                <div className="flex-1">
                  <Link href={`/blog/${post.slug}`} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="sr-only">{post?.author?.name}</span>
                      <Image
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full"
                        src={urlForImage(post?.author?.picture.asset._ref)
                          .height(40)
                          .width(40)
                          .url()}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:underline"
                      >
                        {post?.author?.name}
                      </Link>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={formattedDate}>{formattedDate}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readTime} dakika okuma süresi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
