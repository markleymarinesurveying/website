import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  vesselType: z.string().min(1, "Please select a vessel type"),
  vesselDetails: z.string().min(10, "Please provide vessel details (year, make, model, length)"),
  serviceType: z.string().min(1, "Please select a service type"),
  location: z.string().min(3, "Please enter the vessel location"),
  desiredDate: z.string().min(1, "Please select a desired date"),
  comments: z.string().optional()
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      vesselType: "",
      vesselDetails: "",
      serviceType: "",
      location: "",
      desiredDate: "",
      comments: ""
    }
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    // todo: remove mock functionality - implement real form submission
    console.log("Quote form submitted:", data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 24 hours to discuss your marine survey needs.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      content: "(561) 504-9576",
      link: "tel:5615049576"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email", 
      content: "markleymarinesurveying@gmail.com",
      link: "mailto:markleymarinesurveying@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Service Area",
      content: "Florida East & West Coasts"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Response Time",
      content: "Within 24 Hours"
    }
  ];

  return (
    <section className="py-16 bg-white backdrop-blur-sm">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Your Marine Survey Quote
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to schedule your marine survey? Fill out the form below and we'll provide you with 
            a detailed quote within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-primary mt-1">{info.icon}</div>
                    <div>
                      <h4 className="font-medium text-foreground">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          data-testid={`contact-${info.title.toLowerCase()}`}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white border-primary/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Why Choose Our Surveys?</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• SAMS® SA Level member marine surveyors</li>
                  <li>• USCG requirements and ABYC certified standards compliance</li>
                  <li>• Detailed written reports</li>
                  <li>• Fast turnaround times</li>
                  <li>• Competitive pricing</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Quote Request Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Request Your Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                {...field} 
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="john@example.com" 
                                {...field}
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="(561) 123-4567" 
                                {...field}
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service-type">
                                  <SelectValue placeholder="Select service type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="pre-purchase">Pre-Purchase Survey</SelectItem>
                                <SelectItem value="insurance">Insurance Survey</SelectItem>
                                <SelectItem value="appraisal">Appraisal Survey</SelectItem>
                                <SelectItem value="inspection">Vessel Inspection</SelectItem>
                                <SelectItem value="consultation">Consultation</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Vessel Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="vesselType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Vessel Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-vessel-type">
                                  <SelectValue placeholder="Select vessel type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="sailboat">Sailboat</SelectItem>
                                <SelectItem value="motor-yacht">Motor Yacht</SelectItem>
                                <SelectItem value="center-console">Center Console</SelectItem>
                                <SelectItem value="sport-fishing">Sport Fishing</SelectItem>
                                <SelectItem value="catamaran">Catamaran</SelectItem>
                                <SelectItem value="trawler">Trawler</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Vessel Location *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Marina name, City, FL" 
                                {...field}
                                data-testid="input-location"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="vesselDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vessel Details *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please provide year, make, model, length, and any other relevant details about the vessel..."
                              className="min-h-[80px]"
                              {...field}
                              data-testid="textarea-vessel-details"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="desiredDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Desired Survey Date *</FormLabel>
                          <FormControl>
                            <Input 
                              type="date" 
                              {...field}
                              data-testid="input-desired-date"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="comments"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Comments</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any additional information or special requirements..."
                              className="min-h-[80px]"
                              {...field}
                              data-testid="textarea-comments"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-success hover:bg-success/90 text-white"
                      disabled={isSubmitting}
                      data-testid="button-submit-quote"
                    >
                      {isSubmitting ? "Submitting..." : "Request Quote"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}