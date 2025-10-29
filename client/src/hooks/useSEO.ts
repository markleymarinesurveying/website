import { useEffect } from 'react';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
}

export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    // Update document title
    if (seoData.title) {
      document.title = seoData.title;
    }

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, useProperty = false) => {
      const selector = useProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (element) {
        element.content = content;
      } else {
        element = document.createElement('meta');
        if (useProperty) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', property);
        }
        element.content = content;
        document.head.appendChild(element);
      }
    };

    // Update canonical URL
    const updateCanonical = (url: string) => {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (canonical) {
        canonical.href = url;
      } else {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        canonical.href = url;
        document.head.appendChild(canonical);
      }
    };

    // Update structured data
    const updateStructuredData = (data: object) => {
      let script = document.querySelector('script[type="application/ld+json"]#page-structured-data') as HTMLScriptElement;
      if (script) {
        script.textContent = JSON.stringify(data);
      } else {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'page-structured-data';
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      }
    };

    // Apply SEO updates
    if (seoData.description) {
      updateMetaTag('description', seoData.description);
    }

    if (seoData.keywords) {
      updateMetaTag('keywords', seoData.keywords);
    }

    if (seoData.canonical) {
      updateCanonical(seoData.canonical);
    }

    // Open Graph tags
    if (seoData.ogTitle) {
      updateMetaTag('og:title', seoData.ogTitle, true);
    }

    if (seoData.ogDescription) {
      updateMetaTag('og:description', seoData.ogDescription, true);
    }

    if (seoData.ogImage) {
      updateMetaTag('og:image', seoData.ogImage, true);
    }

    if (seoData.ogUrl) {
      updateMetaTag('og:url', seoData.ogUrl, true);
    }

    // Twitter Card tags
    if (seoData.twitterTitle) {
      updateMetaTag('twitter:title', seoData.twitterTitle);
    }

    if (seoData.twitterDescription) {
      updateMetaTag('twitter:description', seoData.twitterDescription);
    }

    if (seoData.twitterImage) {
      updateMetaTag('twitter:image', seoData.twitterImage);
    }

    // Structured data
    if (seoData.structuredData) {
      updateStructuredData(seoData.structuredData);
    }

  }, [seoData]);
};

