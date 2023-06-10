import type { Post } from 'lib/sanity.queries'

import BlogDisplay from '../BlogDisplay/BlogDisplay'

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section className=" ">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold leading-tight tracking-tighter md:text-3xl">
          İlginizi Çekebilir
        </h2>
        <BlogDisplay posts={posts} blogMore={true} />
      </div>
    </section>
  )
}
