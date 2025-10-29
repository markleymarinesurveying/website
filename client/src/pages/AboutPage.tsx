import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, FileText, Clock, Users, CheckCircle, Star } from "lucide-react";
import surveyorImage from "@assets/Photos/BioPicture.jpg";
import luxuryYachtImage from "@assets/Photos/about page 1.webp";
import { useSEO, SEOConfigs } from "@/hooks/useSEO";

const stevenCredentials = [
  "Graduate of the University of Maryland",
  "Chapman School of Seamanship - Yacht and Small Craft Surveying Graduate",
  "ABYC Standards Certified",
  "Society of Accredited Marine Surveyors® (SAMS®) SA Level Member",
  "100 Ton Master Captain",
  "25+ Years Marine Industry Experience"
];

const experienceAreas = [
  "Commercial towing and freighter assists from Philadelphia to New Orleans",
  "Operation of municipal utility vessels",
  "Management and operation of private vessels throughout New York, New Jersey, Maryland, Florida, and the Bahamas",
  "Recreational vessel management for local owners",
  "Professional offshore fishing operations"
];

const vesselTypes = [
  "Power and sail vessels from 16' to 110'",
  "Pre-purchase and insurance marine surveys",
  "ABYC certified standards compliance",
  "U.S. Coast Guard 33 and 46 Code of Federal Regulations",
  "Detailed professional documentation"
];

export default function AboutPage() {
  // Apply SEO for about page
  useSEO(SEOConfigs.about);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Markley Marine Surveying | Pre-Purchase and Insurance Marine Surveyor
          </h1>
        </div>

        {/* Steven Markley Introduction */}
        <section className="py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Meet Steven Markley
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Owner Steven Markley leads a team of dedicated professionals who share a deep respect for the marine industry and a lifelong passion for boats. Steven is a graduate of the University of Maryland and the Chapman School of Seamanship - Yacht and Small Craft Surveying, is ABYC Standards Certified, and an SA Level member of the Society of Accredited Marine Surveyors® (SAMS®). He is also an experienced former 100 Ton Master Captain.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Professional Credentials</h3>
                <div className="grid gap-3">
                  {stevenCredentials.map((credential, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{credential}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative max-w-sm mx-auto">
              <img
                src={surveyorImage}
                alt="Steven Markley - Professional Marine Surveyor"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-muted/30 rounded-lg">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Decades of Marine Industry Experience
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Steven has spent decades operating, managing, and transporting boats and yachts of all sizes along the eastern seaboard and the Bahamas. In addition to performing marine surveys, he manages recreational vessels for local owners and is a professional offshore fisherman.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  His experience spans many areas of the marine industry, including:
                </h3>
                <div className="space-y-4">
                  {experienceAreas.map((area, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={luxuryYachtImage}
                  alt="Markley Marine Surveying performing an insurance survey on a yacht in Fort Lauderdale, Florida"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Commitment & Standards */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Commitment to Excellence
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Professional Standards</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With over 25 years of hands-on experience in the marine industry, Steven is committed to staying current with evolving standards through ongoing education and training. He is dedicated to providing the most thorough and professional inspections possible — and believes in educating his clients every step of the way.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  During each survey, Steven explains his findings clearly so clients are informed, confident, and empowered to make the right decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Survey Standards & Coverage</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Markley Marine Surveying, we inspect a wide range of vessels, both power and sail, from 16' to 110'. All pre-purchase and insurance marine surveys are performed using ABYC certified standards, as well as U.S. Coast Guard 33 and 46 Code of Federal Regulations.
                </p>
                <div className="space-y-3">
                  {vesselTypes.map((type, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Star className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{type}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Real-World Experience Banner */}
        <section className="py-16 bg-primary text-primary-foreground rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real-World Marine Survey Experience
            </h2>
            <p className="text-xl text-blue-100 max-w-5xl mx-auto leading-relaxed">
              Marine Surveyor working across Florida, including pre-purchase marine surveys, insurance surveys, and appraisal inspections. Trusted expertise from an SA Level member of the Society of Accredited Marine Surveyors® | SAMS® and ABYC certified standards professional provides reliable reports you can use with confidence when buying, selling, or insuring your boat.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <CardContent className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Ready for Your Professional Marine Survey?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Contact Steven Markley and the team at Markley Marine Surveying today for professional, 
                unbiased vessel assessments you can trust for your marine investment decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button 
                    size="lg"
                    className="bg-success hover:bg-success/90 text-white"
                    data-testid="button-about-cta-quote"
                  >
                    Get Your Survey Quote
                  </Button>
                </Link>
                <a href="tel:5615049576">
                  <Button 
                    variant="outline"
                    size="lg"
                    data-testid="button-about-cta-call"
                  >
                    Call (561) 504-9576
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}