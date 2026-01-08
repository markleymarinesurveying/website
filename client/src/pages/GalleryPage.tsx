import Gallery from "@/components/Gallery";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useSEO, SEOConfigs } from "@/hooks/useSEO";

export default function GalleryPage() {
  // Apply SEO for gallery page
  useSEO(SEOConfigs.gallery);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Survey Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Explore our recent marine survey projects across Florida.
          </p>
        </div>

        <Gallery />

        {/* Information Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                About Our Gallery
              </h3>
              <p className="text-muted-foreground mb-4">
                This gallery showcases recent marine surveys we've completed across Florida's coastal waters. 
                Each project demonstrates our expertise in evaluating different vessel types, from center 
                console fishing boats to luxury motor yachts.
              </p>
              <p className="text-muted-foreground">
                All surveys follow strict USCG requirements and ABYC standards, ensuring you receive
                accurate, unbiased assessments for your marine investment decisions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Your Vessel Could Be Next
              </h3>
              <p className="text-muted-foreground mb-4">
                Whether you need a pre-purchase survey, insurance survey, or appraisal services,
                we're here to help. Each marine survey is tailored to your specific needs and vessel type.
              </p>
              <Link href="/contact">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  data-testid="button-gallery-cta"
                >
                  Schedule Your Survey
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}