# Sanity CMS Schemas for Markley Marine Surveying

This directory contains Sanity CMS schema definitions for managing content on the Markley Marine Surveying website.

## Schemas

### 1. Survey Gallery (`surveyGallery.ts`)

Manages the survey gallery content displaying completed marine survey projects.

**Fields:**
- **title**: Brief title for the survey project
- **vesselName**: Name of the surveyed vessel
- **vesselType**: Type of vessel (sailboat, motor yacht, etc.)
- **vesselLength**: Length in feet
- **surveyType**: Type of survey conducted (pre-purchase, insurance, etc.)
- **surveyDate**: Date the survey was conducted
- **location**: City/Marina where survey took place
- **description**: Brief description of the survey
- **images**: Array of survey images with captions and categories
- **featuredImage**: Main thumbnail image for gallery
- **isPublished**: Controls visibility in public gallery
- **displayOrder**: Controls order of appearance
- **tags**: Filter tags for gallery organization

### 2. Credentials Logo (`credentialsLogo.ts`)

Manages the credential organization logos displayed in the website footer.

**Fields:**
- **title**: Organization name (e.g., "ABYC", "SAMS")
- **logo**: Logo image file
- **altText**: Accessibility text
- **websiteUrl**: Link to organization website
- **credentialType**: Type of credential (certification, membership, etc.)
- **description**: Brief description of the organization
- **isActive**: Controls visibility in footer
- **displayOrder**: Controls order of appearance
- **hoverText**: Tooltip text on hover
- **openInNewTab**: Link behavior setting
- **dateObtained**: When credential was obtained (optional)
- **expirationDate**: Credential expiration (optional)
- **credentialNumber**: Certificate/membership number (optional)

## Setup Instructions

1. Install Sanity CLI: `npm install -g @sanity/cli`
2. Initialize Sanity project: `sanity init`
3. Copy these schema files to your Sanity project's `schemas` directory
4. Import schemas in your main schema file
5. Deploy schemas: `sanity deploy`

## Content Management

### Survey Gallery
- Add new survey projects with professional photos
- Categorize images by type (hull, engine, electrical, etc.)
- Control public visibility with the "Published" toggle
- Use display order to feature certain projects

### Credentials
- Upload organization logos (ABYC, SAMS, Chapman, etc.)
- Link logos to organization websites
- Control footer visibility and order
- Track credential details and expiration dates

## Integration

These schemas are designed to integrate with the existing Markley Marine Surveying website:

- **Gallery Page**: Fetches published survey gallery entries
- **Footer Component**: Displays active credential logos with links
- **Admin Interface**: Sanity Studio for content management

## Content Guidelines

### Survey Gallery Images
- Use high-quality, professional photos
- Include variety: exterior, interior, mechanical, etc.
- Write descriptive captions for each image
- Maintain client privacy (avoid identifying information)

### Credential Logos
- Use official, high-resolution logos
- Verify website URLs are current
- Keep credentials up to date
- Order by importance/relevance

## Future Enhancements

Potential additions to consider:
- Testimonials schema for client reviews
- Service details schema for dynamic service pages
- Blog/news schema for industry updates
- Team member schema for staff profiles