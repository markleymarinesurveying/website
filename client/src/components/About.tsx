import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Shield } from "lucide-react";
import surveyorImage from "@assets/generated_images/Sport_fishing_boat_23af46c5.png";

const credentials = [
  {
    title: "SAMS® SA Level Member",
    description: "Society of Accredited Marine Surveyors® SA Level Member",
    icon: <Award className="h-6 w-6 text-primary" />
  },
  {
    title: "ABYC Standards Certified",
    description: "American Boat and Yacht Council certified professional",
    icon: <Shield className="h-6 w-6 text-primary" />
  },
  {
    title: "Chapman Graduate",
    description: "Chapman School of Seamanship - Yacht and Small Craft Survey Graduate",
    icon: <Users className="h-6 w-6 text-primary" />
  }
];

const whyChooseUs = [
  "Detailed, unbiased marine surveys you can rely on",
  "USCG requirements and ABYC certified standards compliance",
  "Comprehensive reporting with clear documentation",
  "Extensive experience across all vessel types",
  "Professional guidance throughout the process",
  "Serving Florida's East and West Coasts"
];

const serviceAreas = [
  "Treasure Coast: Sebastian, Vero Beach, Fort Pierce, Port St. Lucie, Stuart",
  "Palm Beaches: Hobe Sound, Jupiter, Tequesta, North Palm Beach, West Palm Beach",
  "Gold Coast: Boynton Beach, Delray Beach, Boca Raton, Pompano Beach, Fort Lauderdale, Miami",
  "West Coast: Tampa, Sarasota, Fort Myers"
];

export default function About() {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <img 
              src={surveyorImage}
              alt="Professional marine surveyor inspecting vessel - Markley Marine Surveying"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                About Markley Marine Surveying
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At <strong>Markley Marine Surveying</strong>, we provide professional marine survey and vessel 
                inspection services across Florida's East and West Coasts. As certified professionals, we deliver 
                detailed pre-purchase, insurance, and appraisal surveys that follow USCG requirements and ABYC standards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you are buying, selling, or insuring a vessel, our surveys provide a clear assessment 
                of your boat's condition, fair market value, and safety compliance. We explain every step of 
                the process so you are informed and confident in your decisions.
              </p>
            </div>

            {/* Credentials */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Professional Credentials</h3>
              <div className="space-y-4">
                {credentials.map((credential, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        {credential.icon}
                        <div>
                          <h4 className="font-semibold text-foreground">{credential.title}</h4>
                          <p className="text-sm text-muted-foreground">{credential.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Markley Marine Surveying?</h3>
            <div className="space-y-3">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Service Areas</h3>
            <div className="space-y-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium text-foreground">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}