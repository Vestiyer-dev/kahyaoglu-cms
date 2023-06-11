import { UserIcon, TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tag',
  title: 'Tags',
  icon: TagIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'tags',
      title: 'tag Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
