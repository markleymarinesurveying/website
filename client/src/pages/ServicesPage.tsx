import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, FileText, Shield, Search, Users, Clock, DollarSign, FileCheck } from "lucide-react";

const detailedServices = [
  {
    title: "Pre-Purchase Survey",
    description: "The most comprehensive vessel inspection for potential buyers. Our pre-purchase surveys provide you with detailed information about the vessel's condition, helping you make an informed buying decision and negotiate fairly.",
    icon: <Search className="h-12 w-12 text-primary" />,
    duration: "4-6 hours",
    deliverable: "Detailed written report within 48 hours",
    price: "Starting at $18-22 per foot",
    whatIsIncluded: [
      "Complete hull inspection (interior and exterior)",
      "Engine and propulsion system evaluation", 
      "Electrical system assessment",
      "Plumbing and through-hull fittings inspection",
      "Safety equipment verification",
      "Navigation and electronics review",
      "Sea trial (when possible)",
      "Fair market value assessment",
      "Comprehensive written report with photos",
      "Prioritized repair recommendations"
    ],
    whyYouNeedIt: "Buying a boat is a significant investment. A pre-purchase survey can reveal hidden problems that could cost thousands in repairs, help you negotiate a fair price, and give you peace of mind in your purchase decision."
  },
  {
    title: "Insurance Survey",
    description: "Required by most marine insurance companies, our insurance surveys document your vessel's condition and compliance with safety standards to secure or maintain coverage.",
    icon: <Shield className="h-12 w-12 text-primary" />,
    duration: "2-4 hours",
    deliverable: "Insurance-compliant report within 24 hours",
    price: "Starting at $15-18 per foot",
    whatIsIncluded: [
      "Structural condition assessment",
      "Safety equipment inventory and condition",
      "USCG compliance verification",
      "Fire suppression system inspection",
      "Navigation equipment assessment", 
      "Hull and deck condition evaluation",
      "Engine room inspection",
      "Current market value estimation",
      "Insurance-compliant documentation",
      "Digital photo documentation"
    ],
    whyYouNeedIt: "Insurance companies require current surveys to assess risk and determine coverage. Our surveys meet all major insurer requirements and can often help you secure better rates by demonstrating proper vessel maintenance."
  },
  {
    title: "Appraisal Survey", 
    description: "Professional vessel valuation using current market data and condition assessment. Perfect for financing, legal proceedings, estate planning, or personal knowledge.",
    icon: <DollarSign className="h-12 w-12 text-primary" />,
    duration: "3-5 hours",
    deliverable: "Certified appraisal report within 48 hours",
    price: "Starting at $16-20 per foot",
    whatIsIncluded: [
      "Current fair market value determination",
      "Comparable sales analysis",
      "Condition-based value adjustments",
      "Equipment and upgrade valuations",
      "Market trend analysis",
      "Detailed photo documentation",
      "Certified appraisal report",
      "Replacement cost assessment",
      "Depreciation analysis",
      "Legal-ready documentation"
    ],
    whyYouNeedIt: "Accurate vessel valuation is crucial for financing, insurance, legal matters, or sale preparation. Our certified appraisals are recognized by banks, insurance companies, and legal institutions."
  },
  {
    title: "Vessel Inspection",
    description: "Comprehensive inspection for maintenance planning, pre-sale preparation, or periodic condition assessment. Ideal for owners who want to maintain their vessel's value and safety.",
    icon: <FileCheck className="h-12 w-12 text-primary" />,
    duration: "3-4 hours", 
    deliverable: "Detailed inspection report within 48 hours",
    price: "Starting at $14-17 per foot",
    whatIsIncluded: [
      "Complete systems evaluation",
      "Safety compliance check",
      "Maintenance recommendations",
      "Cosmetic condition assessment",
      "Equipment functionality testing",
      "Prioritized repair list",
      "Preventive maintenance schedule",
      "Digital documentation",
      "Value preservation advice",
      "Warranty compliance verification"
    ],
    whyYouNeedIt: "Regular inspections help maintain your vessel's value, ensure safety, and prevent small problems from becoming expensive repairs. Essential for warranty compliance and pre-sale preparation."
  },
  {
    title: "Marine Consultations",
    description: "Expert advice and guidance on vessel purchases, repairs, legal matters, or technical questions. Leverage our expertise for any marine-related decisions.",
    icon: <Users className="h-12 w-12 text-primary" />,
    duration: "1-2 hours",
    deliverable: "Written consultation summary",
    price: "$125-150 per hour",
    whatIsIncluded: [
      "Purchase decision guidance",
      "Repair prioritization and cost estimation",
      "Technical problem diagnosis",
      "Legal proceeding support",
      "Expert witness testimony",
      "Insurance claim assistance",
      "Refit and upgrade planning",
      "Safety compliance guidance",
      "Written recommendations",
      "Follow-up support"
    ],
    whyYouNeedIt: "Sometimes you need expert advice without a full survey. Our consultations provide professional guidance for specific questions or situations, helping you make informed decisions."
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Marine Survey Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Professional vessel inspection and surveying services across Florida. Every survey follows 
            USCG requirements and ABYC standards, providing you with accurate, unbiased assessments 
            you can trust for your marine investment decisions.
          </p>
        </div>

        <div className="space-y-16">
          {detailedServices.map((service, index) => (
            <Card key={index} className="overflow-hidden" data-testid={`detailed-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Service Overview */}
                <div className="lg:col-span-1 bg-primary/5 p-8">
                  <div className="text-center mb-6">
                    {service.icon}
                    <h2 className="text-2xl font-bold text-foreground mt-4 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span><strong>Duration:</strong> {service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span><strong>Deliverable:</strong> {service.deliverable}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span><strong>Pricing:</strong> {service.price}</span>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button 
                      className="w-full mt-6 bg-success hover:bg-success/90 text-white"
                      data-testid={`button-quote-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      Get Quote for {service.title}
                    </Button>
                  </Link>
                </div>

                {/* Service Details */}
                <div className="lg:col-span-2 p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* What's Included */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-success mr-2" />
                        What's Included
                      </h3>
                      <ul className="space-y-2">
                        {service.whatIsIncluded.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Why You Need It */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        Why You Need This Service
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.whyYouNeedIt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <CardContent className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Ready to Schedule Your Survey?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Contact us today for a detailed quote. We'll discuss your specific needs and 
                provide you with a comprehensive survey that meets your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button 
                    size="lg"
                    className="bg-success hover:bg-success/90 text-white"
                    data-testid="button-services-cta-quote"
                  >
                    Request Quote
                  </Button>
                </Link>
                <a href="tel:5615049576">
                  <Button 
                    variant="outline"
                    size="lg"
                    data-testid="button-services-cta-call"
                  >
                    Call (561) 504-9576
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}