// Pre-defined SEO configurations for common pages
export const SEOConfigs = {
  home: {
    title: "Markley Marine Surveying - SAMS Certified Marine Surveyors in Florida | Pre-Purchase & Insurance Surveys",
    description: "Professional SAMS certified marine surveyors in Florida. Expert pre-purchase, insurance, and appraisal surveys for boats and yachts. ABYC standards, USCG compliant. Serving East & West Coast Florida.",
    keywords: "marine surveyor Florida, boat survey, yacht survey, pre-purchase survey, insurance survey, SAMS certified, marine inspection, vessel appraisal, ABYC standards, Jupiter FL, Fort Lauderdale, Miami, Tampa, marine consultant",
    canonical: "https://markleymarinesurveying.com/",
    ogTitle: "Markley Marine Surveying - SAMS Certified Marine Surveyors in Florida",
    ogDescription: "Professional SAMS certified marine surveyors in Florida. Expert pre-purchase, insurance, and appraisal surveys for boats and yachts. ABYC standards, USCG compliant.",
    ogUrl: "https://markleymarinesurveying.com/",
    twitterTitle: "Markley Marine Surveying - SAMS Certified Marine Surveyors in Florida",
    twitterDescription: "Professional SAMS certified marine surveyors in Florida. Expert pre-purchase, insurance, and appraisal surveys for boats and yachts."
  },
  
  services: {
    title: "Marine Survey Services in Florida - Pre-Purchase, Insurance & Appraisal Surveys | Markley Marine",
    description: "Comprehensive marine survey services in Florida. Pre-purchase surveys, insurance surveys, appraisal surveys, vessel inspections & marine consultations. SAMS certified, ABYC standards compliant.",
    keywords: "marine survey services Florida, pre-purchase survey, insurance survey, appraisal survey, vessel inspection, marine consultation, boat survey cost, yacht survey, SAMS surveyor Florida",
    canonical: "https://markleymarinesurveying.com/services",
    ogTitle: "Marine Survey Services in Florida - Markley Marine Surveying",
    ogDescription: "Comprehensive marine survey services in Florida. Pre-purchase surveys, insurance surveys, appraisal surveys, vessel inspections & marine consultations.",
    ogUrl: "https://markleymarinesurveying.com/services",
    twitterTitle: "Marine Survey Services in Florida - Markley Marine Surveying",
    twitterDescription: "Comprehensive marine survey services in Florida. Pre-purchase surveys, insurance surveys, appraisal surveys, vessel inspections & marine consultations."
  },
  
  about: {
    title: "About Steven Markley - SAMS Certified Marine Surveyor | 25+ Years Experience | Florida",
    description: "Meet Steven Markley, SAMS certified marine surveyor with 25+ years experience. University of Maryland graduate, Chapman School certified, ABYC standards, 100 Ton Master Captain. Serving Florida.",
    keywords: "Steven Markley, marine surveyor biography, SAMS certified surveyor, Chapman School graduate, ABYC certified, 100 ton captain, marine surveyor experience, Florida marine surveyor credentials",
    canonical: "https://markleymarinesurveying.com/about",
    ogTitle: "About Steven Markley - SAMS Certified Marine Surveyor with 25+ Years Experience",
    ogDescription: "Meet Steven Markley, SAMS certified marine surveyor with 25+ years experience. University of Maryland graduate, Chapman School certified, ABYC standards certified.",
    ogUrl: "https://markleymarinesurveying.com/about",
    twitterTitle: "About Steven Markley - SAMS Certified Marine Surveyor",
    twitterDescription: "Meet Steven Markley, SAMS certified marine surveyor with 25+ years experience in Florida marine survey services."
  },
  
  contact: {
    title: "Contact Markley Marine Surveying - Get Your Marine Survey Quote | Florida",
    description: "Contact Markley Marine Surveying for professional marine survey services in Florida. Call (561) 504-9576 for immediate assistance. Serving East & West Coast Florida. Free quotes available.",
    keywords: "contact marine surveyor Florida, marine survey quote, boat survey cost, yacht survey pricing, marine surveyor phone number, Florida marine survey contact, Jupiter marine surveyor",
    canonical: "https://markleymarinesurveying.com/contact",
    ogTitle: "Contact Markley Marine Surveying - Get Your Marine Survey Quote",
    ogDescription: "Contact Markley Marine Surveying for professional marine survey services in Florida. Call (561) 504-9576 for immediate assistance.",
    ogUrl: "https://markleymarinesurveying.com/contact",
    twitterTitle: "Contact Markley Marine Surveying - Get Your Marine Survey Quote",
    twitterDescription: "Contact professional marine surveyors in Florida. Call (561) 504-9576 for immediate assistance and free quotes."
  },
  
  gallery: {
    title: "Marine Survey Gallery - Boat & Yacht Inspections in Florida | Markley Marine Surveying",
    description: "View our marine survey gallery showcasing professional boat and yacht inspections across Florida. See examples of pre-purchase surveys, insurance surveys, and vessel appraisals by SAMS certified surveyors.",
    keywords: "marine survey photos, boat inspection gallery, yacht survey examples, Florida marine survey work, vessel inspection photos, pre-purchase survey images, marine surveyor portfolio",
    canonical: "https://markleymarinesurveying.com/gallery",
    ogTitle: "Marine Survey Gallery - Professional Boat & Yacht Inspections in Florida",
    ogDescription: "View our marine survey gallery showcasing professional boat and yacht inspections across Florida by SAMS certified surveyors.",
    ogUrl: "https://markleymarinesurveying.com/gallery",
    twitterTitle: "Marine Survey Gallery - Boat & Yacht Inspections in Florida",
    twitterDescription: "View our marine survey gallery showcasing professional boat and yacht inspections across Florida."
  }
};