import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useSEO, SEOConfigs } from "@/hooks/useSEO";

function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what boat owners across Florida
            have to say about our marine survey services.
          </p>
        </div>

        {/* Elfsight All-in-One Reviews Widget */}
        <div
          className="elfsight-app-1ed2be0b-90c0-40f2-8be5-bf3931283745"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}

function CallToActionSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Marine Survey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a professional, unbiased survey from Florida's trusted marine surveyors. 
            Contact us today for a detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-success hover:bg-success/90 text-white px-8 py-3"
                data-testid="button-cta-quote"
              >
                Get Your Quote
              </Button>
            </Link>
            <a href="tel:5615049576">
              <Button 
                variant="outline"
                size="lg"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                data-testid="button-cta-call"
              >
                Call Now: (561) 504-9576
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  // Apply SEO for homepage
  useSEO(SEOConfigs.home);

  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
}