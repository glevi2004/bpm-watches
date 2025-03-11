import {defineField, defineType} from 'sanity'

export const Contact = defineType({
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',

  fields: [
    {
      name: 'intagramLink',
      title: 'Intagram Link',
      type: 'string',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'number',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
  ],
})
