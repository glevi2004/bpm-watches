import {defineField, defineType} from 'sanity'

export const About = defineType({
  name: 'about',
  title: 'About',
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
  ],
})
