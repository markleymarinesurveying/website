import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Luxury_yacht_hero_image_4dd2724f.png";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/60" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Pre-Purchase & Insurance 
          <br />
          <span className="text-blue-200">Marine Surveyors</span>
          <br />
          in Florida
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Professional marine survey and vessel inspection services across Florida's East and West Coasts. 
          SAMS certified surveyors providing detailed, unbiased surveys you can trust.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-success hover:bg-success/90 text-white px-8 py-3 text-lg"
              data-testid="button-schedule-survey"
            >
              Schedule a Survey
            </Button>
          </Link>
          
          <a href="tel:5615049576">
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              data-testid="button-call-now"
            >
              Call (561) 504-9576
            </Button>
          </a>
        </div>
        
        {/* Credentials */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-blue-100">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span>SAMS® Certified</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span>ABYC Standards</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span>USCG Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
}