import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    "Pre-Purchase Survey",
    "Insurance Survey", 
    "Appraisal Survey",
    "Vessel Inspection",
    "Marine Consultations"
  ];

  const serviceAreas = [
    "Jupiter & Stuart",
    "West Palm Beach",
    "Fort Lauderdale",
    "Miami-Dade",
    "Tampa Bay",
    "Southwest Florida"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Markley Marine Surveying</h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              Professional marine survey and vessel inspection services across Florida. 
              SAMS certified surveyors providing detailed, unbiased surveys you can trust.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <a 
                href="tel:5615049576" 
                className="flex items-center space-x-2 text-sm text-blue-100 hover:text-white transition-colors"
                data-testid="footer-phone"
              >
                <Phone className="h-4 w-4" />
                <span>(561) 504-9576</span>
              </a>
              <a 
                href="mailto:info@markleymarinesurveying.com" 
                className="flex items-center space-x-2 text-sm text-blue-100 hover:text-white transition-colors"
                data-testid="footer-email"
              >
                <Mail className="h-4 w-4" />
                <span>info@markleymarinesurveying.com</span>
              </a>
              <div className="flex items-center space-x-2 text-sm text-blue-100">
                <MapPin className="h-4 w-4" />
                <span>Florida East & West Coasts</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <button 
                      className="text-sm text-blue-100 hover:text-white transition-colors"
                      data-testid={`footer-link-${link.name.toLowerCase().replace(" ", "-")}`}
                    >
                      {link.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-blue-100">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-blue-100">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications & Bottom Bar */}
        <div className="border-t border-blue-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Certifications */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-blue-100">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>SAMS® Certified</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>ABYC Standards</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>USCG Compliant</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>Chapman Graduate</span>
              </span>
            </div>

            {/* Copyright */}
            <div className="text-xs text-blue-100">
              © {currentYear} Markley Marine Surveying. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}