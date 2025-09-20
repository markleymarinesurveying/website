import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star, Quote } from "lucide-react";

// todo: remove mock functionality - this will be replaced with real testimonials
const testimonials = [
  {
    name: "Mike Johnson",
    vessel: "2019 Sea Ray Sundancer",
    rating: 5,
    comment: "Exceptional service! The survey was thorough and helped me avoid a costly purchase. Professional and responsive throughout the process."
  },
  {
    name: "Sarah Williams", 
    vessel: "2020 Boston Whaler",
    rating: 5,
    comment: "Markley Marine provided a detailed insurance survey that met all my insurer's requirements. Quick turnaround and excellent communication."
  },
  {
    name: "David Chen",
    vessel: "2018 Catalina 355",
    rating: 5,
    comment: "Outstanding pre-purchase survey that revealed important issues the seller hadn't disclosed. Saved me thousands. Highly recommend!"
  }
];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/30 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.vessel}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
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