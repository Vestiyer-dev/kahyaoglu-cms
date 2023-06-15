import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

const blogFields = groq`
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
  ${blogFields}
}`

export const blogSlugsQuery = groq`
*[_type == "blog-post" && defined(slug.current)][].slug.current
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${blogFields}
}`

export const indexBlogPostQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${blogFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${blogFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${blogFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${blogFields}
}
`

export const blogAndMoreStoriesQuery = groq`
{
  "post": *[_type == "blog-post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${blogFields}
  },
  "blogPost": *[_type == "blog-post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${blogFields}
  }
}`

const tagsFields = groq`
_id,
tags
  `
const categoryFields = groq`
_id,
category
  `

const referanslarFields = groq`
_id,
referans,
title,
coverImage,
"categoryType": categoryType->category,
"tag": tags[]->tags,

`

export const referanslarQuery = groq`
*[_type == "referanslar"] | order(date desc, _updatedAt desc){
  ${referanslarFields}
}`

export const tagsQuery = groq`
*[_type == "tag"] | order(date desc, _updatedAt desc){
  ${tagsFields}
}`
export const categoryQuery = groq`
*[_type == "category"] | order(date desc, _updatedAt desc){
  ${categoryFields}
}`
export const kvkkQuery = groq`
*[_type == "kvkk-post"][0]{
  content,
    title
}`

export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  titlePartOne?: string
  titlePartTwo?: string
  coverImage?: any
  displayImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
  readTime?: number
  description?: string
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}

export interface Tags {
  _id: string
  tags?: string
}

export interface Category {
  _id: string
  category?: string
}

export interface Referanslar {
  _id: string
  referans?: string
  coverImage?: any
  categoryType?: any
  tag?: any[]
}
