export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface SurveyImageObject {
  image: SanityImage;
  caption?: string;
  alt: string;
}

export interface SurveyGalleryDocument {
  _id: string;
  _type: 'surveyGallery';
  title: string;
  slug: {
    current: string;
  };
  vesselName?: string;
  vesselType: string;
  vesselLength?: number;
  surveyType: string;
  surveyDate?: string;
  location?: string;
  description?: string;
  images: SurveyImageObject[];
  featuredImage?: SanityImage;
  isPublished: boolean;
  displayOrder?: number;
  tags?: string[];
}

export interface GalleryItem {
  id: string;
  images: string[];
  vesselType: string;
  year?: string;
  make?: string;
  model?: string;
  location?: string;
  date: string;
  surveyType: string;
  description: string;
  title: string;
  vesselName?: string;
  vesselLength?: number;
}