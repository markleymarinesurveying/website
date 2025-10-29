import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'surveyGallery',
  title: 'Survey Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Survey Title',
      type: 'string',
      description: 'Brief title for this survey project',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'vesselName',
      title: 'Vessel Name',
      type: 'string',
      description: 'Name of the vessel surveyed'
    }),
    defineField({
      name: 'vesselType',
      title: 'Vessel Type',
      type: 'string',
      options: {
        list: [
          { title: 'Sailboat', value: 'sailboat' },
          { title: 'Motor Yacht', value: 'motor-yacht' },
          { title: 'Sport Fishing Boat', value: 'sport-fishing' },
          { title: 'Center Console', value: 'center-console' },
          { title: 'Catamaran', value: 'catamaran' },
          { title: 'Trawler', value: 'trawler' },
          { title: 'Express Cruiser', value: 'express-cruiser' },
          { title: 'Other', value: 'other' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'vesselLength',
      title: 'Vessel Length (feet)',
      type: 'number',
      description: 'Length of vessel in feet'
    }),
    defineField({
      name: 'surveyType',
      title: 'Survey Type',
      type: 'string',
      options: {
        list: [
          { title: 'Pre-Purchase Survey', value: 'pre-purchase' },
          { title: 'Insurance Survey', value: 'insurance' },
          { title: 'Appraisal Survey', value: 'appraisal' },
          { title: 'Condition & Value Survey', value: 'condition-value' },
          { title: 'Damage Survey', value: 'damage' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'surveyDate',
      title: 'Survey Date',
      type: 'date',
      description: 'Date when the survey was conducted'
    }),
    defineField({
      name: 'location',
      title: 'Survey Location',
      type: 'string',
      description: 'City/Marina where survey was conducted (e.g., "Jupiter, FL")'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of the survey or notable findings'
    }),
    defineField({
      name: 'images',
      title: 'Survey Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Describe what this image shows (e.g., "Hull inspection", "Engine compartment")'
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for accessibility',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'category',
              title: 'Image Category',
              type: 'string',
              options: {
                list: [
                  { title: 'Exterior Hull', value: 'exterior-hull' },
                  { title: 'Interior', value: 'interior' },
                  { title: 'Engine/Mechanical', value: 'engine-mechanical' },
                  { title: 'Electrical Systems', value: 'electrical' },
                  { title: 'Safety Equipment', value: 'safety' },
                  { title: 'Deck/Rigging', value: 'deck-rigging' },
                  { title: 'Navigation Equipment', value: 'navigation' },
                  { title: 'General Overview', value: 'general' }
                ]
              }
            })
          ]
        }
      ],
      validation: Rule => Rule.min(1).error('At least one image is required')
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'reference',
      to: [{ type: 'image' }],
      description: 'Select which image to use as the main gallery thumbnail',
      hidden: ({ document }) => !document?.images || document.images.length === 0
    }),
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      description: 'Should this survey appear in the public gallery?',
      initialValue: false
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this appears in gallery (lower numbers first)',
      initialValue: 1
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Add relevant tags for filtering (e.g., "luxury", "offshore", "restoration")'
    })
  ],
  preview: {
    select: {
      title: 'title',
      vesselType: 'vesselType',
      surveyType: 'surveyType',
      media: 'images.0.image',
      isPublished: 'isPublished'
    },
    prepare(selection) {
      const { title, vesselType, surveyType, isPublished } = selection
      const subtitle = `${vesselType || 'Unknown Type'} - ${surveyType || 'Unknown Survey'}`
      return {
        title: `${title}${!isPublished ? ' (Draft)' : ''}`,
        subtitle,
        media: selection.media
      }
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [{ field: 'displayOrder', direction: 'asc' }]
    },
    {
      title: 'Survey Date, New',
      name: 'surveyDateDesc',
      by: [{ field: 'surveyDate', direction: 'desc' }]
    },
    {
      title: 'Survey Date, Old',
      name: 'surveyDateAsc',
      by: [{ field: 'surveyDate', direction: 'asc' }]
    }
  ]
})