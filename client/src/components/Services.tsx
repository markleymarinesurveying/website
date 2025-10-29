import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, FileText, Shield, Search, Users } from "lucide-react";
import centerConsoleImage from "@assets/Photos/centerconsolefromthewater.jpg";
import sailboatImage from "@assets/Photos/bowflare.jpg";
import sportFishingImage from "@assets/Photos/express bow.jpg";

const services = [
  {
    title: "Pre-Purchase Survey",
    description: "Comprehensive vessel inspection for buyers. Detailed assessment of hull, engine, electrical, and safety systems to identify potential issues before purchase.",
    icon: <Search className="h-8 w-8 text-primary" />,
    image: centerConsoleImage,
    features: ["Hull and structural inspection", "Engine and mechanical systems", "Electrical systems review", "Safety equipment check", "Fair market value assessment"],
    sectionId: "pre-purchase-survey"
  },
  {
    title: "Insurance Survey",
    description: "Required documentation for marine insurance coverage. Thorough evaluation of vessel condition and compliance with safety standards.",
    icon: <Shield className="h-8 w-8 text-primary" />,
    image: sailboatImage,
    features: ["Insurance compliance review", "Safety equipment verification", "Structural condition assessment", "USCG requirements check", "Risk assessment documentation"],
    sectionId: "insurance-survey"
  },
  {
    title: "Consultations",
    description: "Expert advice on vessel purchases, repairs, or marine-related legal matters. Professional guidance from certified surveyors.",
    icon: <Users className="h-8 w-8 text-primary" />,
    image: sportFishingImage,
    features: ["Purchase consultation", "Repair guidance", "Legal support", "Expert testimony", "Technical advice"],
    sectionId: "marine-consultations"
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Marine Survey Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional vessel inspection and surveying services across Florida. 
            Every survey follows USCG requirements and ABYC certified standards for your peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={`${service.title} marine survey services - Professional vessel inspection by Markley Marine Surveying in Florida`}
                  title={`${service.title} - Expert Marine Survey Services`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="400"
                  height="400"
                />
              </div>
              
              <CardHeader className="space-y-3">
                <div className="flex items-center space-x-3">
                  {service.icon}
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {service.description}
                </p>
                
                
                <Link href={`/services#${service.sectionId}`}>
                  <Button
                    className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                    data-testid={`button-quote-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Get Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              data-testid="button-view-all-services"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}