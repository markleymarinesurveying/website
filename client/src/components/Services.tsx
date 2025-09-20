import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, FileText, Shield, Search, Users } from "lucide-react";
import centerConsoleImage from "@assets/generated_images/Center_console_boat_10b5e474.png";
import sailboatImage from "@assets/generated_images/Professional_sailboat_image_c219e993.png";
import sportFishingImage from "@assets/generated_images/Sport_fishing_boat_23af46c5.png";

const services = [
  {
    title: "Pre-Purchase Survey",
    description: "Comprehensive vessel inspection for buyers to identify potential issues before purchase. Detailed assessment of hull, engine, electrical, and safety systems.",
    icon: <Search className="h-8 w-8 text-primary" />,
    image: centerConsoleImage,
    features: ["Hull and structural inspection", "Engine and mechanical systems", "Electrical systems review", "Safety equipment check", "Fair market value assessment"]
  },
  {
    title: "Insurance Survey",
    description: "Required documentation for marine insurance coverage. Thorough evaluation of vessel condition and compliance with safety standards.",
    icon: <Shield className="h-8 w-8 text-primary" />,
    image: sailboatImage,
    features: ["Insurance compliance review", "Safety equipment verification", "Structural condition assessment", "USCG requirements check", "Risk assessment documentation"]
  },
  {
    title: "Appraisal Survey",
    description: "Professional vessel valuation for financing, legal, or personal purposes. Market-based analysis with comparable sales data.",
    icon: <FileText className="h-8 w-8 text-primary" />,
    image: sportFishingImage,
    features: ["Fair market value determination", "Comparable sales analysis", "Condition-based adjustments", "Legal documentation", "Financing support"]
  },
  {
    title: "Vessel Inspection",
    description: "Detailed inspection for maintenance planning or pre-sale preparation. Identify areas needing attention or repair.",
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    image: centerConsoleImage,
    features: ["Maintenance recommendations", "Safety compliance check", "Systems performance review", "Cosmetic condition assessment", "Repair prioritization"]
  },
  {
    title: "Consultations",
    description: "Expert advice on vessel purchases, repairs, or marine-related legal matters. Professional guidance from certified surveyors.",
    icon: <Users className="h-8 w-8 text-primary" />,
    image: sailboatImage,
    features: ["Purchase consultation", "Repair guidance", "Legal support", "Expert testimony", "Technical advice"]
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
            Every survey follows USCG requirements and ABYC standards for your peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={`${service.title} - Markley Marine Surveying`}
                  className="w-full h-full object-cover"
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
                
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact">
                  <Button 
                    className="w-full mt-4"
                    variant="outline"
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