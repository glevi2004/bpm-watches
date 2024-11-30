import {defineField, defineType} from 'sanity'

export const Banner = defineType({
  name: 'banner',
  title: 'Banner',
  type: 'document',

  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'upperText',
      title: 'Upper Text',
      type: 'string',
      options: {
        maxLength: 50,
      },
    },
    {
      name: 'lowerText',
      title: 'Lower Text',
      type: 'string',
      options: {
        maxLength: 50,
      },
    },
  ],
})
