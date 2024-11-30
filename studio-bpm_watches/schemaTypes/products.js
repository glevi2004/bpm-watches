import {defineField, defineType} from 'sanity'

export const Product = defineType({
  name: 'product',
  title: 'Product',
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
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    // slug -> pt of URL used to identify page rsrc in human-readable way
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      // set slug to be its name
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'condition',
      title: 'Condition',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'manufacturer',
      title: 'Manufacturer',
      type: 'string',
    },
    {
      name: 'referenceNumber',
      title: 'Reference Number',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
    },
    {
      name: 'movement',
      title: 'Movement',
      type: 'string',
    },
    {
      name: 'boxMaterial',
      title: 'Box Material',
      type: 'string',
    },
    {
      name: 'boxThickness',
      title: 'Box Thickness',
      type: 'string',
    },
    {
      name: 'boxSize',
      title: 'Box Size',
      type: 'string',
    },
    {
      name: 'strapMaterial',
      title: 'Strap Material',
      type: 'string',
    },
    {
      name: 'sold',
      title: 'Sold',
      type: 'boolean',
    },
  ],
})
