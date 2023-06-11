import { BookIcon, HomeIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'
import tagsType from './tags'
import categoryType from './category'
export default defineType({
  name: 'referanslar',
  title: 'Refereanslar',
  icon: HomeIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Referans adı',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'referans',
      title: 'Referans yazısı',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tags',
      title: 'tags',
      type: 'array',

      of: [
        {
          type: 'reference',
          to: { type: tagsType.name },
        },
      ],
    }),
    defineField({
      name: 'categoryType',
      title: 'categoryType',
      type: 'reference',
      to: [{ type: categoryType.name }],
    }),
  ],
})
