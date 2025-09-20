import About from "@/components/About";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, FileText, Clock, Users } from "lucide-react";

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "We discuss your specific needs, vessel details, and survey requirements to provide an accurate quote.",
    icon: <Users className="h-8 w-8 text-primary" />
  },
  {
    step: 2,
    title: "Survey Scheduling",
    description: "We coordinate with you and the vessel location to schedule the survey at your convenience.",
    icon: <Clock className="h-8 w-8 text-primary" />
  },
  {
    step: 3,
    title: "Comprehensive Inspection",
    description: "Our certified surveyor conducts a thorough inspection following USCG and ABYC standards.",
    icon: <FileText className="h-8 w-8 text-primary" />
  },
  {
    step: 4,
    title: "Detailed Reporting",
    description: "You receive a comprehensive written report with photos, findings, and recommendations within 48 hours.",
    icon: <Award className="h-8 w-8 text-primary" />
  }
];

const qualifications = [
  "Society of Accredited Marine Surveyors® (SAMS®) Associate Member",
  "American Boat and Yacht Council (ABYC) Standards Certified",
  "Chapman School of Seamanship - Yacht and Small Craft Survey Graduate",
  "USCG requirements and standards compliance",
  "Extensive experience with all vessel types and sizes",
  "Professional marine industry background",
  "Continuing education in marine technology and standards",
  "Comprehensive insurance and bonding coverage"
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Markley Marine Surveying
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Professional marine survey services you can trust. With certified expertise and 
            years of experience, we provide accurate, unbiased vessel assessments across Florida.
          </p>
        </div>

        <About />

        {/* Our Process */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Survey Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to ensure every survey meets the highest standards 
              and provides you with the information you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <Card key={step.step} className="text-center hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-16 bg-muted/30 rounded-lg">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Professional Qualifications
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our credentials and certifications ensure you receive survey services that meet 
                  the highest industry standards and are recognized by insurance companies, lenders, 
                  and maritime professionals.
                </p>
                <ul className="space-y-3">
                  {qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Card className="p-8">
                  <CardContent className="text-center space-y-6">
                    <h3 className="text-2xl font-bold text-foreground">
                      Ready to Get Started?
                    </h3>
                    <p className="text-muted-foreground">
                      Contact us today to discuss your marine survey needs. We'll provide you with 
                      a detailed quote and answer any questions you may have.
                    </p>
                    <div className="space-y-4">
                      <Link href="/contact">
                        <Button 
                          size="lg"
                          className="w-full bg-success hover:bg-success/90 text-white"
                          data-testid="button-about-cta-quote"
                        >
                          Request Your Quote
                        </Button>
                      </Link>
                      <a href="tel:5615049576" className="block">
                        <Button 
                          variant="outline"
                          size="lg"
                          className="w-full"
                          data-testid="button-about-cta-call"
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
        </section>
      </div>
    </div>
  );
}