import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, FileText, Shield, Search, Users, Clock, DollarSign, FileCheck } from "lucide-react";
import { useSEO, SEOConfigs } from "@/hooks/useSEO";

const detailedServices = [
  {
    title: "Pre-Purchase Survey",
    description: "A Pre-Purchase Survey, often referred to as a Condition and Valuation Survey (C&V), is the most comprehensive type of marine survey and is strongly advised (often required) when purchasing a new or used boat.",
    icon: <Search className="h-12 w-12 text-primary" />,
    duration: "4-6 hours",
    deliverable: "Detailed written report within 48 hours",
    price: "Starting at $18-22 per foot",
    whatIsIncluded: [
      "Structural integrity assessment",
      "Engine and propulsion system evaluation",
      "Electrical systems assessment",
      "Fuel systems inspection",
      "Navigation equipment and electronics review",
      "Miscellaneous onboard systems inspection",
      "Safety equipment verification",
      "Cosmetic appearance assessment",
      "Overall maintenance evaluation",
      "Out-of-water inspection (haul-out required)",
      "Fair market value assessment",
      "Comprehensive written report with photos"
    ],
    whyYouNeedIt: "This comprehensive inspection can reveal hidden problems that could cost thousands in repairs, help you negotiate a fair price, and provide the detailed documentation needed to confirm the vessel is free of operational hazards, defects, and damages and is appropriately valued for your investment. A proper C&V survey requires the vessel to be hauled out of the water in order to inspect the hull and underwater gear."
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
    whyYouNeedIt: "An Insurance Survey is an inspection that your insurance carrier often requires in order for them to bind or renew coverage on your vessel. This inspection is utilized to determine whether or not the vessel is an acceptable risk for the insurance company. The insurance company is especially interested in structural integrity, safety for the vessel's intended use, and the fair market value. Most insurance companies will require a marine survey on older or used vessels. Our surveys meet all major insurer requirements and can often help you secure better rates by demonstrating proper vessel maintenance."
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
    description: "Expert advice and guidance on vessel purchases, repairs, legal matters, or technical questions. Markley Marine Surveying will be your boat or yacht consultant. Our expertise will be the best investment you'll ever make.",
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
    whyYouNeedIt: "Consultations are recommended to ensure that you are buying the right vessel for your needs and that you are correctly interpreting an existing pre-purchase survey from a seller or broker. Sometimes you need expert advice without a full survey. Our consultations provide professional guidance for specific questions or situations, helping you make informed decisions. Markley Marine Surveying will act for and on behalf of owners and buyers, representing their interests during scheduled repair and upgrade projects. We are here to represent your interests every step of the way. It is our goal to turn our clients' visions into a reality while relieving them of the unnecessary stress associated with boat-yards and subcontractors. High standards, attention to detail, commitment, and continued engagement with a project is key to meeting that goal."
  }
];

export default function ServicesPage() {
  // Apply SEO for services page
  useSEO(SEOConfigs.services);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Marine Survey Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Every survey follows USCG requirements and ABYC certified standards, providing you with accurate, unbiased assessments
            you can trust for your marine investment decisions.
          </p>
        </div>

        <div className="space-y-16">
          {detailedServices.map((service, index) => {
            const sectionId = service.title.toLowerCase().replace(/\s+/g, '-');
            return (
            <Card key={index} id={sectionId} className="overflow-hidden" data-testid={`detailed-service-${sectionId}`}>
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
            );
          })}
        </div>

        {/* Why You Need a Professional Marine Surveyor */}
        <section className="py-16 bg-primary text-primary-foreground rounded-lg mt-16">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why You Need a Professional Marine Surveyor for Your Boat or Yacht
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Why a Marine Survey Matters */}
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Why a Marine Survey Matters</h3>
                  <p className="text-blue-100 leading-relaxed">
                    A marine survey is a detailed evaluation of a vessel's condition, performed to United States Coast Guard and ABYC certified standards. It highlights potential deficiencies, establishes fair market value, and provides essential insight for buyers when negotiating a purchase. Insurance companies also rely on surveys to assess risk and confirm that safety issues are addressed before coverage is issued.
                  </p>
                </CardContent>
              </Card>

              {/* The SAMS® Advantage */}
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-bold text-white">The SAMS® Advantage</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Choosing a surveyor who is an SA Level member of the Society of Accredited Marine Surveyors® | SAMS® means you're working with a professional dedicated to accuracy, integrity, and ongoing education. SAMS® members follow nationally recognized standards and ethical practices, giving buyers, owners, and insurers confidence in every report.
                  </p>
                </CardContent>
              </Card>

              {/* Our Commitment */}
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Our Commitment</h3>
                  <p className="text-blue-100 leading-relaxed">
                    At Markley Marine Surveying, we conduct thorough inspections, explain every step of the process, and make sure you understand the findings. Our goal is not only to evaluate your vessel, but also to give you the knowledge and peace of mind to make informed decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

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