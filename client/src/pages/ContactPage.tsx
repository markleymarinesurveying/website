import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const serviceAreas = [
  {
    region: "Treasure Coast",
    cities: ["Sebastian", "Vero Beach", "Fort Pierce", "Port St. Lucie", "Stuart"],
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
  {
    region: "West Coast",
    cities: ["Tampa", "Sarasota", "Fort Myers"],
    description: "Quality marine survey services along Florida's Southwest Coast"
  }
];

const operatingHours = [
  { days: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { days: "Saturday", hours: "8:00 AM - 4:00 PM" },
  { days: "Sunday", hours: "By Appointment Only" },
  { days: "Emergency Surveys", hours: "Available Upon Request" }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact & Quote Request
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Ready to schedule your marine survey? Contact us today for professional vessel inspection 
            services across Florida. We respond to all inquiries within 24 hours.
          </p>
        </div>

        <ContactForm />

        {/* Additional Information */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Service Areas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Service Areas</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {serviceAreas.map((area, index) => (
                <div key={index} className="border-l-4 border-l-primary pl-4">
                  <h4 className="font-semibold text-foreground mb-2">{area.region}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{area.description}</p>
                  <p className="text-xs text-muted-foreground">
                    {area.cities.join(" • ")}
                  </p>
                </div>
              ))}
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  <strong>Travel Fees:</strong> We serve the above areas with standard travel fees. 
                  Additional travel charges may apply for locations outside our primary service areas. 
                  Contact us for specific pricing.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Operating Hours & Contact */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Operating Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {operatingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="font-medium text-foreground">{schedule.days}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a 
                  href="tel:5615049576" 
                  className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  data-testid="contact-quick-phone"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">(561) 504-9576</p>
                    <p className="text-sm text-muted-foreground">Call for immediate assistance</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:info@markleymarinesurveying.com" 
                  className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  data-testid="contact-quick-email"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">info@markleymarinesurveying.com</p>
                    <p className="text-sm text-muted-foreground">Email for detailed inquiries</p>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Emergency Surveys</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Need an urgent survey for insurance claims, legal proceedings, or time-sensitive purchases? 
                  We offer expedited survey services with priority scheduling.
                </p>
                <p className="text-xs text-muted-foreground">
                  Emergency surcharges may apply. Call us to discuss your urgent needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}