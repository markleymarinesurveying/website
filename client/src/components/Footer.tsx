import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@assets/MarineSurvey_logo.webp";
import abycLogo from "@assets/Photos/abyc-cert-blue-small.jpeg";
import chapmanLogo from "@assets/Photos/chpaman.png";
import samsLogo from "@assets/Photos/SAMS Logo-Photoroom.png";

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
    { name: "Pre-Purchase Survey", href: "/services#pre-purchase-survey" },
    { name: "Insurance Survey", href: "/services#insurance-survey" },
    { name: "Appraisal Survey", href: "/services#appraisal-survey" },
    { name: "Vessel Inspection", href: "/services#vessel-inspection" },
    { name: "Marine Consultations", href: "/services#marine-consultations" }
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
      {/* Credentials Logo Section */}
      <div className="bg-white py-8">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center gap-8 md:gap-12">
            <img
              src={abycLogo}
              alt="ABYC American Boat and Yacht Council Standards Certified - Professional Marine Surveyor Credential"
              title="ABYC Standards Certified Marine Surveyor"
              className="h-16 md:h-20 w-auto object-contain"
              loading="lazy"
              width="80"
              height="80"
            />
            <img
              src={chapmanLogo}
              alt="Chapman School of Seamanship Yacht and Small Craft Survey Graduate - Marine Surveyor Education"
              title="Chapman School of Seamanship Graduate"
              className="h-16 md:h-20 w-auto object-contain"
              loading="lazy"
              width="80"
              height="80"
            />
            <img
              src={samsLogo}
              alt="SAMS Society of Accredited Marine Surveyors SA Level Member - Professional Marine Survey Certification"
              title="SAMS SA Level Member"
              className="h-16 md:h-20 w-auto object-contain"
              loading="lazy"
              width="80"
              height="80"
            />
          </div>
        </div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Markley Marine Surveying Logo - Professional Marine Survey Services in Florida"
                title="Markley Marine Surveying - Expert Vessel Inspections"
                className="h-12 w-auto flex-shrink-0"
                loading="lazy"
                width="48"
                height="48"
              />
              <h3 className="text-xl font-bold break-words">Markley Marine Surveying</h3>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed">
              Professional marine survey and vessel inspection services across Florida.
              SAMS® SA Level member surveyors providing detailed, unbiased surveys you can trust.
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
                href="mailto:markleymarinesurveying@gmail.com"
                className="flex items-start space-x-2 text-sm text-blue-100 hover:text-white transition-colors"
                data-testid="footer-email"
              >
                <Mail className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span className="break-all">markleymarinesurveying@gmail.com</span>
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
                <li key={service.name}>
                  <Link href={service.href}>
                    <button
                      className="text-sm text-blue-100 hover:text-white transition-colors text-left"
                      data-testid={`footer-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {service.name}
                    </button>
                  </Link>
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
                <span>SAMS® SA Level Member</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>ABYC Standards Certified</span>
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