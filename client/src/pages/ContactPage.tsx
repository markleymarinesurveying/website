import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { useSEO, SEOConfigs } from "@/hooks/useSEO";
import backgroundImage from "@assets/Photos/rs=w_1920,m.webp";

const serviceAreas = [
  {
    region: "Treasure Coast",
    cities: ["Stuart", "Port St. Lucie", "Fort Pierce", "Vero Beach", "Sebastian"],
    description: "Comprehensive marine survey services along Florida's Treasure Coast"
  },
  {
    region: "Palm Beaches", 
    cities: ["Hobe Sound", "Jupiter", "Tequesta", "North Palm Beach", "West Palm Beach"],
    description: "Professional vessel inspections throughout the Palm Beach area"
  },
  {
    region: "Gold Coast",
    cities: ["Boynton Beach", "Delray Beach", "Boca Raton", "Pompano Beach", "Fort Lauderdale", "Miami"],
    description: "Expert marine surveys from Boynton Beach to Miami-Dade"
  },
];

const operatingHours = [
  { days: "Monday - Friday", hours: "7:30 AM - 8:00 PM" },
  { days: "Saturday", hours: "7:30 AM - 8:00 PM" },
  { days: "Sunday", hours: "7:30 AM - 8:00 PM" }
];

export default function ContactPage() {
  // Apply SEO for contact page
  useSEO(SEOConfigs.contact);

  return (
    <div
      className="min-h-screen py-8 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Content */}
      <div className="relative z-10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Contact
          </h1>
          <p className="text-lg sm:text-xl text-white max-w-4xl mx-auto px-4">
            Contact us today for professional vessel inspection
            services.
          </p>
        </div>

        <ContactForm />

        {/* Additional Information */}
        <div className="mt-8 sm:mt-12 lg:mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Service Areas - Compact */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="h-fit bg-white backdrop-blur-sm">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span>Service Areas</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 pt-0">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="border-l-4 border-l-primary pl-3 sm:pl-4">
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{area.region}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">{area.description}</p>
                    <div className="text-xs text-muted-foreground">
                      <div className="flex flex-wrap gap-1">
                        {area.cities.map((city, cityIndex) => (
                          <span key={cityIndex} className="whitespace-nowrap">
                            {city}{cityIndex < area.cities.length - 1 ? " •" : ""}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Emergency Surveys - Moved here for symmetry */}
            <Card className="bg-white border-primary/30 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Emergency Surveys</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                  Need an urgent survey for insurance claims or time-sensitive purchases?
                  We offer expedited survey services with priority scheduling.
                </p>
                <p className="text-xs text-muted-foreground">
                  Emergency surcharges may apply. Call us to discuss your urgent needs.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Operating Hours & Contact */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="bg-white backdrop-blur-sm">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span>Operating Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 pt-0">
                {operatingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="font-medium text-foreground text-xs sm:text-sm">{schedule.days}</span>
                    <span className="text-muted-foreground text-xs sm:text-sm">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white backdrop-blur-sm">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-base sm:text-lg">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 pt-0">
                <a
                  href="tel:5615049576"
                  className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  data-testid="contact-quick-phone"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground text-sm sm:text-base">(561) 504-9576</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Call for immediate assistance</p>
                  </div>
                </a>
                
                <a
                  href="mailto:markleymarinesurveying@gmail.com"
                  className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  data-testid="contact-quick-email"
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground text-xs sm:text-sm break-all">markleymarinesurveying@gmail.com</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Email for detailed inquiries</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}