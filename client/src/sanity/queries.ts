import { client } from './client';
import { SurveyGalleryDocument, GalleryItem } from './types';
import { createImageUrlBuilder } from '@sanity/image-url';

// Create image URL builder
const builder = createImageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);

// Query to fetch all survey gallery items (using drafts perspective)
export const SURVEY_GALLERY_QUERY = `*[
  _type == "surveyGallery"
] | order(displayOrder asc, surveyDate desc) {
  _id,
  title,
  slug,
  vesselName,
  vesselType,
  vesselLength,
  surveyType,
  surveyDate,
  location,
  description,
  images[] {
    image,
    caption,
    alt
  },
  featuredImage,
  displayOrder,
  tags,
  isPublished
}`;

// Query for filtered surveys by type
export const SURVEY_BY_TYPE_QUERY = `*[
  _type == "surveyGallery" &&
  surveyType == $surveyType
] | order(displayOrder asc, surveyDate desc) {
  _id,
  title,
  slug,
  vesselName,
  vesselType,
  vesselLength,
  surveyType,
  surveyDate,
  location,
  description,
  images[] {
    image,
    caption,
    alt
  },
  featuredImage,
  displayOrder,
  tags,
  isPublished
}`;

// Fetch all published surveys
export async function fetchSurveyGallery(): Promise<SurveyGalleryDocument[]> {
  try {
    const surveys = await client.fetch<SurveyGalleryDocument[]>(SURVEY_GALLERY_QUERY);
    return surveys;
  } catch (error) {
    console.error('Error fetching survey gallery:', error);
    console.info('Configure CORS in Sanity to allow localhost:3001 and localhost:5000 for development.');
    // Return empty array - only show real Sanity data or nothing
    return [];
  }
}

// Fetch surveys by type
export async function fetchSurveysByType(surveyType: string): Promise<SurveyGalleryDocument[]> {
  try {
    const surveys = await client.fetch<SurveyGalleryDocument[]>(
      SURVEY_BY_TYPE_QUERY,
      { surveyType }
    );
    return surveys;
  } catch (error) {
    console.error('Error fetching surveys by type:', error);
    return [];
  }
}

// Transform Sanity document to Gallery item format
export function transformSurveyToGalleryItem(survey: SurveyGalleryDocument): GalleryItem {
  // Get the featured image or first image
  const featuredImageUrl = survey.featuredImage
    ? urlFor(survey.featuredImage).width(600).height(600).url()
    : survey.images?.[0]?.image
    ? urlFor(survey.images[0].image).width(600).height(600).url()
    : '';

  // Get all image URLs
  const imageUrls = survey.images?.map(img =>
    urlFor(img.image).width(800).height(600).url()
  ) || [];

  // Transform survey type values to display format
  const surveyTypeMap: Record<string, string> = {
    'pre-purchase': 'Pre-Purchase',
    'insurance': 'Insurance',
    'appraisal': 'Appraisal',
    'condition-value': 'Consultation',
    'damage': 'Consultation'
  };

  // Transform vessel type values
  const vesselTypeMap: Record<string, string> = {
    'sailboat': 'Sailboat',
    'motor-yacht': 'Motor Yacht',
    'sport-fishing': 'Sport Fishing',
    'center-console': 'Center Console',
    'catamaran': 'Catamaran',
    'trawler': 'Trawler',
    'cruiser': 'Cruiser',
    'other': 'Other'
  };

  // Parse vessel name to extract year/make/model if formatted properly
  let year = '';
  let make = '';
  let model = '';
  
  if (survey.vesselName) {
    // Try to parse vessel name like "2019 Boston Whaler 270 Dauntless"
    const nameMatch = survey.vesselName.match(/^(\d{4})\s+(.+?)(?:\s+(.+))?$/);
    if (nameMatch) {
      year = nameMatch[1];
      const remaining = nameMatch[2];
      const parts = remaining.split(' ');
      if (parts.length > 1) {
        make = parts[0];
        model = parts.slice(1).join(' ');
      } else {
        make = remaining;
      }
    } else {
      // If no year found, use vessel name as make
      make = survey.vesselName;
    }
  }

  return {
    id: survey._id,
    images: imageUrls.length > 0 ? imageUrls : [featuredImageUrl].filter(Boolean),
    vesselType: vesselTypeMap[survey.vesselType] || survey.vesselType,
    year,
    make,
    model,
    location: survey.location || '',
    date: survey.surveyDate || new Date().toISOString().split('T')[0],
    surveyType: surveyTypeMap[survey.surveyType] || survey.surveyType,
    description: survey.description || '',
    title: survey.title,
    vesselName: survey.vesselName,
    vesselLength: survey.vesselLength
  };
}