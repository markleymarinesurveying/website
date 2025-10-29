import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'credentialsLogo',
  title: 'Credentials Logo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Organization Name',
      type: 'string',
      description: 'Name of the credentialing organization (e.g., "ABYC", "SAMS", "Chapman School")',
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
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload the organization logo image',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for accessibility (e.g., "ABYC Certification Logo")',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Website URL',
      type: 'url',
      description: 'Link to the organization\'s website (e.g., "https://abycinc.org")',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    }),
    defineField({
      name: 'credentialType',
      title: 'Credential Type',
      type: 'string',
      options: {
        list: [
          { title: 'Professional Certification', value: 'certification' },
          { title: 'Professional Membership', value: 'membership' },
          { title: 'Educational Credential', value: 'education' },
          { title: 'Industry Association', value: 'association' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of the credential or organization'
    }),
    defineField({
      name: 'isActive',
      title: 'Display in Footer',
      type: 'boolean',
      description: 'Should this logo be displayed in the website footer?',
      initialValue: true
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this logo appears in footer (lower numbers first)',
      initialValue: 1,
      validation: Rule => Rule.min(0)
    }),
    defineField({
      name: 'hoverText',
      title: 'Hover Text',
      type: 'string',
      description: 'Text that appears when user hovers over the logo'
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open Link in New Tab',
      type: 'boolean',
      description: 'Should the website link open in a new browser tab?',
      initialValue: true
    }),
    defineField({
      name: 'dateObtained',
      title: 'Date Obtained',
      type: 'date',
      description: 'When was this credential obtained? (Optional)'
    }),
    defineField({
      name: 'expirationDate',
      title: 'Expiration Date',
      type: 'date',
      description: 'When does this credential expire? (Optional)'
    }),
    defineField({
      name: 'credentialNumber',
      title: 'Credential Number',
      type: 'string',
      description: 'Certificate or membership number (Optional)'
    })
  ],
  preview: {
    select: {
      title: 'title',
      credentialType: 'credentialType',
      media: 'logo',
      isActive: 'isActive',
      displayOrder: 'displayOrder'
    },
    prepare(selection) {
      const { title, credentialType, isActive, displayOrder } = selection
      const subtitle = `${credentialType || 'Unknown Type'}${!isActive ? ' (Hidden)' : ''} - Order: ${displayOrder || 'N/A'}`
      return {
        title,
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
      title: 'Organization Name',
      name: 'title',
      by: [{ field: 'title', direction: 'asc' }]
    },
    {
      title: 'Credential Type',
      name: 'credentialType',
      by: [{ field: 'credentialType', direction: 'asc' }]
    }
  ]
})