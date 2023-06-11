/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { PortableText } from '@portabletext/react'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'

export default function PostBody({ content }: { content: any }) {
  // const BlogImage = urlForImage(post.coverImage.asset._ref)
  //   .width(1200)
  //   .height(627)
  //   .fit('crop')
  //   .url()



  const imageComponent = {
    types: {
      image: ({ value }) => {

        const BlogImage = urlForImage(value.asset._ref)
          .width(1200)
          .height(627)
          .fit('crop')
          .url()
        return (<Image
          src={BlogImage
          }
          alt="blog image"
          width={627}
          height={1200}
          className="mb-10 rounded-lg object-cover object-center shadow-lg"
          priority
        />)

      }
    }
  }


  return (
    <div className={`mx-auto max-w-2xl`}>
      <PortableText value={content}
        components={imageComponent}
      />
    </div>
  )
}
