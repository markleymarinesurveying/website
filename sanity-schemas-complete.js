// Markley Marine Surveying - Complete Sanity CMS Schemas
// Copy this entire file content into your Sanity project schemas

import { defineField, defineType } from 'sanity'

// Survey Gallery Schema
export const surveyGallery = defineType({
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
  }
})

// Credentials Logo Schema
export const credentialsLogo = defineType({
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
  }
})

// Export schema types for Sanity config
export const schemaTypes = [surveyGallery, credentialsLogo]

// INTEGRATION INSTRUCTIONS:
// 
// 1. Copy the content above into your Sanity project's schema file
// 2. In your sanity.config.js or sanity.config.ts file, import and add:
//
//    import { schemaTypes } from './path-to-this-file'
//    
//    export default defineConfig({
//      // ... other config
//      dataset: 'your-dataset',
//      projectId: 'your-project-id',
//      schema: {
//        types: schemaTypes,
//      },
//    })
//
// 3. Deploy your schema with: sanity deploy
//
// 4. The schemas will appear in your Sanity Studio under:
//    - "Survey Gallery" for managing gallery content
//    - "Credentials Logo" for managing footer credentials